import { useEffect } from "react";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Button, Dropdown, Card, Col, Container, DropdownItem, DropdownMenu, DropdownToggle, Input, InputGroup, InputGroupAddon, InputGroupButtonDropdown, InputGroupText, Row, Table } from "reactstrap";
import web3 from "../web3";
import swap from "./swapAbi";
import cbusd from "./cbusdAbi";
import cbusdstake from "./carbonStakeAbi";
import black from "./blackAbi";
const Cbusdstake = () => {
    let [activeTab, setActiveTab] = useState("Deposit");
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [dropdownOpen1, setDropdownOpen1] = useState(false);
    const [multiple, setMultiple] = useState(false);
    const [selectedDropdown, setSelectedDropdown] = useState("cBUSD");
    const [selectedDropdown1, setSelectedDropdown1] = useState("No Yield");
    const[tid,setId] = useState("");
    const[tid1,setId1] = useState("");
    const[ap1,setAP] = useState("");
    const [totaldep,setTotaldeposit] = useState("");
    var[cbusdbalance,setcbusdbalance] = useState("");
    const[depositpercent,setdepositpercent] = useState("");
    const[values,setValues] = useState([]);
    const[staked,setStaked] = useState([]);
    const[reward,setReward] = useState([]);
    const [lock ,setlock]=useState("");
    const[blackbal,setBlackBalance] =useState([]);
    const[t11,setTim11 ] = useState("");
    const[t21,setTim21] = useState("");
    const[t31,setTim31 ] = useState("");
    const[t41,setTime41] = useState("");
    var [date1, setdate1]=useState("");
    var [time1, settime1]=useState("");
    const [lock1 ,setlock1]=useState("");
    const toggleDropDown = () => setDropdownOpen(!dropdownOpen);
    const toggle1 = () => setDropdownOpen1(!dropdownOpen1);
    let history = useHistory();
    
 const first = async () => {
    const accounts =  await web3.eth.getAccounts();
 
    setcbusdbalance(await cbusd.methods.balanceOf(accounts[0]).call());  

    
    let b= await cbusd.methods.allowance(accounts[0],"0x3a7CD9084072c0178ED6EbACAF1926E2E9e57D43").call();
 
    if(b>0){
      setAP(true);
    }
    else{
      setAP(false);
    }
    setValues(await swap.methods.userInfo(accounts[0]).call());
    setStaked(await cbusdstake.methods.userInfo(accounts[0]).call());
    setBlackBalance(await black.methods.balanceOf(accounts[0]).call());
    setReward(await cbusdstake.methods.pendingBlack(accounts[0]).call());
    var us =await cbusdstake.methods.holderUnstakeRemainingTime(accounts[0]).call();
    var now = new Date().getTime();
    if(us<=now){
    setlock(true);
    }
    else{
      setlock(false);
    }
    
    var us=await cbusdstake.methods.holderUnstakeRemainingTime(accounts[0]).call();
    var ff=new Date(us*1000);
    setdate1(ff.toDateString());
    var hours = ff.getHours();
    var minutes = ff.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    settime1( hours + ':' + minutes + ' ' + ampm);
    //settime(lock);
    var countDowndate   =us*1000;
    //console.log(countDowndate);
    // var countDownDate = new Date().getTime() + (lock * 1000) ;
    //alert(time);
    var x = setInterval(function() {
       var now = new Date().getTime();
      var distance = countDowndate - now ;
     // console.log(now);
      // Time calculations for days, hours, minutes and seconds
     var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
      // Output the result in an element with id="demo"
     // document.getElementById("demo").innerHTML = hours + "h "
     // + minutes + "m " + seconds + "s ";
    setTime41(days);
    setTim11(hours);
    setTim21(minutes);
    setTim31(seconds);
    
    
    
    
      // If the count down is over, write some text 
      if (distance < 0) {
            clearInterval(x);
            setlock1(true);
    
           // console.log('CountDown Finished');
        }
        else{
         setlock1(false);
        }
    
    
      
    }, 1000);
    
     
   
}      

    useEffect(() => {
        document.getElementById("header-title").innerText = "Staking";
    } )
    useEffect(() => {first()},[cbusdbalance,reward,ap1,staked[0],blackbal])
    useEffect(() =>{first()},[date1,lock1,time1])

   
    const deposit = async(event) => {
        event.preventDefault();
        const accounts =  await web3.eth.getAccounts();
        var valu = document.getElementById("tid1").value;
        var val = valu * 1000000000;
        var value = val + "000000000"
        await cbusdstake.methods.deposit(value).send({from:accounts[0]});
        alert("staked succesfully")
        first();
      }

    const withdraw = async(event) => {
        event.preventDefault();
        const accounts =  await web3.eth.getAccounts();
        var valu = document.getElementById("tid2").value;
        var val = valu * 1000000000;
        var value = val + "000000000"
        await cbusdstake.methods.withdraw(value).send({from:accounts[0]});
        alert("unstaked succesfully")
        first()
      }  

      const claimreward = async(event) => {
        event.preventDefault();
        if(reward >10000000000){
            const accounts =  await web3.eth.getAccounts();
            await cbusdstake.methods.claimReward().send({from:accounts[0]});    
        }
        else{
            alert("Your reward amount should be Greater then 10 to Claim ")
        }
           
        first()
        
      }
      const emergencywithdraw = async(event) => {
        event.preventDefault();
        const accounts =  await web3.eth.getAccounts();
        await cbusdstake.methods.emergencyWithdraw().send({from:accounts[0]});        
        first()
      }
    
      const balancepercent = async(event) => {
        event.preventDefault();
        const accounts =  await web3.eth.getAccounts(); 
        document.getElementById("tid1").value = false;  
        var twentyfive=(cbusdbalance * 25)/100;
        setdepositpercent(parseFloat(twentyfive/1000000000000000000).toFixed(5));
       
        document.getElementById("tid1").value = parseFloat(twentyfive/1000000000000000000).toFixed(5);        
        
      }
       const balancepercent1 = async(event) => {
        event.preventDefault();
        const accounts =  await web3.eth.getAccounts(); 
        document.getElementById("tid1").value = false;    
        var fifty=(cbusdbalance * 50)/100;
        setdepositpercent(parseFloat(fifty/1000000000000000000).toFixed(5));
        document.getElementById("tid1").value =  parseFloat(fifty/1000000000000000000).toFixed(5);          
        
      } 


      const balancepercent2 = async(event) => {
        event.preventDefault();
        const accounts =  await web3.eth.getAccounts(); 
        document.getElementById("tid1").value = false;    
        var seventyfive=(cbusdbalance * 75)/100;
        setdepositpercent(parseFloat(seventyfive/1000000000000000000).toFixed(5)); 
        document.getElementById("tid1").value = parseFloat(seventyfive/1000000000000000000).toFixed(5);         
        
      }
      const balancepercent3 = async(event) => {
        event.preventDefault();
        const accounts =  await web3.eth.getAccounts(); 
        document.getElementById("tid1").value = false;    
        var hundred=(cbusdbalance * 100)/100;
        setdepositpercent(parseFloat(hundred/1000000000000000000).toFixed(5)); 
        document.getElementById("tid1").value =  parseFloat(hundred/1000000000000000000).toFixed(5);         
        
      }


      const withdrawbalancepercent = async(event) => {
        event.preventDefault();
        const accounts =  await web3.eth.getAccounts(); 
        document.getElementById("tid2").value = false;  
        var twentyfive=(staked[0] * 25)/100;
        setTotaldeposit(parseFloat(twentyfive/1000000000000000000).toFixed(5));
        document.getElementById("tid2").value = parseFloat(twentyfive/1000000000000000000).toFixed(5);        
        
      }
       const withdrawbalancepercent1 = async(event) => {
        event.preventDefault();
        const accounts =  await web3.eth.getAccounts(); 
        document.getElementById("tid2").value = false;    
        var fifty=(staked[0]  * 50)/100;
        setTotaldeposit(parseFloat(fifty/1000000000000000000).toFixed(5));
        document.getElementById("tid2").value = parseFloat(fifty/1000000000000000000).toFixed(5);          
        
      } 


      const withdrawbalancepercent2 = async(event) => {
        event.preventDefault();
        const accounts =  await web3.eth.getAccounts(); 
        document.getElementById("tid2").value = false;    
        var seventyfive=(staked[0]  * 75)/100;
        setTotaldeposit(parseFloat(seventyfive/1000000000000000000).toFixed(5)); 
        document.getElementById("tid2").value =parseFloat(seventyfive/1000000000000000000).toFixed(5);         
        
      }
      const withdrawbalancepercent3 = async(event) => {
        event.preventDefault();
        const accounts =  await web3.eth.getAccounts(); 
        document.getElementById("tid2").value = false;    
        var hundred=(staked[0]  * 100)/100;
        setTotaldeposit(parseFloat(hundred/1000000000000000000).toFixed(5)); 
        document.getElementById("tid2").value =parseFloat(hundred/1000000000000000000).toFixed(5);         
        
      }
      const approve = async() => {
        let account = await web3.eth.getAccounts();
        let amount = 1000000000000000000 +"000000000000000000"; 
        await cbusd.methods.approve("0x3a7CD9084072c0178ED6EbACAF1926E2E9e57D43",amount).send({from:account[0]});
        first()
        alert("Approved Succesfully")
    }


    return (
        <section className="p-0 my-5">
            <Container fluid>
                <Row className="justify-content-center">
                    <Col xl="8" lg="8" md="10" sm="12">
                        <Card className="custom-card">
                            <div className="p-3">
                                <h4>stake  cBUSD </h4>
                                <h6>The Stake cBUSD and get Black token as reward</h6>
                                <Table bordered responsive className="mt-3">
                                    <thead>
                                        <tr>
                                            <
                                                
                                                th>Your cBUSD</th>
                                            <th>Staked cBUSD</th>
                                            <th>Black reward</th>
                                            <th>Your Black</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-center">
                                        <tr>
                                            <td>{parseFloat(cbusdbalance/1000000000000000000).toFixed(5)}</td>
                                            <td>{parseFloat(staked[0]/1000000000000000000).toFixed(5)}</td>
                                            <td>{parseFloat(reward/1000000000).toFixed(5)}</td>
                                            <td>{parseFloat(blackbal/1000000000).toFixed(5)}</td>
                                        </tr>
                                    </tbody>
                                </Table>
                                <div>         

{ ap1 === true ? 
(
(
<div>
                                <Container fluid>
                                    <Row>
                                        <Col xl="6" md="12">
                                        
                                            <InputGroup className="mt-3">
                                                <Input placeholder={depositpercent} style={{ height: "auto" }}type = "number" id="tid1"  />
                                                <InputGroupAddon addonType="append"><Button color="site-primary" onClick={deposit}>stake</Button></InputGroupAddon>
                                            </InputGroup>
                                            <div className="percentage smaller">
                                                <div className="percentage-item" onClick={balancepercent}>25%</div>
                                                <div className="percentage-item" onClick={balancepercent1}>50%</div>
                                                <div className="percentage-item" onClick={balancepercent2}>75%</div>
                                                <div className="percentage-item" onClick={balancepercent3}>100%</div>
                                            </div>
                                        </Col>
                                        <Col xl="6" md="12">
                                        <div>
            {lock1==true?((
              <div>
                                            <InputGroup className="mt-3">
                                                <Input placeholder={totaldep} style={{ height: "auto" }}type = "number"  id="tid2"  />
                                                <InputGroupAddon addonType="append"><Button color="site-primary" onClick={withdraw}>unstake</Button></InputGroupAddon>
                                            </InputGroup>
                                            <div className="percentage smaller">
                                                <div className="percentage-item"onClick={withdrawbalancepercent}>25%</div>
                                                <div className="percentage-item"onClick={withdrawbalancepercent1}>50%</div>
                                                <div className="percentage-item"onClick={withdrawbalancepercent2}>75%</div>
                                                <div className="percentage-item"onClick={withdrawbalancepercent3}>100%</div>
                                            </div>
                                            </div>  
            )):
((
  <div>
     <text className="mt-3"  >You Need to wait for unstake till this time </text><Button color="site-primary">{date1} , {time1}</Button>
      </div>  
))
            }
            
        </div>
    
                                        </Col>
                                    </Row>
                                </Container>
                                <Container>
                                    <Row className="justify-content-center">
                                        <Col xl="9">
                                            <Row className="mt-4">
                                                <Col xl="6" md="12">
                                                    <Button color="outline-site-primary" block onClick={claimreward}>claim reward</Button>
                                                </Col>
                                                <Col xl="6" md="12" className='mt-3 mt-xl-0'>
                                                    <Button color="outline-site-primary" block  onClick={emergencywithdraw} >Exit</Button>
                                                </Col>
                                            </Row>

                                        </Col>
                                    </Row>
                                </Container>
                                </div>
)
):
(
(
<div><center><Button color="site-primary" onClick={approve}>Approve</Button></center>

</div>
)
)}
  </div> 
                            </div>
                        </Card>
                    </Col>
                </Row>
 </Container>
        </section>
    );
}

export default Cbusdstake;
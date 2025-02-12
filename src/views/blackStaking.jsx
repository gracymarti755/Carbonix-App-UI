import { useEffect } from "react";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Button, Dropdown, Card, Col, Container, DropdownItem, DropdownMenu, DropdownToggle, Input, InputGroup, InputGroupAddon, InputGroupButtonDropdown, InputGroupText, Row, Table } from "reactstrap";
import web3 from "../web3";
//import cbusd from "./cbusdAbi";
//import black from "./blackAbi";
//import blackstake from "./blackStakeAbi";
import Popup from "../Popup";
import Modald from "../ModalD";
import FolowStepsd from "../FolowStepsd";
import BigNumber from "bignumber.js";


import { contracts } from './contractAddress';
import {blackabi, blackstake, } from './abi';

const Blackstake = () => {

    let [activeTab, setActiveTab] = useState("Deposit");
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [dropdownOpen1, setDropdownOpen1] = useState(false);
    const [multiple, setMultiple] = useState(false);    
    const[tid,setId] = useState("");
    const[tid1,setId1] = useState("");
    const[ap1,setAP] = useState("");
    const [totaldep,setTotaldeposit] = useState("");
    var[cbusdbalance,setcbusdbalance] = useState("");
    const[depositpercent,setdepositpercent] = useState("");
    const[values,setValues] = useState([]);
    const[staked,setStaked] = useState([]);
    const[reward,setReward] = useState([]);
    const[blackbal,setBlackBalance] =useState([]);
    const toggleDropDown = () => setDropdownOpen(!dropdownOpen);
    const toggle1 = () => setDropdownOpen1(!dropdownOpen1);
    const [lock ,setlock]=useState("");
    const[t11,setTim11 ] = useState("");
    const[t21,setTim21] = useState("");
    const[t31,setTim31 ] = useState("");
    const[t41,setTime41] = useState("");
    var [date1, setdate1]=useState("");    
    var [time1, settime1]=useState("");
    var[datestake,setDatestake]=useState([]);
    var [time2, settime2]=useState("");
    const[stakelock,setStakeLock]=useState("");
    const [discal ,setdistance]=useState("");
    const [lock1 ,setlock1]=useState(""); 
    const [Remainingamount ,setRemainingamount]=useState(""); 

    let history = useHistory();
    const [isOpen, setIsOpen] = useState(false);
    var[dis,setDis] = useState("");
    const blackcontract = new web3.eth.Contract(blackabi, contracts.black.address);
    const blackstakecontract = new web3.eth.Contract(blackstake, contracts.blackstake.address);

 const first = async () => {
    if(localStorage.getItem("wallet")>0){
    
    const accounts =  await web3.eth.getAccounts();     
    setBlackBalance(await blackcontract.methods.balanceOf(accounts[0]).call())    
    let b= await blackcontract.methods.allowance(accounts[0],contracts.blackstake.address).call();
 
    if(b>0){
      setAP(true);
    }
    else{
      setAP(false);
    }
    //setValues(await swap.methods.userInfo(accounts[0]).call());
    setStaked(await blackstakecontract.methods.userInfo(accounts[0]).call());
    setReward(await blackstakecontract.methods.pendingBlack(accounts[0]).call());
    setStakeLock(await blackstakecontract.methods.lock(accounts[0]).call());
    var stakedamount=await blackstakecontract.methods.getHoldersRunningStakeBalance().call({from:accounts[0]});
    console.log("stakedamount",stakedamount);
    var Remainingamount=1000000000000000-stakedamount;
    setRemainingamount(Remainingamount);
    var secondsleft =await blackstakecontract.methods.secondsLeft(accounts[0]).call();
    var us =await blackstakecontract.methods.holderUnstakeRemainingTime(accounts[0]).call();
    var now = new Date().getTime();
    console.log("nowtime",now);
    if(us<=now){
    setlock(true);
    }
    else{
      setlock(false);
    }
    
    var us=await blackstakecontract.methods.holderUnstakeRemainingTime(accounts[0]).call();
    var sl=(secondsleft *1000);
    var lockedtime=sl+now;
    console.log("secondsleft",lockedtime);
    var lockedonstake =[];
     lockedonstake =new Date(lockedtime);
    setDatestake(new Date(lockedtime).toDateString());
    //console.log("stakelimitlock",lockedonstake);
    var hours1 = lockedonstake.getHours();
    var minutes1 = lockedonstake.getMinutes();
    var ampm1 = hours1 >= 12 ? 'PM' : 'AM';
    hours1 = hours1 % 12;
    hours1 = hours1 ? hours1 : 12; // the hour '0' should be '12'
    minutes1 = minutes1 < 10 ? '0'+minutes1 : minutes1;
    settime2( hours1 + ':' + minutes1 + ' ' + ampm1);


    var ff=new Date(us*1000);    
    setdate1(ff.toDateString());
    console.log("date1",date1);
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
      setdistance(distance);
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
    
    
    
    
      
     
    
      
    }, 1000);
    // If the count down is over, write some text 
    if (discal < 0 ) {
        clearInterval(x);
        setlock1(true);

       // console.log('CountDown Finished');
    }
    else if(staked[0]==0){
        setlock1(true);
    }
    else{
     setlock1(false);
    }

     
    }
   
}      

    useEffect(() => {
        document.getElementById("header-title").innerText = "Staking";
    } )
    useEffect(() =>         
    {first()},[cbusdbalance,ap1,staked[0],reward,blackbal,discal])
    useEffect(() =>{first()},[date1,lock1,time1])
   
    const deposit = async(event) => {
        event.preventDefault();
        const accounts =  await web3.eth.getAccounts();
        var valu = document.getElementById("tid1").value;
        // let x = new BigNumber(valu).times(1000000000);
        // console.log("value",x.toNumber());
        // var value = x.toNumber(); 
        var val = valu * 100000;
        var value = val * 10000;
         //var value = val + "000000000";
         console.log("stake0",value);
        //var stakelimitamount=1000000000000000-staked[0];
        
        //console.log("stakelim",stakelimitamount);
        if(parseInt(value)<=parseInt(blackbal) ){
            if(parseInt(value)<(Remainingamount)){
                await blackstakecontract.methods.deposit(web3.utils.toBN(value)).send({from:accounts[0]});
                setIsOpen(true);
                setDis("Staked Succesfully")
                first();
               
                 
            }
            else{
                setIsOpen(true);
                setDis("you are trying to stake morethan your stake limit")
                first();
            }
       

        }
        else{
            setIsOpen(true);
           setDis("You Are Trying To Stake More Than Your Wallet Balance")
        }
      }

    const withdraw = async(event) => {
        event.preventDefault();
        const accounts =  await web3.eth.getAccounts();
        var valu = document.getElementById("tid2").value;
        // let x = new BigNumber(valu).times(1000000000);
        // console.log("value",x.toNumber());
        // var value = x.toNumber(); 
        var val = valu * 100000;
        var value = val * 10000;
      //  var value = valu * 1000000000;
         //var value = val + "000000000";
         console.log("printed",value);
        if(parseInt(value)<=parseInt(staked[0]))     {
            await blackstakecontract.methods.withdraw(web3.utils.toBN(value)).send({from:accounts[0]});
            setIsOpen(true);
            setDis("Unstaked Succesfully")
            first()
        }
        else{
            setIsOpen(true);
            setDis("You Are Trying To UnStake More Than You Staked");
        }
        
      }  

      const claimreward = async(event) => {
        event.preventDefault();
        if(parseInt(reward) >parseInt(100000000000)){
            const accounts =  await web3.eth.getAccounts();
            await blackstakecontract.methods.claimReward().send({from:accounts[0]});  
            setIsOpen(true);
            setDis("Rewards Claimed Successfuly");  
        }
        else{
            setIsOpen(true);
            setDis("Your reward amount should be Greater then 100 to Claim ")
        }
           
        first()
        
      }
      const emergencywithdraw = async(event) => {
        event.preventDefault();
        const accounts =  await web3.eth.getAccounts();
        await blackstakecontract.methods.emergencyWithdraw().send({from:accounts[0]}); 
        setIsOpen(true);
        setDis("Withdrawn Succesfully");       
        first()
      }
    
      const balancepercent = async(event) => {
        event.preventDefault();
        const accounts =  await web3.eth.getAccounts(); 
        document.getElementById("tid1").value = false;  
        const twentyfive=(blackbal)/4;
        // var l = new BigNumber(twentyfive);
        
        setdepositpercent(((BigNumber(twentyfive/1000000000)).decimalPlaces(8,1)).toNumber());
       
        document.getElementById("tid1").value = ((BigNumber(twentyfive/1000000000)).decimalPlaces(8,1)).toNumber();        
        
      }
       const balancepercent1 = async(event) => {
        event.preventDefault();
        const accounts =  await web3.eth.getAccounts(); 
        document.getElementById("tid1").value = false;    
        var fifty=(blackbal )/2;
        setdepositpercent(((BigNumber((fifty/1000000000)).decimalPlaces(8,1))).toNumber());
        document.getElementById("tid1").value = ((BigNumber((fifty/1000000000)).decimalPlaces(8,1))).toNumber();          
        
      } 


      const balancepercent2 = async(event) => {
        event.preventDefault();
        const accounts =  await web3.eth.getAccounts(); 
        document.getElementById("tid1").value = false;    
        var seventyfive=(blackbal * 75)/100;
        setdepositpercent(((BigNumber((seventyfive/1000000000)).decimalPlaces(8,1))).toNumber()); 
        document.getElementById("tid1").value = ((BigNumber((seventyfive/1000000000)).decimalPlaces(8,1))).toNumber();         
        
      }
      const balancepercent3 = async(event) => {
        event.preventDefault();
        const accounts =  await web3.eth.getAccounts(); 
        document.getElementById("tid1").value = false;    
        var hundred=(blackbal * 100)/100;
        setdepositpercent(((BigNumber((hundred/1000000000)).decimalPlaces(8,1))).toNumber()); 
        document.getElementById("tid1").value = ((BigNumber((hundred/1000000000)).decimalPlaces(8,1))).toNumber();         
        
      }


      const withdrawbalancepercent = async(event) => {
        event.preventDefault();
        const accounts =  await web3.eth.getAccounts(); 
        document.getElementById("tid2").value = false;  
        var twentyfive=(staked[0] *25)/100;
        setTotaldeposit(((BigNumber((twentyfive/1000000000)).decimalPlaces(8,1))).toNumber());
        document.getElementById("tid2").value =((BigNumber((twentyfive/1000000000)).decimalPlaces(8,1))).toNumber();        
        
      }
       const withdrawbalancepercent1 = async(event) => {
        event.preventDefault();
        const accounts =  await web3.eth.getAccounts(); 
        document.getElementById("tid2").value = false;    
        var fifty=(staked[0])/2;
        setTotaldeposit(((BigNumber((fifty/1000000000)).decimalPlaces(8,1))).toNumber());
        document.getElementById("tid2").value = ((BigNumber((fifty/1000000000)).decimalPlaces(8,1))).toNumber();          
        
      } 


      const withdrawbalancepercent2 = async(event) => {
        event.preventDefault();
        const accounts =  await web3.eth.getAccounts(); 
        document.getElementById("tid2").value = false;    
        var seventyfive=(staked[0]  * 75)/100;
        setTotaldeposit(((BigNumber((seventyfive/1000000000)).decimalPlaces(8,1))).toNumber()); 
        document.getElementById("tid2").value =((BigNumber((seventyfive/1000000000)).decimalPlaces(8,1))).toNumber();         
        
      }
      const withdrawbalancepercent3 = async(event) => {
        event.preventDefault();
        const accounts =  await web3.eth.getAccounts(); 
        document.getElementById("tid2").value = false;    
        var hundred=(staked[0]  * 100)/100;
        setTotaldeposit(((BigNumber((hundred/1000000000)).decimalPlaces(8,1))).toNumber()); 
        document.getElementById("tid2").value =((BigNumber((hundred/1000000000)).decimalPlaces(8,1))).toNumber();         
        
      }
      const approve = async() => {
        let account = await web3.eth.getAccounts();
        let amount = 1000000000000000000 +"000000000000000000"; 
        await blackcontract.methods.approve(contracts.blackstake.address,amount).send({from:account[0]});
        first()
        setIsOpen(true);
        setDis("Approved Succesfully")
    }
    const togglePopup = () => {
        setIsOpen(false);
      }


    return (
        <section className="p-0 my-5">
           <Modald visible={isOpen} onClose={() => setIsOpen(false)}>
        <FolowStepsd viewhistory={dis}  />
      </Modald>
           {
            localStorage.getItem("wallet")===null || localStorage.getItem("wallet")===""?(<>
            <Container fluid>
                <Row className="justify-content-center">
                    <Col xl="8" lg="8" md="10" sm="12">
                        <Card className="custom-card">
                            <div className="p-3">
                                <h4>stake  Black </h4>
                                <h6>The Stake Black and get reward</h6>
                                <Table bordered responsive className="mt-3">
                                    <thead>
                                        <tr>
                                            <th>Your Black</th>
                                            <th>Staked Black</th>  
                                            <th> Remaining Amount to Stake</th>
                                           
                                            <th> reward</th>
                                            
                                        </tr>
                                    </thead>
                                    <tbody className="text-center">
                                        <tr>
                                            <td>0.00</td>
                                            <td>0.00</td>
                                            <td>0.00</td>
                                            <td>0.00</td>
                                           
                                        </tr>
                                    </tbody>
                                </Table>
                                
<div>
                                <Container fluid>
                                    <Row>
                                        <Col xl="6" md="12">
                                            <InputGroup className="mt-3">
                                                <Input placeholder={depositpercent} style={{ height: "auto" }}type = "number" id="tid1"  />
                                                <InputGroupAddon addonType="append"><Button color="site-primary" >stake</Button></InputGroupAddon>
                                            </InputGroup>
                                            <div className="percentage smaller">
                                                <div className="percentage-item" >25%</div>
                                                <div className="percentage-item" >50%</div>
                                                <div className="percentage-item" >75%</div>
                                                <div className="percentage-item" >100%</div>
                                            </div>
                                        </Col>
                                        <Col xl="6" md="12">
                                       
              <div>
                                            <InputGroup className="mt-3">
                                                <Input placeholder={totaldep} style={{ height: "auto" }}type = "number"  id="tid2"  />
                                                <InputGroupAddon addonType="append"><Button color="site-primary" >unstake</Button></InputGroupAddon>
                                            </InputGroup>
                                            <div className="percentage smaller">
                                                <div className="percentage-item">25%</div>
                                                <div className="percentage-item">50%</div>
                                                <div className="percentage-item">75%</div>
                                                <div className="percentage-item">100%</div>
                                            </div>
                                            </div>  
          
                                        </Col>
                                    </Row>
                                </Container>
                                <Container>
                                    <Row className="justify-content-center">
                                        <Col xl="9">
                                            <Row className="mt-4">
                                                <Col xl="6" md="12">
                                                    <Button color="outline-site-primary" block >claim reward</Button>
                                                </Col>
                                                <Col xl="6" md="12" className='mt-3 mt-xl-0'>
                                                    <Button color="outline-site-primary" block   >Exit</Button>
                                                </Col>
                                            </Row>

                                        </Col>
                                    </Row>
                                </Container>
                                </div>

                            </div>
                        </Card>
                    </Col>
                </Row>
 </Container>
         </>):
         (<>
          <Container fluid>
                <Row className="justify-content-center">
                    <Col xl="8" lg="8" md="10" sm="12">
                        <Card className="custom-card">
                            <div className="p-3">
                                <h4>stake  Black </h4>
                                <h6>The Stake Black and get reward</h6>
                                <Table bordered responsive className="mt-3">
                                    <thead>
                                        <tr>
                                            < th>Your Black</th>
                                            <th>Staked Black</th>
                                            <th> Remaining Amount to Stake</th>
                                            <th> reward</th>
                                           
                                            
                                            
                                        </tr>
                                    </thead>
                                    <tbody className="text-center">
                                        <tr>
                                            <td>{((BigNumber((blackbal/1000000000)).decimalPlaces(3,1))).toNumber()}</td>
                                            <td>{((BigNumber((staked[0]/1000000000)).decimalPlaces(3,1))).toNumber()}</td>
                                            <td>{((BigNumber((Remainingamount/1000000000)).decimalPlaces(3,1))).toNumber()}</td>
                                            <td>{((BigNumber((reward/1000000000)).decimalPlaces(3,1))).toNumber()}</td>
                                           
                                        </tr>
                                    </tbody>
                                </Table>
                                <div>         

{ ap1 === true  ? ( (
<div>

 
                                <Container fluid>
                                    <Row>
                                    
                                        <Col xl="6" md="12">
                                            { stakelock === false ? ((

                                   <div>
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
                                            </div>
                                   )) :((<>

<text className="mt-3"  >You Need to wait for stake till this time </text> 
<Button color="site-primary">{datestake} , {time2}</Button>

                                   </>))}
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
       
            </>)
        }
       
        </section>
    );
}

export default Blackstake;
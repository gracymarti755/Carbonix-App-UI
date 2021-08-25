import { Card, Col, Container, Row,Button } from "reactstrap";
import CustomCard from "../components/global/CustomCard";
import burnvault from "./burnVaultAbi";
import web3 from "../web3";
import black from "./blackAbi";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Modal,InputGroup,FormControl } from "react-bootstrap";

const BurnVault = () => {
    const [modalShow1, setModalShow1] = React.useState(false);
    const [tid1,setId1] = useState([]);
    var [maxta,setmaxt] = useState([]);
    const [tid2,setId2] = useState([]);
    const [tid3,setId3] = useState([]);
    const [tid4,setId4] = useState([]);
    const [burn,setburn] = useState([]);
    const bvb = async() => {
        let account = await web3.eth.getAccounts();
        setId1(await black.methods.balanceOf(account[0]).call());
        var maxtx  = await burnvault.methods.maxTxAmount().call();
        setmaxt(maxtx);
        var circulate = await burnvault.methods.getCirculatingSupply().call();
        var balance = await burnvault.methods.getBurnVaultBNBBalance().call();
        setId2(circulate/(balance/1000000000000000000));
        setId3(await burnvault.methods.getBurnVaultBLACKBalance().call());
        var burnbalan  = await burnvault.methods.senderBurnBalance(account[0]).call();
        var bb = maxta - burnbalan;
        setburn(bb/1000000000);
        var allowan = await black.methods.allowance(account[0],"0x2f52686F07F502Ff3F5495E8aDd917898da23117").call();
       if(allowan == 0){
        setId4(true);
        }
       else{
        var btn = document.getElementById('tid');
        btn.disabled = false;
       setId4(false);
      }
    }
    useEffect(()=>{bvb()},[tid1,maxta,tid2])
    useEffect(()=>{bvb()},[tid3,burn,tid4])
    const approve = async() => {
        let account = await web3.eth.getAccounts();
        let amount = 1000000000000000000 +"000000000000000000";
        await black.methods.approve("0x2f52686F07F502Ff3F5495E8aDd917898da23117",amount).send({from:account[0]});
        bvb();
        alert("Approved successfully");
      }


      function MyVerticallyCenteredModal1(props) {
 
        var [tid6,setId6] = useState([]);



        var myfunct=async()=>{
            var circulate = await burnvault.methods.getCirculatingSupply().call();
            var balance = await burnvault.methods.getBurnVaultBNBBalance().call();         
          // setId6(circulate/(balance/1000000000000000000));         
            var a = document.getElementById("tid5").value;            
            var b =   (a * 1000000000) / (circulate/(balance/1000000000000000000));
            document.getElementById("idprint").innerHTML = b.toFixed(15) ;
            
         }
         
         
         const swap = async() => {
            document.getElementById("mymodal").style.visibility="hidden";
         
            let account = await web3.eth.getAccounts();
         
            var maxtx  = await burnvault.methods.maxTxAmount().call();
            
             var burnbalan  = await burnvault.methods.senderBurnBalance(account[0]).call();
              var bb = maxtx - burnbalan;
             console.log(bb);
             var burnab1=(bb/1000000000);                
             var a = document.getElementById("tid").value;
         
         //alert(maxtx);
          if(a<=  100000){
          if( a <= burnab1){
                 let amount = a * 1000000000;
              
              await burnvault.methods.swap(amount).send({from:account[0]});
          
          }
          else{
          alert("The amount you entered must be less than the Availabe limit ");
          }}
          else{
          alert("The amount you entered must be less than the Maximum Transcation amount");
          }
         
            }
         
        return (
 
 
     
            <Modal
              {...props}
              style={{width:"500px" , marginLeft:"400px",}}
        
              size="lg"
              aria-labelledby="contained-modal-title-vcenter"
              id="mymodal"
              centered
            >
              <Modal.Header className="myModal" style={{backgroundColor:"#ff0083",color:"white"}} closeButton>
                 
                <Modal.Title id="contained-modal-title-vcenter" >
                  Amount to Swap
                </Modal.Title><br/><br/>
               
              </Modal.Header>
              
              <Modal.Body style={{backgroundColor:"#ff0083", color:"white"}}  className="myModal">
                <InputGroup>
          <InputGroup.Prepend>
           <h5>Black : </h5>&nbsp;
          </InputGroup.Prepend>
          <FormControl className="myInput" onChange={myfunct} id="tid5" aria-label="Amount (to the nearest dollar)" /><br/>
          <InputGroup.Append>
          
       
          </InputGroup.Append>
        </InputGroup><br/>
        <InputGroup>
        <InputGroup.Prepend>
           <h5 > BNB : &nbsp;&nbsp; </h5>
           <h5 id="idprint">0.00</h5>
          </InputGroup.Prepend>
        </InputGroup>
              </Modal.Body>
              <Modal.Footer style={{backgroundColor:"#ff0083"}}  className="myModal">
                <Button variant="primary" onClick={swap} style={{backgroundColor:"#e3e4e6", color:"#ff0083"}}>Swap</Button>
              </Modal.Footer>
            </Modal>
          );
        } 
       
      
          
       
      
    return (<>
        <Row className="m-5">
            <Col xl="4" lg="6" md="6" className="mb-4">
                <CustomCard title="BLACK TOKEN BALANCE" text={parseFloat(tid1/1000000000).toFixed(3)} />
            </Col>
            <Col xl="4" lg="6" md="6" className="mb-4">
                <CustomCard title="1 BLACK(BNB)" text={ parseFloat(1000000000/tid2).toFixed(15)} />
            </Col>
            <Col xl="4" lg="6" md="6" className="mb-4">
                <CustomCard title="BLACK TOKEN IN BURNVAULT" text={parseFloat(tid3/1000000000).toFixed(5)} />
            </Col>
            <Col xl="4" lg="6" md="6" className="mb-4">
                <CustomCard title="MAXIMUM TRANSACTION LIMIT" text= {parseFloat(maxta/1000000000).toFixed(3)}/>
            </Col>
            <Col xl="4" lg="6" md="6" className="mb-4">
                <Card className="custom-card p-24 text-white" color="site-primary">
                <div>         

{ tid4 === true ? 
(
(
<div>
                    <p>Approve Before Swap</p>
                    <div className="text-center">
                        <Button color="dark" onClick={approve}>Approve</Button>
                    </div>
                    </div>
)
):
(
(
<div>
                    <div className="text-center text-Black">
                        <br></br>
                    <Button color="dark" >Approved successfully</Button>
                    </div>
                   
</div>
)
)}
  </div> 
                </Card>
            </Col>
            <Col xl="4" lg="6" md="6" className="mb-4">
                <div className="h-100 d-flex flex-column">
                    <div className="border rounded border-site-primary py-2 px-4 mb-4">
                        Available limit for User to Swap {burn}
                    </div>
                <Button color="outline-site-primary" className="align-self-end" id = "tid"  disabled ={tid4} block  onClick={() => setModalShow1(true)}>Swap</Button>
                <MyVerticallyCenteredModal1
                show={modalShow1}
                onHide={() => setModalShow1(false)}
        /><br/>
                </div>
                </Col>
        </Row>
    </>);
}

export default BurnVault;
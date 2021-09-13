import { useEffect } from "react";
import { useState } from "react";
import web3 from "../web3";
import busd from "./busdAbi";
import cbusd from "./cbusdAbi";
import { Link, useHistory } from "react-router-dom";
import { Button, Dropdown, Card, Col, Container, DropdownItem, DropdownMenu, DropdownToggle, Input, InputGroup, InputGroupAddon, InputGroupButtonDropdown, InputGroupText, Row } from "reactstrap";
import CFI from "./carbonFinanceAbi";
import { useDebugValue } from "react";
import Popup from "../Popup";
import Modald from "../ModalD";
import FolowStepsd from "../FolowStepsd";

const Vault = () => {
    // window.onbeforeunload = () => {
	// 	sessionStorage.removeItem('wallet');
	//   }
    let [activeTab, setActiveTab] = useState("Deposit");
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [dropdownOpen1, setDropdownOpen1] = useState(false);
    const [multiple, setMultiple] = useState(false);
    const [selectedDropdown, setSelectedDropdown] = useState("cBUSD");
    const [selectedDropdown1, setSelectedDropdown1] = useState("NO TRANCHE");
    const toggleDropDown = () => setDropdownOpen(!dropdownOpen);
    const toggle1 = () => setDropdownOpen1(!dropdownOpen1);

    const [avatokentowithdraw,setAvalwithdraw] = useState("");
    const [totaldep,setTotaldeposit] = useState("");
    const [totaldebt,setTotaldebt] = useState("");
    const[avaltoborrow,setAvalborrow] = useState("");
    const[busdbalance,setbusdbalance] = useState("");
    const[depositpercent,setdepositpercent] = useState("");
    const[withdrawpercent,setwithdrawpercent] = useState(""); 
    const[borrowpercent,setborrowpercent] = useState(""); 
    const[repaypercent,setrepaypercent] = useState(""); 
    const[liquidatepercent,setliquidatepercent] = useState("");
    var[app1,setApp] = useState("");
    var[ap1,setAP] = useState(""); 
    const [isOpen, setIsOpen] = useState(false);
    var[dis,setDis] = useState("");
    

    var[cbusdbalance,setcbusdbalance] = useState("");
    var[cbusdtotalsupply,setcbusdtotalsupply] = useState("");

    let history = useHistory();
    const walletsession=async()=>{
        const display =sessionStorage.getItem("wallet");
        console.log("check1session",display)
    }
    useEffect(()=>{walletsession()},[])
    useEffect(() => {
        document.getElementById("header-title").innerText = "Vault";
    })
    const overall = async() =>{
        if(localStorage.getItem("wallet")>0){
        const accounts =  await web3.eth.getAccounts();
        var totaldeposit = await CFI.methods.getCdpTotalDeposited(accounts[0]).call();
        setTotaldeposit(totaldeposit);
        var totaldebited = await CFI.methods.getCdpTotalDebt(accounts[0]).call();
        setTotaldebt(totaldebited);
        var collaterallimit=await CFI.methods.collateralizationLimit().call();
        setAvalwithdraw(totaldep - (totaldebt * collaterallimit)/1000000000000000000);
        var av = (totaldep * 50)/100;
        var bb = av - totaldebt;
        setAvalborrow(bb);
        setbusdbalance(await busd.methods.balanceOf(accounts[0]).call());
        setcbusdbalance(await cbusd.methods.balanceOf(accounts[0]).call());
  
       setcbusdtotalsupply(await cbusd.methods.totalSupply().call());
       
        let a = await busd.methods.allowance(accounts[0],"0x27A8DE88408102b4C14c1DbB1695a666A8686e6a").call();
       if(a>0){
        setApp(true);
       }
       else{
        setApp(false);
       }
      
      let b= await cbusd.methods.allowance(accounts[0],"0x27A8DE88408102b4C14c1DbB1695a666A8686e6a").call();
      if(b>0){
        setAP(true);
      }
      else{
        setAP(false);
      }
    }
    }
    useEffect(()=>{overall()},[app1,avaltoborrow,totaldebt,totaldep,avatokentowithdraw])

    const deposit = async(event) => {
        event.preventDefault();
        const accounts =  await web3.eth.getAccounts();
        var valu = document.getElementById("tid1").value;
        console.log("valueget",valu);
        var val = valu * 1000000000;
        var value = val + "000000000"
        if(parseInt(value)<=parseInt(busdbalance)){
        await CFI.methods.deposit(value).send({from:accounts[0]});
        overall()
        setIsOpen(true);
        
        setDis("Deposited Succesfully!")
        }
        else{
            setIsOpen(true);
            setDis("You Are  Trying To Deposit More Than Your Wallet Balance")   
        }
      }
    const withdraw = async(event) => {
        event.preventDefault();
        const accounts =  await web3.eth.getAccounts();
        var valu = document.getElementById("tid2").value;
        var val = valu * 1000000000;
        var value = val + "000000000"
        if(parseInt(value)<=parseInt(avatokentowithdraw)){
        await CFI.methods.withdraw(value).send({from:accounts[0]});
        overall()
        setIsOpen(true);
        setDis("Withdrawn Succesfully!")
        }
        else{
            setIsOpen(true);
            setDis("You Are Trying To Withdraw More Than You Deposited")   
        }
    }
    const borrow = async(event) => {
        event.preventDefault();
        const accounts =  await web3.eth.getAccounts();
        var valu = document.getElementById("tid3").value;
        var val = valu * 1000000000;
        var value = val + "000000000"
       if(parseInt(value)<=parseInt(avaltoborrow)){
        await CFI.methods.mint(value).send({from:accounts[0]});
        overall()
        setIsOpen(true);       
        setDis("Borrowed Succesfully!");
       }
       else{
        setIsOpen(true);
        setDis("You Are Trying To Borrow More Than Your Borrow Limit")   
       }
    }
    const repayborrow = async(event) => {
        event.preventDefault();
        const accounts =  await web3.eth.getAccounts();
        var valu = document.getElementById("tid4").value;
       if(selectedDropdown == "cBUSD"){
        var val = valu * 1000000000;
        var value = val + "000000000"
        if(parseInt(value)<=parseInt(cbusdbalance)){
            await CFI.methods.repay(0,value).send({from:accounts[0]});
            overall()
            setIsOpen(true);
            setDis("Borrowed amount is repayed By using CBUSD")
        }
        else{
            setIsOpen(true);
            setDis("You Don't Have Enough cBUSD To Repay Your Debt")
        }
      
       }
       else{
        var val = valu * 1000000000;
        var value = val + "000000000"
        if(parseInt(value)<=parseInt(busdbalance)){
        await CFI.methods.repay(value,0).send({from:accounts[0]});
        overall()
        setIsOpen(true);
        setDis("Borrowed amount is repayed By using BUSD")
        }
        else{
            setIsOpen(true);
            setDis("You Don't Have Enough BUSD To Repay Your Debt")
        }
       }
        
       
      }
      const liquidate = async(event) => {
        event.preventDefault();
        const accounts =  await web3.eth.getAccounts();
        var valu = document.getElementById("tid5").value;
        var val = valu * 1000000000;
        var value = val + "000000000"
        if(parseInt(value)<=parseInt(totaldep)){
            await CFI.methods.liquidate(value).send({from:accounts[0]});
            overall()
            setIsOpen(true);
            setDis("Liquidated Succesfully!")
        }
         else{
            setIsOpen(true);
            setDis("You Don't Have Enough BUSD In Collateral Balance To Liquidate")
         }
       
      }
      const balancepercent = async(event) => {
        event.preventDefault();
        const accounts =  await web3.eth.getAccounts(); 
        document.getElementById("tid1").value = false;  
        var twentyfive=(busdbalance * 25)/100;
    //     var printtwenty = ((twentyfive/1000000000000000000));
    //    console.log("printtwentycheck",Math.floor((printtwenty)));
       setdepositpercent(Number((twentyfive/1000000000000000000).toString().match(/^\d+(?:\.\d{0,3})?/)));
       document.getElementById("tid1").value = Number((twentyfive/1000000000000000000).toString().match(/^\d+(?:\.\d{0,3})?/));        
        
      }
       const balancepercent1 = async(event) => {
        event.preventDefault();
        const accounts =  await web3.eth.getAccounts(); 
        document.getElementById("tid1").value = false;    
        var fifty=(busdbalance * 50)/100;
        setdepositpercent(Number((fifty/1000000000000000000).toString().match(/^\d+(?:\.\d{0,3})?/)));
        document.getElementById("tid1").value = Number((fifty/1000000000000000000).toString().match(/^\d+(?:\.\d{0,3})?/));          
        
      }
      const balancepercent2 = async(event) => {
        event.preventDefault();
        const accounts =  await web3.eth.getAccounts(); 
        document.getElementById("tid1").value = false;    
        var seventyfive=(busdbalance * 75)/100;
        setdepositpercent(Number((seventyfive/1000000000000000000).toString().match(/^\d+(?:\.\d{0,3})?/))); 
        document.getElementById("tid1").value =Number((seventyfive/1000000000000000000).toString().match(/^\d+(?:\.\d{0,3})?/));         
        
      }
      const balancepercent3 = async(event) => {
        event.preventDefault();
        const accounts =  await web3.eth.getAccounts(); 
        document.getElementById("tid1").value = false;    
        var hundred=(busdbalance * 100)/100;
        setdepositpercent(Number((hundred/1000000000000000000).toString().match(/^\d+(?:\.\d{0,3})?/))); 
        document.getElementById("tid1").value = Number((hundred/1000000000000000000).toString().match(/^\d+(?:\.\d{0,3})?/));         
        
      }
      const withdrawbalancepercent = async(event) => {
        event.preventDefault();
        const accounts =  await web3.eth.getAccounts(); 
        document.getElementById("tid2").value = false;    
        var twentyfive=(avatokentowithdraw * 25)/100;
        setwithdrawpercent(Number((twentyfive/1000000000000000000).toString().match(/^\d+(?:\.\d{0,3})?/)));  
        document.getElementById("tid2").value = Number((twentyfive/1000000000000000000).toString().match(/^\d+(?:\.\d{0,3})?/));        
        
      }
      const withdrawbalancepercent1 = async(event) => {
        event.preventDefault();
        const accounts =  await web3.eth.getAccounts(); 
        document.getElementById("tid2").value = false;   
        var fifty=(avatokentowithdraw * 50)/100;
        setwithdrawpercent(Number((fifty/1000000000000000000).toString().match(/^\d+(?:\.\d{0,3})?/)));  
        document.getElementById("tid2").value = Number((fifty/1000000000000000000).toString().match(/^\d+(?:\.\d{0,3})?/));       
        
      }
      const withdrawbalancepercent2 = async(event) => {
        event.preventDefault();
        const accounts =  await web3.eth.getAccounts();
        document.getElementById("tid2").value = false;    
        var seventyfive=(avatokentowithdraw * 75)/100;
        setwithdrawpercent(Number((seventyfive/1000000000000000000).toString().match(/^\d+(?:\.\d{0,3})?/)));  
        document.getElementById("tid2").value = Number((seventyfive/1000000000000000000).toString().match(/^\d+(?:\.\d{0,3})?/));        
        
      }
      const withdrawbalancepercent3 = async(event) => {
        event.preventDefault();
        const accounts =  await web3.eth.getAccounts(); 
        document.getElementById("tid2").value = false;   
        var hundred=(avatokentowithdraw * 100)/100;
        setwithdrawpercent(Number((hundred/1000000000000000000).toString().match(/^\d+(?:\.\d{0,3})?/)));  
        document.getElementById("tid2").value = Number((hundred/1000000000000000000).toString().match(/^\d+(?:\.\d{0,3})?/));         
        
      }

      const borrowbalancepercent = async(event) => {
        event.preventDefault();
        const accounts =  await web3.eth.getAccounts(); 
        document.getElementById("tid3").value = false;   
        var twentyfive=(avaltoborrow * 25)/100;
        setborrowpercent(Number((twentyfive/1000000000000000000).toString().match(/^\d+(?:\.\d{0,3})?/))); 
        document.getElementById("tid3").value =Number((twentyfive/1000000000000000000).toString().match(/^\d+(?:\.\d{0,3})?/));        
        
      }
      const borrowbalancepercent1 = async(event) => {
        event.preventDefault();
        const accounts =  await web3.eth.getAccounts();
        document.getElementById("tid3").value = false;           
        var fifty=(avaltoborrow * 50)/100;
        setborrowpercent(Number((fifty/1000000000000000000).toString().match(/^\d+(?:\.\d{0,3})?/))); 
        document.getElementById("tid3").value = Math.floor(fifty/1000000000000000000);        
       
        
      }

      const borrowbalancepercent2 = async(event) => {
        event.preventDefault();
        const accounts =  await web3.eth.getAccounts();
        document.getElementById("tid3").value = false;           
        var seventyfive=(avaltoborrow * 75)/100;
        setborrowpercent(Number((seventyfive/1000000000000000000).toString().match(/^\d+(?:\.\d{0,3})?/))); 
        document.getElementById("tid3").value = Number((seventyfive/1000000000000000000).toString().match(/^\d+(?:\.\d{0,3})?/));        
       
        
      }

      const borrowbalancepercent3 = async(event) => {
        event.preventDefault();
        const accounts =  await web3.eth.getAccounts();
        document.getElementById("tid3").value = false;     
        var hundred=(avaltoborrow * 100)/100;
        setborrowpercent(Number((hundred/1000000000000000000).toString().match(/^\d+(?:\.\d{0,3})?/)));     
        document.getElementById("tid3").value =Number((hundred/1000000000000000000).toString().match(/^\d+(?:\.\d{0,3})?/));        
   
        
      }

      const repaybalancepercent = async(event) => {
        event.preventDefault();
        const accounts =  await web3.eth.getAccounts(); 
        document.getElementById("tid4").value = false;          
        var twentyfive=(totaldebt * 25)/100;
        setrepaypercent(Number((twentyfive/1000000000000000000).toString().match(/^\d+(?:\.\d{0,3})?/))); 
        document.getElementById("tid4").value = Number((twentyfive/1000000000000000000).toString().match(/^\d+(?:\.\d{0,3})?/));        
       
        
      }

      const repaybalancepercent1 = async(event) => {
        event.preventDefault();
        const accounts =  await web3.eth.getAccounts();
        document.getElementById("tid4").value = false;    
        var fifty=(totaldebt * 50)/100;
        setrepaypercent(Number((fifty/1000000000000000000).toString().match(/^\d+(?:\.\d{0,3})?/))); 
        document.getElementById("tid4").value = Number((fifty/1000000000000000000).toString().match(/^\d+(?:\.\d{0,3})?/));        
        
      }

      const repaybalancepercent2 = async(event) => {
        event.preventDefault();
        const accounts =  await web3.eth.getAccounts();   
        document.getElementById("tid4").value = false; 
        var seventyfive=(totaldebt * 75)/100;
        setrepaypercent(Number((seventyfive/1000000000000000000).toString().match(/^\d+(?:\.\d{0,3})?/)));        
        document.getElementById("tid4").value = Number((seventyfive/1000000000000000000).toString().match(/^\d+(?:\.\d{0,3})?/)); 
      }
      const repaybalancepercent3 = async(event) => {
        event.preventDefault();
        const accounts =  await web3.eth.getAccounts(); 
        document.getElementById("tid4").value = false;   
        var hundred=(totaldebt * 100)/100;
        setrepaypercent(Number((hundred/1000000000000000000).toString().match(/^\d+(?:\.\d{0,3})?/)));
        document.getElementById("tid4").value = Number((hundred/1000000000000000000).toString().match(/^\d+(?:\.\d{0,3})?/));         
        
      }

     
      const liquidatebalancepercent = async(event) => {
        event.preventDefault();
        const accounts =  await web3.eth.getAccounts();  
        document.getElementById("tid5").value = false;  
        var twentyfive=(totaldebt * 25)/100;
        setliquidatepercent(Number((twentyfive/1000000000000000000).toString().match(/^\d+(?:\.\d{0,3})?/))); 
        document.getElementById("tid5").value = Number((twentyfive/1000000000000000000).toString().match(/^\d+(?:\.\d{0,3})?/));        
        
      }

      const liquidatebalancepercent1 = async(event) => {
        event.preventDefault();
        const accounts =  await web3.eth.getAccounts(); 
        document.getElementById("tid5").value = false;   
        var fifty=(totaldebt * 50)/100;
        setliquidatepercent(Number((fifty/1000000000000000000).toString().match(/^\d+(?:\.\d{0,3})?/))); 
        document.getElementById("tid5").value = Number((fifty/1000000000000000000).toString().match(/^\d+(?:\.\d{0,3})?/));        
        
      }
      
      const liquidatebalancepercent2 = async(event) => {
        event.preventDefault();
        const accounts =  await web3.eth.getAccounts();  
        document.getElementById("tid5").value = false;  
        var seventyfive=(totaldebt * 75)/100;
        setliquidatepercent(Number((seventyfive/1000000000000000000).toString().match(/^\d+(?:\.\d{0,3})?/))); 
        document.getElementById("tid5").value = Number((seventyfive/1000000000000000000).toString().match(/^\d+(?:\.\d{0,3})?/));        
        
      }
      const liquidatebalancepercent3 = async(event) => {
        event.preventDefault();
        const accounts =  await web3.eth.getAccounts(); 
        document.getElementById("tid5").value = false;   
        var hundred=(totaldebt * 100)/100;
        setliquidatepercent(Number((hundred/1000000000000000000).toString().match(/^\d+(?:\.\d{0,3})?/))); 
        document.getElementById("tid5").value = Number((hundred/1000000000000000000).toString().match(/^\d+(?:\.\d{0,3})?/));     
        
      }
      const approve = async() => {
        let account = await web3.eth.getAccounts();
        let amount = 1000000000000000000 +"0000000000"; 
        await busd.methods.approve("0x27A8DE88408102b4C14c1DbB1695a666A8686e6a",amount).send({from:account[0]});
        //bal()
        overall();
        setIsOpen(true);
        setDis("Approved Succesfully!");
        
      }
      const approv = async() => {
        let account = await web3.eth.getAccounts();
        let amount =  1000000000000000000 +"000000000000000000"; 
        await cbusd.methods.approve("0x27A8DE88408102b4C14c1DbB1695a666A8686e6a",amount).send({from:account[0]});
        //bal()
        overall();
        setIsOpen(true);
        setDis("Approved Succesfully!");
       
      }
      const togglePopup = () => {
        setIsOpen(false);
      }



      
    return (
       
        <section className="p-0 my-5">
           <Modald visible={isOpen} onClose={() => setIsOpen(false)}>
        <FolowStepsd viewhistory={dis}  />
      </Modald>
            <Container fluid>
            {
            localStorage.getItem("wallet")===null || localStorage.getItem("wallet")===""?(<>
                   <Row className="justify-content-center">
                    <Col xl="7" lg="9" md="10" sm="12">
                        <Card className="custom-card">
                            <div className="bar-items-wrapper">
                                <div
                                    className="bar-items bg-site-secondary pl-3"
                                    style={{ minWidth: "470px" }}
                                >
                                    <Link
                                        to="#"
                                        className={`bar-item text-uppercase ml-0 ${activeTab == "Deposit" ? "active" : ""
                                            }`}
                                        onClick={(e) => setActiveTab("Deposit")}
                                    >
                                        <span>Deposit</span>
                                    </Link>
                                    <Link
                                        to="#"
                                        className={`bar-item text-uppercase ${activeTab == "Withdraw" ? "active" : ""
                                            }`}
                                        onClick={(e) => setActiveTab("Withdraw")}
                                    >
                                        <span>Withdraw</span>
                                    </Link>
                                    <Link
                                        to="#"
                                        className={`bar-item text-uppercase ${activeTab == "Borrow" ? "active" : ""
                                            }`}
                                        onClick={(e) => setActiveTab("Borrow")}
                                    >
                                        <span>Borrow</span>
                                    </Link>
                                    <Link
                                        to="#"
                                        className={`bar-item text-uppercase ${activeTab == "Repay" ? "active" : ""
                                            }`}
                                        onClick={(e) => setActiveTab("Repay")}
                                    >
                                        <span>Repay</span>
                                    </Link>
                                    <Link
                                        to="#"
                                        className={`bar-item text-uppercase ${activeTab == "Liquidate" ? "active" : ""
                                            }`}
                                        onClick={(e) => setActiveTab("Liquidate")}
                                    >
                                        <span>Liquidate</span>
                                    </Link>
                                </div>
                            </div>

                            {activeTab == "Deposit" && (
                                <div className="p-3">
                                    
                                           

    <div>
                                <h6>Deposit BUSD in order to borrow cBUSD</h6>
                                    <InputGroup className="mt-3">
                                        {/* <Input placeholder={depositpercent} style={{ height: "auto" }} type = "number" name="tid1"  onChange={event => setId1( event.target.value)}  ></Input> */}
                                        <Input placeholder={{depositpercent},"0.00" }style={{ height: "auto" }} type = "number" id="tid1"  ></Input>
                                        
                                        <InputGroupAddon addonType="append"><Button color="site-primary" >Deposit</Button></InputGroupAddon>
                                     
                                    </InputGroup>
                                    <div className="percentage">
                                        <div className="percentage-item" onClick={balancepercent}>25%</div>
                                        <div className="percentage-item" onClick={balancepercent1}>50%</div>
                                        <div className="percentage-item"onClick={balancepercent2}>75%</div>
                                        <div className="percentage-item"onClick={balancepercent3}>100%</div>
                                    </div>
                                    </div>
                                 
                                    <div className="mt-4">
                                        <h5>Deposits</h5>
                                        <div className="d-flex larger">
                                            <span>Your wallet balance:</span>
                                            <span className="ml-auto">0.00 BUSD</span>
                                        </div>
                                        <div className="d-flex">
                                            <span>Your collateral balance:</span>
                                            <span className="ml-auto">0.00 BUSD</span>
                                        </div>
                                        <div className="d-flex">
                                            <span>Available to withdraw:</span>
                                            <span className="ml-auto">0.00 BUSD</span>
                                        </div>
                                        {/* <div className="d-flex">
                                            <span>BUSD APY:</span>
                                            <span className="ml-auto">0.000%</span>
                                        </div> */}
                                    </div>
                                    <div className="mt-4">
                                        <h5>Borrows</h5>
                                        <div className="d-flex">
                                            <span>Remaining cBUSD debt:</span>
                                            <span className="ml-auto">0.00 cBUSD</span>
                                        </div>
                                        <div className="d-flex">
                                            <span>Available to borrow:</span>
                                            <span className="ml-auto">0.00 cBUSD</span>
                                        </div>
                                        <div className="d-flex">
                                            <span>Your wallet balance:</span>
                                            <span className="ml-auto">0.00 cBUSD</span>
                                        </div>
                                        {/* <div className="d-flex">
                                            <span>Est. Date of Maturity:</span>
                                            <span className="ml-auto">...</span>
                                        </div> */}
                                        <div className="d-flex">
                                            <span>Global Mintable cBUSD:</span>
                                            <span className="ml-auto">0.00 cBUSD</span>
                                        </div>
                                    </div>

                                </div>
                            )}
                            {activeTab == "Withdraw" && (
                                <div className="p-3">
                                    <h6>Withdraw your deposited BUSD</h6>
                                    <InputGroup className="mt-3">
                                        <Input placeholder={{withdrawpercent},"0.00"} style={{ height: "auto" }} type = "number" id="tid2" />
                                        <InputGroupAddon addonType="append"><Button color="site-primary" >Withdraw</Button></InputGroupAddon>
                                    </InputGroup>
                                    <div className="percentage">
                                        <div className="percentage-item" onClick={withdrawbalancepercent}>25%</div>
                                        <div className="percentage-item"onClick={withdrawbalancepercent1}>50%</div>
                                        <div className="percentage-item"onClick={withdrawbalancepercent2}>75%</div>
                                        <div className="percentage-item"onClick={withdrawbalancepercent3}>100%</div>
                                    </div>
                                    <div className="mt-4">
                                        <h5>Deposits</h5>
                                        <div className="d-flex">
                                            <span>Your wallet balance:</span>
                                            <span className="ml-auto">0.00 BUSD</span>
                                        </div>
                                        <div className="d-flex">
                                            <span>Your collateral balance:</span>
                                            <span className="ml-auto">0.00 BUSD</span>
                                        </div>
                                        <div className="d-flex larger">
                                            <span>Available to withdraw:</span>
                                            <span className="ml-auto">0.00 BUSD</span>
                                        </div>
                                        {/* <div className="d-flex">
                                            <span>BUSD APY:</span>
                                            <span className="ml-auto">0.000%</span>
                                        </div> */}
                                    </div>
                                    <div className="mt-4">
                                        <h5>Borrows</h5>
                                        <div className="d-flex">
                                            <span>Remaining cBUSD debt:</span>
                                            <span className="ml-auto">0.00 cBUSD</span>
                                        </div>
                                        <div className="d-flex">
                                            <span>Available to borrow:</span>
                                            <span className="ml-auto">0.00 cBUSD</span>
                                        </div>
                                        <div className="d-flex">
                                            <span>Your wallet balance:</span>
                                            <span className="ml-auto">0.00 cBUSD</span>
                                        </div>
                                        {/* <div className="d-flex">
                                            <span>Est. Date of Maturity:</span>
                                            <span className="ml-auto">...</span>
                                        </div> */}
                                        <div className="d-flex">
                                            <span>Global Mintable cBUSD:</span>
                                            <span className="ml-auto">0.00 cBUSD</span>
                                        </div>
                                    </div>

                                </div>
                            )}
                            {activeTab == "Borrow" && (
                                <div className="p-3">
                                    <Dropdown isOpen={dropdownOpen1} className="d-block" toggle={toggle1}>
                                        <DropdownToggle color="site-primary" className="d-block w-100" caret>
                                            {selectedDropdown1}
                                        </DropdownToggle>
                                        <DropdownMenu className="w-100">
                                        <DropdownItem onClick={e => setSelectedDropdown1("NO TRANCHE")}>NO TRANCHE</DropdownItem>
                                            <DropdownItem onClick={e => { setSelectedDropdown1("FIXED TRANCHE"); history.push("/carbon-yield")}}>FIXED TRANCHE(UPCOMING)</DropdownItem>
                                           
                                            <DropdownItem onClick={e => { setSelectedDropdown1("VARIABLE TRANCHE"); history.push("/carbon-yield")}}>VARIABLE TRANCHE</DropdownItem>
                                        </DropdownMenu>
                                    </Dropdown>
                                    <h6 className="mt-3">Borrow up to 50% the value of your collateral in cbUSD. Your debt will be automatically paid down by yield from Alpaca finance</h6>
                                    <InputGroup className="mt-3">
                                    <Input placeholder={{borrowpercent},"0.00"} style={{ height: "auto" }} type = "number" id="tid3" />
                                        <InputGroupAddon addonType="append"><Button color="site-primary" >Borrow</Button></InputGroupAddon>
                                    </InputGroup>
                                    <div className="percentage">
                                        <div className="percentage-item" onClick={borrowbalancepercent}>25%</div>
                                        <div className="percentage-item"onClick={borrowbalancepercent1}>50%</div>
                                        <div className="percentage-item"onClick={borrowbalancepercent2}>75%</div>
                                        <div className="percentage-item"onClick={borrowbalancepercent3}>100%</div>
                                    </div>
                                    <div className="mt-4">
                                        <h5>Deposits</h5>
                                        <div className="d-flex">
                                            <span>Your wallet balance:</span>
                                            <span className="ml-auto">0.00 BUSD</span>
                                        </div>
                                        <div className="d-flex">
                                            <span>Your collateral balance:</span>
                                            <span className="ml-auto">0.00 BUSD</span>
                                        </div>
                                        <div className="d-flex">
                                            <span>Available to withdraw:</span>
                                            <span className="ml-auto">0.00 BUSD</span>
                                        </div>
                                        {/* <div className="d-flex">
                                            <span>BUSD APY:</span>
                                            <span className="ml-auto">0.000%</span>
                                        </div> */}
                                        
                                    </div>
                                    <div className="mt-4">
                                        <h5>Borrows</h5>
                                        <div className="d-flex">
                                            <span>Remaining cbUSD debt:</span>
                                            <span className="ml-auto">0.00 cbUSD</span>
                                        </div>
                                        <div className="d-flex larger">
                                            <span>Available to borrow:</span>
                                            <span className="ml-auto">0.00 cbUSD</span>
                                        </div>
                                        <div className="d-flex">
                                            <span>Your wallet balance:</span>
                                            <span className="ml-auto">0.00 cbUSD</span>
                                        </div>
                                        {/* <div className="d-flex">
                                            <span>Est. Date of Maturity:</span>
                                            <span className="ml-auto">...</span>
                                        </div> */}
                                        <div className="d-flex larger">
                                            <span>Global Mintable cbUSD:</span>
                                            <span className="ml-auto">0.00 cbUSD</span>
                                        </div>
                                    </div>

                                </div>
                            )}
                            {activeTab == "Repay" && (
                                <div className="p-3">
                                    <div>         

{ ap1 === true ? 
(
(
<div>
                                    <h6>Repay the remaining 0.00 cbUSD debt from your wallet using cbUSD and/or BUSD</h6>
                                    {!multiple ?
                                        <InputGroup className="mt-3">
                                        <Input placeholder={{repaypercent},"0.00"} style={{ height: "auto" }} type = "number" id="tid4" />
                                            <InputGroupButtonDropdown addonType="append" isOpen={dropdownOpen} toggle={toggleDropDown}>
                                                <DropdownToggle caret style={{ width: 130 }} color="site-primary">
                                                    {selectedDropdown}
                                                </DropdownToggle>
                                                <DropdownMenu>
                                                    <DropdownItem onClick={e => setSelectedDropdown("cbUSD")}>cbUSD</DropdownItem>
                                                    <DropdownItem onClick={e => setSelectedDropdown("BUSD")}>BUSD</DropdownItem>
                                                </DropdownMenu>
                                            </InputGroupButtonDropdown>
                                            {/* <InputGroupAddon addonType="append"><Button onClick={e => setMultiple(!multiple)} color="outline-site-primary"><i className="fa fa-plus"></i></Button></InputGroupAddon> */}
                                        </InputGroup>
                                        : <>
                                            <InputGroup className="mt-3">
                                                <Input placeholder="0.00" style={{ height: "auto" }}  />
                                                <InputGroupAddon addonType="append">
                                                    <InputGroupText className="bg-site-primary text-white font-weight-bold">cbUSD</InputGroupText>
                                                </InputGroupAddon>
                                                <InputGroupAddon addonType="append">
                                                    <Button size="sm" onClick={e => setMultiple(!multiple)} color="outline-site-primary"><i className="fa fa-minus"></i></Button></InputGroupAddon>
                                            </InputGroup>
                                            {/* <InputGroup className="mt-3">
                                                <Input placeholder="0.00" style={{ height: "auto" }}  />
                                                <InputGroupAddon addonType="append">
                                                    <InputGroupText className="bg-site-primary text-white font-weight-bold">BUSD</InputGroupText>
                                                </InputGroupAddon>
                                            </InputGroup> */}
                                            {/* <div className="mt-3 d-flex flex-column mx-auto">
                                                <div className="d-inline-flex mx-auto">
                                                    <div style={{ width: 70 }}>
                                                        Min
                                                    </div>
                                                    <input type="range" min="1" max="100" defaultValue="0"></input>
                                                    <div style={{ width: 70 }} className="text-right">
                                                        Max
                                                    </div>
                                                </div>
                                                <div className="d-inline-flex mx-auto">
                                                    <div style={{ width: 70 }}>
                                                        cbUSD
                                                    </div>
                                                    <input type="range" min="1" max="100" defaultValue="0"></input>
                                                    <div style={{ width: 70 }} className="text-right">
                                                        BUSD
                                                    </div>
                                                </div>
                                            </div> */}
                                        </>}
                                    <div className="percentage">
                                        <div className="percentage-item" onClick={repaybalancepercent}>25%</div>
                                        <div className="percentage-item"onClick={repaybalancepercent1}>50%</div>
                                        <div className="percentage-item"onClick={repaybalancepercent2}>75%</div>
                                        <div className="percentage-item"onClick={repaybalancepercent3}>100%</div>
                                    </div>
                                    <div style={{ maxWidth: 300 }} className="mx-auto">
                                        <Button color="outline-site-primary" className="mt-3" block >Repay</Button>
                                    </div>
                                    </div>
)
):
(
(
<div>
<h6>Before Repay you want to approve First</h6>
<Button color="outline-site-primary" className="mt-3" block >Approve</Button>
</div>
)
)}
    </div> 
                                    <div className="mt-4">
                                        <h5>Deposits</h5>
                                        <div className="d-flex larger">
                                            <span>Your wallet balance:</span>
                                            <span className="ml-auto">0.00 BUSD</span>
                                        </div>
                                        <div className="d-flex">
                                            <span>Your collateral balance:</span>
                                            <span className="ml-auto">0.00 BUSD</span>
                                        </div>
                                        <div className="d-flex">
                                            <span>Available to withdraw:</span>
                                            <span className="ml-auto">0.00 BUSD</span>
                                        </div>
                                        {/* <div className="d-flex">
                                            <span>BUSD APY:</span>
                                            <span className="ml-auto">0.000%</span>
                                        </div> */}
                                    </div>
                                    <div className="mt-4">
                                        <h5>Borrows</h5>
                                        <div className="d-flex larger">
                                            <span>Remaining cbUSD debt:</span>
                                            <span className="ml-auto">0.00 cbUSD</span>
                                        </div>
                                        <div className="d-flex">
                                            <span>Available to borrow:</span>
                                            <span className="ml-auto">0.00 cbUSD</span>
                                        </div>
                                        <div className="d-flex larger">
                                            <span>Your wallet balance:</span>
                                            <span className="ml-auto">0.00 cbUSD</span>
                                        </div>
                                        {/* <div className="d-flex">
                                            <span>Est. Date of Maturity:</span>
                                            <span className="ml-auto">...</span>
                                        </div> */}
                                        <div className="d-flex">
                                            <span>Global Mintable cbUSD:</span>
                                            <span className="ml-auto">0.00 cbUSD</span>
                                        </div>
                                    </div>

                                </div>
                            )}
                            {activeTab == "Liquidate" && (
                                <div className="p-3">
                                    <h6>Repay the remaining 0.00 cbUSD debt by liquidating your BUSD collateral.</h6>
                                    <small className="text-danger">WARNING: this will use your collateral to repay your cbUSD debt.</small>
                                    <InputGroup className="mt-3">
                                    <Input placeholder={{liquidatepercent},"0.00"} style={{ height: "auto" }} type = "number" id="tid5" />
                                        <InputGroupAddon addonType="append"><Button color="site-primary" >Liquidate</Button></InputGroupAddon>
                                    </InputGroup>
                                    <div className="percentage">
                                        <div className="percentage-item" onClick={liquidatebalancepercent}>25%</div>
                                        <div className="percentage-item"onClick={liquidatebalancepercent1}>50%</div>
                                        <div className="percentage-item"onClick={liquidatebalancepercent2}>75%</div>
                                        <div className="percentage-item"onClick={liquidatebalancepercent3}>100%</div>
                                    </div>
                                    <div className="mt-4">
                                        <h5>Deposits</h5>
                                        <div className="d-flex">
                                            <span>Your wallet balance:</span>
                                            <span className="ml-auto">0.00 BUSD</span>
                                        </div>
                                        <div className="d-flex larger">
                                            <span>Your collateral balance:</span>
                                            <span className="ml-auto">0.00 BUSD</span>
                                        </div>
                                        <div className="d-flex">
                                            <span>Available to withdraw:</span>
                                            <span className="ml-auto">0.00 BUSD</span>
                                        </div>
                                        {/* <div className="d-flex">
                                            <span>BUSD APY:</span>
                                            <span className="ml-auto">0.000%</span>
                                        </div> */}
                                    </div>
                                    <div className="mt-4">
                                        <h5>Borrows</h5>
                                        <div className="d-flex larger">
                                            <span>Remaining cbUSD debt:</span>
                                            <span className="ml-auto">0.00 cbUSD</span>
                                        </div>
                                        <div className="d-flex">
                                            <span>Available to borrow:</span>
                                            <span className="ml-auto">0.00 cbUSD</span>
                                        </div>
                                        <div className="d-flex">
                                            <span>Your wallet balance:</span>
                                            <span className="ml-auto">0.00 cbUSD</span>
                                        </div>
                                        {/* <div className="d-flex">
                                            <span>Est. Date of Maturity:</span>
                                            <span className="ml-auto">...</span>
                                        </div> */}
                                        <div className="d-flex">
                                            <span>Global Mintable cbUSD:</span>
                                            <span className="ml-auto">0.00 cbUSD</span>
                                        </div>
                                    </div>

                                </div>
                            )}
                        </Card>
                    </Col>
                </Row>  

                
                </>):
                (<>
                          <Row className="justify-content-center">
                    <Col xl="7" lg="9" md="10" sm="12">
                        <Card className="custom-card">
                            <div className="bar-items-wrapper">
                                <div
                                    className="bar-items bg-site-secondary pl-3"
                                    style={{ minWidth: "470px" }}
                                >
                                    <Link
                                        to="#"
                                        className={`bar-item text-uppercase ml-0 ${activeTab == "Deposit" ? "active" : ""
                                            }`}
                                        onClick={(e) => setActiveTab("Deposit")}
                                    >
                                        <span>Deposit</span>
                                    </Link>
                                    <Link
                                        to="#"
                                        className={`bar-item text-uppercase ${activeTab == "Withdraw" ? "active" : ""
                                            }`}
                                        onClick={(e) => setActiveTab("Withdraw")}
                                    >
                                        <span>Withdraw</span>
                                    </Link>
                                    <Link
                                        to="#"
                                        className={`bar-item text-uppercase ${activeTab == "Borrow" ? "active" : ""
                                            }`}
                                        onClick={(e) => setActiveTab("Borrow")}
                                    >
                                        <span>Borrow</span>
                                    </Link>
                                    <Link
                                        to="#"
                                        className={`bar-item text-uppercase ${activeTab == "Repay" ? "active" : ""
                                            }`}
                                        onClick={(e) => setActiveTab("Repay")}
                                    >
                                        <span>Repay</span>
                                    </Link>
                                    <Link
                                        to="#"
                                        className={`bar-item text-uppercase ${activeTab == "Liquidate" ? "active" : ""
                                            }`}
                                        onClick={(e) => setActiveTab("Liquidate")}
                                    >
                                        <span>Liquidate</span>
                                    </Link>
                                </div>
                            </div>

                            {activeTab == "Deposit" && (
                                <div className="p-3">
                                    
                                    <div>         

{ app1 === true ? 
(
(
    <div>
                                <h6>Deposit BUSD in order to borrow cbUSD</h6>
                                    <InputGroup className="mt-3">
                                        {/* <Input placeholder={depositpercent} style={{ height: "auto" }} type = "number" name="tid1"  onChange={event => setId1( event.target.value)}  ></Input> */}
                                        <Input placeholder={{depositpercent},"0.00" }style={{ height: "auto" }} type = "number" id="tid1"  ></Input>
                                        
                                        <InputGroupAddon addonType="append"><Button color="site-primary" onClick={deposit}>Deposit</Button></InputGroupAddon>
                                     
                                    </InputGroup>
                                    <div className="percentage">
                                        <div className="percentage-item" onClick={balancepercent}>25%</div>
                                        <div className="percentage-item" onClick={balancepercent1}>50%</div>
                                        <div className="percentage-item"onClick={balancepercent2}>75%</div>
                                        <div className="percentage-item"onClick={balancepercent3}>100%</div>
                                    </div>
                                    </div>
)
):
(
    (
    <div>
        <center>
             <h6>Before Deposit BUSD ,Approve First</h6>
             <Button color="site-primary"   onClick={approve}>Approve</Button></center>

              
    </div>
    )
    )}
</div>                                 
                                    <div className="mt-4">
                                        <h5>Deposits</h5>
                                        <div className="d-flex larger">
                                            <span>Your wallet balance:</span>
                                            <span className="ml-auto">{parseFloat(busdbalance/1000000000000000000).toFixed(5)} BUSD</span>
                                        </div>
                                        <div className="d-flex">
                                            <span>Your collateral balance:</span>
                                            <span className="ml-auto">{ parseFloat(totaldep/1000000000000000000).toFixed(5)} BUSD</span>
                                        </div>
                                        <div className="d-flex">
                                            <span>Available to withdraw:</span>
                                            <span className="ml-auto">{parseFloat(avatokentowithdraw/1000000000000000000).toFixed(5)} BUSD</span>
                                        </div>
                                        {/* <div className="d-flex">
                                            <span>BUSD APY:</span>
                                            <span className="ml-auto">0.000%</span>
                                        </div> */}
                                    </div>
                                    <div className="mt-4">
                                        <h5>Borrows</h5>
                                        <div className="d-flex">
                                            <span>Remaining cbUSD debt:</span>
                                            <span className="ml-auto">{parseFloat(totaldebt/1000000000000000000).toFixed(5)} cbUSD</span>
                                        </div>
                                        <div className="d-flex">
                                            <span>Available to borrow:</span>
                                            <span className="ml-auto">{parseFloat(avaltoborrow/1000000000000000000).toFixed(5)} cbUSD</span>
                                        </div>
                                        <div className="d-flex">
                                            <span>Your wallet balance:</span>
                                            <span className="ml-auto">{parseFloat(cbusdbalance/1000000000000000000).toFixed(5)} cbUSD</span>
                                        </div>
                                        {/* <div className="d-flex">
                                            <span>Est. Date of Maturity:</span>
                                            <span className="ml-auto">...</span>
                                        </div> */}
                                        <div className="d-flex">
                                            <span>Global Mintable cbUSD:</span>
                                            <span className="ml-auto">{parseFloat(cbusdtotalsupply/1000000000000000000).toFixed(5)}cbUSD</span>
                                        </div>
                                    </div>

                                </div>
                            )}
                            {activeTab == "Withdraw" && (
                                <div className="p-3">
                                    <h6>Withdraw your deposited BUSD</h6>
                                    <InputGroup className="mt-3">
                                        <Input placeholder={{withdrawpercent},"0.00"} style={{ height: "auto" }} type = "number" id="tid2" />
                                        <InputGroupAddon addonType="append"><Button color="site-primary" onClick = {withdraw}>Withdraw</Button></InputGroupAddon>
                                    </InputGroup>
                                    <div className="percentage">
                                        <div className="percentage-item" onClick={withdrawbalancepercent}>25%</div>
                                        <div className="percentage-item"onClick={withdrawbalancepercent1}>50%</div>
                                        <div className="percentage-item"onClick={withdrawbalancepercent2}>75%</div>
                                        <div className="percentage-item"onClick={withdrawbalancepercent3}>100%</div>
                                    </div>
                                    <div className="mt-4">
                                        <h5>Deposits</h5>
                                        <div className="d-flex">
                                            <span>Your wallet balance:</span>
                                            <span className="ml-auto">{parseFloat(busdbalance/1000000000000000000).toFixed(5)} BUSD</span>
                                        </div>
                                        <div className="d-flex">
                                            <span>Your collateral balance:</span>
                                            <span className="ml-auto">{ parseFloat(totaldep/1000000000000000000).toFixed(5)} BUSD</span>
                                        </div>
                                        <div className="d-flex larger">
                                            <span>Available to withdraw:</span>
                                            <span className="ml-auto">{parseFloat(avatokentowithdraw/1000000000000000000).toFixed(5)} BUSD</span>
                                        </div>
                                        {/* <div className="d-flex">
                                            <span>BUSD APY:</span>
                                            <span className="ml-auto">0.000%</span>
                                        </div> */}
                                    </div>
                                    <div className="mt-4">
                                        <h5>Borrows</h5>
                                        <div className="d-flex">
                                            <span>Remaining cbUSD debt:</span>
                                            <span className="ml-auto">{parseFloat(totaldebt/1000000000000000000).toFixed(5)} cbUSD</span>
                                        </div>
                                        <div className="d-flex">
                                            <span>Available to borrow:</span>
                                            <span className="ml-auto">{parseFloat(avaltoborrow/1000000000000000000).toFixed(5)} cbUSD</span>
                                        </div>
                                        <div className="d-flex">
                                            <span>Your wallet balance:</span>
                                            <span className="ml-auto">{parseFloat(cbusdbalance/1000000000000000000).toFixed(5)} cbUSD</span>
                                        </div>
                                        {/* <div className="d-flex">
                                            <span>Est. Date of Maturity:</span>
                                            <span className="ml-auto">...</span>
                                        </div> */}
                                        <div className="d-flex">
                                            <span>Global Mintable cbUSD:</span>
                                            <span className="ml-auto">{parseFloat(cbusdtotalsupply/1000000000000000000).toFixed(5)} cbUSD</span>
                                        </div>
                                    </div>

                                </div>
                            )}
                            {activeTab == "Borrow" && (
                                <div className="p-3">
                                    <Dropdown isOpen={dropdownOpen1} className="d-block" toggle={toggle1}>
                                        <DropdownToggle color="site-primary" className="d-block w-100" caret>
                                            {selectedDropdown1}
                                        </DropdownToggle>
                                        <DropdownMenu className="w-100">
                                        <DropdownItem onClick={e => setSelectedDropdown1("NO TRANCHE")}>NO TRANCHE</DropdownItem>
                                            <DropdownItem onClick={e => { setSelectedDropdown1("FIXED TRANCHE"); history.push("/carbon-yield")}}>FIXED TRANCHE(UPCOMING)</DropdownItem>
                                           
                                            <DropdownItem onClick={e => { setSelectedDropdown1("VARIABLE TRANCHE"); history.push("/carbon-yield")}}>VARIABLE TRANCHE(UPCOMING)</DropdownItem>
                                        </DropdownMenu>
                                    </Dropdown>
                                    <h6 className="mt-3">Borrow up to 50% the value of your collateral in cbUSD. Your debt will be automatically paid down by yield from Alpaca finance</h6>
                                    <InputGroup className="mt-3">
                                    <Input placeholder={{borrowpercent},"0.00"} style={{ height: "auto" }} type = "number" id="tid3" />
                                        <InputGroupAddon addonType="append"><Button color="site-primary" onClick={borrow}>Borrow</Button></InputGroupAddon>
                                    </InputGroup>
                                    <div className="percentage">
                                        <div className="percentage-item" onClick={borrowbalancepercent}>25%</div>
                                        <div className="percentage-item"onClick={borrowbalancepercent1}>50%</div>
                                        <div className="percentage-item"onClick={borrowbalancepercent2}>75%</div>
                                        <div className="percentage-item"onClick={borrowbalancepercent3}>100%</div>
                                    </div>
                                    <div className="mt-4">
                                        <h5>Deposits</h5>
                                        <div className="d-flex">
                                            <span>Your wallet balance:</span>
                                            <span className="ml-auto">{parseFloat(busdbalance/1000000000000000000).toFixed(5)} BUSD</span>
                                        </div>
                                        <div className="d-flex">
                                            <span>Your collateral balance:</span>
                                            <span className="ml-auto">{ parseFloat(totaldep/1000000000000000000).toFixed(5)} BUSD</span>
                                        </div>
                                        <div className="d-flex">
                                            <span>Available to withdraw:</span>
                                            <span className="ml-auto">{parseFloat(avatokentowithdraw/1000000000000000000).toFixed(5)} BUSD</span>
                                        </div>
                                        {/* <div className="d-flex">
                                            <span>BUSD APY:</span>
                                            <span className="ml-auto">0.000%</span>
                                        </div> */}
                                    </div>
                                    <div className="mt-4">
                                        <h5>Borrows</h5>
                                        <div className="d-flex">
                                            <span>Remaining cbUSD debt:</span>
                                            <span className="ml-auto">{parseFloat(totaldebt/1000000000000000000).toFixed(5)} cbUSD</span>
                                        </div>
                                        <div className="d-flex larger">
                                            <span>Available to borrow:</span>
                                            <span className="ml-auto">{parseFloat(avaltoborrow/1000000000000000000).toFixed(5)} cbUSD</span>
                                        </div>
                                        <div className="d-flex">
                                            <span>Your wallet balance:</span>
                                            <span className="ml-auto">{parseFloat(cbusdbalance/1000000000000000000).toFixed(5)} cbUSD</span>
                                        </div>
                                        {/* <div className="d-flex">
                                            <span>Est. Date of Maturity:</span>
                                            <span className="ml-auto">...</span>
                                        </div> */}
                                        <div className="d-flex larger">
                                            <span>Global Mintable cbUSD:</span>
                                            <span className="ml-auto">{parseFloat(cbusdtotalsupply/1000000000000000000).toFixed(5)} cbUSD</span>
                                        </div>
                                    </div>

                                </div>
                            )}
                            {activeTab == "Repay" && (
                                <div className="p-3">
                                    <div>         

{ ap1 === true ? 
(
(
<div>
                                    <h6>Repay the remaining {parseFloat(totaldebt/1000000000000000000).toFixed(5)} cbUSD debt from your wallet using cbUSD and/or BUSD</h6>
                                    {!multiple ?
                                        <InputGroup className="mt-3">
                                        <Input placeholder={{repaypercent},"0.00"} style={{ height: "auto" }} type = "number" id="tid4" />
                                            <InputGroupButtonDropdown addonType="append" isOpen={dropdownOpen} toggle={toggleDropDown}>
                                                <DropdownToggle caret style={{ width: 130 }} color="site-primary">
                                                    {selectedDropdown}
                                                </DropdownToggle>
                                                <DropdownMenu>
                                                    <DropdownItem onClick={e => setSelectedDropdown("cbUSD")}>cbUSD</DropdownItem>
                                                    <DropdownItem onClick={e => setSelectedDropdown("BUSD")}>BUSD</DropdownItem>
                                                </DropdownMenu>
                                            </InputGroupButtonDropdown>
                                            {/* <InputGroupAddon addonType="append"><Button onClick={e => setMultiple(!multiple)} color="outline-site-primary"><i className="fa fa-plus"></i></Button></InputGroupAddon> */}
                                        </InputGroup>
                                        : <>
                                            <InputGroup className="mt-3">
                                                <Input placeholder="0.00" style={{ height: "auto" }}  />
                                                <InputGroupAddon addonType="append">
                                                    <InputGroupText className="bg-site-primary text-white font-weight-bold">cbUSD</InputGroupText>
                                                </InputGroupAddon>
                                                <InputGroupAddon addonType="append">
                                                    <Button size="sm" onClick={e => setMultiple(!multiple)} color="outline-site-primary"><i className="fa fa-minus"></i></Button></InputGroupAddon>
                                            </InputGroup>
                                            {/* <InputGroup className="mt-3">
                                                <Input placeholder="0.00" style={{ height: "auto" }}  />
                                                <InputGroupAddon addonType="append">
                                                    <InputGroupText className="bg-site-primary text-white font-weight-bold">BUSD</InputGroupText>
                                                </InputGroupAddon>
                                            </InputGroup> */}
                                            {/* <div className="mt-3 d-flex flex-column mx-auto">
                                                <div className="d-inline-flex mx-auto">
                                                    <div style={{ width: 70 }}>
                                                        Min
                                                    </div>
                                                    <input type="range" min="1" max="100" defaultValue="0"></input>
                                                    <div style={{ width: 70 }} className="text-right">
                                                        Max
                                                    </div>
                                                </div>
                                                <div className="d-inline-flex mx-auto">
                                                    <div style={{ width: 70 }}>
                                                        cbUSD
                                                    </div>
                                                    <input type="range" min="1" max="100" defaultValue="0"></input>
                                                    <div style={{ width: 70 }} className="text-right">
                                                        BUSD
                                                    </div>
                                                </div>
                                            </div> */}
                                        </>}
                                    <div className="percentage">
                                        <div className="percentage-item" onClick={repaybalancepercent}>25%</div>
                                        <div className="percentage-item"onClick={repaybalancepercent1}>50%</div>
                                        <div className="percentage-item"onClick={repaybalancepercent2}>75%</div>
                                        <div className="percentage-item"onClick={repaybalancepercent3}>100%</div>
                                    </div>
                                    <div style={{ maxWidth: 300 }} className="mx-auto">
                                        <Button color="outline-site-primary" className="mt-3" block onClick={repayborrow}>Repay</Button>
                                    </div>
                                    </div>
)
):
(
(
<div>
<h6>Before Repay you want to approve First</h6>
<Button color="outline-site-primary" className="mt-3" block onClick={approv}>Approve</Button>
</div>
)
)}
    </div> 
                                    <div className="mt-4">
                                        <h5>Deposits</h5>
                                        <div className="d-flex larger">
                                            <span>Your wallet balance:</span>
                                            <span className="ml-auto">{parseFloat(busdbalance/1000000000000000000).toFixed(5)} BUSD</span>
                                        </div>
                                        <div className="d-flex">
                                            <span>Your collateral balance:</span>
                                            <span className="ml-auto">{ parseFloat(totaldep/1000000000000000000).toFixed(5)} BUSD</span>
                                        </div>
                                        <div className="d-flex">
                                            <span>Available to withdraw:</span>
                                            <span className="ml-auto">{parseFloat(avatokentowithdraw/1000000000000000000).toFixed(5)} BUSD</span>
                                        </div>
                                        {/* <div className="d-flex">
                                            <span>BUSD APY:</span>
                                            <span className="ml-auto">0.000%</span>
                                        </div> */}
                                    </div>
                                    <div className="mt-4">
                                        <h5>Borrows</h5>
                                        <div className="d-flex larger">
                                            <span>Remaining cbUSD debt:</span>
                                            <span className="ml-auto">{parseFloat(totaldebt/1000000000000000000).toFixed(5)} cbUSD</span>
                                        </div>
                                        <div className="d-flex">
                                            <span>Available to borrow:</span>
                                            <span className="ml-auto">{parseFloat(avaltoborrow/1000000000000000000).toFixed(5)} cbUSD</span>
                                        </div>
                                        <div className="d-flex larger">
                                            <span>Your wallet balance:</span>
                                            <span className="ml-auto">{parseFloat(cbusdbalance/1000000000000000000).toFixed(5)} cbUSD</span>
                                        </div>
                                        {/* <div className="d-flex">
                                            <span>Est. Date of Maturity:</span>
                                            <span className="ml-auto">...</span>
                                        </div> */}
                                        <div className="d-flex">
                                            <span>Global Mintable cbUSD:</span>
                                            <span className="ml-auto">{parseFloat(cbusdtotalsupply/1000000000000000000).toFixed(5)} cbUSD</span>
                                        </div>
                                    </div>

                                </div>
                            )}
                            {activeTab == "Liquidate" && (
                                <div className="p-3">
                                    <h6>Repay the remaining {parseFloat(totaldebt/1000000000000000000).toFixed(5)} cbUSD debt by liquidating your BUSD collateral.</h6>
                                    <small className="text-danger">WARNING: this will use your collateral to repay your cbUSD debt.</small>
                                    <InputGroup className="mt-3">
                                    <Input placeholder={{liquidatepercent},"0.00"} style={{ height: "auto" }} type = "number" id="tid5" />
                                        <InputGroupAddon addonType="append"><Button color="site-primary" onClick={liquidate}>Liquidate</Button></InputGroupAddon>
                                    </InputGroup>
                                    <div className="percentage">
                                        <div className="percentage-item" onClick={liquidatebalancepercent}>25%</div>
                                        <div className="percentage-item"onClick={liquidatebalancepercent1}>50%</div>
                                        <div className="percentage-item"onClick={liquidatebalancepercent2}>75%</div>
                                        <div className="percentage-item"onClick={liquidatebalancepercent3}>100%</div>
                                    </div>
                                    <div className="mt-4">
                                        <h5>Deposits</h5>
                                        <div className="d-flex">
                                            <span>Your wallet balance:</span>
                                            <span className="ml-auto">{parseFloat(busdbalance/1000000000000000000).toFixed(5)} BUSD</span>
                                        </div>
                                        <div className="d-flex larger">
                                            <span>Your collateral balance:</span>
                                            <span className="ml-auto">{ parseFloat(totaldep/1000000000000000000).toFixed(5)} BUSD</span>
                                        </div>
                                        <div className="d-flex">
                                            <span>Available to withdraw:</span>
                                            <span className="ml-auto">{parseFloat(avatokentowithdraw/1000000000000000000).toFixed(5)} BUSD</span>
                                        </div>
                                        {/* <div className="d-flex">
                                            <span>BUSD APY:</span>
                                            <span className="ml-auto">0.000%</span>
                                        </div> */}
                                    </div>
                                    <div className="mt-4">
                                        <h5>Borrows</h5>
                                        <div className="d-flex larger">
                                            <span>Remaining cbUSD debt:</span>
                                            <span className="ml-auto">{parseFloat(totaldebt/1000000000000000000).toFixed(5)} cbUSD</span>
                                        </div>
                                        <div className="d-flex">
                                            <span>Available to borrow:</span>
                                            <span className="ml-auto">{parseFloat(avaltoborrow/1000000000000000000).toFixed(5)} cbUSD</span>
                                        </div>
                                        <div className="d-flex">
                                            <span>Your wallet balance:</span>
                                            <span className="ml-auto">{parseFloat(cbusdbalance/1000000000000000000).toFixed(5)} cbUSD</span>
                                        </div>
                                        {/* <div className="d-flex">
                                            <span>Est. Date of Maturity:</span>
                                            <span className="ml-auto">...</span>
                                        </div> */}
                                        <div className="d-flex">
                                            <span>Global Mintable cbUSD:</span>
                                            <span className="ml-auto">{parseFloat(cbusdtotalsupply/1000000000000000000).toFixed(5)} cbUSD</span>
                                        </div>
                                    </div>

                                </div>
                            )}
                        </Card>
                    </Col>
                </Row>  
                    
                    
                    </>)
        }
            
            </Container>
           
        </section>
    );
}

export default Vault;
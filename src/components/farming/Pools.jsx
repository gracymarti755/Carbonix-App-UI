import { Card, Col, Row, Button } from "reactstrap";
import PoolCardTabs from "./PoolCardTabs";
import icon from "../../assets/img/icon.PNG";

import icon1 from "../../assets/img/icon1.PNG";
import carbonstake from "../../views/carbonStake";
import { Link,useHistory } from "react-router-dom";
import cbusd from "../../views/cbusdAbi";
import busd from "../../views/busdAbi";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import black from "../../views/blackAbi";
import carbonoracle from "../../views/carbonOracleAbi";
import blackoracle from "../../views/blackOracleAbi";
import lptokenstake from "../../views/lpStakingAbi";
import lptokenpair from "../../views/lptokenAbi";

const Pools = () => {
    const [balance,setbalan] = useState([]);
    const[balanceblack,setBalanceblack]=useState([]);
    const[balancepair,setBalancepair]=useState([]);
    const [communitybalance,setcommunitybalan] = useState([]);
    const [aprcarbon,setAprcarbon]= useState('');
    const [aprblack,setAprblack]=useState('');
    const [aprlp,setAprlp]=useState('');
    const [blackprice,setBlackprice]=useState([]);
    const[carbonprice,setCarbonprice]=useState([]);
    const [blackperblock,setBlackperblock]=useState([]);
    const[blackdailyreward,setBlackDailyreward]=useState([]);
    const bvb = async() => {
        setbalan(await cbusd.methods.balanceOf("0x1b302657E2ed17c4b1073Ea146986a6270757529").call());       
        setBalanceblack(await black.methods.balanceOf("0xC90b6328370e93184d16b98A6bFF13e201FCf27F").call());       
        console.log("balanblack",balanceblack);
        setBalancepair(await lptokenpair.methods.balanceOf("0x801BE19F7963A0d0656FA48039125cf956Db42b5").call());       
        console.log("balancepair",balancepair);
        
        
        var tokenPerBlock = 128.600823045;
        var BLOCKS_PER_YEAR =10512000;
                            
        const blackdailyreward =1000000/90 ;
        console.log("dailyreward",blackdailyreward);
        setBlackDailyreward(blackdailyreward);
    
       const priceofbusd= await busd.methods.balanceOf("0x7F7701C1F75146ca746C89A7479e95a19Cf2bC24").call();
       const priceofcbusd= await cbusd.methods.balanceOf("0x7F7701C1F75146ca746C89A7479e95a19Cf2bC24").call();
       const carbonprice1= (priceofbusd)/(priceofcbusd);
       const carbonprice=(parseFloat(carbonprice1).toFixed(3));
        setCarbonprice(carbonprice);
        console.log("carbonprice",carbonprice)
        const blackprice1=await  blackoracle.methods.getDittoBnbRate().call();       
        const blackprices=(parseFloat((blackprice1[3])/1000000000000000000).toFixed(13)); 
        setBlackprice(blackprices)      
        console.log("blackprice3",blackprice);
        //var price=1.157407407 *blackprice *BLOCKS_PER_YEAR;
        //console.log("pricenew",price);
        setcommunitybalan(await black.methods.balanceOf("0x0Ef04FFA95f2eC2D07a5a196b4cEFB9d1076D43c").call());
        const totalRewardPricePerYearcarbon = (blackprice) * (tokenPerBlock)*(BLOCKS_PER_YEAR);
        const totalStakingTokenInPoolcarbon = (carbonprice)*((balance)/1000000000000000000);
        console.log("carbon balance",balance);
        setAprcarbon(((totalRewardPricePerYearcarbon)/(totalStakingTokenInPoolcarbon))*(100));
        console.log("aprvaluecarbon",aprcarbon);
        const totalRewardPricePerYearblack = (blackprice) * (tokenPerBlock)*(BLOCKS_PER_YEAR);
        const  totalStakingTokenInPoolblack = (blackprice)*((balanceblack)/1000000000);
        setAprblack(((totalRewardPricePerYearblack)/(totalStakingTokenInPoolblack))*(100));
        console.log("aprvalue",aprblack);
        
        const totalRewardPricePerYearlp = (blackprice) * (tokenPerBlock)*(BLOCKS_PER_YEAR);
        console.log("totalRewardPricePerYearlp",totalRewardPricePerYearlp)
        const totalStakingTokenInPoollp = (carbonprice)*((balancepair)/1000000000000000000); 
        console.log("totalStakingTokenInPoollp",carbonprice)
        const aprlp = ((totalRewardPricePerYearlp)/(totalStakingTokenInPoollp))*(100);     
        setAprlp(aprlp);
        console.log("aprvaluelp",((totalRewardPricePerYearlp)/(totalStakingTokenInPoollp))*(100));
     }
     useEffect(()=>{bvb()},[balance,balanceblack,carbonprice,blackprice])
   let a=5;
    let history=useHistory();
    return (
        <Row className="m-3 m-md-5">
            {a===5 ? (
                <>
                          <Col xl="4" md="6" className="mb-4">

<Card className="custom-card mt-2 mb-2 ml-0 mr-0 p-2">
    <div className="d-flex" style={{ padding: "12px" }}>
        <img
            className="pool-card-image"
            src={icon}
            alt="Card image cap"
        />
        {/* <small className="text-site-primary font-weight-semi-bold text-uppercase">bond staked</small> */}
        <div
            className=" pl-2 pr-2 align-item-center"
            style={{
                marginRight: "10px",
                marginTop: "auto",
                marginBottom: "auto",
            }}
        >
            <p style={{ fontWeight: "600", margin: "auto" }}>
                cbUSD
            </p>
        </div>
    </div>
    <div style={{ padding: "12px" }}>
        <PoolCardTabs />
    </div>
    <div className="d-flex pl-3 pr-3 mt-2 mb-2">
        <div
            style={{
                marginRight: "auto",
                marginTop: "auto",
                marginBottom: "auto",
            }}
        >
            <p
                style={{ fontWeight: "600", fontSize: "12px" }}
                className="text-muted"
            >
                APR
            </p>
        </div>
        {/* <small className="text-site-primary font-weight-semi-bold text-uppercase">bond staked</small> */}
        <div style={{ marginLeft: "auto" }}>
            <p>
                <img
                    left
                    width="15px"
                    style={{
                        marginTop: "auto",
                        marginBottom: "auto",
                        marginLeft: "10px",
                        marginRight: "10px",
                    }}
                    //   style={{ marginButtom: "auto" }}
                    src={icon}
                    alt="Card image cap"
                />
                <b>{parseFloat(aprcarbon).toFixed(5)}%</b>
            </p>
        </div>
    </div>
    <div className="d-flex  pl-3 pr-3 mt-2 mb-2">
        <div
            style={{
                marginRight: "auto",
                marginTop: "auto",
                marginBottom: "auto",
            }}
        >
            <p
                style={{ fontWeight: "600", fontSize: "12px" }}
                className="text-muted"
            >
                BLACK daily rewards
            </p>
        </div>
        {/* <small className="text-site-primary font-weight-semi-bold text-uppercase">bond staked</small> */}
        <div style={{ marginLeft: "auto" }}>
            <p style={{ fontWeight: "600", textAlign: "center" }}>
                <img
                    left
                    width="15px"
                    //   style={{ marginTop:'auto' , marginBottom:'auto',marginLeft:'10px',marginRight:'10px' }}
                    //   style={{ marginButtom: "auto" }}
                    src={"https://blackcollateral.com/wp-content/uploads//2021/05/logo-svg.svg"}
                    alt="Card image cap"
                />
               {parseFloat(blackdailyreward).toFixed(5)}
               
            </p>
        </div>
    </div>
    <div className="d-flex  pl-3 pr-3 mt-2 mb-2">
        <div
            style={{
                marginRight: "auto",
                marginTop: "auto",
                marginBottom: "auto",
            }}
        >
            <p
                style={{ fontWeight: "600", fontSize: "12px" }}
                className="text-muted"
            >
                BLACK rewards left
            </p>
        </div>
        {/* <small className="text-site-primary font-weight-semi-bold text-uppercase">bond staked</small> */}
        <div style={{ marginLeft: "auto" }}>
            <p style={{ fontWeight: "600", textAlign: "center" }}>
                <img
                    left
                    width="15px"
                    //   style={{ marginTop:'auto' , marginBottom:'auto',marginLeft:'10px',marginRight:'10px' }}
                    //   style={{ marginButtom: "auto" }}
                    src={"https://blackcollateral.com/wp-content/uploads//2021/05/logo-svg.svg"}
                    alt="Card image cap"
                />
                 {parseFloat(communitybalance/1000000000).toFixed(3)}
            </p>
        </div>
    </div>
    <div className="d-flex  pl-3 pr-3 mt-2 mb-2">
        <div
            style={{
                marginRight: "auto",
                marginTop: "auto",
                marginBottom: "auto",
            }}
        >
            <p
                style={{ fontWeight: "600", fontSize: "12px" }}
                className="text-muted"
            >
                Pool balance
            </p>
        </div>
        {/* <small className="text-site-primary font-weight-semi-bold text-uppercase">bond staked</small> */}
        <div style={{ marginLeft: "auto" }}>
            <p style={{ fontWeight: "600", textAlign: "center" }}>
                <img
                    left
                    width="15px"
                    //   style={{ marginTop:'auto' , marginBottom:'auto',marginLeft:'10px',marginRight:'10px' }}
                    //   style={{ marginButtom: "auto" }}
                    src={icon}
                    alt="Card image cap"
                />
               {parseFloat(balance/1000000000000000000).toFixed(3)}
            </p>
        </div>
    </div>
       
    <Button  className={`ml-3 mr-3 pb-0 mb-0 mt-2 mb-2
        `} color="site-primary" width="full" onClick={e => {history.push("/carbon-stake")}}>View pool</Button> 
</Card>
</Col>
                
                </>
            ):(
             <>
                      <Col xl="4" md="6" className="mb-4">
            <Card className="custom-card mt-2 mb-2 ml-0 mr-0 p-2">
                <div className="d-flex" style={{ padding: "12px" }}>
                    <img
                        className="pool-card-image"
                        src={icon}
                        alt="Card image cap"
                    />
                    {/* <small className="text-site-primary font-weight-semi-bold text-uppercase">bond staked</small> */}
                    <div
                        className=" pl-2 pr-2 align-item-center"
                        style={{
                            marginRight: "10px",
                            marginTop: "auto",
                            marginBottom: "auto",
                        }}
                    >
                        <p style={{ fontWeight: "600", margin: "auto" }}>
                            cbUSD
                        </p>
                        <p className="text-danger mb-0 font-weight-bold" style={{ fontSize: '12px' }}>Epoch 25 / 25</p>
                    </div>
                    <div className="ml-auto mt-auto mb-auto"
                        style={{
                            backgroundColor: "#f8f8f9",
                            borderRadius: "20px",
                            fontWeight: "600",
                            fontSize: "14px",
                        }}><p className="font-weight-bold text-muted pt-1 pb-1 pl-3 pr-3 mb-0">ENDED</p></div>
                </div>
                <div style={{ padding: "12px" }}>
                    <PoolCardTabs />
                </div>
                <div
                    className="d-flex align-items-center m-3 p-3 "
                    style={{
                        backgroundColor: "#f8f8f9",
                        borderRadius: "5px",
                        border: "1px solid rgba(6, 10, 13, 0.1) ",
                        color: "#4f6ae6",
                        fontWeight: "600",
                        fontSize: "14px",
                    }}
                >
                    <p className="m-0 text-muted">
                        The stablecoin staking pool ended after 25 epochs on Apr 12 2021, 00:00 UTC. Deposits are now disabled but you can still withdraw your tokens and collect any unclaimed rewards.
                    </p>
                </div>
                <div className="d-flex  pl-3 pr-3 mt-2 mb-2">
                    <div
                        style={{
                            marginRight: "auto",
                            marginTop: "auto",
                            marginBottom: "auto",
                        }}
                    >
                        <p
                            style={{ fontWeight: "600", fontSize: "12px" }}
                            className="text-muted"
                        >
                            Your balance
                        </p>
                    </div>
                    {/* <small className="text-site-primary font-weight-semi-bold text-uppercase">bond staked</small> */}
                    <div style={{ marginLeft: "auto" }}>
                        <p style={{ fontWeight: "600", textAlign: "center" }}>
                            -
                        </p>
                    </div>
                </div>
                <Button className={`ml-3 mr-3 pb-0 mb-0 mt-2 mb-2`}
                    color="site-primary" width="full"  onClick={e => {history.push("/lp-stake")}}>View pool</Button>
            </Card>
        </Col>
        
             </>
            ) }
  
           {a===5 ? (
              <>
                   <Col xl="4" md="6" className="mb-4">
                <Card className="custom-card mt-2 mb-2 ml-0 mr-0 p-2">
                    <div className="d-flex" style={{ padding: "12px" }}>
                        <img
                            className="pool-card-image"
                            src={icon1}
                            alt="Card image cap"
                        />
                        {/* <small className="text-site-primary font-weight-semi-bold text-uppercase">bond staked</small> */}
                        <div
                            className=" pl-2 pr-2 align-item-center"
                            style={{
                                marginRight: "10px",
                                marginTop: "auto",
                                marginBottom: "auto",
                            }}
                        >
                            <p style={{ fontWeight: "600", margin: "auto" }}>
                                cbUSD/BUSD
                            </p>
                        </div>
                    </div>
                    <div style={{ padding: "12px" }}>
                        <PoolCardTabs />
                    </div>
                    <div className="d-flex pl-3 pr-3 mt-2 mb-2">
                        <div
                            style={{
                                marginRight: "auto",
                                marginTop: "auto",
                                marginBottom: "auto",
                            }}
                        >
                            <p
                                style={{ fontWeight: "600", fontSize: "12px" }}
                                className="text-muted"
                            >
                                APR
                            </p>
                        </div>
                        {/* <small className="text-site-primary font-weight-semi-bold text-uppercase">bond staked</small> */}
                        <div style={{ marginLeft: "auto" }}>
                            <p>
                                <img
                                    left
                                    width="15px"
                                    style={{
                                        marginTop: "auto",
                                        marginBottom: "auto",
                                        marginLeft: "10px",
                                        marginRight: "10px",
                                    }}
                                    //   style={{ marginButtom: "auto" }}
                                    src={icon}
                                    alt="Card image cap"
                                />
                                <b>{parseFloat(aprlp).toFixed(5)}%</b>
                            </p>
                        </div>
                    </div>
                    <div className="d-flex  pl-3 pr-3 mt-2 mb-2">
                        <div
                            style={{
                                marginRight: "auto",
                                marginTop: "auto",
                                marginBottom: "auto",
                            }}
                        >
                            <p
                                style={{ fontWeight: "600", fontSize: "12px" }}
                                className="text-muted"
                            >
                                BLACK daily rewards
                            </p>
                        </div>
                        {/* <small className="text-site-primary font-weight-semi-bold text-uppercase">bond staked</small> */}
                        <div style={{ marginLeft: "auto" }}>
                            <p style={{ fontWeight: "600", textAlign: "center" }}>
                                <img
                                    left
                                    width="15px"
                                    //   style={{ marginTop:'auto' , marginBottom:'auto',marginLeft:'10px',marginRight:'10px' }}
                                    //   style={{ marginButtom: "auto" }}
                                    src={"https://blackcollateral.com/wp-content/uploads//2021/05/logo-svg.svg"}
                                    alt="Card image cap"
                                />
                                {parseFloat(blackdailyreward).toFixed(5)}
                            </p>
                        </div>
                    </div>
                    <div className="d-flex  pl-3 pr-3 mt-2 mb-2">
                        <div
                            style={{
                                marginRight: "auto",
                                marginTop: "auto",
                                marginBottom: "auto",
                            }}
                        >
                            <p
                                style={{ fontWeight: "600", fontSize: "12px" }}
                                className="text-muted"
                            >
                                BLACK rewards left
                            </p>
                        </div>
                        {/* <small className="text-site-primary font-weight-semi-bold text-uppercase">bond staked</small> */}
                        <div style={{ marginLeft: "auto" }}>
                            <p style={{ fontWeight: "600", textAlign: "center" }}>
                                <img
                                    left
                                    width="15px"
                                    //   style={{ marginTop:'auto' , marginBottom:'auto',marginLeft:'10px',marginRight:'10px' }}
                                    //   style={{ marginButtom: "auto" }}
                                    src={"https://blackcollateral.com/wp-content/uploads//2021/05/logo-svg.svg"}
                                    alt="Card image cap"
                                />
                                 {parseFloat(communitybalance/1000000000).toFixed(3)}
                            </p>
                        </div>
                    </div>
                    <div className="d-flex  pl-3 pr-3 mt-2 mb-2">
                        <div
                            style={{
                                marginRight: "auto",
                                marginTop: "auto",
                                marginBottom: "auto",
                            }}
                        >
                            <p
                                style={{ fontWeight: "600", fontSize: "12px" }}
                                className="text-muted"
                            >
                                Pool balance
                            </p>
                        </div>
                        {/* <small className="text-site-primary font-weight-semi-bold text-uppercase">bond staked</small> */}
                        <div style={{ marginLeft: "auto" }}>
                            <p style={{ fontWeight: "600", textAlign: "center" }}>
                                <img
                                    left
                                    width="15px"
                                    //   style={{ marginTop:'auto' , marginBottom:'auto',marginLeft:'10px',marginRight:'10px' }}
                                    //   style={{ marginButtom: "auto" }}
                                    src={icon1}
                                    alt="Card image cap"
                                />
                               {parseFloat(balancepair/1000000000000000000).toFixed(3)}
                            </p>
                        </div>
                    </div>
                       
                    <Button  className={`ml-3 mr-3 pb-0 mb-0 mt-2 mb-2
                        `} color="site-primary" width="full" onClick={e => {history.push("/lp-stake")}}>View pool</Button> 
                </Card>
            </Col>
              </>
           ):(
               <>
               
            <Col xl="4" md="6" className="mb-4">
            <Card className="custom-card mt-2 mb-2 ml-0 mr-0 p-2">
                <div className="d-flex" style={{ padding: "12px" }}>
                    <img
                        className="pool-card-image"
                        src={icon1}
                        alt="Card image cap"
                    />
                    {/* <small className="text-site-primary font-weight-semi-bold text-uppercase">bond staked</small> */}
                    <div
                        className=" pl-2 pr-2 align-item-center"
                        style={{
                            marginRight: "10px",
                            marginTop: "auto",
                            marginBottom: "auto",
                        }}
                    >
                        <p style={{ fontWeight: "600", margin: "auto" }}>
                            cbUSD/BUSD
                        </p>
                        <p className="text-danger mb-0 font-weight-bold" style={{ fontSize: '12px' }}>Epoch 25 / 25</p>
                    </div>
                    <div className="ml-auto mt-auto mb-auto"
                        style={{
                            backgroundColor: "#f8f8f9",
                            borderRadius: "20px",
                            fontWeight: "600",
                            fontSize: "14px",
                        }}><p className="font-weight-bold text-muted pt-1 pb-1 pl-3 pr-3 mb-0">ENDED</p></div>
                </div>
                <div style={{ padding: "12px" }}>
                    <PoolCardTabs />
                </div>
                <div
                    className="d-flex align-items-center m-3 p-3 "
                    style={{
                        backgroundColor: "#f8f8f9",
                        borderRadius: "5px",
                        border: "1px solid rgba(6, 10, 13, 0.1) ",
                        color: "#4f6ae6",
                        fontWeight: "600",
                        fontSize: "14px",
                    }}
                >
                    <p className="m-0 text-muted">
                        The stablecoin staking pool ended after 25 epochs on Apr 12 2021, 00:00 UTC. Deposits are now disabled but you can still withdraw your tokens and collect any unclaimed rewards.
                    </p>
                </div>
                <div className="d-flex  pl-3 pr-3 mt-2 mb-2">
                    <div
                        style={{
                            marginRight: "auto",
                            marginTop: "auto",
                            marginBottom: "auto",
                        }}
                    >
                        <p
                            style={{ fontWeight: "600", fontSize: "12px" }}
                            className="text-muted"
                        >
                            Your balance
                        </p>
                    </div>
                    {/* <small className="text-site-primary font-weight-semi-bold text-uppercase">bond staked</small> */}
                    <div style={{ marginLeft: "auto" }}>
                        <p style={{ fontWeight: "600", textAlign: "center" }}>
                            -
                        </p>
                    </div>
                </div>
                <Button className={`ml-3 mr-3 pb-0 mb-0 mt-2 mb-2`}
                    color="site-primary" width="full"  onClick={e => {history.push("/lp-stake")}}>View pool</Button>
            </Card>
        </Col>
        </>
           )}
           {a===5 ? (
                <>
  <Col xl="4" md="6" className="mb-4">
                <Card className="custom-card mt-2 mb-2 ml-0 mr-0 p-2">
                    <div className="d-flex" style={{ padding: "12px" }}>
                        <img
                            className="pool-card-image"
                            src={"https://blackcollateral.com/wp-content/uploads//2021/05/logo-svg.svg"}
                            alt="Card image cap"
                        />
                        {/* <small className="text-site-primary font-weight-semi-bold text-uppercase">bond staked</small> */}
                        <div
                            className=" pl-2 pr-2 align-item-center"
                            style={{
                                marginRight: "10px",
                                marginTop: "auto",
                                marginBottom: "auto",
                            }}
                        >
                            <p style={{ fontWeight: "600", margin: "auto" }}>
                                Black
                            </p>
                        </div>
                    </div>
                    <div style={{ padding: "12px" }}>
                        <PoolCardTabs />
                    </div>
                    <div className="d-flex pl-3 pr-3 mt-2 mb-2">
                        <div
                            style={{
                                marginRight: "auto",
                                marginTop: "auto",
                                marginBottom: "auto",
                            }}
                        >
                            <p
                                style={{ fontWeight: "600", fontSize: "12px" }}
                                className="text-muted"
                            >
                                APR
                            </p>
                        </div>
                        {/* <small className="text-site-primary font-weight-semi-bold text-uppercase">bond staked</small> */}
                        <div style={{ marginLeft: "auto" }}>
                            <p>
                                <img
                                    left
                                    width="15px"
                                    style={{
                                        marginTop: "auto",
                                        marginBottom: "auto",
                                        marginLeft: "10px",
                                        marginRight: "10px",
                                    }}
                                    //   style={{ marginButtom: "auto" }}
                                    src={"https://blackcollateral.com/wp-content/uploads//2021/05/logo-svg.svg"}
                                    alt="Card image cap"
                                />
                                <b>{parseFloat(aprblack).toFixed(9)} %</b>
                            </p>
                        </div>
                    </div>
                    <div className="d-flex  pl-3 pr-3 mt-2 mb-2">
                        <div
                            style={{
                                marginRight: "auto",
                                marginTop: "auto",
                                marginBottom: "auto",
                            }}
                        >
                            <p
                                style={{ fontWeight: "600", fontSize: "12px" }}
                                className="text-muted"
                            >
                                BLACK daily rewards
                            </p>
                        </div>
                        {/* <small className="text-site-primary font-weight-semi-bold text-uppercase">bond staked</small> */}
                        <div style={{ marginLeft: "auto" }}>
                            <p style={{ fontWeight: "600", textAlign: "center" }}>
                                <img
                                    left
                                    width="15px"
                                    //   style={{ marginTop:'auto' , marginBottom:'auto',marginLeft:'10px',marginRight:'10px' }}
                                    //   style={{ marginButtom: "auto" }}
                                    src={"https://blackcollateral.com/wp-content/uploads//2021/05/logo-svg.svg"}
                                    alt="Card image cap"
                                />
                                  {parseFloat(blackdailyreward).toFixed(5)}
                               
                            </p>
                        </div>
                    </div>
                    <div className="d-flex  pl-3 pr-3 mt-2 mb-2">
                        <div
                            style={{
                                marginRight: "auto",
                                marginTop: "auto",
                                marginBottom: "auto",
                            }}
                        >
                            <p
                                style={{ fontWeight: "600", fontSize: "12px" }}
                                className="text-muted"
                            >
                                BLACK rewards left
                            </p>
                        </div>
                        {/* <small className="text-site-primary font-weight-semi-bold text-uppercase">bond staked</small> */}
                        <div style={{ marginLeft: "auto" }}>
                            <p style={{ fontWeight: "600", textAlign: "center" }}>
                                <img
                                    left
                                    width="15px"
                                    //   style={{ marginTop:'auto' , marginBottom:'auto',marginLeft:'10px',marginRight:'10px' }}
                                    //   style={{ marginButtom: "auto" }}
                                    src={"https://blackcollateral.com/wp-content/uploads//2021/05/logo-svg.svg"}
                                    alt="Card image cap"
                                />
                                 {parseFloat(communitybalance/1000000000).toFixed(3)}
                            </p>
                        </div>
                    </div>
                    <div className="d-flex  pl-3 pr-3 mt-2 mb-2">
                        <div
                            style={{
                                marginRight: "auto",
                                marginTop: "auto",
                                marginBottom: "auto",
                            }}
                        >
                            <p
                                style={{ fontWeight: "600", fontSize: "12px" }}
                                className="text-muted"
                            >
                                Pool balance
                            </p>
                        </div>
                        {/* <small className="text-site-primary font-weight-semi-bold text-uppercase">bond staked</small> */}
                        <div style={{ marginLeft: "auto" }}>
                            <p style={{ fontWeight: "600", textAlign: "center" }}>
                                <img
                                    left
                                    width="15px"
                                    //   style={{ marginTop:'auto' , marginBottom:'auto',marginLeft:'10px',marginRight:'10px' }}
                                    //   style={{ marginButtom: "auto" }}
                                    src={"https://blackcollateral.com/wp-content/uploads//2021/05/logo-svg.svg"}
                                    alt="Card image cap"
                                />
                               {parseFloat(balanceblack/1000000000).toFixed(3)}
                            </p>
                        </div>
                    </div>
                       
                    <Button  className={`ml-3 mr-3 pb-0 mb-0 mt-2 mb-2
                        `} color="site-primary" width="full" onClick={e => {history.push("/black-stake")}}>View pool</Button> 
                </Card>
            </Col>
                </>
              ):(
              <>
                        <Col xl="4" md="6" className="mb-4">
                <Card className="custom-card mt-2 mb-2 ml-0 mr-0 p-2">
                    <div className="d-flex" style={{ padding: "12px" }}>
                        <img
                            className="pool-card-image"
                            src="https://blackcollateral.com/wp-content/uploads//2021/05/logo-svg.svg"
                            alt="Card image cap"
                        />
                        {/* <small className="text-site-primary font-weight-semi-bold text-uppercase">bond staked</small> */}
                        <div
                            className=" pl-2 pr-2 align-item-center"
                            style={{
                                marginRight: "10px",
                                marginTop: "auto",
                                marginBottom: "auto",
                            }}
                        >
                            <p style={{ fontWeight: "600", margin: "auto" }}>
                                BLACK
                            </p>
                            <p className="text-danger mb-0 font-weight-bold" style={{ fontSize: '12px' }}>Epoch 25 / 25</p>
                        </div>
                        <div className="ml-auto mt-auto mb-auto"
                            style={{
                                backgroundColor: "#f8f8f9",
                                borderRadius: "20px",
                                fontWeight: "600",
                                fontSize: "14px",
                            }}><p className="font-weight-bold text-muted pt-1 pb-1 pl-3 pr-3 mb-0">ENDED</p></div>
                    </div>
                    <div style={{ padding: "12px" }}>
                        <PoolCardTabs />
                    </div>
                    <div
                        className="d-flex align-items-center m-3 p-3 "
                        style={{
                            backgroundColor: "#f8f8f9",
                            borderRadius: "5px",
                            border: "1px solid rgba(6, 10, 13, 0.1) ",
                            color: "#4f6ae6",
                            fontWeight: "600",
                            fontSize: "14px",
                        }}
                    >
                        <p className="m-0 text-muted">
                            The stablecoin staking pool ended after 25 epochs on Apr 12 2021, 00:00 UTC. Deposits are now disabled but you can still withdraw your tokens and collect any unclaimed rewards.
                        </p>
                    </div>
                    <div className="d-flex  pl-3 pr-3 mt-2 mb-2">
                        <div
                            style={{
                                marginRight: "auto",
                                marginTop: "auto",
                                marginBottom: "auto",
                            }}
                        >
                            <p
                                style={{ fontWeight: "600", fontSize: "12px" }}
                                className="text-muted"
                            >
                                Your balance
                            </p>
                        </div>
                        {/* <small className="text-site-primary font-weight-semi-bold text-uppercase">bond staked</small> */}
                        <div style={{ marginLeft: "auto" }}>
                            <p style={{ fontWeight: "600", textAlign: "center" }}>
                                -
                            </p>
                        </div>
                    </div>
                    <Button className={`ml-3 mr-3 pb-0 mb-0 mt-2 mb-2`}
                        color="site-primary" width="full" onClick={e => {history.push("/black-stake")}}>View pool</Button>
                </Card>
            </Col>
              </>
              )}    
  

        </Row>
    );
}

export default Pools;
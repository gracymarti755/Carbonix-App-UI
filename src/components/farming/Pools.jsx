import { Card, Col, Row, Button } from "reactstrap";
import PoolCardTabs from "./PoolCardTabs";
import icon from "../../assets/img/icon.PNG";
import icon1 from "../../assets/img/icon1.PNG";
import carbonstake from "../../views/carbonStake";
import { Link,useHistory } from "react-router-dom";
import cbusd from "../../views/cbusdAbi";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import black from "../../views/blackAbi";

const Pools = () => {
    const [balance,setbalan] = useState([]);
    const [communitybalance,setcommunitybalan] = useState([]);
    const bvb = async() => {
       setbalan(await cbusd.methods.balanceOf("0x3a7CD9084072c0178ED6EbACAF1926E2E9e57D43").call());       
       console.log("balan",balance);
       setcommunitybalan(await black.methods.balanceOf("0x2fa541c7457fbd89b727dfa2f3b1423c66c353dd").call());
    }
    useEffect(()=>{bvb()},[balance])

    let history=useHistory();
    return (
        <Row className="m-3 m-md-5">
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
                                cBUSD
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
                                <b>14.5%</b>
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
                                    src={icon}
                                    alt="Card image cap"
                                />
                                0.00
                               
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
                                    src={icon}
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
                                cBUSD/BUSD
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

        </Row>
    );
}

export default Pools;
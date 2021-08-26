import { useEffect } from "react";
import { useState } from "react";
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, Col, Container, Row, Table, Button } from 'reactstrap';
import icon from "../assets/img/icon.PNG";
import icon1 from "../assets/img/icon1.PNG";
import Pools from '../components/farming/Pools';
import cbusd from "./cbusdAbi";
import CustomCard from '../components/global/CustomCard';
import black from "./blackAbi";
class Dashboard extends Component {
    state={
        activeTab: "ViewPool",
        

    }
    
    setActiveTab = (tab) => {
        console.log(tab)
        this.setState({ activeTab: tab })
    }
    componentDidMount() {
        document.getElementById("header-title").innerText = "Dashboard";
    }
    state={
       
        totalsupply: ''

    }
    async componentDidMount()
    {
       const totalsupply1 = await cbusd.methods.totalSupply().call();
       const totalsupply =(parseFloat(totalsupply1/1000000000000000000).toFixed(5));
       console.log("totalsupply check",totalsupply);  
       this.setState({totalsupply});  
       console.log("totalsupply check",totalsupply);         
    } 
   
    
   
    
    render() {
        return (<>
            <Row lg="4" xs="2" className="m-5">
                <Col className="mb-4">
                    <CustomCard title="TOTAL VALUE LOCKED" text="$251,411"/>
                </Col>
                <Col className="mb-4">
                    <CustomCard title="Carbon price" text="$251,411"/>
                </Col>
                <Col className="mb-4">
                    <CustomCard title="Total borrowed" text="$251,411"/>
                </Col>
                <Col className="mb-4">
                    <CustomCard title="Total Supply" text={this.state.totalsupply}/>
                </Col>
                <Col className="mb-4">
                    <CustomCard title="Circulating Supply" text="$251,411"/>
                </Col>
            </Row>
            <div className="m-5 pl-3"><h2><b>Pools</b></h2>
                <h6 className="text-muted"><b>Overview</b></h6>
            </div>

            <Pools/>
            <Container fluid>

                <Card className="custom-card mt-4 ml-5 mr-5">
                    <div className="d-flex" style={{ padding: "12px" }}>
                        <h6 className="flex-start font-weight-bold mt-auto mb-auto pl-3">
                            Transactions
                        </h6>

                        <Button outline className="ml-auto mr-3 text-dark" color="light"
                            style={{
                                border: "1px solid rgba(6, 10, 13, 0.1) ",
                            }}>
                            All tokens<i class="fas fa-sort-down ml-2"></i>
                        </Button>
                        <Button outline className="mr-3 text-dark" color="light"
                            style={{
                                border: "1px solid rgba(6, 10, 13, 0.1) ",
                            }}>
                            All transactions<i class="fas fa-sort-down ml-2"></i>
                        </Button>
                    </div>
                    <Table className="custom-table" responsive>
                        <thead>
                            <tr>
                                <th>Transaction</th>
                                <th>Amount</th>
                                <th>Address</th>
                                <th>Transaction hash/timestamp</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <div className="d-flex">
                                        <img
                                            left
                                            width="15%"
                                            height="15%"
                                            style={{
                                                margin: "auto",
                                                marginRight: "5px",
                                                marginLeft: "5px",
                                            }}
                                            src={icon}
                                            alt="Card image cap"
                                        />
                                        <div className="pl-2 pr-2">
                                            <h6 style={{ fontWeight: "600" }}>Transaction</h6>
                                            <div
                                                className="mb-0 text-muted"
                                                style={{ fontSize: "12px", fontWeight: "600" }}
                                            >
                                                Uniswap V2
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="d-flex justify-content-left">
                                        <div className=" align-items-baseline">
                                            <h6 style={{ fontWeight: "600", color: '#00d395' }}>+0.000094533573581011 UNI-V2</h6>
                                            <div
                                                className="mb-0 text-muted"
                                                style={{ fontSize: "12px", fontWeight: "600" }}
                                            >
                                                $1,081.16
                                            </div>
                                        </div>
                                    </div>
                                </td>

                                <td style={{ verticalAlign: "middle" }}>
                                    <Link to="https://app.barnbridge.com/">
                                        <h6 style={{ fontWeight: "600" }}>0x8b3f...13b7</h6>
                                    </Link>
                                </td>
                                <td>
                                    <div className="d-flex justify-content-left">
                                        <div className=" align-items-baseline">
                                            <Link to="https://app.barnbridge.com/">
                                                <h6 style={{ fontWeight: "600" }}>0xa6aa...6acb</h6>
                                            </Link>                        <div
                                                className="mb-0 text-muted"
                                                style={{ fontSize: "12px", fontWeight: "600" }}
                                            >
                                                08.12.2021 13:06
                                            </div>
                                        </div>
                                    </div>
                                </td>

                            </tr>
                            <tr>
                                <td>
                                    <div className="d-flex">
                                        <img
                                            left
                                            width="15%"
                                            height="15%"
                                            style={{
                                                margin: "auto",
                                                marginRight: "5px",
                                                marginLeft: "5px",
                                            }}
                                            src={icon}
                                            alt="Card image cap"
                                        />
                                        <div className="pl-2 pr-2">
                                            <h6 style={{ fontWeight: "600" }}>Transaction</h6>
                                            <div
                                                className="mb-0 text-muted"
                                                style={{ fontSize: "12px", fontWeight: "600" }}
                                            >
                                                Uniswap V2
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="d-flex justify-content-left">
                                        <div className=" align-items-baseline">
                                            <h6 style={{ fontWeight: "600", color: '#00d395' }}>+0.000094533573581011 UNI-V2</h6>
                                            <div
                                                className="mb-0 text-muted"
                                                style={{ fontSize: "12px", fontWeight: "600" }}
                                            >
                                                $1,081.16
                                            </div>
                                        </div>
                                    </div>
                                </td>

                                <td style={{ verticalAlign: "middle" }}>
                                    <Link to="https://app.barnbridge.com/">
                                        <h6 style={{ fontWeight: "600" }}>0x8b3f...13b7</h6>
                                    </Link>
                                </td>
                                <td>
                                    <div className="d-flex justify-content-left">
                                        <div className=" align-items-baseline">
                                            <Link to="https://app.barnbridge.com/">
                                                <h6 style={{ fontWeight: "600" }}>0xa6aa...6acb</h6>
                                            </Link>                        <div
                                                className="mb-0 text-muted"
                                                style={{ fontSize: "12px", fontWeight: "600" }}
                                            >
                                                08.12.2021 13:06
                                            </div>
                                        </div>
                                    </div>
                                </td>

                            </tr>
                            <tr>
                                <td>
                                    <div className="d-flex">
                                        <img
                                            left
                                            width="15%"
                                            height="15%"
                                            style={{
                                                margin: "auto",
                                                marginRight: "5px",
                                                marginLeft: "5px",
                                            }}
                                            src={icon}
                                            alt="Card image cap"
                                        />
                                        <div className="pl-2 pr-2">
                                            <h6 style={{ fontWeight: "600" }}>Transaction</h6>
                                            <div
                                                className="mb-0 text-muted"
                                                style={{ fontSize: "12px", fontWeight: "600" }}
                                            >
                                                Uniswap V2
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="d-flex justify-content-left">
                                        <div className=" align-items-baseline">
                                            <h6 style={{ fontWeight: "600", color: '#00d395' }}>+0.000094533573581011 UNI-V2</h6>
                                            <div
                                                className="mb-0 text-muted"
                                                style={{ fontSize: "12px", fontWeight: "600" }}
                                            >
                                                $1,081.16
                                            </div>
                                        </div>
                                    </div>
                                </td>

                                <td style={{ verticalAlign: "middle" }}>
                                    <Link to="https://app.barnbridge.com/">
                                        <h6 style={{ fontWeight: "600" }}>0x8b3f...13b7</h6>
                                    </Link>
                                </td>
                                <td>
                                    <div className="d-flex justify-content-left">
                                        <div className=" align-items-baseline">
                                            <Link to="https://app.barnbridge.com/">
                                                <h6 style={{ fontWeight: "600" }}>0xa6aa...6acb</h6>
                                            </Link>                        <div
                                                className="mb-0 text-muted"
                                                style={{ fontSize: "12px", fontWeight: "600" }}
                                            >
                                                08.12.2021 13:06
                                            </div>
                                        </div>
                                    </div>
                                </td>

                            </tr>
                            <tr>
                                <td>
                                    <div className="d-flex">
                                        <img
                                            left
                                            width="15%"
                                            height="15%"
                                            style={{
                                                margin: "auto",
                                                marginRight: "5px",
                                                marginLeft: "5px",
                                            }}
                                            src={icon}
                                            alt="Card image cap"
                                        />
                                        <div className="pl-2 pr-2">
                                            <h6 style={{ fontWeight: "600" }}>Transaction</h6>
                                            <div
                                                className="mb-0 text-muted"
                                                style={{ fontSize: "12px", fontWeight: "600" }}
                                            >
                                                Uniswap V2
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="d-flex justify-content-left">
                                        <div className=" align-items-baseline">
                                            <h6 style={{ fontWeight: "600", color: '#00d395' }}>+0.000094533573581011 UNI-V2</h6>
                                            <div
                                                className="mb-0 text-muted"
                                                style={{ fontSize: "12px", fontWeight: "600" }}
                                            >
                                                $1,081.16
                                            </div>
                                        </div>
                                    </div>
                                </td>

                                <td style={{ verticalAlign: "middle" }}>
                                    <Link to="https://app.barnbridge.com/">
                                        <h6 style={{ fontWeight: "600" }}>0x8b3f...13b7</h6>
                                    </Link>
                                </td>
                                <td>
                                    <div className="d-flex justify-content-left">
                                        <div className=" align-items-baseline">
                                            <Link to="https://app.barnbridge.com/">
                                                <h6 style={{ fontWeight: "600" }}>0xa6aa...6acb</h6>
                                            </Link>                        <div
                                                className="mb-0 text-muted"
                                                style={{ fontSize: "12px", fontWeight: "600" }}
                                            >
                                                08.12.2021 13:06
                                            </div>
                                        </div>
                                    </div>
                                </td>

                            </tr>
                            <tr>
                                <td>
                                    <div className="d-flex">
                                        <img
                                            left
                                            width="15%"
                                            height="15%"
                                            style={{
                                                margin: "auto",
                                                marginRight: "5px",
                                                marginLeft: "5px",
                                            }}
                                            src={icon}
                                            alt="Card image cap"
                                        />
                                        <div className="pl-2 pr-2">
                                            <h6 style={{ fontWeight: "600" }}>Transaction</h6>
                                            <div
                                                className="mb-0 text-muted"
                                                style={{ fontSize: "12px", fontWeight: "600" }}
                                            >
                                                Uniswap V2
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="d-flex justify-content-left">
                                        <div className=" align-items-baseline">
                                            <h6 style={{ fontWeight: "600", color: '#00d395' }}>+0.000094533573581011 UNI-V2</h6>
                                            <div
                                                className="mb-0 text-muted"
                                                style={{ fontSize: "12px", fontWeight: "600" }}
                                            >
                                                $1,081.16
                                            </div>
                                        </div>
                                    </div>
                                </td>

                                <td style={{ verticalAlign: "middle" }}>
                                    <Link to="https://app.barnbridge.com/">
                                        <h6 style={{ fontWeight: "600" }}>0x8b3f...13b7</h6>
                                    </Link>
                                </td>
                                <td>
                                    <div className="d-flex justify-content-left">
                                        <div className=" align-items-baseline">
                                            <Link to="https://app.barnbridge.com/">
                                                <h6 style={{ fontWeight: "600" }}>0xa6aa...6acb</h6>
                                            </Link>                        <div
                                                className="mb-0 text-muted"
                                                style={{ fontSize: "12px", fontWeight: "600" }}
                                            >
                                                08.12.2021 13:06
                                            </div>
                                        </div>
                                    </div>
                                </td>

                            </tr>

                        </tbody>
                    </Table>
                    <div className="p-24 pagination-wrapper">
                        <div className="d-md-flex">
                            <small className="m-0 font-weight-bold text-muted">Showing 1 to 10 out of 28839 transactions</small>
                            <div className="d-flex pagination align-items-center mt-3 mt-md-0 ml-md-auto">
                                <i className="fa fa-angle-left"></i>
                                <span className="active">1</span>
                                <span>2</span>
                                <span>3</span>
                                <span>4</span>
                                <span>5</span>
                                <span className="mx-2">...</span>
                                <span>2884</span>
                                <i className="fa fa-angle-right"></i>
                            </div>
                        </div>
                    </div>
                </Card>

            </Container>

        </>);
    }
}
export default Dashboard;
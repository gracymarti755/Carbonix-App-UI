import { useState } from "react";
import { Link } from "react-router-dom";
import { Container,Button, Col, Row, Card, Table } from "reactstrap";
import icon from "../../assets/img/icon.PNG";
import icon1 from "../../assets/img/icon1.PNG";
import icon2 from "../../assets/img/icon2.PNG";
import icon3 from "../../assets/img/icon3.PNG";
import icon4 from "../../assets/img/icon4.PNG";
import icon5 from "../../assets/img/icon5.PNG";
import icon6 from "../../assets/img/icon6.PNG";
import icon7 from "../../assets/img/icon7.PNG";
import icon8 from "../../assets/img/icon8.PNG";

const YieldFarming = (props) => {
    let [activeTab, setActiveTab] = useState("ViewPool");
    return (
    <>
        <Row lg="4" xs="2" className="m-5">
            <Col className="mb-4">
                <Card className="custom-card p-24">
                    <small className="text-site-primary font-weight-semi-bold text-uppercase">TOTAL VALUE LOCKED</small>
                    <div className="d-flex mt-5 align-items-baseline">
                        <h3 className="font-weight-bold">$251,411,126</h3>
                    </div>
                    <p className="text-muted mb-0 pr-3">$251,379,305 effective locked</p>
                </Card>
            </Col>
            <Col className="mb-4">
                <Card className="custom-card p-24">
                    <small className="text-site-primary font-weight-semi-bold text-uppercase">BOND REWARDS</small>
                    <div className="d-flex mt-5 align-items-baseline">
                        <h3 className="font-weight-bold">1,680,000</h3>
                    </div>
                    <p className="text-muted mb-0 pr-3">out of 2,860,000</p>
                </Card>
            </Col>
            <Col className="mb-4">
                <Card className="custom-card p-24">
                    <small className="text-site-primary font-weight-semi-bold text-uppercase">BOND PRICE</small>
                    <div className="d-flex mt-5 align-items-baseline">
                        <h3 className="font-weight-bold">$26.69</h3>
                    </div>
                    <Link className="mb-0 pr-3 font-weight-bold">Uniswap market</Link>
                </Card>
            </Col>
            <Col className="mb-4">
                <Card className="custom-card p-24">
                    <small className="text-site-primary font-weight-semi-bold text-uppercase">TIME LEFT</small>
                    <div className="d-flex mt-5 align-items-baseline">
                        <h3 className="font-weight-bold">3d 14h 41m 39s</h3>
                    </div>
                    <p className="text-muted mb-0 pr-3">until next epoch</p>
                </Card>
            </Col>
        </Row>
        <div className="m-5 pl-3"><h2><b>Pools</b></h2>
        <h6 className="text-muted"><b>Overview</b></h6>
        </div>

        <Row lg="3" xs="1" className="m-5">
            <Col xs="8">
              <Card className="custom-card mt-2 mb-2 ml-0 mr-0 p-2">
                {/* <i className="fa fa-tractor"></i> */}
                <div className="d-flex" style={{ padding: "12px" }}>
                  <img
                    left
                    width="auto"
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
                      bb_cUSDC
                    </p>
                  </div>
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
                      BOND daily rewards
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
                      1,428.5714
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
                      BOND rewards left
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
                      61,458.6806
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
                      90,467,215.0188
                    </p>
                  </div>
                </div>
                <Button className={`ml-3 mr-3 pb-0 mb-0 mt-2 mb-2 ${
            activeTab == "ViewPool" ? "active" : ""
          }`}
          onClick={(e) => setActiveTab("ViewPool")} color="site-primary" width="full">View pool</Button>
              </Card>
            </Col>
            <Col xs="8">
            <Card className="custom-card mt-2 mb-2 ml-0 mr-0 p-2">
                {/* <i className="fa fa-tractor"></i> */}
                <div className="d-flex" style={{ padding: "12px" }}>
                  <img
                    left
                    width="auto"
                    style={{
                      marginTop: "auto",
                      marginBottom: "auto",
                      marginLeft: "10px",
                      marginRight: "10px",
                    }}
                    //   style={{ marginButtom: "auto" }}
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
                      bb_cUSDC
                    </p>
                    <p className="text-danger mb-0 font-weight-bold" style={{fontSize:'12px'}}>Epoch 25 / 25</p>
                  </div>
                  <div className="ml-auto mt-auto mb-auto" 
                  style={{
                      backgroundColor: "#f8f8f9",
                      borderRadius: "20px",
                      fontWeight: "600",
                      fontSize: "14px",
                    }}><p className="font-weight-bold text-muted pt-1 pb-1 pl-3 pr-3 mb-0">ENDED</p></div>
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
                <Button className={`ml-3 mr-3 pb-0 mb-0 mt-2 mb-2 ${
            activeTab == "ViewPool" ? "active" : ""
          }`}
          onClick={(e) => setActiveTab("ViewPool")} color="site-primary" width="full">View pool</Button>
              </Card>
              </Col>
          </Row>
          <Container fluid>
              
          <Card className="custom-card mt-4 ml-5 mr-5">
            <div className="d-flex" style={{ padding: "12px" }}>
              <h6 className="flex-start font-weight-bold mt-auto mb-auto pl-3">
                Transactions
              </h6>
              
              <Button outline className= "ml-auto mr-3 text-dark" color="light"
              style={{
                      border: "1px solid rgba(6, 10, 13, 0.1) ",
                    }}>
                All tokens<i class="fas fa-sort-down ml-2"></i>
              </Button>
              <Button outline className= "mr-3 text-dark" color="light"
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

export default YieldFarming;
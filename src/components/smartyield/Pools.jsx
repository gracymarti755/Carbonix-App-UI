import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  Col,
  Container,
  Row,
  Table,
  Button,
} from "reactstrap";
import icon from "../../assets/img/checkicon.PNG";

import icon0 from "../../assets/img/icon1.PNG";
import icon4 from "../../assets/img/icon4.PNG";
import icon10 from "../../assets/img/icon.PNG";
import icon9 from "../../assets/img/icon2.PNG";
import icon3 from "../../assets/img/icon3.PNG";
import PoolCardTabs from "../farming/PoolCardTabs";

const Pools = (props) => {
  let [activeTab, setActiveTab] = useState("Finance");
  let [activeTab1, setActiveTab1] = useState("null");

  return (
    <>
      <section className="p-0">
        {/* <label
          class="btn mr-3 p-3"
          style={{
            color: "black",
            backgroundColor: "white",
            borderColor: "rgb(255, 0, 131)",
          }}
          for="btncheck1"
          className={`btn mr-3 bar-item ml-0 ${
            activeTab == "BIFI" ? "active" : ""
          }`}
          onClick={(e) => setActiveTab("BIFI")}
        >
          <img
            left
            width="auto"
            className="tab-image"
            style={{
              marginTop: "auto",
              marginBottom: "auto",
              marginLeft: "0px",
              marginRight: "10px",
            }}
            //   style={{ marginButtom: "auto" }}
            src={"https://www.beefy.finance/img/beefy.svg"}
            alt="Card image cap"
          />
          BIFI{" "}
          <input
            type="checkbox"
            style={{ marginLeft: "5px" }}
            id="btncheck1"
            autocomplete="off"
          />
        </label> */}

        {/* <label
          class="btn mr-3 p-3"
          style={{
            color: "black",
            backgroundColor: "white",
            borderColor: "rgb(255, 0, 131)",
          }}
          for="btncheck2"
          className={`btn mr-3 bar-item ml-0 ${
            activeTab == "Swipe" ? "active" : ""
          }`}
          onClick={(e) => setActiveTab("Swipe")}
        >
          <img
            left
            width="auto"
            className="tab-image"
            style={{
              marginTop: "auto",
              marginBottom: "auto",
              marginLeft: "0px",
              marginRight: "10px",
            }}
            //   style={{ marginButtom: "auto" }}
            src={"https://swipe.io/images/logo.svg"}
            alt="Card image cap"
          />
          Swipe{" "}
          <input
            type="checkbox"
            style={{ marginLeft: "5px" }}
            id="btncheck2"
            autocomplete="off"
          />
        </label> */}

        <label
          class="btn mr-3"
          style={{
            color: "black",
            backgroundColor: "white",
            borderColor: "rgb(255, 0, 131)",
          }}
          for="btncheck3"
          className={`btn mr-3 bar-item ml-0 ${
            activeTab == "Finance" ? "active" : ""
          }`}
          onClick={(e) => setActiveTab("Finance")}
        >
          <img
            left
            width="auto"
            style={{
              marginTop: "auto",
              marginBottom: "auto",
              marginLeft: "0px",
              marginRight: "10px",
            }}
            //   style={{ marginButtom: "auto" }}
            src={"https://www.alpacafinance.org/assets/images/logo.png"}
            alt="Card image cap"
            className="tab-image"
          />
          Alpaca Finance{" "}
          {/* <input
            type="checkbox"
            style={{ marginLeft: "5px" }}
            id="btncheck3"
            autocomplete="off"
          /> */}
        </label>
        {activeTab == "BIFI" ? (
          <div className=" mt-5 align-items-baseline">
            <p className="ml-1 text-muted">Total value locked</p>
            <h3 className="font-weight-bold">
              $237,430,892.83{" "}
              <i class="fas fa-shield-alt" style={{ color: "#00d395" }}></i>
            </h3>
          </div>
        ) : (
          ""
        )}

        {activeTab == "BIFI" ? (
          <div
            className=" mt-4"
            // style={{hieght:'10%'}}
          >
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
                src={"https://www.beefy.finance/img/beefy.svg"}
                className='main-image'
                alt="Card image cap"
              />
              {/* <small className="text-site-primary font-weight-semi-bold text-uppercase">BLACK staked</small> */}
              <div
                className=" pl-2 pr-2 align-items-baseline"
                style={{ marginRight: "10px" }}
              >
                <p
                  style={{
                    fontWeight: "600",
                    marginTop: "auto",
                    marginBottom: "auto",
                  }}
                >
                  BIFI
                </p>
                <div
                  className="mb-0 text-muted"
                  style={{ fontSize: "12px", fontWeight: "600" }}
                >
                  Markets
                </div>
              </div>
              <div
                className="pl-2 pr-2"
                style={{ marginLeft: "10px", textAlign: "left" }}
              >
                <p
                  className="mb-0 text-muted"
                  style={{
                    fontWeight: "600",
                    fontSize: "12px",
                    textAlign: "left",
                  }}
                >
                  Total value locked
                </p>
                <p
                  className=" mb-0"
                  style={{
                    fontWeight: "600",
                    //   textAlign: "end",
                  }}
                >
                  $131,552,949.29
                </p>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
        {activeTab == "BIFI" ? (
          <Row>
            <Col xl="4" md="6">
              <Card className="custom-card m-2 p-2">
                {/* <i className="fa fa-tractor"></i> */}
                <div className="d-flex" style={{ padding: "12px" }}>
                  <img
                    className="main-image"
                    //   style={{ marginButtom: "auto" }}
                    src={icon9}
                    alt="Card image cap"
                  />
                  {/* <small className="text-site-primary font-weight-semi-bold text-uppercase">BLACK staked</small> */}
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
                    <div style={{padding:12}}>
                      <PoolCardTabs/>
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
                  {/* <small className="text-site-primary font-weight-semi-bold text-uppercase">BLACK staked</small> */}
                  <div style={{ marginLeft: "auto" }}>
                    <p
                      style={{
                        fontWeight: "600",
                        textAlign: "center",
                        border: "1px solid rgba(6, 10, 13, 0.1) ",
                        borderRadius: "20px",
                        backgroundColor: "rgba(6, 10, 13, 0.04)",
                      }}
                    >
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
                        src={icon10}
                        alt="Card image cap"
                      />
                      14.5%
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
                  {/* <small className="text-site-primary font-weight-semi-bold text-uppercase">BLACK staked</small> */}
                  <div style={{ marginLeft: "auto" }}>
                    <p style={{ fontWeight: "600", textAlign: "center" }}>
                      <img
                        left
                        width="15px"
                        //   style={{ marginTop:'auto' , marginBottom:'auto',marginLeft:'10px',marginRight:'10px' }}
                        //   style={{ marginButtom: "auto" }}
                        src={icon10}
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
                      BLACK rewards left
                    </p>
                  </div>
                  {/* <small className="text-site-primary font-weight-semi-bold text-uppercase">BLACK staked</small> */}
                  <div style={{ marginLeft: "auto" }}>
                    <p style={{ fontWeight: "600", textAlign: "center" }}>
                      <img
                        left
                        width="15px"
                        //   style={{ marginTop:'auto' , marginBottom:'auto',marginLeft:'10px',marginRight:'10px' }}
                        //   style={{ marginButtom: "auto" }}
                        src={icon10}
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
                  {/* <small className="text-site-primary font-weight-semi-bold text-uppercase">BLACK staked</small> */}
                  <div style={{ marginLeft: "auto" }}>
                    <p style={{ fontWeight: "600", textAlign: "center" }}>
                      <img
                        left
                        width="15px"
                        //   style={{ marginTop:'auto' , marginBottom:'auto',marginLeft:'10px',marginRight:'10px' }}
                        //   style={{ marginButtom: "auto" }}
                        src={icon10}
                        alt="Card image cap"
                      />
                      90,467,215.0188
                    </p>
                  </div>
                </div>
                <Button className={`ml-3 mr-3 pb-0 mb-0 mt-2 mb-2 ${
            activeTab1 == "ViewPool" ? "active" : ""
          }`}
          onClick={(e) => setActiveTab1("ViewPool")} color="site-primary" width="full">View pool</Button>
              </Card>
            </Col>
          </Row>
        ) : (
          ""
        )}

        
        {activeTab1 == "ViewPool" ? (
          <Container>
          <div className="d-flex mt-5 mb-5" style={{ padding: "12px",paddingLeft:'0px' }}>
                  <img
                    left
                    width="auto"
                    style={{
                      marginTop: "auto",
                      marginBottom: "auto",
                      marginLeft: "10px",
                      marginRight: "10px",
                    }}
                    src={icon0}
                    alt="Card image cap"
                  />
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
                
          <Card
            className="custom-card mt-4"
          >
            <div className="d-flex" style={{ padding: "12px" }}>
             
              <div
                className="pl-2 pr-2"
                style={{ marginLeft: "10px", textAlign: "left" }}
              >
                <p
                  className="mb-2 text-muted"
                  style={{
                    fontWeight: "600",
                    fontSize: "12px",
                    textAlign: "left",
                  }}
                >
                  Pool balance
                </p>
                <p
                  className=" mb-0"
                  style={{
                    fontWeight: "600",
                    //   textAlign: "end",
                  }}
                >
                <img
                    left
                    width="20px"
                    style={{
                      marginTop: "auto",
                      marginBottom: "auto",
                    }}
                    src={icon0}
                    alt="Card image cap"
                  />
                  77,868,239.3617
                </p>
              </div>

              <div
                className="pl-2 pr-2"
                style={{ marginLeft: "10px", textAlign: "left" }}
              >
                <p
                  className="mb-2 text-muted"
                  style={{
                    fontWeight: "600",
                    fontSize: "12px",
                    textAlign: "left",
                  }}
                >
                  APR
                </p>
                    <p
                      style={{
                        fontWeight: "600",
                        textAlign: "center",
                        border: "1px solid rgba(6, 10, 13, 0.1) ",
                        borderRadius: "20px",
                        backgroundColor: "rgba(6, 10, 13, 0.04)",
                      }}
                    >
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
                        src={icon10}
                        alt="Card image cap"
                      />
                      16.96%
                    </p>
              </div>

              <div
                className="pl-2 pr-2"
                style={{ marginLeft: "10px", textAlign: "left" }}
              >
                <p
                  className="mb-2 text-muted"
                  style={{
                    fontWeight: "600",
                    fontSize: "12px",
                    textAlign: "left",
                  }}
                >
                  BLACK daily rewards
                </p>
                <p
                  className=" mb-0"
                  style={{
                    fontWeight: "600",
                    //   textAlign: "end",
                  }}
                >
                <img
                    left
                    width="20px"
                    style={{
                      marginTop: "auto",
                      marginBottom: "auto",
                    }}
                    src={icon10}
                    alt="Card image cap"
                  />
                  1,428.5714
                </p>
              </div>

              <div
                className="pl-2 pr-2"
                style={{ marginLeft: "10px", textAlign: "left" }}
              >
                <p
                  className="mb-2 text-muted"
                  style={{
                    fontWeight: "600",
                    fontSize: "12px",
                    textAlign: "left",
                  }}
                >
                  BLACK rewards left
                </p>
                <p
                  className=" mb-0"
                  style={{
                    fontWeight: "600",
                    //   textAlign: "end",
                  }}
                >
                <img
                    left
                    width="20px"
                    style={{
                      marginTop: "auto",
                      marginBottom: "auto",
                      marginRight:'10px'
                    }}
                    src={icon10}
                    alt="Card image cap"
                  />
                  58,366.7328
                </p>
              </div>
            </div>
          </Card>

              
          <Card className="custom-card mt-4">
            <div className="d-flex" style={{ padding: "12px" }}>
              <h6 className="flex-start font-weight-bold mt-auto mb-auto pl-3">
                All Transactions
              </h6>
              
              <Button outline className= "ml-auto mr-3 text-dark" color="light"
              style={{
                      border: "1px solid rgba(6, 10, 13, 0.1) ",
                    }}>
                All pool transactions<i class="fas fa-sort-down ml-2"></i>
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
                    <small className="m-0 font-weight-bold text-muted"></small>
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
        ) : (
          ""
        )}

        {activeTab == "Swipe" ? (
          <div className=" mt-5 align-items-baseline">
            <p className="ml-1 text-muted">Total value locked</p>
            <h3 className="font-weight-bold">
              $237,430,892.83{" "}
              <i class="fas fa-shield-alt" style={{ color: "#00d395" }}></i>
            </h3>
          </div>
        ) : (
          ""
        )}

        {activeTab == "Swipe" ? (
          <div
            className=" mt-4"
            // style={{hieght:'10%'}}
          >
            {/* <i className="fa fa-tractor"></i> */}
            <div className="d-flex" style={{ padding: "12px" }}>
              <img
                left
                width="auto"
                className="main-image"
                style={{
                  marginTop: "auto",
                  marginBottom: "auto",
                  marginLeft: "10px",
                  marginRight: "10px",
                }}
                //   style={{ marginButtom: "auto" }}
                src={"https://swipe.io/images/logo.svg"}
                alt="Card image cap"
              />
              {/* <small className="text-site-primary font-weight-semi-bold text-uppercase">BLACK staked</small> */}
              <div
                className=" pl-2 pr-2 align-items-baseline"
                style={{ marginRight: "10px" }}
              >
                <p
                  style={{
                    fontWeight: "600",
                    marginTop: "auto",
                    marginBottom: "auto",
                  }}
                >
                  Swipe
                </p>
                <div
                  className="mb-0 text-muted"
                  style={{ fontSize: "12px", fontWeight: "600" }}
                >
                  Markets
                </div>
              </div>
              <div
                className="pl-2 pr-2"
                style={{ marginLeft: "10px", textAlign: "left" }}
              >
                <p
                  className="mb-0 text-muted"
                  style={{
                    fontWeight: "600",
                    fontSize: "12px",
                    textAlign: "left",
                  }}
                >
                  Total value locked
                </p>
                <p
                  className=" mb-0"
                  style={{
                    fontWeight: "600",
                    //   textAlign: "end",
                  }}
                >
                  $131,552,949.29
                </p>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
        {activeTab == "Swipe" ? (
          <Row>
            <Col xl="4" md="6">
              <Card className="custom-card m-2 p-2">
                {/* <i className="fa fa-tractor"></i> */}
                <div className="d-flex" style={{ padding: "12px" }}>
                  <img

                    className="main-image"
                    //   style={{ marginButtom: "auto" }}
                    src={icon3}
                    alt="Card image cap"
                  />
                  {/* <small className="text-site-primary font-weight-semi-bold text-uppercase">BLACK staked</small> */}
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
                <div style={{ padding: 12 }}>
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
                  {/* <small className="text-site-primary font-weight-semi-bold text-uppercase">BLACK staked</small> */}
                  <div style={{ marginLeft: "auto" }}>
                    <p
                      style={{
                        fontWeight: "600",
                        textAlign: "center",
                        border: "1px solid rgba(6, 10, 13, 0.1) ",
                        borderRadius: "20px",
                        backgroundColor: "rgba(6, 10, 13, 0.04)",
                      }}
                    >
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
                        src={icon10}
                        alt="Card image cap"
                      />
                      14.5%
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
                  {/* <small className="text-site-primary font-weight-semi-bold text-uppercase">BLACK staked</small> */}
                  <div style={{ marginLeft: "auto" }}>
                    <p style={{ fontWeight: "600", textAlign: "center" }}>
                      <img
                        left
                        width="15px"
                        //   style={{ marginTop:'auto' , marginBottom:'auto',marginLeft:'10px',marginRight:'10px' }}
                        //   style={{ marginButtom: "auto" }}
                        src={icon10}
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
                      BLACK rewards left
                    </p>
                  </div>
                  {/* <small className="text-site-primary font-weight-semi-bold text-uppercase">BLACK staked</small> */}
                  <div style={{ marginLeft: "auto" }}>
                    <p style={{ fontWeight: "600", textAlign: "center" }}>
                      <img
                        left
                        width="15px"
                        //   style={{ marginTop:'auto' , marginBottom:'auto',marginLeft:'10px',marginRight:'10px' }}
                        //   style={{ marginButtom: "auto" }}
                        src={icon10}
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
                  {/* <small className="text-site-primary font-weight-semi-bold text-uppercase">BLACK staked</small> */}
                  <div style={{ marginLeft: "auto" }}>
                    <p style={{ fontWeight: "600", textAlign: "center" }}>
                      <img
                        left
                        width="15px"
                        //   style={{ marginTop:'auto' , marginBottom:'auto',marginLeft:'10px',marginRight:'10px' }}
                        //   style={{ marginButtom: "auto" }}
                        src={icon10}
                        alt="Card image cap"
                      />
                      90,467,215.0188
                    </p>
                  </div>
                </div>
                <Button  className={`ml-3 mr-3 pb-0 mb-0 mt-2 mb-2 ${
            activeTab1 == "ViewPool" ? "active" : ""
          }`}
          onClick={(e) => setActiveTab1("ViewPool")} color="site-primary" width="full">View pool</Button>
              </Card>
            </Col>
          </Row>
        ) : (
          ""
        )}

        {activeTab == "Finance" ? (
          <div className=" mt-5 align-items-baseline">
            <p className="ml-1 text-muted">Total value locked</p>
            <h3 className="font-weight-bold">
              $237,430,892.83{" "}
              <i class="fas fa-shield-alt" style={{ color: "#00d395" }}></i>
            </h3>
          </div>
        ) : (
          ""
        )}

        {activeTab == "Finance" ? (
          <div
            className=" mt-4"
            // style={{hieght:'10%'}}
          >
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
                className="main-image"
                src={"https://www.alpacafinance.org/assets/images/logo.png"}
                alt="Card image cap"
              />
              {/* <small className="text-site-primary font-weight-semi-bold text-uppercase">BLACK staked</small> */}
              <div
                className=" pl-2 pr-2 align-items-baseline"
                style={{ marginRight: "10px" }}
              >
                <p
                  style={{
                    fontWeight: "600",
                    marginTop: "auto",
                    marginBottom: "auto",
                  }}
                >
                  Alpaca Finance
                </p>
                <div
                  className="mb-0 text-muted"
                  style={{ fontSize: "12px", fontWeight: "600" }}
                >
                  Markets
                </div>
              </div>
              <div
                className="pl-2 pr-2"
                style={{ marginLeft: "10px", textAlign: "left" }}
              >
                <p
                  className="mb-0 text-muted"
                  style={{
                    fontWeight: "600",
                    fontSize: "12px",
                    textAlign: "left",
                  }}
                >
                  Total value locked
                </p>
                <p
                  className=" mb-0"
                  style={{
                    fontWeight: "600",
                    //   textAlign: "end",
                  }}
                >
                  $131,552,949.29
                </p>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
        {activeTab == "Finance" ? (
          <Row>
            <Col xl="4" md="6">
              <Card className="custom-card m-2 p-2">
                {/* <i className="fa fa-tractor"></i> */}
                <div className="d-flex" style={{ padding: "12px" }}>
                  <img
                    left

                    className="main-image"
                    //   style={{ marginButtom: "auto" }}
                    src={icon4}
                    alt="Card image cap"
                  />
                  {/* <small className="text-site-primary font-weight-semi-bold text-uppercase">BLACK staked</small> */}
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
                <div style={{ padding: 12 }}>
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
                  {/* <small className="text-site-primary font-weight-semi-bold text-uppercase">BLACK staked</small> */}
                  <div style={{ marginLeft: "auto" }}>
                    <p
                      style={{
                        fontWeight: "600",
                        textAlign: "center",
                        border: "1px solid rgba(6, 10, 13, 0.1) ",
                        borderRadius: "20px",
                        backgroundColor: "rgba(6, 10, 13, 0.04)",
                      }}
                    >
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
                        src={icon10}
                        alt="Card image cap"
                      />
                      14.5%
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
                  {/* <small className="text-site-primary font-weight-semi-bold text-uppercase">BLACK staked</small> */}
                  <div style={{ marginLeft: "auto" }}>
                    <p style={{ fontWeight: "600", textAlign: "center" }}>
                      <img
                        left
                        width="15px"
                        //   style={{ marginTop:'auto' , marginBottom:'auto',marginLeft:'10px',marginRight:'10px' }}
                        //   style={{ marginButtom: "auto" }}
                        src={icon10}
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
                      BLACK rewards left
                    </p>
                  </div>
                  {/* <small className="text-site-primary font-weight-semi-bold text-uppercase">BLACK staked</small> */}
                  <div style={{ marginLeft: "auto" }}>
                    <p style={{ fontWeight: "600", textAlign: "center" }}>
                      <img
                        left
                        width="15px"
                        //   style={{ marginTop:'auto' , marginBottom:'auto',marginLeft:'10px',marginRight:'10px' }}
                        //   style={{ marginButtom: "auto" }}
                        src={icon10}
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
                  {/* <small className="text-site-primary font-weight-semi-bold text-uppercase">BLACK staked</small> */}
                  <div style={{ marginLeft: "auto" }}>
                    <p style={{ fontWeight: "600", textAlign: "center" }}>
                      <img
                        left
                        width="15px"
                        //   style={{ marginTop:'auto' , marginBottom:'auto',marginLeft:'10px',marginRight:'10px' }}
                        //   style={{ marginButtom: "auto" }}
                        src={icon10}
                        alt="Card image cap"
                      />
                      90,467,215.0188
                    </p>
                  </div>
                </div>
                <Button className={`ml-3 mr-3 pb-0 mb-0 mt-2 mb-2 ${
            activeTab1 == "ViewPool" ? "active" : ""
          }`}
          onClick={(e) => setActiveTab1("ViewPool")} color="site-primary" width="full">View pool</Button>
              </Card>
            </Col>
          </Row>
        ) : (
          ""
        )}

        
      </section>
      
    </>
  );
};

export default Pools;

import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Badge,
  Card,
  Col,
  Container,
  Progress,
  Row,
  Table,
  Button,
  ButtonGroup,
  Pagination,
  PaginationItem,
  PaginationLink,
} from "reactstrap";
import icon from "../../assets/img/checkicon.PNG";
import icon1 from "../../assets/img/checkicon1.PNG";
import icon2 from "../../assets/img/checkicon2.PNG";
import aave from "../../assets/img/aavelogo.PNG";
import compound from "../../assets/img/compoundlogo.PNG";
import finance from "../../assets/img/financelogo.PNG";
import icon4 from "../../assets/img/icon4.PNG";
import icon10 from "../../assets/img/icon.PNG";
import icon9 from "../../assets/img/icon2.PNG";
import icon3 from "../../assets/img/icon3.PNG";
import icon5 from "../../assets/img/icon5.PNG";
import icon6 from "../../assets/img/icon6.PNG";
import icon7 from "../../assets/img/icon7.PNG";
import icon8 from "../../assets/img/icon8.PNG";


const Portfolio = (props) => {
    // state = {
    //     activeTab: "Active"
    // }
    // setActiveTab = (tab) => {
    //     console.log(tab)
    //     this.setState({ activeTab: tab })
    // }
  let [activeTab, setActiveTab] = useState("Overview");
  let [activeTab1, setActiveTab1] = useState("Active");
  let [activeTab2, setActiveTab2] = useState("Active");


  return (
    <>
      <section className="p-0">
        <Row className="d-flex pl-3 pr-3">
          <label
            style={{
              color: "black",
              display: "flex",
              backgroundColor: "white",
            }}
            for="btncheck1"
            className={`btn mr-3 pt-0 pb-0  bar-item ml-0 `}
            onClick={(e) => setActiveTab("Overview")}
          >
            <i
              className="fas fa-file-invoice fa-2x mt-auto mb-auto pr-3 flex-start"
              style={{ color: "#ff0083" }}
            ></i>
            <div className="mt-auto mb-auto flex-end">
              <h6 className="mt-auto mb-auto">{activeTab == "Overview"}Overview</h6>
              <p className="m-0 p-0 text-muted" style={{ textAlign: "left" }}>
                Statistics
              </p>
            </div>{" "}
          </label>

          <label
            class="btn mr-3 pt-0 pb-0"
            style={{
              color: "black",
              display: "flex",
              backgroundColor: "white",
            }}
            for="btncheck1"
            className={`btn mr-3 bar-item ml-0 ${
              activeTab == "SeniorTranche" ? "active" : ""
            }`}
            onClick={(e) => setActiveTab("SeniorTranche")}
          >
            <i
              className="fas fa-chart-line fa-2x mt-auto mb-auto pr-3 flex-start"
              style={{ color: "#ff0083" }}
            ></i>
            <div className="mt-auto mb-auto flex-end">
              <h6 className="mt-auto mb-auto">Senior tranche</h6>
              <p className="m-0 p-0 text-muted" style={{ textAlign: "left" }}>
                Positions
              </p>
            </div>{" "}
          </label>

          <label
            class="btn mr-3 pt-0 pb-0"
            style={{
              color: "black",
              display: "flex",
              backgroundColor: "white",
            }}
            for="btncheck1"
            className={`btn mr-3 bar-item ml-0 ${
              activeTab == "JuniorTranche" ? "active" : ""
            }`}
            onClick={(e) => setActiveTab("JuniorTranche")}
          >
            <i
              className="far fa-chart-bar fa-2x mt-auto mb-auto pr-3 flex-start"
              style={{ color: "#ff0083" }}
            ></i>
            <div className="mt-auto mb-auto flex-end">
              <h6 className="mt-auto mb-auto">Junior tranche</h6>
              <p className="m-0 p-0 text-muted" style={{ textAlign: "left" }}>
                Positions
              </p>
            </div>{" "}
          </label>
        </Row>

        {activeTab == "Overview" ? (
          <Row lg="2" xs="1">
            <Col lg="5" xs="12" className="pl-2 pr-2">
              <Card className="custom-card m-2 p-2">
                <h6
                  className="mt-auto mb-auto p-3"
                  style={{ fontWeight: "600" }}
                >
                  Portfolio balance
                </h6>
                <hr className="m-0" />
                <p
                  className="mt-auto mb-auto p-3 text-muted"
                  style={{ fontWeight: "600", fontSize: "12px" }}
                >
                  Total balance{" "}
                  <h4
                    style={{
                      color: "black",
                      fontWeight: "600",
                      marginBottom: "0px",
                    }}
                  >
                    $0.00
                  </h4>
                </p>
                
                <hr className="m-0" />
                <div className="d-flex align-items-center">
                  <div style={{ width: "95%", margin: "20px auto" }}>
                    <Progress style={{ height: 7 }} color="success" value="0" />
                  </div>
                </div>
                <Row className="align-items-center pl-3" lg="2" xs="2">
                  <Col>
                    <p
                      className="senior mt-auto mb-auto p-3 text-muted"
                      style={{ fontWeight: "600", fontSize: "12px" }}
                    >
                      Senior balance{" "}
                      <h4
                        style={{
                          color: "black",
                          fontWeight: "600",
                          marginBottom: "0px",
                        }}
                      >
                        $0.00
                      </h4>
                    </p>
                  </Col>
                  <Col>
                    <p
                      className="junior mt-auto mb-auto p-3 text-muted"
                      style={{ fontWeight: "600", fontSize: "12px" }}
                    >
                      Junior balance{" "}
                      <h4
                        style={{
                          color: "black",
                          fontWeight: "600",
                          marginBottom: "0px",
                        }}
                      >
                        $0.00
                      </h4>
                    </p>
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col lg="7" xs="12" className="pl-2 pr-2">
              <Card className="custom-card m-2 p-2">
                {/* <h6
                  className="mt-auto mb-auto p-3"
                  style={{ fontWeight: "600" }}
                >
                  Portfolio value
                </h6>
                <Button outline className="ml-auto mr-3">
                  <i class="fas fa-filter"></i>Filter
                </Button>
                <hr className="m-0" /> */}
              </Card>
            </Col>
          </Row>
        ) : (
          ""
        )}

        {activeTab == "Overview" ? (
          <Card className="custom-card mt-4">
            <div className="d-flex" style={{ padding: "12px" }}>
              <h5 className="flex-start font-weight-bold mt-auto mb-auto pl-3">
                Transaction history
              </h5>
              <Button outline className="ml-auto mr-3">
                <i class="fas fa-filter"></i>Filter
              </Button>
            </div>
            <Table className="custom-table" responsive>
              <thead>
                <tr>
                  <th>Token Name </th>
                  <th>Tranche / Transaction </th>
                  <th>Amount</th>
                  <th>Transaction Hash</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="d-flex">
                      <img
                        left
                        width="25%"
                        height="25%"
                        style={{ margin: "auto" }}
                        src={icon4}
                        alt="Card image cap"
                      />
                      <div className="pl-2 pr-2 ml-auto">
                        <h5 style={{ fontWeight: "600" }}>USDT</h5>
                        <div
                          className="mb-0 text-muted"
                          style={{ fontSize: "12px", fontWeight: "600" }}
                        >
                          Tether USD
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <Link
                      to="https://app.barnbridge.com/"
                      style={{ verticalAlign: "middle" }}
                    >
                      <h6 style={{ fontWeight: "600" }}>
                        BarnBridge DAO <br />& Treasury
                      </h6>
                    </Link>
                  </td>

                  <td>
                    <div
                      className="d-flex flex-row"
                      style={{ fontWeight: "600" }}
                    >
                      <div className="align-items-baseline">
                        <h5
                          className="text-danger"
                          style={{ fontWeight: "600" }}
                        >
                          - 250,000
                        </h5>
                        <div
                          className="mb-0 "
                          style={{ fontSize: "12px", fontWeight: "600" }}
                        >
                          $250,085.37
                        </div>
                      </div>
                    </div>
                  </td>
                  <td style={{ verticalAlign: "middle" }}>
                    <Link to="https://app.barnbridge.com/">
                      <h5 style={{ fontWeight: "600" }}>0x137b...403b</h5>
                    </Link>
                  </td>

                  <td>
                    <div className="d-flex justify-content-left">
                      <div className=" align-items-baseline">
                        <h5 style={{ fontWeight: "600" }}>07.19.2021</h5>
                        <div
                          className="mb-0 text-muted"
                          style={{ fontSize: "12px", fontWeight: "600" }}
                        >
                          19:29
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </Table>

            {/* {activeTab == "active" || activeTab == "failed" ?
                <small className="text-muted text-center w-100 mb-3 d-block">No proposals</small>
                : ""} */}
          </Card>
        ) : (
          ""
        )}

        {activeTab == "SeniorTranche" ? (
          <Row lg="2 " xs="1">
            <Col lg="5" xs="12" className="pl-2 pr-2">
              <Card className="custom-card m-2 p-2">
                <h6
                  className="mt-auto mb-auto p-3"
                  style={{ fontWeight: "600" }}
                >
                  Portfolio balance
                </h6>
                <hr className="m-0" />
                <Row className="align-items-center pl-3" lg="2" xs="2">
                <Col>
                <p
                  className="mt-auto mb-auto p-3 text-muted"
                  style={{ fontWeight: "600", fontSize: "12px" }}
                >
                  Total balance{" "}
                  <h4
                    style={{
                      color: "black",
                      fontWeight: "600",
                      marginBottom: "0px",
                    }}
                  >
                    $0.00
                  </h4>
                </p>
                </Col>
                <Col>
                <p
                  className="mt-auto mb-auto ml-auto p-3 text-muted"
                  style={{ fontWeight: "600", fontSize: "12px" }}
                >
                  Aggregated APY{" "}
                  <h4
                    style={{
                      color: "#fff",
                      fontWeight: "600",
                      marginBottom: "0px",
                    }}
                  >
                    $0.00
                  </h4>
                </p>
                </Col>
                </Row>
                <hr className="m-0" />
                <div className="d-flex align-items-center">
                  <div style={{ width: "95%", margin: "20px auto" }}>
                    <Progress style={{ height: 7 }} color="success" value="0" />
                  </div>
                </div>
                <Row className="align-items-center pl-3" lg="2" xs="2">
                  <Col>
                    <p
                      className="senior mt-auto mb-auto p-3 text-muted"
                      style={{ fontWeight: "600", fontSize: "12px" }}
                    >
                      Principal{" "}
                      <h5
                        style={{
                          color: "black",
                          fontWeight: "600",
                          marginBottom: "0px",
                        }}
                      >
                        $0.00
                      </h5>
                    </p>
                  </Col>
                  <Col>
                    <p
                      className="junior mt-auto mb-auto p-3 text-muted"
                      style={{ fontWeight: "600", fontSize: "12px" }}
                    >
                      Gain{" "}
                      <h5
                        style={{
                          color: "black",
                          fontWeight: "600",
                          marginBottom: "0px",
                        }}
                      >
                        $0.00
                      </h5>
                    </p>
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col lg="7" xs="12" className="pl-2 pr-2">
              <Card className="custom-card m-2 p-2"></Card>
            </Col>
          </Row>
        ) : (
          ""
        )}

        {activeTab == "SeniorTranche" ? (
            <>
            <h3 className="font-weight-bold mt-5">Positions</h3>
        <Card className="custom-card mt-4">
            <div className="bar-items-wrapper">
                <div className="bar-items bg-site-secondary pl-5" style={{ minWidth: "470px" }}>
                    <Link to="#" className={`bar-item ml-0 ${activeTab2 == "Active" ? "active" : ""}`} onClick={e => setActiveTab2("Active")}>
                        <span >Active</span>
                    </Link>
                    <Link to="#" className={`bar-item ${activeTab2 == "Past" ? "active" : ""}`} onClick={e => setActiveTab2("Past")}>
                        <span >Past</span>
                    </Link>
                    <Button outline className="ml-auto mr-3">
                    <i class="fas fa-filter"></i>Filter
                  </Button>
                </div>
            </div>


            {activeTab2 == "Active" ?
            <Table className="custom-table" responsive>
              <thead>
                <tr>
                  <th>Token Name </th>
                  <th>Current balance</th>
                  <th>APY</th>
                  <th>Withdraw wait time</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="d-flex">
                      <img
                        left
                        width="40px"
                        height="40px"
                        style={{ marginTop: "auto",marginBottom:'auto' }}
                        src={icon4}
                        alt="Card image cap"
                      />
                      <div className="pl-2 pr-2 mr-auto">
                        <h5 style={{ fontWeight: "600" }}>USDT</h5>
                        <div
                          className="mb-0 text-muted"
                          style={{ fontSize: "12px", fontWeight: "600" }}
                        >
                          Tether USD
                        </div>
                      </div>
                    </div>
                  </td>

                  <td>
                    
                      <div className="align-items-baseline">
                        <h5
                          className="pt-auto pb-auto"
                          style={{ fontWeight: "600",verticalAlign:'middle' }}
                        >
                          $250,085.37
                        </h5>
                        
                    </div>
                  </td>
                  <td style={{ verticalAlign: "middle" }}>
                    <Link to="https://app.barnbridge.com/">
                      <h5 style={{ fontWeight: "600" }}>0x137b...403b</h5>
                    </Link>
                  </td>

                  <td>
                    <div className="d-flex justify-content-left">
                      <div className=" align-items-baseline">
                        <h5 style={{ fontWeight: "600" }}>07.19.2021</h5>
                        <div
                          className="mb-0 text-muted"
                          style={{ fontSize: "12px", fontWeight: "600" }}
                        >
                          19:29
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </Table>
            : ""}

            {activeTab2 == "Past" ?
            <Table className="custom-table" responsive>
              <thead>
                <tr>
                  <th>Token Name </th>
                  <th>Transaction hash/timestamp</th>
                  <th>Tokens in</th>
                  <th>Underlying out</th>
                  <th>Forfeits</th>
                  <th>Withdraw type</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="d-flex">
                      <img
                        left
                        width="40px"
                        height="40px"
                        style={{ marginTop: "auto",marginBottom:'auto' }}
                        src={icon4}
                        alt="Card image cap"
                      />
                      <div className="pl-2 pr-2 mr-auto">
                        <h5 style={{ fontWeight: "600" }}>USDT</h5>
                        <div
                          className="mb-0 text-muted"
                          style={{ fontSize: "12px", fontWeight: "600" }}
                        >
                          Tether USD
                        </div>
                      </div>
                    </div>
                  </td>

                  <td style={{ verticalAlign: "middle" }}>
                    <Link to="https://app.barnbridge.com/">
                      <h5 style={{ fontWeight: "600" }}>0x137b...403b</h5>
                    </Link>
                  </td>
                  
                  <td>
                    <div
                      className="d-flex flex-row"
                      style={{ fontWeight: "600" }}
                    >
                      <div className="align-items-baseline">
                        <h5
                          className="text-danger"
                          style={{ fontWeight: "600" }}
                        >
                          - 250,000
                        </h5>
                        <div
                          className="mb-0 "
                          style={{ fontSize: "12px", fontWeight: "600" }}
                        >
                          $250,085.37
                        </div>
                      </div>
                    </div>
                  </td>
                  

                  <td>
                    <div className="d-flex justify-content-left">
                      <div className=" align-items-baseline">
                        <h5 style={{ fontWeight: "600" }}>07.19.2021</h5>
                        <div
                          className="mb-0 text-muted"
                          style={{ fontSize: "12px", fontWeight: "600" }}
                        >
                          19:29
                        </div>
                      </div>
                    </div>
                  </td>
                  <td style={{ verticalAlign: "middle" }}>
                    <Link to="https://app.barnbridge.com/">
                      <h5 style={{ fontWeight: "600" }}>0x137b...403b</h5>
                    </Link>
                  </td>

                  <td>
                    <div className="d-flex justify-content-left">
                      <div className=" align-items-baseline">
                        <h5 style={{ fontWeight: "600" }}>07.19.2021</h5>
                        <div
                          className="mb-0 text-muted"
                          style={{ fontSize: "12px", fontWeight: "600" }}
                        >
                          19:29
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </Table>
            : ""}

        </Card>
            </>            
        ) : (
          ""
        )}

        
        {activeTab == "JuniorTranche" ? (
          <Row lg="2" xs="1">
            <Col lg="5" xs="12" className="pl-2 pr-2">
              <Card className="custom-card m-2 p-2">
                <h6
                  className="mt-auto mb-auto p-3"
                  style={{ fontWeight: "600" }}
                >
                  Portfolio balance
                </h6>
                <hr className="m-0" />
                <Row className="align-items-center pl-3" lg="2" xs="2">
                <Col>
                <p
                  className="mt-auto mb-auto p-3 text-muted"
                  style={{ fontWeight: "600", fontSize: "12px" }}
                >
                  Total balance{" "}
                  <h4
                    style={{
                      color: "black",
                      fontWeight: "600",
                      marginBottom: "0px",
                    }}
                  >
                    $0.00
                  </h4>
                </p>
                </Col>
                <Col>
                <p
                  className="mt-auto mb-auto ml-auto p-3 text-muted"
                  style={{ fontWeight: "600", fontSize: "12px" }}
                >
                  Aggregated APY{" "}
                  <h4
                    style={{
                      color: "#a26ee3",
                      fontWeight: "600",
                      marginBottom: "0px",
                    }}
                  >
                    0%
                  </h4>
                </p>
                </Col>
                </Row>
                <hr className="m-0" />
                <div className="d-flex align-items-center">
                  <div style={{ width: "95%", margin: "20px auto" }}>
                    <Progress style={{ height: 7 }} color="success" value="0" />
                  </div>
                </div>
                <Row className="align-items-center pl-3" lg="2" xs="2">
                  <Col>
                    <p
                      className="senior mt-auto mb-auto p-3 text-muted"
                      style={{ fontWeight: "600", fontSize: "12px" }}
                    >
                      Principal{" "}
                      <h5
                        style={{
                          color: "black",
                          fontWeight: "600",
                          marginBottom: "0px",
                        }}
                      >
                        $0.00
                      </h5>
                    </p>
                  </Col>
                  <Col>
                    <p
                      className="junior mt-auto mb-auto p-3 text-muted"
                      style={{ fontWeight: "600", fontSize: "12px" }}
                    >
                      Gain{" "}
                      <h5
                        style={{
                          color: "black",
                          fontWeight: "600",
                          marginBottom: "0px",
                        }}
                      >
                        $0.00
                      </h5>
                    </p>
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col lg="7" xs="12" className="pl-2 pr-2">
              <Card className="custom-card m-2 p-2"></Card>
            </Col>
          </Row>
        ) : (
          ""
        )}

        

        {activeTab == "JuniorTranche" ? (
            <>
            <h3 className="font-weight-bold mt-5">Positions</h3>
        <Card className="custom-card mt-4">
            <div className="bar-items-wrapper">
                <div className="bar-items bg-site-secondary pl-5" style={{ minWidth: "470px" }}>
                    <Link to="#" className={`bar-item ml-0 ${activeTab1 == "Active" ? "active" : ""}`} onClick={e => setActiveTab1("Active")}>
                        <span >Active</span>
                    </Link>
                    <Link to="#" className={`bar-item ${activeTab1 == "Staked" ? "active" : ""}`} onClick={e => setActiveTab1("Staked")}>
                        <span >Staked</span>
                    </Link>
                    <Link to="#" className={`bar-item ${activeTab1 == "Locked" ? "active" : ""}`} onClick={e => setActiveTab1("Locked")}>
                        <span >Locked</span>
                    </Link>
                    <Link to="#" className={`bar-item ${activeTab1 == "Past" ? "active" : ""}`} onClick={e => setActiveTab1("Past")}>
                        <span >Past</span>
                    </Link>
                    <Button outline className="ml-auto mr-3">
                    <i class="fas fa-filter"></i>Filter
                  </Button>
                </div>
            </div>


            {activeTab1 == "Active" ?
            <Table className="custom-table" responsive>
              <thead>
                <tr>
                  <th>Token Name </th>
                  <th>Current balance</th>
                  <th>APY</th>
                  <th>Withdraw wait time</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="d-flex">
                      <img
                        left
                        width="40px"
                        height="40px"
                        style={{ marginTop: "auto",marginBottom:'auto' }}
                        src={icon4}
                        alt="Card image cap"
                      />
                      <div className="pl-2 pr-2 mr-auto">
                        <h5 style={{ fontWeight: "600" }}>USDT</h5>
                        <div
                          className="mb-0 text-muted"
                          style={{ fontSize: "12px", fontWeight: "600" }}
                        >
                          Tether USD
                        </div>
                      </div>
                    </div>
                  </td>

                  <td>
                    
                      <div className="align-items-baseline">
                        <h5
                          className="pt-auto pb-auto"
                          style={{ fontWeight: "600",verticalAlign:'middle' }}
                        >
                          $250,085.37
                        </h5>
                        
                    </div>
                  </td>
                  <td style={{ verticalAlign: "middle" }}>
                    <Link to="https://app.barnbridge.com/">
                      <h5 style={{ fontWeight: "600" }}>0x137b...403b</h5>
                    </Link>
                  </td>

                  <td>
                    <div className="d-flex justify-content-left">
                      <div className=" align-items-baseline">
                        <h5 style={{ fontWeight: "600" }}>07.19.2021</h5>
                        <div
                          className="mb-0 text-muted"
                          style={{ fontSize: "12px", fontWeight: "600" }}
                        >
                          19:29
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </Table>
            : ""}

            {activeTab1 == "Staked" ?
            <Table className="custom-table" responsive>
              <thead>
                <tr>
                  <th>Token Name </th>
                  <th style={{textAlign:'right'}}>My pool balance</th>
                  <th>APY</th>
                  <th>My $BOND rewards</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="d-flex">
                      <img
                        left
                        width="40px"
                        height="40px"
                        style={{ marginTop: "auto",marginBottom:'auto' }}
                        src={icon4}
                        alt="Card image cap"
                      />
                      <div className="pl-2 pr-2 mr-auto">
                        <h5 style={{ fontWeight: "600" }}>USDT</h5>
                        <div
                          className="mb-0 text-muted"
                          style={{ fontSize: "12px", fontWeight: "600" }}
                        >
                          Tether USD
                        </div>
                      </div>
                    </div>
                  </td>

                  <td>
                    
                      <div className="align-items-baseline">
                        <h5
                          className="pt-auto pb-auto"
                          style={{ fontWeight: "600",verticalAlign:'middle',textAlign:'right' }}
                        >
                          $250,085.37
                        </h5>
                        
                    </div>
                  </td>
                  <td style={{ verticalAlign: "middle" }}>
                    <Link to="https://app.barnbridge.com/">
                      <h5 style={{ fontWeight: "600" }}>0x137b...403b</h5>
                    </Link>
                  </td>

                  <td>
                    <div className="d-flex justify-content-left">
                      <div className=" align-items-baseline">
                        <h5 style={{ fontWeight: "600" }}>07.19.2021</h5>
                        <div
                          className="mb-0 text-muted"
                          style={{ fontSize: "12px", fontWeight: "600" }}
                        >
                          19:29
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </Table>
            : ""}

            {activeTab1 == "Locked" ?
            <Table className="custom-table" responsive>
              <thead>
                <tr>
                  <th>Token Name </th>
                  <th>Redeemable balance</th>
                  <th>Time left</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="d-flex">
                      <img
                        left
                        width="40px"
                        height="40px"
                        style={{ marginTop: "auto",marginBottom:'auto' }}
                        src={icon4}
                        alt="Card image cap"
                      />
                      <div className="pl-2 pr-2 mr-auto">
                        <h5 style={{ fontWeight: "600" }}>USDT</h5>
                        <div
                          className="mb-0 text-muted"
                          style={{ fontSize: "12px", fontWeight: "600" }}
                        >
                          Tether USD
                        </div>
                      </div>
                    </div>
                  </td>

                  <td>
                    
                    <div className="align-items-baseline">
                      <h5
                        className="pt-auto pb-auto"
                        style={{ fontWeight: "600",verticalAlign:'middle' }}
                      >
                        $250,085.37
                      </h5>
                      
                  </div>
                  </td>

                  <td>
                    <div className="d-flex justify-content-left">
                      <div className=" align-items-baseline">
                        <h5 style={{ fontWeight: "600" }}>07.19.2021</h5>
                        <div
                          className="mb-0 text-muted"
                          style={{ fontSize: "12px", fontWeight: "600" }}
                        >
                          19:29
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    
                  </td>
                </tr>
              </tbody>
            </Table>
            : ""}

            {activeTab1 == "Past" ?
            <Table className="custom-table" responsive>
              <thead>
                <tr>
                  <th>Token Name </th>
                  <th>Transaction hash/timestamp</th>
                  <th>Tokens in</th>
                  <th>Underlying out</th>
                  <th>Forfeits</th>
                  <th>Withdraw type</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="d-flex">
                      <img
                        left
                        width="40px"
                        height="40px"
                        style={{ marginTop: "auto",marginBottom:'auto' }}
                        src={icon4}
                        alt="Card image cap"
                      />
                      <div className="pl-2 pr-2 mr-auto">
                        <h5 style={{ fontWeight: "600" }}>USDT</h5>
                        <div
                          className="mb-0 text-muted"
                          style={{ fontSize: "12px", fontWeight: "600" }}
                        >
                          Tether USD
                        </div>
                      </div>
                    </div>
                  </td>

                  <td style={{ verticalAlign: "middle" }}>
                    <Link to="https://app.barnbridge.com/">
                      <h5 style={{ fontWeight: "600" }}>0x137b...403b</h5>
                    </Link>
                  </td>

                  <td>
                    <div
                      className="d-flex flex-row"
                      style={{ fontWeight: "600" }}
                    >
                      <div className="align-items-baseline">
                        <h5
                          className="text-danger"
                          style={{ fontWeight: "600" }}
                        >
                          - 250,000
                        </h5>
                        <div
                          className="mb-0 "
                          style={{ fontSize: "12px", fontWeight: "600" }}
                        >
                          $250,085.37
                        </div>
                      </div>
                    </div>
                  </td>
                  

                  <td>
                    <div className="d-flex justify-content-left">
                      <div className=" align-items-baseline">
                        <h5 style={{ fontWeight: "600" }}>07.19.2021</h5>
                        <div
                          className="mb-0 text-muted"
                          style={{ fontSize: "12px", fontWeight: "600" }}
                        >
                          19:29
                        </div>
                      </div>
                    </div>
                  </td>
                  <td style={{ verticalAlign: "middle" }}>
                    <Link to="https://app.barnbridge.com/">
                      <h5 style={{ fontWeight: "600" }}>0x137b...403b</h5>
                    </Link>
                  </td>

                  <td>
                    <div className="d-flex justify-content-left">
                      <div className=" align-items-baseline">
                        <h5 style={{ fontWeight: "600" }}>07.19.2021</h5>
                        <div
                          className="mb-0 text-muted"
                          style={{ fontSize: "12px", fontWeight: "600" }}
                        >
                          19:29
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </Table>
            : ""}

        </Card>
            </>            
        ) : (
          ""
        )}
      </section>
    </>
  );
};

export default Portfolio;

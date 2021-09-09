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
  Pagination,
  PaginationItem,
  PaginationLink,
} from "reactstrap";
import icon from "../../assets/img/icon.PNG";
import icon1 from "../../assets/img/icon1.PNG";
import icon2 from "../../assets/img/icon2.PNG";
import icon3 from "../../assets/img/icon3.PNG";
import icon4 from "../../assets/img/icon4.PNG";
import icon5 from "../../assets/img/icon5.PNG";
import icon6 from "../../assets/img/icon6.PNG";
import icon7 from "../../assets/img/icon7.PNG";
import icon8 from "../../assets/img/icon8.PNG";


const Treasury = (props) => {
  let [activeTab, setActiveTab] = useState("Holdings");
  return (
    <>
      <Container className="p-0">
        <div className="bar-items-wrapper">
          <div
            className="bar-items bg-site-secondary pl-5"
            style={{ minWidth: "470px" }}
          >
            <Link
              to="#"
              className={`bar-item ml-0 ${
                activeTab == "Holdings" ? "active" : ""
              }`}
              onClick={(e) => setActiveTab("Holdings")}
            >
              <span>Holdings</span>
            </Link>
            <Link
              to="#"
              className={`bar-item ${activeTab == "Fees accrued" ? "active" : ""}`}
              onClick={(e) => setActiveTab("Fees accrued")}
            >
              <span>Fees accrued</span>
            </Link>
          </div>
        </div>

        {activeTab == "Holdings" ? (
          <div className=" mt-5 align-items-baseline">
            <h3 className="font-weight-bold">$71,728,303.82</h3>
            <p className="ml-1 text-muted">Total holdings balance</p>
          </div>
        ) : (
          ""
        )}
        {activeTab == "Holdings" ? (
          <Row lg="3">
            <Col lg="4" className="mb-4">
              <Card
                className="d-flex flex-row justify-content-center p-24 custom-card"
                width="400px"
              >
                {/* <i className="fa fa-tractor"></i> */}
                <img
                  left
                  width="14%"
                  style={{ margin: "auto" }}
                  src={icon}
                  alt="Card image cap"
                />
                {/* <small className="text-site-primary font-weight-semi-bold text-uppercase">bond staked</small> */}
                <div className=" m-auto pl-2 pr-2 align-items-baseline">
                  <h5 className="font-weight-bold text-uppercase">Bond</h5>
                  <div
                    className="mb-0 text-muted"
                    style={{ fontSize: "12px", fontWeight: "600" }}
                  >
                    BarnBridge
                  </div>
                  <div
                    className="mb-0 text-muted"
                    style={{ fontSize: "12px", fontWeight: "600" }}
                  >
                    Governance Token
                  </div>
                </div>
                <div className="m-auto pl-2 pr-2">
                  <p className="mb-0 font-weight-bold">3,065,400</p>
                  <p
                    className="text-muted mb-0"
                    style={{
                      fontSize: "12px",
                      fontWeight: "600",
                      textAlign: "end",
                    }}
                  >
                    $70,151,001.93
                  </p>
                </div>
              </Card>
            </Col>
            <Col lg="4" className="mb-4">
              <Card
                className="d-flex flex-row justify-content-center p-24 custom-card"
                width="400px"
              >
                {/* <i class="fas fa-donate"></i> */}
                <img
                  left
                  width="14%"
                  style={{ margin: "auto" }}
                  src={icon1}
                  alt="Card image cap"
                />
                {/* <small className="text-site-primary font-weight-semi-bold text-uppercase">bond staked</small> */}
                <div className=" m-auto pl-2 pr-2 align-items-baseline">
                  <h5 className="font-weight-bold text-uppercase">USDC</h5>
                  <div
                    className="mb-0 text-muted"
                    style={{ fontSize: "12px", fontWeight: "600" }}
                  >
                    USD Coin
                  </div>
                  {/* <div className="mb-0 text-muted" style={{fontSize:'12px', fontWeight:'600'}}>Governance Token</div> */}
                </div>
                <div className="m-auto pl-2 pr-2">
                  <p className="mb-0 font-weight-bold">1,298,357.1176</p>
                  <p
                    className="text-muted mb-0"
                    style={{
                      fontSize: "12px",
                      fontWeight: "600",
                      textAlign: "end",
                    }}
                  >
                    $1,298,208.13
                  </p>
                </div>
              </Card>
            </Col>
            <Col lg="4" className="mb-4">
              <Card
                className="d-flex flex-row justify-content-center p-24 custom-card"
                width="400px"
              >
                {/* <i className="fa fa-tractor"></i> */}
                <img
                  left
                  width="14%"
                  style={{ margin: "auto" }}
                  src={icon2}
                  alt="Card image cap"
                />
                {/* <small className="text-site-primary font-weight-semi-bold text-uppercase">bond staked</small> */}
                <div className=" m-auto pl-2 pr-2 align-items-baseline">
                  <h5 className="font-weight-bold text-uppercase">DAI</h5>
                  <div
                    className="mb-0 text-muted"
                    style={{ fontSize: "12px", fontWeight: "600" }}
                  >
                    Dai Stablecoin
                  </div>
                  {/* <div className="mb-0 text-muted" style={{fontSize:'12px', fontWeight:'600'}}>Governance Token</div> */}
                </div>
                <div className="m-auto pl-2 pr-2">
                  <p className="mb-0 font-weight-bold">165,583.6945</p>
                  <p
                    className="text-muted mb-0"
                    style={{
                      fontSize: "12px",
                      fontWeight: "600",
                      textAlign: "end",
                    }}
                  >
                    $165,726.59
                  </p>
                </div>
              </Card>
            </Col>
            <Col lg="4" className="mb-4">
              <Card
                className="d-flex flex-row justify-content-center p-24 custom-card"
                width="400px"
              >
                {/* <i className="fa fa-tractor"></i> */}
                <img
                  left
                  width="14%"
                  style={{ margin: "auto" }}
                  src={icon3}
                  alt="Card image cap"
                />
                {/* <small className="text-site-primary font-weight-semi-bold text-uppercase">bond staked</small> */}
                <div className=" m-auto pl-2 pr-2 align-items-baseline">
                  <h5 className="font-weight-bold text-uppercase">USDT</h5>
                  <div
                    className="mb-0 text-muted"
                    style={{ fontSize: "12px", fontWeight: "600" }}
                  >
                    Tether USD
                  </div>
                  {/* <div className="mb-0 text-muted" style={{fontSize:'12px', fontWeight:'600'}}>Governance Token</div> */}
                </div>
                <div className="m-auto pl-2 pr-2">
                  <p className="mb-0 font-weight-bold">74,598.7154</p>
                  <p
                    className="text-muted mb-0"
                    style={{
                      fontSize: "12px",
                      fontWeight: "600",
                      textAlign: "end",
                    }}
                  >
                    $74,624.19
                  </p>
                </div>
              </Card>
            </Col>
            <Col lg="4" className="mb-4">
              <Card
                className="d-flex flex-row justify-content-center p-24 custom-card"
                width="400px"
              >
                {/* <i className="fa fa-tractor"></i> */}
                <img
                  left
                  width="14%"
                  style={{ margin: "auto" }}
                  src={icon4}
                  alt="Card image cap"
                />
                {/* <small className="text-site-primary font-weight-semi-bold text-uppercase">bond staked</small> */}
                <div className=" m-auto pl-2 pr-2 align-items-baseline">
                  <h5 className="font-weight-bold text-uppercase">GUSD</h5>
                  <div
                    className="mb-0 text-muted"
                    style={{ fontSize: "12px", fontWeight: "600" }}
                  >
                    Gemini dollar
                  </div>
                  {/* <div className="mb-0 text-muted" style={{fontSize:'12px', fontWeight:'600'}}>Governance Token</div> */}
                </div>
                <div className="m-auto pl-2 pr-2">
                  <p className="mb-0 font-weight-bold">38,359.38</p>
                  <p
                    className="text-muted mb-0"
                    style={{
                      fontSize: "12px",
                      fontWeight: "600",
                      textAlign: "end",
                    }}
                  >
                    $38,742.97
                  </p>
                </div>
              </Card>
            </Col>
          </Row>
        ) : (
          ""
        )}

        {activeTab == "Holdings" ? (
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
                  <th>Transaction Hash</th>
                  <th>Date</th>
                  <th style={{ textAlign: "right", paddingRight: "40px" }}>
                    Amount
                  </th>
                  <th>From</th>
                  <th>To</th>
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
                        src={icon3}
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
                  <td>
                    <div
                      className="d-flex flex-row"
                      style={{ fontWeight: "600", textAlign: "right" }}
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
                    <Link
                      to="https://app.barnbridge.com/"
                      style={{ verticalAlign: "middle" }}
                    >
                      <h6 style={{ fontWeight: "600" }}>
                        BarnBridge DAO <br />& Treasury
                      </h6>
                    </Link>
                  </td>
                  <td style={{ verticalAlign: "middle", textAlign: "right" }}>
                    <Link to="https://app.barnbridge.com/">
                      <h5 style={{ fontWeight: "600", paddingRight: "20px" }}>
                        0x137b...403b
                      </h5>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex">
                      <img
                        left
                        width="25%"
                        height="25%"
                        style={{ margin: "auto" }}
                        src={icon1}
                        alt="Card image cap"
                      />
                      <div className="pl-2 pr-2 ml-auto ">
                        <h5
                          className=" text-uppercase"
                          style={{ fontWeight: "600" }}
                        >
                          USDC
                        </h5>
                        <div
                          className="mb-0 text-muted"
                          style={{ fontSize: "12px", fontWeight: "600" }}
                        >
                          USD Coin
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
                      className="d-flex"
                      style={{ fontWeight: "600", textAlign: "left" }}
                    >
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
                    <div
                      className="d-flex flex-row"
                      style={{ fontWeight: "600", textAlign: "right" }}
                    >
                      <div className="align-items-baseline">
                        <h5
                          className="text-danger"
                          style={{ fontWeight: "600" }}
                        >
                          - 350,000
                        </h5>
                        <div
                          className="mb-0 "
                          style={{ fontSize: "12px", fontWeight: "600" }}
                        >
                          $349,959.84
                        </div>
                      </div>
                    </div>
                  </td>

                  <td>
                    <Link
                      to="https://app.barnbridge.com/"
                      style={{ verticalAlign: "middle", textAlign: "left" }}
                    >
                      <h6 style={{ fontWeight: "600" }}>
                        BarnBridge DAO
                        <br /> & Treasury
                      </h6>
                    </Link>
                  </td>
                  <td style={{ verticalAlign: "middle", textAlign: "right" }}>
                    <Link to="https://app.barnbridge.com/">
                      <h5 style={{ fontWeight: "600", paddingRight: "20px" }}>
                        0x137b...403b
                      </h5>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td style={{ verticalAlign: "middle" }}>
                    <div className="d-flex">
                      <img
                        left
                        width="25%"
                        height="25%"
                        style={{ margin: "auto" }}
                        src={icon}
                        alt="Card image cap"
                      />
                      <div
                        className="pl-2 pr-2 ml-auto"
                        style={{ fontWeight: "600", textAlign: "left" }}
                      >
                        <h5
                          className="text-uppercase"
                          style={{ fontWeight: "600" }}
                        >
                          BOND
                        </h5>
                        <div
                          className="mb-0 text-muted"
                          style={{ fontSize: "12px", fontWeight: "600" }}
                        >
                          <p>
                            {" "}
                            BarnBridge <br /> Governance <br /> Token{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td style={{ verticalAlign: "middle" }}>
                    <Link to="https://app.barnbridge.com/">
                      <h5 style={{ fontWeight: "600" }}>0x137b...403b</h5>
                    </Link>
                  </td>
                  <td style={{ verticalAlign: "middle" }}>
                    <div
                      className="d-flex"
                      style={{ fontWeight: "600", textAlign: "left" }}
                    >
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
                    <div
                      className="d-flex flex-row"
                      style={{ textAlign: "right" }}
                    >
                      <div className="align-items-baseline">
                        <h5
                          className="text-danger"
                          style={{ fontWeight: "600" }}
                        >
                          - 60,000
                        </h5>
                        <div
                          className="mb-0 "
                          style={{ fontSize: "12px", fontWeight: "600" }}
                        >
                          $1,373,086.75
                        </div>
                      </div>
                    </div>
                  </td>

                  <td style={{ verticalAlign: "middle", textAlign: "left" }}>
                    <Link to="https://app.barnbridge.com/">
                      <h6 style={{ fontWeight: "600" }}>
                        BarnBridge DAO <br /> & Treasury
                      </h6>
                    </Link>
                  </td>
                  <td style={{ verticalAlign: "middle", textAlign: "right" }}>
                    <Link to="https://app.barnbridge.com/">
                      <h5 style={{ fontWeight: "600", paddingRight: "20px" }}>
                        0x137b...403b
                      </h5>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex">
                      <img
                        left
                        width="25%"
                        height="25%"
                        style={{ margin: "auto" }}
                        src={icon1}
                        alt="Card image cap"
                      />
                      <div
                        className="pl-2 pr-2 ml-auto"
                        style={{ fontWeight: "600", textAlign: "left" }}
                      >
                        <h5
                          className="text-uppercase"
                          style={{ fontWeight: "600" }}
                        >
                          USDC
                        </h5>
                        <div
                          className="mb-0 text-muted"
                          style={{ fontSize: "12px", fontWeight: "600" }}
                        >
                          USD Coin
                        </div>
                      </div>
                    </div>
                  </td>
                  <td style={{ verticalAlign: "middle" }}>
                    <Link to="https://app.barnbridge.com/">
                      <h5 style={{ fontWeight: "600" }}>0x9ebd...ac16</h5>
                    </Link>
                  </td>
                  <td>
                    <div className="d-flex" style={{ textAlign: "left" }}>
                      <div className=" align-items-baseline">
                        <h5 style={{ fontWeight: "600" }}>07.13.2021</h5>
                        <div
                          className="mb-0 text-muted"
                          style={{ fontSize: "12px", fontWeight: "600" }}
                        >
                          02:24
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div
                      className="d-flex flex-row"
                      style={{ textAlign: "right" }}
                    >
                      <div className="align-items-baseline">
                        <h5
                          className=" text-success"
                          style={{ fontWeight: "600" }}
                        >
                          + 0.0507
                        </h5>
                        <div
                          className="mb-0 "
                          style={{ fontSize: "12px", fontWeight: "600" }}
                        >
                          $0.05
                        </div>
                      </div>
                    </div>
                  </td>
                  <td style={{ verticalAlign: "middle" }}>
                    <Link to="https://app.barnbridge.com/">
                      <h5 style={{ fontWeight: "600" }}>0x2d55...a591</h5>
                    </Link>
                  </td>

                  <td style={{ verticalAlign: "middle", textAlign: "right" }}>
                    <Link to="https://app.barnbridge.com/">
                      <h6 style={{ fontWeight: "600", paddingRight: "20px" }}>
                        BarnBridge DAO <br /> & Treasury
                      </h6>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex">
                      <img
                        left
                        width="25%"
                        height="25%"
                        style={{ margin: "auto" }}
                        src={icon3}
                        alt="Card image cap"
                      />
                      <div
                        className="pl-2 pr-2 ml-auto"
                        style={{ textAlign: "left" }}
                      >
                        <h5
                          className="text-uppercase"
                          style={{ fontWeight: "600" }}
                        >
                          USDT
                        </h5>
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
                      <h5 style={{ fontWeight: "600" }}>0x37e3...b265</h5>
                    </Link>
                  </td>
                  <td>
                    <div
                      className="d-flex "
                      style={{ fontWeight: "600", textAlign: "left" }}
                    >
                      <div className=" align-items-baseline">
                        <h5 style={{ fontWeight: "600" }}>07.12.2021</h5>
                        <div
                          className="mb-0 text-muted"
                          style={{ fontSize: "12px", fontWeight: "600" }}
                        >
                          20:27
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div
                      className="d-flex flex-row"
                      style={{ textAlign: "right" }}
                    >
                      <div className="align-items-baseline">
                        <h5
                          className="text-success"
                          style={{ fontWeight: "600" }}
                        >
                          + 0.0413
                        </h5>
                        <div
                          className="mb-0 "
                          style={{ fontSize: "12px", fontWeight: "600" }}
                        >
                          $0.04
                        </div>
                      </div>
                    </div>
                  </td>

                  <td style={{ verticalAlign: "middle" }}>
                    <Link to="https://app.barnbridge.com/">
                      <h5 style={{ fontWeight: "600" }}>0x2d55...a591</h5>
                    </Link>
                  </td>
                  <td>
                    <Link
                      to="https://app.barnbridge.com/"
                      style={{ verticalAlign: "middle", textAlign: "right" }}
                    >
                      <h6 style={{ fontWeight: "600", paddingRight: "20px" }}>
                        BarnBridge DAO <br /> & Treasury
                      </h6>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex">
                      <img
                        left
                        width="25%"
                        height="25%"
                        style={{ margin: "auto" }}
                        src={icon3}
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
                  <td>
                    <div
                      className="d-flex flex-row"
                      style={{ fontWeight: "600", textAlign: "right" }}
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
                    <Link
                      to="https://app.barnbridge.com/"
                      style={{ verticalAlign: "middle" }}
                    >
                      <h6 style={{ fontWeight: "600" }}>
                        BarnBridge DAO <br />& Treasury
                      </h6>
                    </Link>
                  </td>
                  <td style={{ verticalAlign: "middle", textAlign: "right" }}>
                    <Link to="https://app.barnbridge.com/">
                      <h5 style={{ fontWeight: "600", paddingRight: "20px" }}>
                        0x137b...403b
                      </h5>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex">
                      <img
                        left
                        width="25%"
                        height="25%"
                        style={{ margin: "auto" }}
                        src={icon1}
                        alt="Card image cap"
                      />
                      <div className="pl-2 pr-2 ml-auto ">
                        <h5
                          className=" text-uppercase"
                          style={{ fontWeight: "600" }}
                        >
                          USDC
                        </h5>
                        <div
                          className="mb-0 text-muted"
                          style={{ fontSize: "12px", fontWeight: "600" }}
                        >
                          USD Coin
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
                      className="d-flex"
                      style={{ fontWeight: "600", textAlign: "left" }}
                    >
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
                    <div
                      className="d-flex flex-row"
                      style={{ fontWeight: "600", textAlign: "right" }}
                    >
                      <div className="align-items-baseline">
                        <h5
                          className="text-danger"
                          style={{ fontWeight: "600" }}
                        >
                          - 350,000
                        </h5>
                        <div
                          className="mb-0 "
                          style={{ fontSize: "12px", fontWeight: "600" }}
                        >
                          $349,959.84
                        </div>
                      </div>
                    </div>
                  </td>

                  <td>
                    <Link
                      to="https://app.barnbridge.com/"
                      style={{ verticalAlign: "middle", textAlign: "left" }}
                    >
                      <h6 style={{ fontWeight: "600" }}>
                        BarnBridge DAO
                        <br /> & Treasury
                      </h6>
                    </Link>
                  </td>
                  <td style={{ verticalAlign: "middle", textAlign: "right" }}>
                    <Link to="https://app.barnbridge.com/">
                      <h5 style={{ fontWeight: "600", paddingRight: "20px" }}>
                        0x137b...403b
                      </h5>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td style={{ verticalAlign: "middle" }}>
                    <div className="d-flex">
                      <img
                        left
                        width="25%"
                        height="25%"
                        style={{ margin: "auto" }}
                        src={icon}
                        alt="Card image cap"
                      />
                      <div
                        className="pl-2 pr-2 ml-auto"
                        style={{ fontWeight: "600", textAlign: "left" }}
                      >
                        <h5
                          className="text-uppercase"
                          style={{ fontWeight: "600" }}
                        >
                          BOND
                        </h5>
                        <div
                          className="mb-0 text-muted"
                          style={{ fontSize: "12px", fontWeight: "600" }}
                        >
                          <p>
                            {" "}
                            BarnBridge <br /> Governance <br /> Token{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td style={{ verticalAlign: "middle" }}>
                    <Link to="https://app.barnbridge.com/">
                      <h5 style={{ fontWeight: "600" }}>0x137b...403b</h5>
                    </Link>
                  </td>
                  <td style={{ verticalAlign: "middle" }}>
                    <div
                      className="d-flex"
                      style={{ fontWeight: "600", textAlign: "left" }}
                    >
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
                    <div
                      className="d-flex flex-row"
                      style={{ textAlign: "right" }}
                    >
                      <div className="align-items-baseline">
                        <h5
                          className="text-danger"
                          style={{ fontWeight: "600" }}
                        >
                          - 60,000
                        </h5>
                        <div
                          className="mb-0 "
                          style={{ fontSize: "12px", fontWeight: "600" }}
                        >
                          $1,373,086.75
                        </div>
                      </div>
                    </div>
                  </td>

                  <td style={{ verticalAlign: "middle", textAlign: "left" }}>
                    <Link to="https://app.barnbridge.com/">
                      <h6 style={{ fontWeight: "600" }}>
                        BarnBridge DAO <br /> & Treasury
                      </h6>
                    </Link>
                  </td>
                  <td style={{ verticalAlign: "middle", textAlign: "right" }}>
                    <Link to="https://app.barnbridge.com/">
                      <h5 style={{ fontWeight: "600", paddingRight: "20px" }}>
                        0x137b...403b
                      </h5>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex">
                      <img
                        left
                        width="25%"
                        height="25%"
                        style={{ margin: "auto" }}
                        src={icon1}
                        alt="Card image cap"
                      />
                      <div
                        className="pl-2 pr-2 ml-auto"
                        style={{ fontWeight: "600", textAlign: "left" }}
                      >
                        <h5
                          className="text-uppercase"
                          style={{ fontWeight: "600" }}
                        >
                          USDC
                        </h5>
                        <div
                          className="mb-0 text-muted"
                          style={{ fontSize: "12px", fontWeight: "600" }}
                        >
                          USD Coin
                        </div>
                      </div>
                    </div>
                  </td>
                  <td style={{ verticalAlign: "middle" }}>
                    <Link to="https://app.barnbridge.com/">
                      <h5 style={{ fontWeight: "600" }}>0x9ebd...ac16</h5>
                    </Link>
                  </td>
                  <td>
                    <div className="d-flex" style={{ textAlign: "left" }}>
                      <div className=" align-items-baseline">
                        <h5 style={{ fontWeight: "600" }}>07.13.2021</h5>
                        <div
                          className="mb-0 text-muted"
                          style={{ fontSize: "12px", fontWeight: "600" }}
                        >
                          02:24
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div
                      className="d-flex flex-row"
                      style={{ textAlign: "right" }}
                    >
                      <div className="align-items-baseline">
                        <h5
                          className=" text-success"
                          style={{ fontWeight: "600" }}
                        >
                          + 0.0507
                        </h5>
                        <div
                          className="mb-0 "
                          style={{ fontSize: "12px", fontWeight: "600" }}
                        >
                          $0.05
                        </div>
                      </div>
                    </div>
                  </td>
                  <td style={{ verticalAlign: "middle" }}>
                    <Link to="https://app.barnbridge.com/">
                      <h5 style={{ fontWeight: "600" }}>0x2d55...a591</h5>
                    </Link>
                  </td>

                  <td style={{ verticalAlign: "middle", textAlign: "right" }}>
                    <Link to="https://app.barnbridge.com/">
                      <h6 style={{ fontWeight: "600", paddingRight: "20px" }}>
                        BarnBridge DAO <br /> & Treasury
                      </h6>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="d-flex">
                      <img
                        left
                        width="25%"
                        height="25%"
                        style={{ margin: "auto" }}
                        src={icon3}
                        alt="Card image cap"
                      />
                      <div
                        className="pl-2 pr-2 ml-auto"
                        style={{ textAlign: "left" }}
                      >
                        <h5
                          className="text-uppercase"
                          style={{ fontWeight: "600" }}
                        >
                          USDT
                        </h5>
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
                      <h5 style={{ fontWeight: "600" }}>0x37e3...b265</h5>
                    </Link>
                  </td>
                  <td>
                    <div
                      className="d-flex "
                      style={{ fontWeight: "600", textAlign: "left" }}
                    >
                      <div className=" align-items-baseline">
                        <h5 style={{ fontWeight: "600" }}>07.12.2021</h5>
                        <div
                          className="mb-0 text-muted"
                          style={{ fontSize: "12px", fontWeight: "600" }}
                        >
                          20:27
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div
                      className="d-flex flex-row"
                      style={{ textAlign: "right" }}
                    >
                      <div className="align-items-baseline">
                        <h5
                          className="text-success"
                          style={{ fontWeight: "600" }}
                        >
                          + 0.0413
                        </h5>
                        <div
                          className="mb-0 "
                          style={{ fontSize: "12px", fontWeight: "600" }}
                        >
                          $0.04
                        </div>
                      </div>
                    </div>
                  </td>

                  <td style={{ verticalAlign: "middle" }}>
                    <Link to="https://app.barnbridge.com/">
                      <h5 style={{ fontWeight: "600" }}>0x2d55...a591</h5>
                    </Link>
                  </td>
                  <td>
                    <Link
                      to="https://app.barnbridge.com/"
                      style={{ verticalAlign: "middle", textAlign: "right" }}
                    >
                      <h6 style={{ fontWeight: "600", paddingRight: "20px" }}>
                        BarnBridge DAO <br /> & Treasury
                      </h6>
                    </Link>
                  </td>
                </tr>
              </tbody>
            </Table>
            <div className="p-24 pagination-wrapper">
                <div className="d-md-flex">
                    <small className="m-0"></small>
                    <div className="d-flex pagination align-items-center mt-3 mt-md-0 ml-md-auto">
                        <i className="fa fa-angle-left"></i>
                        <span className="active">1</span>
                        <span>2</span>
                        <span>3</span>
                        <span>4</span>
                        <span>5</span>
                        {/* <span className="mx-2">...</span>
                        <span>130</span> */}
                        <i className="fa fa-angle-right"></i>
                    </div>
                </div>
            </div>

            {/* {activeTab == "active" || activeTab == "failed" ?
                <small className="text-muted text-center w-100 mb-3 d-block">No proposals</small>
                : ""} */}
          </Card>
        ) : (
          ""
        )}
        {activeTab == "Fees accrued" ? (
          <div className=" mt-5 align-items-baseline">
            <h3 className="font-weight-bold">$225,676.90</h3>
            <p className="ml-1 text-muted">Total fees accrued</p>
          </div>
        ) : (
          ""
        )}
        {activeTab == "Fees accrued" ? (
        <Card
                className="custom-card mt-4"
                // style={{hieght:'10%'}}
              >
                {/* <i className="fa fa-tractor"></i> */}
                <div className="d-md-flex" style={{ padding: "12px" }}>
                <img
                  left
                  width="auto"
                  style={{ marginTop:'auto' , marginBottom:'auto',marginLeft:'10px',marginRight:'10px' }}
                //   style={{ marginButtom: "auto" }}
                  src={icon5}
                  alt="Card image cap"
                />
                {/* <small className="text-site-primary font-weight-semi-bold text-uppercase">bond staked</small> */}
                <div className=" pl-2 pr-2 align-items-baseline" style={{marginRight:'10px'}}>
                  <p style={{fontWeight:'600',marginTop:'auto' , marginBottom:'auto'}}>SMART Yield</p>
                  <div
                    className="mb-0 text-muted"
                    style={{ fontSize: "12px", fontWeight: "600" }}
                  >
                    Fees
                  </div>
                  
                </div>
                <div className="pl-2 pr-2" style={{marginLeft:'10px'}}>
                  <p className="mb-0 mt-3 mt-md-0 text-muted" style={{fontWeight:'600',fontSize: "12px"}}>Total fees accrued</p>
                  <p
                  className="mb-3 mb-md-0"
                    style={{
                      fontWeight: "600",
                    }}
                  >
                    $225,159.77
                  </p>
                </div>
                <Button outline className="ml-auto mr-3">
                <i class="fas fa-filter"></i>Filter
              </Button>
                </div>
              </Card>
              ) : (
          ""
        )}
            {activeTab == "Fees accrued" ? (
            <Card className="custom-card mt-4">
            <Table className="custom-table" responsive>
              <thead>
                <tr>
                  <th>Token Name </th>
                  <th>Network</th>
                  <th>
                    Amount
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="d-flex">
                      <img
                        left
                        // width="25%"
                        // height="25%"
                        style={{ margin: "auto",marginRight:'0px',marginLeft:'0px' }}
                        src={icon1}
                        alt="Card image cap"
                      />
                      <div className="pl-2 pr-2 ml-2">
                      <Link to="https://app.barnbridge.com/">
                        <h5 style={{ fontWeight: "600" ,fontSize:'16px' }}>USDC</h5>
                        </Link>
                        <div
                          className="mb-0 text-muted"
                          style={{ fontSize: "12px", fontWeight: "600" }}
                        >
                          BIFI
                        </div>
                      </div>
                    </div>
                  </td>
                  <td style={{ verticalAlign: "middle" }}>
                  <div className="d-flex" style={{verticalAlign:'middle', padding: '10px 15px',width:'140px',borderRadius:'5px', backgroundColor:'#f8f9fa'}}>
                    {/* <i class="fab fa-ethereum"></i> */}
                    <i class="fab fa-ethereum fa-lg" style={{backgroundColor:'#627eea',color:'#dde3fa', marginRight:'10px',padding:'7px', borderRadius:'5px'}}></i>
                    <p className="m-auto text-muted" style={{fontSize:'14px', fontWeight:'700'}}>Ethereum</p>
                    </div>
                  </td>
                  
                  <td>
                    <div
                      className="d-flex flex-row"
                      style={{ fontWeight: "600", textAlign: "right" }}
                    >
                      <div className="align-items-baseline">
                        <h5
                        //   className="text-danger"
                          style={{ fontWeight: "600" }}
                        >
                          8.87K
                        </h5>
                        <div
                          className="mb-0 "
                          style={{ fontSize: "12px", fontWeight: "600" }}
                        >
                          $8,868.16
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
                        // width="25%"
                        // height="25%"
                        style={{ margin: "auto",marginRight:'0px',marginLeft:'0px' }}
                        src={icon2}
                        alt="Card image cap"
                      />
                      <div className="pl-2 pr-2 ml-2">
                      <Link to="https://app.barnbridge.com/">
                        <h5 style={{ fontWeight: "600",fontSize:'16px'  }}>DAI</h5>
                        </Link>
                        <div
                          className="mb-0 text-muted"
                          style={{ fontSize: "12px", fontWeight: "600" }}
                        >
                          BIFI
                        </div>
                      </div>
                    </div>
                  </td>
                  <td style={{ verticalAlign: "middle" }}>
                  <div className="d-flex" style={{verticalAlign:'middle', padding: '10px 15px',width:'140px',borderRadius:'5px', backgroundColor:'#f8f9fa'}}>
                    {/* <i class="fab fa-ethereum"></i> */}
                    <i class="fab fa-ethereum fa-lg" style={{backgroundColor:'#627eea',color:'#dde3fa', marginRight:'10px',padding:'7px', borderRadius:'5px'}}></i>
                    <p className="m-auto text-muted" style={{fontSize:'14px', fontWeight:'700'}}>Ethereum</p>
                    </div>
                  </td>
                  
                  <td>
                    <div
                      className="d-flex flex-row"
                      style={{ fontWeight: "600", textAlign: "right" }}
                    >
                      <div className="align-items-baseline">
                        <h5
                        //   className="text-danger"
                          style={{ fontWeight: "600" }}
                        >
                          697.93
                        </h5>
                        <div
                          className="mb-0 "
                          style={{ fontSize: "12px", fontWeight: "600" }}
                        >
                          $698.41
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
                        // width="25%"
                        // height="25%"
                        style={{ margin: "auto",marginRight:'0px',marginLeft:'0px' }}
                        src={icon2}
                        alt="Card image cap"
                      />
                      <div className="pl-2 pr-2 ml-2">
                      <Link to="https://app.barnbridge.com/">
                        <h5 style={{ fontWeight: "600" ,fontSize:'16px' }}>USDC</h5>
                        </Link>
                        <div
                          className="mb-0 text-muted"
                          style={{ fontSize: "12px", fontWeight: "600" }}
                        >
                          Alpaca Finance
                        </div>
                      </div>
                    </div>
                  </td>
                  <td style={{ verticalAlign: "middle" }}>
                  <div className="d-flex" style={{verticalAlign:'middle', padding: '10px 15px',width:'140px',borderRadius:'5px', backgroundColor:'#f8f9fa'}}>
                    {/* <i class="fab fa-ethereum"></i> */}
                    <i class="fab fa-ethereum fa-lg" style={{backgroundColor:'#627eea',color:'#dde3fa', marginRight:'10px',padding:'7px', borderRadius:'5px'}}></i>
                    <p className="m-auto text-muted" style={{fontSize:'14px', fontWeight:'700'}}>Ethereum</p>
                    </div>
                  </td>
                  
                  <td>
                    <div
                      className="d-flex flex-row"
                      style={{ fontWeight: "600", textAlign: "right" }}
                    >
                      <div className="align-items-baseline">
                        <h5
                        //   className="text-danger"
                          style={{ fontWeight: "600" }}
                        >
                          3.79K
                        </h5>
                        <div
                          className="mb-0 "
                          style={{ fontSize: "12px", fontWeight: "600" }}
                        >
                          $3,793.43
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
                        // width="25%"
                        // height="25%"
                        style={{ margin: "auto",marginRight:'0px',marginLeft:'0px' }}
                        src={icon3}
                        alt="Card image cap"
                      />
                      <div className="pl-2 pr-2 ml-2">
                      <Link to="https://app.barnbridge.com/">
                        <h5 style={{ fontWeight: "600",fontSize:'16px'  }}>DAI</h5>
                        </Link>
                        <div
                          className="mb-0 text-muted"
                          style={{ fontSize: "12px", fontWeight: "600" }}
                        >
                          BIFI
                        </div>
                      </div>
                    </div>
                  </td>
                  <td style={{ verticalAlign: "middle" }}>
                    <div className="d-flex" style={{verticalAlign:'middle', padding: '10px 15px',width:'140px',borderRadius:'5px', backgroundColor:'#f8f9fa'}}>
                    {/* <i class="fas fa-infinity"></i> */}
                    <i class="fas fa-link fa-rotate-90" style={{backgroundColor:'rgb(130, 71, 229)',color:'#fff', marginRight:'10px',padding:'7px', borderRadius:'5px'}}></i>
                    <p className="m-auto text-muted" style={{fontSize:'14px', fontWeight:'700'}}>Polygon</p>
                    </div>
                  </td>
                  
                  <td>
                    <div
                      className="d-flex flex-row"
                      style={{ fontWeight: "600", textAlign: "right" }}
                    >
                      <div className="align-items-baseline">
                        <h5
                        //   className="text-danger"
                          style={{ fontWeight: "600" }}
                        >
                          697.93
                        </h5>
                        <div
                          className="mb-0 "
                          style={{ fontSize: "12px", fontWeight: "600" }}
                        >
                          $698.41
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
                        // width="25%"
                        // height="25%"
                        style={{ margin: "auto",marginRight:'0px',marginLeft:'0px' }}
                        src={icon4}
                        alt="Card image cap"
                      />
                      <div className="pl-2 pr-2 ml-2">
                      <Link to="https://app.barnbridge.com/">
                        <h5 style={{ fontWeight: '600',fontSize:'16px' }}>USDC</h5>
                        </Link>
                        <div
                          className="mb-0 text-muted"
                          style={{ fontSize: "12px", fontWeight: "600" }}
                        >
                          Swipe
                        </div>
                      </div>
                    </div>
                  </td>
                  <td style={{ verticalAlign: "middle" }}>
                  <div className="d-flex" style={{verticalAlign:'middle', padding: '10px 15px',width:'140px',borderRadius:'5px', backgroundColor:'#f8f9fa'}}>
                    {/* <i class="fab fa-ethereum"></i> */}
                    <i class="fab fa-ethereum fa-lg" style={{backgroundColor:'#627eea',color:'#dde3fa', marginRight:'10px',padding:'7px', borderRadius:'5px'}}></i>
                    <p className="m-auto text-muted"  style={{fontSize:'14px', fontWeight:'700'}}>Ethereum</p>
                    </div>
                  </td>
                  
                  <td>
                    <div
                      className="d-flex flex-row"
                      style={{ fontWeight: "600", textAlign: "right" }}
                    >
                      <div className="align-items-baseline">
                        <h5
                        //   className="text-danger"
                          style={{ fontWeight: "600" }}
                        >
                          3.79K
                        </h5>
                        <div
                          className="mb-0 "
                          style={{ fontSize: "12px", fontWeight: "600" }}
                        >
                          $3,793.43
                        </div>
                      </div>
                    </div>
                  </td>
                  
                </tr>

          </tbody>
            </Table>

          </Card>
        ) : (
          ""
        )}

        {activeTab == "Fees accrued" ? (
        <Card
                className="custom-card mt-4"
                // style={{hieght:'10%'}}
              >
                {/* <i className="fa fa-tractor"></i> */}
                <div className="d-md-flex" style={{ padding: "12px" }}>
                <img
                  left
                  width="auto"
                  style={{ marginTop:'auto' , marginBottom:'auto',marginLeft:'10px',marginRight:'10px' }}
                //   style={{ marginButtom: "auto" }}
                  src={icon6}
                  alt="Card image cap"
                />
                {/* <small className="text-site-primary font-weight-semi-bold text-uppercase">bond staked</small> */}
                <div className=" pl-2 pr-2 align-items-baseline" style={{marginRight:'10px'}}>
                  <p style={{fontWeight:'600',marginTop:'auto' , marginBottom:'auto'}}>SMART Exposure</p>
                  <div
                    className="mb-0 text-muted"
                    style={{ fontSize: "12px", fontWeight: "600" }}
                  >
                    Fees
                  </div>
                  
                </div>
                <div className="pl-2 pr-2" style={{marginLeft:'10px',textAlign:'left'}}>
                  <p className="mb-0 mt-3 mt-md-0 text-muted" style={{fontWeight:'600',fontSize: "12px",textAlign:'left'}}>Total fees accrued</p>
                  <p
                    className=" mb-3 mb-md-0"
                    style={{
                      fontWeight: "600",
                    //   textAlign: "end",
                    }}
                  >
                    $438.16
                  </p>
                </div>
                <Button outline className="ml-auto mr-3">
                <i class="fas fa-filter"></i>Filter
              </Button>
                </div>
              </Card>
              ) : (
          ""
        )}
            {activeTab == "Fees accrued" ? (
            <Card className="custom-card mt-4">
            <Table className="custom-table" responsive>
              <thead>
                <tr>
                  <th>Token Name </th>
                  <th>Network</th>
                  <th>Token A amount</th>
                  <th>Token B amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="d-flex">
                      <img
                        left
                        // width="25%"
                        // height="25%"
                        style={{ margin: "auto",marginRight:'0px',marginLeft:'0px' }}
                        src={icon7}
                        alt="Card image cap"
                      />
                      <div className="pl-2 pr-2 ml-2">
                      <Link to="https://app.barnbridge.com/">
                        <h5 style={{ fontWeight: "600",fontSize:'16px' }}>WETH/USDC</h5>
                        </Link>
                        <div
                          className="mb-0"
                          style={{ fontSize: "12px", fontWeight: "600" }}
                        >
                          WETH – USDC
                        </div>
                      </div>
                    </div>
                  </td>
                  <td style={{ verticalAlign: "middle" }}>
                  <div className="d-flex" style={{verticalAlign:'middle', padding: '10px 15px',width:'140px',borderRadius:'5px', backgroundColor:'#f8f9fa'}}>
                    {/* <i class="fab fa-ethereum"></i> */}
                    <i class="fab fa-ethereum fa-lg" style={{backgroundColor:'#627eea',color:'#dde3fa', marginRight:'10px',padding:'7px', borderRadius:'5px'}}></i>
                    <p className="m-auto text-muted" style={{fontSize:'14px', fontWeight:'700'}}>Ethereum</p>
                    </div>
                  </td>
                  
                  <td>
                    <div
                      className="d-flex flex-row"
                      style={{ fontWeight: "600", textAlign: "right" }}
                    >
                      <div className="align-items-baseline">
                        <h5
                        //   className="text-danger"
                          style={{ fontWeight: "600" }}
                        >
                          8.87K
                        </h5>
                        <div
                          className="mb-0 "
                          style={{ fontSize: "12px", fontWeight: "600" }}
                        >
                          $8,868.16
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div
                      className="d-flex flex-row"
                      style={{ fontWeight: "600", textAlign: "right" }}
                    >
                      <div className="align-items-baseline">
                        <h5
                        //   className="text-danger"
                          style={{ fontWeight: "600" }}
                        >
                          8.87K
                        </h5>
                        <div
                          className="mb-0 "
                          style={{ fontSize: "12px", fontWeight: "600" }}
                        >
                          $8,868.16
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
                        // width="25%"
                        // height="25%"
                        style={{ margin: "auto",marginRight:'0px',marginLeft:'0px' }}
                        src={icon8}
                        alt="Card image cap"
                      />
                      <div className="pl-2 pr-2 ml-2">
                      <Link to="https://app.barnbridge.com/">
                        <h5 style={{ fontWeight: "600" ,fontSize:'16px'}}>WETH/WBTC</h5>
                        </Link>
                        <div
                          className="mb-0"
                          style={{ fontSize: "12px", fontWeight: "600" }}
                        >
                          WETH – WBTC
                        </div>
                      </div>
                    </div>
                  </td>
                  <td style={{ verticalAlign: "middle" }}>
                  <div className="d-flex" style={{verticalAlign:'middle', padding: '10px 15px',width:'140px',borderRadius:'5px', backgroundColor:'#f8f9fa'}}>
                    {/* <i class="fab fa-ethereum"></i> */}
                    <i class="fab fa-ethereum fa-lg" style={{backgroundColor:'#627eea',color:'#dde3fa', marginRight:'10px',padding:'7px', borderRadius:'5px'}}></i>
                    <p className="m-auto text-muted" style={{fontSize:'14px', fontWeight:'700'}}>Ethereum</p>
                    </div>
                  </td>
                  
                  <td>
                    <div
                      className="d-flex flex-row"
                      style={{ fontWeight: "600", textAlign: "right" }}
                    >
                      <div className="align-items-baseline">
                        <h5
                        //   className="text-danger"
                          style={{ fontWeight: "600" }}
                        >
                          697.93
                        </h5>
                        <div
                          className="mb-0 "
                          style={{ fontSize: "12px", fontWeight: "600" }}
                        >
                          $698.41
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div
                      className="d-flex flex-row"
                      style={{ fontWeight: "600", textAlign: "right" }}
                    >
                      <div className="align-items-baseline">
                        <h5
                        //   className="text-danger"
                          style={{ fontWeight: "600" }}
                        >
                          697.93
                        </h5>
                        <div
                          className="mb-0 "
                          style={{ fontSize: "12px", fontWeight: "600" }}
                        >
                          $698.41
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
                        // width="25%"
                        // height="25%"
                        style={{ margin: "auto",marginRight:'0px',marginLeft:'0px' }}
                        src={icon7}
                        alt="Card image cap"
                      />
                      <div className="pl-2 pr-2 ml-2">
                      <Link to="https://app.barnbridge.com/">
                        <h5 style={{ fontWeight: "600",fontSize:'16px' }}>WETH/USDC</h5>
                        </Link>
                        <div
                          className="mb-0"
                          style={{ fontSize: "12px", fontWeight: "600" }}
                        >
                          WETH/USDC
                        </div>
                      </div>
                    </div>
                  </td>
                  <td style={{ verticalAlign: "middle" }}>
                  <div className="d-flex" style={{verticalAlign:'middle', padding: '10px 15px',width:'140px',borderRadius:'5px', backgroundColor:'#f8f9fa'}}>
                    {/* <i class="fab fa-ethereum"></i> */}
                    <i class="fab fa-ethereum fa-lg" style={{backgroundColor:'#627eea',color:'#dde3fa', marginRight:'10px',padding:'7px', borderRadius:'5px'}}></i>
                    <p className="m-auto text-muted" style={{fontSize:'14px', fontWeight:'700'}}>Ethereum</p>
                    </div>
                  </td>
                  
                  <td>
                    <div
                      className="d-flex flex-row"
                      style={{ fontWeight: "600", textAlign: "right" }}
                    >
                      <div className="align-items-baseline">
                        <h5
                        //   className="text-danger"
                          style={{ fontWeight: "600" }}
                        >
                          3.79K
                        </h5>
                        <div
                          className="mb-0 "
                          style={{ fontSize: "12px", fontWeight: "600" }}
                        >
                          $3,793.43
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div
                      className="d-flex flex-row"
                      style={{ fontWeight: "600", textAlign: "right" }}
                    >
                      <div className="align-items-baseline">
                        <h5
                        //   className="text-danger"
                          style={{ fontWeight: "600" }}
                        >
                          3.79K
                        </h5>
                        <div
                          className="mb-0 "
                          style={{ fontSize: "12px", fontWeight: "600" }}
                        >
                          $3,793.43
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
                        // width="25%"
                        // height="25%"
                        style={{ margin: "auto",marginRight:'0px',marginLeft:'0px' }}
                        src={icon8}
                        alt="Card image cap"
                      />
                      <div className="pl-2 pr-2 ml-2">
                      <Link to="https://app.barnbridge.com/">
                        <h5 style={{ fontWeight: "600" ,fontSize:'16px'}}>WETH/WBTC</h5>
                        </Link>
                        <div
                          className="mb-0"
                          style={{ fontSize: "12px", fontWeight: "600" }}
                        >
                          WETH - WBTC
                        </div>
                      </div>
                    </div>
                  </td>
                  <td style={{ verticalAlign: "middle" }}>
                    <div className="d-flex" style={{verticalAlign:'middle', padding: '10px 15px',width:'140px',borderRadius:'5px', backgroundColor:'#f8f9fa'}}>
                    {/* <i class="fas fa-infinity"></i> */}
                    <i class="fas fa-link fa-rotate-90" style={{backgroundColor:'rgb(130, 71, 229)',color:'#fff', marginRight:'10px',padding:'7px', borderRadius:'5px'}}></i>
                    <p className="m-auto text-muted" style={{fontSize:'14px', fontWeight:'700'}}>Polygon</p>
                    </div>
                  </td>
                  
                  <td>
                    <div
                      className="d-flex flex-row"
                      style={{ fontWeight: "600", textAlign: "right" }}
                    >
                      <div className="align-items-baseline">
                        <h5
                        //   className="text-danger"
                          style={{ fontWeight: "600" }}
                        >
                          697.93
                        </h5>
                        <div
                          className="mb-0 "
                          style={{ fontSize: "12px", fontWeight: "600" }}
                        >
                          $698.41
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div
                      className="d-flex flex-row"
                      style={{ fontWeight: "600", textAlign: "right" }}
                    >
                      <div className="align-items-baseline">
                        <h5
                        //   className="text-danger"
                          style={{ fontWeight: "600" }}
                        >
                          697.93
                        </h5>
                        <div
                          className="mb-0 "
                          style={{ fontSize: "12px", fontWeight: "600" }}
                        >
                          $698.41
                        </div>
                      </div>
                    </div>
                  </td>                  
                </tr>

          </tbody>
            </Table>

          </Card>
        ) : (
          ""
        )}
      </Container>
    </>
  );
};

export default Treasury;

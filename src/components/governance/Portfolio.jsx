import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row,
  Button,
  CustomInput,
} from "reactstrap";
import icon10 from "../../assets/img/icon.PNG";

const Portfolio = (props) => {
  let [activeTab, setActiveTab] = useState("Deposit");
  let [activeTab1, setActiveTab1] = useState("Mvoting");
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <section className="p-0">
        <Row lg="1" xs="1">
          <Col xl="6" lg="8" xs="12" className="pl-2 pr-2 m-auto">
            <h3 className="font-weight-bold ml-2 mt-4 mb-4">Portfolio</h3>
            <Card className="custom-card">
              <div className="bar-items-wrapper">
                <div
                  className="bar-items bg-site-secondary pl-3"
                  style={{ minWidth: "470px" }}
                >
                  <Link
                    to="#"
                    className={`bar-item ml-0 ${
                      activeTab == "Deposit" ? "active" : ""
                    }`}
                    onClick={(e) => setActiveTab("Deposit")}
                  >
                    <span>Deposit</span>
                  </Link>
                  <Link
                    to="#"
                    className={`bar-item ${
                      activeTab == "Lock" ? "active" : ""
                    }`}
                    onClick={(e) => setActiveTab("Lock")}
                  >
                    <span>Lock</span>
                  </Link>
                  <Link
                    to="#"
                    className={`bar-item ${
                      activeTab == "Delegate" ? "active" : ""
                    }`}
                    onClick={(e) => setActiveTab("Delegate")}
                  >
                    <span>Delegate</span>
                  </Link>
                  <Link
                    to="#"
                    className={`bar-item ${
                      activeTab == "Withdraw" ? "active" : ""
                    }`}
                    onClick={(e) => setActiveTab("Withdraw")}
                  >
                    <span>Withdraw</span>
                  </Link>
                </div>
              </div>

              {activeTab == "Deposit" ? (
                <div
                  className="d-flex align-items-center m-3 pt-2 pb-2 pl-3 "
                  style={{ backgroundColor: "#f8f8f9", borderRadius: "10px" }}
                >
                  <div>
                    <p
                      className="mt-auto mb-auto p-3 text-muted"
                      style={{ fontWeight: "600", fontSize: "12px" }}
                    >
                      Portfolio balance{" "}
                      <h4
                        style={{
                          color: "black",
                          fontWeight: "600",
                          marginBottom: "0px",
                        }}
                      >
                        0
                      </h4>
                    </p>
                  </div>
                  <div>
                    <p
                      className="mt-auto mb-auto ml-auto p-3 text-muted"
                      style={{ fontWeight: "600", fontSize: "12px" }}
                    >
                      Wallet balance{" "}
                      <h4
                        style={{
                          color: "#a26ee3",
                          fontWeight: "600",
                          marginBottom: "0px",
                        }}
                      >
                        0
                      </h4>
                    </p>
                  </div>
                </div>
              ) : (
                ""
              )}
              {activeTab == "Deposit" ? (
                <Form
                  onSubmit={(e) => {
                    this.handleSubmit(e);
                  }}
                >
                  <FormGroup className="mb-4 position-relative">
                    <Label for="exampleName" className="text-muted ml-3">
                      <small>
                        <b>Amount</b>
                      </small>
                    </Label>
                    <InputGroup className="ml-3 mr-3" style={{ width: "auto" }}>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText
                          style={{
                            color: "rgb(209, 209, 209)",
                            backgroundColor: "white",
                          }}
                        >
                          <img
                            left
                            width="100%"
                            style={{ margin: "auto" }}
                            src={icon10}
                            className="pt-2 pb-2"
                            alt="Card image cap"
                          />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        // required
                        // className="p-2"
                        style={{ paddingBottom: "35px", paddingTop: "35px" }}
                        type="numeric"
                        name="text"
                        id="exampleName"
                      />
                    </InputGroup>
                  </FormGroup>
                  <div
                    className="d-flex align-items-center m-3 p-3 "
                    style={{
                      backgroundColor: "#f8f8f9",
                      borderRadius: "5px",
                      border: "1px solid #4f6ae6",
                      color: "#4f6ae6",
                      fontWeight: "600",
                      fontSize: "12px",
                    }}
                  >
                    <i class="fas fa-info-circle fa-2x mr-2"></i>
                    <p className="m-0">
                      Deposits made after you have an ongoing lock will be added
                      to the locked balance and will be subjected to the same
                      lock timer.
                    </p>
                  </div>
                  <div className="d-flex">
                    <Button
                      type="submit"
                      className="ml-auto pb-0 mb-0 mt-3 mb-3"
                      color="site-primary"
                    >
                      Enable BOND
                    </Button>
                    <Button
                      type="submit"
                      className="ml-3 mr-3 pb-0 mb-0 mt-3 mb-3 text-muted"
                      color="light"
                    >
                      Deposit
                    </Button>
                  </div>
                </Form>
              ) : (
                ""
              )}
              {activeTab == "Lock" ? (
                <div
                  className="d-flex align-items-center m-3 pt-2 pb-2 pl-3 "
                  style={{ backgroundColor: "#f8f8f9", borderRadius: "10px" }}
                >
                  <div>
                    <p
                      className="mt-auto mb-auto p-3 text-muted"
                      style={{ fontWeight: "600", fontSize: "12px" }}
                    >
                      Portfolio balance{" "}
                      <h5
                        style={{
                          color: "black",
                          fontWeight: "600",
                          marginBottom: "0px",
                        }}
                      >
                        0
                      </h5>
                    </p>
                  </div>
                  <div>
                    <p
                      className="mt-auto mb-auto ml-auto p-3 text-muted"
                      style={{ fontWeight: "600", fontSize: "12px" }}
                    >
                      Lock duration{" "}
                      <h5
                        style={{
                          color: "#a26ee3",
                          fontWeight: "600",
                          marginBottom: "0px",
                        }}
                      >
                        0
                      </h5>
                    </p>
                  </div>
                </div>
              ) : (
                ""
              )}
              {activeTab == "Lock" ? (
                <Form
                  onSubmit={(e) => {
                    this.handleSubmit(e);
                  }}
                >
                  <FormGroup className="mb-4 position-relative">
                    <Label for="exampleDate" className="text-muted ml-3">
                      <small>
                        <b>Lock end date</b>
                      </small>
                    </Label>
                    <InputGroup className="ml-3 mr-3" style={{ width: "auto" }}>
                      <Input
                        className="pt-4 pb-4"
                        type="date"
                        name="date"
                        id="exampleDate"
                        placeholder="Select date"
                      />
                    </InputGroup>
                  </FormGroup>
                  <Row lg="5" xs="3" className="m-0">
                    <Col>
                      <Button color="outline-site-primary">1w</Button>
                    </Col>
                    <Col>
                      <Button color="outline-site-primary">1mo</Button>
                    </Col>
                    <Col>
                      <Button color="outline-site-primary">3mo</Button>
                    </Col>
                    <Col>
                      <Button color="outline-site-primary">6mo</Button>
                    </Col>
                    <Col>
                      <Button color="outline-site-primary">1yr</Button>
                    </Col>
                  </Row>
                  <div
                    className="d-flex align-items-center m-3 p-3 "
                    style={{
                      backgroundColor: "#f8f8f9",
                      borderRadius: "5px",
                      border: "1px solid #4f6ae6",
                      color: "#4f6ae6",
                      fontWeight: "600",
                      fontSize: "12px",
                    }}
                  >
                    <i class="fas fa-info-circle fa-2x mr-2"></i>
                    <p className="m-0">
                      All locked balances will be unavailable for withdrawal
                      until the lock timer ends. All future deposits will be
                      locked for the same time.
                    </p>
                  </div>
                  <div className="d-flex">
                    <Button
                      type="submit"
                      className="ml-auto mr-3 pb-0 mb-0 mt-3 mb-3 text-muted"
                      color="light"
                    >
                      Lock
                    </Button>
                  </div>
                </Form>
              ) : (
                ""
              )}
              {activeTab == "Delegate" ? (
                <div
                  className="d-flex align-items-center m-3 pt-2 pb-2 pl-3 "
                  style={{ backgroundColor: "#f8f8f9", borderRadius: "10px" }}
                >
                  <div>
                    <p
                      className="mt-auto mb-auto p-3 text-muted"
                      style={{ fontWeight: "600", fontSize: "12px" }}
                    >
                      Current voting type{" "}
                      <h6
                        style={{
                          color: "black",
                          fontWeight: "600",
                          marginBottom: "0px",
                        }}
                      >
                        Manual voting
                      </h6>
                    </p>
                  </div>
                </div>
              ) : (
                ""
              )}
              {activeTab == "Delegate" ? (
                <>  
                  <label
                    for="exampleCustomRadio"
                    className={`d-flex btnD mr-3 ml-3 bar-item ml-0 ${
                      activeTab1 == "Mvoting" ? "active" : ""
                    }`}
                    onClick={(e) => setActiveTab1("Mvoting")}
                  >
                    Manual voting
                    <CustomInput
                      type="radio"
                      id="exampleCustomRadio"
                      name="customRadio"
                      className="flex-end"
                      active
                    />
                  </label>
                  <label
                    for="exampleCustomRadio2"
                    className={`d-flex btnD mr-3 ml-3 bar-item ml-0 ${
                      activeTab1 == "Dvoting" ? "active" : ""
                    }`}
                    onClick={(e) => setActiveTab1("Dvoting")}
                  >
                    Delegate voting{" "}
                    <CustomInput
                      type="radio"
                      style={{ paddingLeft:'auto' }}
                      id="exampleCustomRadio2"
                      name="customRadio"
                    />
                  </label>

                  {activeTab1 == "Mvoting" ? (
                    <div>
                    ...
                  <div
                    className="d-flex align-items-center m-3 p-3 "
                    style={{
                      backgroundColor: "#f8f8f9",
                      borderRadius: "5px",
                      border: "1px solid #4f6ae6",
                      color: "#4f6ae6",
                      fontWeight: "600",
                      fontSize: "12px",
                    }}
                  >
                    <i class="fas fa-info-circle fa-2x mr-2"></i>
                    <p className="m-0">
                    Delegating your voting power to this address means that they will be able to vote in your place. You can’t delegate the voting bonus, only the staked balance.
                    </p>
                  </div>
                  <div className="d-flex">
                    <Button
                      type="submit"
                      className="ml-auto mr-3 pb-0 mb-0 mt-3 mb-3 text-muted"
                      color="light"
                    >
                      Stop Delegate
                    </Button>
                  </div>
                </div>
              ) : (
                ""
              )}
              {activeTab1 == "Dvoting" ? (
                <Form
                  onSubmit={(e) => {
                    this.handleSubmit(e);
                  }}
                >
                  <FormGroup className="mb-4 position-relative">
                    <Label for="exampleName" className="text-muted ml-3">
                      <small>
                        <b>Address</b>
                      </small>
                    </Label>
                    <InputGroup className="ml-3 mr-3" style={{ width: "auto" }}>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText
                          style={{
                            color: "rgb(209, 209, 209)",
                            backgroundColor: "white",
                            padding:'25px'
                          }}
                        >
                        
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        // required
                        // className="p-2"
                        style={{ paddingBottom: "35px", paddingTop: "35px" }}
                        type="string"
                        name="text"
                        id="exampleName"
                      />
                    </InputGroup>
                  </FormGroup>
                  <div
                    className="d-flex align-items-center m-3 p-3 "
                    style={{
                      backgroundColor: "#f8f8f9",
                      borderRadius: "5px",
                      border: "1px solid #4f6ae6",
                      color: "#4f6ae6",
                      fontWeight: "600",
                      fontSize: "12px",
                    }}
                  >
                    <i class="fas fa-info-circle fa-2x mr-2"></i>
                    <p className="m-0">
                    Delegating your voting power to this address means that they will be able to vote in your place. You can’t delegate the voting bonus, only the staked balance.
                    </p>
                  </div>
                  <div className="d-flex">
                    
                    <Button
                      type="submit"
                      className="ml-auto mr-3 pb-0 mb-0 mt-3 mb-3 text-muted"
                      color="light"
                    >
                      Delegate
                    </Button>
                  </div>
                </Form>
              ) : (
                ""
              )}
                </>
              ) : (
                ""
              )}
              {activeTab == "Withdraw" ? (
                <div
                  className="d-flex align-items-center m-3 pt-2 pb-2 pl-3 "
                  style={{ backgroundColor: "#f8f8f9", borderRadius: "10px" }}
                >
                  <div>
                    <p
                      className="mt-auto mb-auto p-3 text-muted"
                      style={{ fontWeight: "600", fontSize: "12px" }}
                    >
                      Portfolio balance{" "}
                      <h4
                        style={{
                          color: "black",
                          fontWeight: "600",
                          marginBottom: "0px",
                        }}
                      >
                        0
                      </h4>
                    </p>
                  </div>
                  <div>
                    <p
                      className="mt-auto mb-auto ml-auto p-3 text-muted"
                      style={{ fontWeight: "600", fontSize: "12px" }}
                    >
                      Wallet balance{" "}
                      <h4
                        style={{
                          color: "#a26ee3",
                          fontWeight: "600",
                          marginBottom: "0px",
                        }}
                      >
                        0
                      </h4>
                    </p>
                  </div>
                </div>
              ) : (
                ""
              )}
              {activeTab == "Withdraw" ? (
                <Form
                  onSubmit={(e) => {
                    this.handleSubmit(e);
                  }}
                >
                  <FormGroup className="mb-4 position-relative">
                    <Label for="exampleName" className="text-muted ml-3">
                      <small>
                        <b>Amount</b>
                      </small>
                    </Label>
                    <InputGroup className="ml-3 mr-3" style={{ width: "auto" }}>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText
                          style={{
                            color: "rgb(209, 209, 209)",
                            backgroundColor: "white",
                          }}
                        >
                          <img
                            left
                            width="100%"
                            style={{ margin: "auto" }}
                            src={icon10}
                            className="pt-2 pb-2"
                            alt="Card image cap"
                          />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        // required
                        // className="p-2"
                        style={{ paddingBottom: "35px", paddingTop: "35px" }}
                        type="numeric"
                        name="text"
                        id="exampleName"
                      />
                    </InputGroup>
                  </FormGroup>
                  <div
                    className="d-flex align-items-center m-3 p-3 "
                    style={{
                      backgroundColor: "#f8f8f9",
                      borderRadius: "5px",
                      border: "1px solid #4f6ae6",
                      color: "#4f6ae6",
                      fontWeight: "600",
                      fontSize: "12px",
                    }}
                  >
                    <i class="fas fa-info-circle fa-2x mr-2"></i>
                    <p className="m-0">
                    Locked balances are not available for withdrawal until the timer ends. Withdrawal means you will stop earning staking rewards for the amount withdrawn.
                    </p>
                  </div>
                  <div className="d-flex">
                    
                    <Button
                      type="submit"
                      className="ml-auto mr-3 pb-0 mb-0 mt-3 mb-3 text-muted"
                      color="light"
                    >
                      Withdraw
                    </Button>
                  </div>
                </Form>
              ) : (
                ""
              )}
            </Card>
          </Col>
        </Row>
      </section>
    </>
  );
};

export default Portfolio;

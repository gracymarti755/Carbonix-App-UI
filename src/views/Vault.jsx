import { useEffect } from "react";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Button, Dropdown, Card, Col, Container, DropdownItem, DropdownMenu, DropdownToggle, Input, InputGroup, InputGroupAddon, InputGroupButtonDropdown, InputGroupText, Row } from "reactstrap";

const Vault = () => {
    let [activeTab, setActiveTab] = useState("Deposit");
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [dropdownOpen1, setDropdownOpen1] = useState(false);
    const [multiple, setMultiple] = useState(false);
    const [selectedDropdown, setSelectedDropdown] = useState("cBUSD");
    const [selectedDropdown1, setSelectedDropdown1] = useState("No Yield");
    const toggleDropDown = () => setDropdownOpen(!dropdownOpen);
    const toggle1 = () => setDropdownOpen1(!dropdownOpen1);
    let history = useHistory();
    useEffect(() => {
        document.getElementById("header-title").innerText = "Vault";
    })
    return (
        <section className="p-0 my-5">
            <Container fluid>
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
                                    <h6>Deposit BUSD in order to borrow cBUSD</h6>
                                    <InputGroup className="mt-3">
                                        <Input placeholder="0.00" style={{ height: "auto" }} />
                                        <InputGroupAddon addonType="append"><Button color="site-primary">Deposit</Button></InputGroupAddon>
                                    </InputGroup>
                                    <div className="percentage">
                                        <div className="percentage-item">25%</div>
                                        <div className="percentage-item">50%</div>
                                        <div className="percentage-item">75%</div>
                                        <div className="percentage-item">100%</div>
                                    </div>
                                    <div className="mt-4">
                                        <h5>Deposits</h5>
                                        <div className="d-flex larger">
                                            <span>Your wallet balance:</span>
                                            <span className="ml-auto">0.000 BUSD</span>
                                        </div>
                                        <div className="d-flex">
                                            <span>Your collateral balance:</span>
                                            <span className="ml-auto">0.000 BUSD</span>
                                        </div>
                                        <div className="d-flex">
                                            <span>Available to withdraw:</span>
                                            <span className="ml-auto">0.000 BUSD</span>
                                        </div>
                                        <div className="d-flex">
                                            <span>BUSD APY:</span>
                                            <span className="ml-auto">0.000%</span>
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <h5>Borrows</h5>
                                        <div className="d-flex">
                                            <span>Remaining cBUSD debt:</span>
                                            <span className="ml-auto">0.000 cBUSD</span>
                                        </div>
                                        <div className="d-flex">
                                            <span>Available to borrow:</span>
                                            <span className="ml-auto">0.000 cBUSD</span>
                                        </div>
                                        <div className="d-flex">
                                            <span>Your wallet balance:</span>
                                            <span className="ml-auto">0.000 cBUSD</span>
                                        </div>
                                        <div className="d-flex">
                                            <span>Est. Date of Maturity:</span>
                                            <span className="ml-auto">...</span>
                                        </div>
                                        <div className="d-flex">
                                            <span>Global Mintable cBUSD:</span>
                                            <span className="ml-auto">0.000 cBUSD</span>
                                        </div>
                                    </div>

                                </div>
                            )}
                            {activeTab == "Withdraw" && (
                                <div className="p-3">
                                    <h6>Withdraw your deposited BUSD</h6>
                                    <InputGroup className="mt-3">
                                        <Input placeholder="0.00" style={{ height: "auto" }} />
                                        <InputGroupAddon addonType="append"><Button color="site-primary">Withdraw</Button></InputGroupAddon>
                                    </InputGroup>
                                    <div className="percentage">
                                        <div className="percentage-item">25%</div>
                                        <div className="percentage-item">50%</div>
                                        <div className="percentage-item">75%</div>
                                        <div className="percentage-item">100%</div>
                                    </div>
                                    <div className="mt-4">
                                        <h5>Deposits</h5>
                                        <div className="d-flex">
                                            <span>Your wallet balance:</span>
                                            <span className="ml-auto">0.000 BUSD</span>
                                        </div>
                                        <div className="d-flex">
                                            <span>Your collateral balance:</span>
                                            <span className="ml-auto">0.000 BUSD</span>
                                        </div>
                                        <div className="d-flex larger">
                                            <span>Available to withdraw:</span>
                                            <span className="ml-auto">0.000 BUSD</span>
                                        </div>
                                        <div className="d-flex">
                                            <span>BUSD APY:</span>
                                            <span className="ml-auto">0.000%</span>
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <h5>Borrows</h5>
                                        <div className="d-flex">
                                            <span>Remaining cBUSD debt:</span>
                                            <span className="ml-auto">0.000 cBUSD</span>
                                        </div>
                                        <div className="d-flex">
                                            <span>Available to borrow:</span>
                                            <span className="ml-auto">0.000 cBUSD</span>
                                        </div>
                                        <div className="d-flex">
                                            <span>Your wallet balance:</span>
                                            <span className="ml-auto">0.000 cBUSD</span>
                                        </div>
                                        <div className="d-flex">
                                            <span>Est. Date of Maturity:</span>
                                            <span className="ml-auto">...</span>
                                        </div>
                                        <div className="d-flex">
                                            <span>Global Mintable cBUSD:</span>
                                            <span className="ml-auto">0.000 cBUSD</span>
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
                                            <DropdownItem onClick={e => setSelectedDropdown1("No Yield")}>No Yield</DropdownItem>
                                            <DropdownItem onClick={e => { setSelectedDropdown1("Carbon Yield"); history.push("/carbon-yield")}}>Carbon Yield</DropdownItem>
                                        </DropdownMenu>
                                    </Dropdown>
                                    <h6 className="mt-3">Borrow up to 50% the value of your collateral in cBUSD. Your debt will be automatically paid down by yield from Alpaca finance</h6>
                                    <InputGroup className="mt-3">
                                        <Input placeholder="0.00" style={{ height: "auto" }} />
                                        <InputGroupAddon addonType="append"><Button color="site-primary">Borrow</Button></InputGroupAddon>
                                    </InputGroup>
                                    <div className="percentage">
                                        <div className="percentage-item">25%</div>
                                        <div className="percentage-item">50%</div>
                                        <div className="percentage-item">75%</div>
                                        <div className="percentage-item">100%</div>
                                    </div>
                                    <div className="mt-4">
                                        <h5>Deposits</h5>
                                        <div className="d-flex">
                                            <span>Your wallet balance:</span>
                                            <span className="ml-auto">0.000 BUSD</span>
                                        </div>
                                        <div className="d-flex">
                                            <span>Your collateral balance:</span>
                                            <span className="ml-auto">0.000 BUSD</span>
                                        </div>
                                        <div className="d-flex">
                                            <span>Available to withdraw:</span>
                                            <span className="ml-auto">0.000 BUSD</span>
                                        </div>
                                        <div className="d-flex">
                                            <span>BUSD APY:</span>
                                            <span className="ml-auto">0.000%</span>
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <h5>Borrows</h5>
                                        <div className="d-flex">
                                            <span>Remaining cBUSD debt:</span>
                                            <span className="ml-auto">0.000 cBUSD</span>
                                        </div>
                                        <div className="d-flex larger">
                                            <span>Available to borrow:</span>
                                            <span className="ml-auto">0.000 cBUSD</span>
                                        </div>
                                        <div className="d-flex">
                                            <span>Your wallet balance:</span>
                                            <span className="ml-auto">0.000 cBUSD</span>
                                        </div>
                                        <div className="d-flex">
                                            <span>Est. Date of Maturity:</span>
                                            <span className="ml-auto">...</span>
                                        </div>
                                        <div className="d-flex larger">
                                            <span>Global Mintable cBUSD:</span>
                                            <span className="ml-auto">0.000 cBUSD</span>
                                        </div>
                                    </div>

                                </div>
                            )}
                            {activeTab == "Repay" && (
                                <div className="p-3">
                                    <h6>Repay the remaining 0 cBUSD debt from your wallet using cBUSD and/or BUSD</h6>
                                    {!multiple ?
                                        <InputGroup className="mt-3">
                                            <Input placeholder="0.00" style={{ height: "auto" }} />
                                            <InputGroupButtonDropdown addonType="append" isOpen={dropdownOpen} toggle={toggleDropDown}>
                                                <DropdownToggle caret style={{ width: 130 }} color="site-primary">
                                                    {selectedDropdown}
                                                </DropdownToggle>
                                                <DropdownMenu>
                                                    <DropdownItem onClick={e => setSelectedDropdown("cBUSD")}>cBUSD</DropdownItem>
                                                    <DropdownItem onClick={e => setSelectedDropdown("BUSD")}>BUSD</DropdownItem>
                                                </DropdownMenu>
                                            </InputGroupButtonDropdown>
                                            <InputGroupAddon addonType="append"><Button onClick={e => setMultiple(!multiple)} color="outline-site-primary"><i className="fa fa-plus"></i></Button></InputGroupAddon>
                                        </InputGroup>
                                        : <>
                                            <InputGroup className="mt-3">
                                                <Input placeholder="0.00" style={{ height: "auto" }} />
                                                <InputGroupAddon addonType="append">
                                                    <InputGroupText className="bg-site-primary text-white font-weight-bold">cBUSD</InputGroupText>
                                                </InputGroupAddon>
                                                <InputGroupAddon addonType="append">
                                                    <Button size="sm" onClick={e => setMultiple(!multiple)} color="outline-site-primary"><i className="fa fa-minus"></i></Button></InputGroupAddon>
                                            </InputGroup>
                                            <InputGroup className="mt-3">
                                                <Input placeholder="0.00" style={{ height: "auto" }} />
                                                <InputGroupAddon addonType="append">
                                                    <InputGroupText className="bg-site-primary text-white font-weight-bold">BUSD</InputGroupText>
                                                </InputGroupAddon>
                                            </InputGroup>
                                            <div className="mt-3 d-flex flex-column mx-auto">
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
                                                        cBUSD
                                                    </div>
                                                    <input type="range" min="1" max="100" defaultValue="0"></input>
                                                    <div style={{ width: 70 }} className="text-right">
                                                        BUSD
                                                    </div>
                                                </div>
                                            </div>
                                        </>}
                                    <div className="percentage">
                                        <div className="percentage-item">25%</div>
                                        <div className="percentage-item">50%</div>
                                        <div className="percentage-item">75%</div>
                                        <div className="percentage-item">100%</div>
                                    </div>
                                    <div style={{ maxWidth: 300 }} className="mx-auto">
                                        <Button color="outline-site-primary" className="mt-3" block>Repay</Button>
                                    </div>
                                    <div className="mt-4">
                                        <h5>Deposits</h5>
                                        <div className="d-flex larger">
                                            <span>Your wallet balance:</span>
                                            <span className="ml-auto">0.000 BUSD</span>
                                        </div>
                                        <div className="d-flex">
                                            <span>Your collateral balance:</span>
                                            <span className="ml-auto">0.000 BUSD</span>
                                        </div>
                                        <div className="d-flex">
                                            <span>Available to withdraw:</span>
                                            <span className="ml-auto">0.000 BUSD</span>
                                        </div>
                                        <div className="d-flex">
                                            <span>BUSD APY:</span>
                                            <span className="ml-auto">0.000%</span>
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <h5>Borrows</h5>
                                        <div className="d-flex larger">
                                            <span>Remaining cBUSD debt:</span>
                                            <span className="ml-auto">0.000 cBUSD</span>
                                        </div>
                                        <div className="d-flex">
                                            <span>Available to borrow:</span>
                                            <span className="ml-auto">0.000 cBUSD</span>
                                        </div>
                                        <div className="d-flex larger">
                                            <span>Your wallet balance:</span>
                                            <span className="ml-auto">0.000 cBUSD</span>
                                        </div>
                                        <div className="d-flex">
                                            <span>Est. Date of Maturity:</span>
                                            <span className="ml-auto">...</span>
                                        </div>
                                        <div className="d-flex">
                                            <span>Global Mintable cBUSD:</span>
                                            <span className="ml-auto">0.000 cBUSD</span>
                                        </div>
                                    </div>

                                </div>
                            )}
                            {activeTab == "Liquidate" && (
                                <div className="p-3">
                                    <h6>Repay the remaining 0 cBUSD debt by liquidating your BUSD collateral.</h6>
                                    <small className="text-danger">WARNING: this will use your collateral to repay your cBUSD debt.</small>
                                    <InputGroup className="mt-3">
                                        <Input placeholder="0.00" style={{ height: "auto" }} />
                                        <InputGroupAddon addonType="append"><Button color="site-primary">Liquidate</Button></InputGroupAddon>
                                    </InputGroup>
                                    <div className="percentage">
                                        <div className="percentage-item">25%</div>
                                        <div className="percentage-item">50%</div>
                                        <div className="percentage-item">75%</div>
                                        <div className="percentage-item">100%</div>
                                    </div>
                                    <div className="mt-4">
                                        <h5>Deposits</h5>
                                        <div className="d-flex">
                                            <span>Your wallet balance:</span>
                                            <span className="ml-auto">0.000 BUSD</span>
                                        </div>
                                        <div className="d-flex larger">
                                            <span>Your collateral balance:</span>
                                            <span className="ml-auto">0.000 BUSD</span>
                                        </div>
                                        <div className="d-flex">
                                            <span>Available to withdraw:</span>
                                            <span className="ml-auto">0.000 BUSD</span>
                                        </div>
                                        <div className="d-flex">
                                            <span>BUSD APY:</span>
                                            <span className="ml-auto">0.000%</span>
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <h5>Borrows</h5>
                                        <div className="d-flex larger">
                                            <span>Remaining cBUSD debt:</span>
                                            <span className="ml-auto">0.000 cBUSD</span>
                                        </div>
                                        <div className="d-flex">
                                            <span>Available to borrow:</span>
                                            <span className="ml-auto">0.000 cBUSD</span>
                                        </div>
                                        <div className="d-flex">
                                            <span>Your wallet balance:</span>
                                            <span className="ml-auto">0.000 cBUSD</span>
                                        </div>
                                        <div className="d-flex">
                                            <span>Est. Date of Maturity:</span>
                                            <span className="ml-auto">...</span>
                                        </div>
                                        <div className="d-flex">
                                            <span>Global Mintable cBUSD:</span>
                                            <span className="ml-auto">0.000 cBUSD</span>
                                        </div>
                                    </div>

                                </div>
                            )}
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Vault;
import { useEffect } from "react";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Button, Dropdown, Card, Col, Container, DropdownItem, DropdownMenu, DropdownToggle, Input, InputGroup, InputGroupAddon, InputGroupButtonDropdown, InputGroupText, Row, Table } from "reactstrap";

const Swap = () => {
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
        document.getElementById("header-title").innerText = "Swap";
    })
    return (
        <section className="p-0 my-5">
            <Container fluid>
                <Row className="justify-content-center">
                    <Col xl="8" lg="8" md="10" sm="12">
                        <Card className="custom-card">
                            <div className="p-3">
                                <h4>Stabilize cBUSD to BUSD</h4>
                                <h6>The Stabilizer exists to ensure cBUSD is pegged to the dollar. Depositing your cBUSD will gradually convert it into BUSD. This is only useful if cBUSD is trading under one dollar on Curve.</h6>
                                <Table bordered responsive className="mt-3">
                                    <thead>
                                        <tr>
                                            <th>Your cBUSD</th>
                                            <th>Deposited cBUSD</th>
                                            <th>Stabilizable BUSD</th>
                                            <th>Your BUSD</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-center">
                                        <tr>
                                            <td>0.000</td>
                                            <td>0.000</td>
                                            <td>0.000</td>
                                            <td>0.000</td>
                                        </tr>
                                    </tbody>
                                </Table>
                                <Container fluid>
                                    <Row>
                                        <Col xl="6" md="12">
                                            <InputGroup className="mt-3">
                                                <Input placeholder="0.00" style={{ height: "auto" }} />
                                                <InputGroupAddon addonType="append"><Button color="site-primary">Deposit</Button></InputGroupAddon>
                                            </InputGroup>
                                            <div className="percentage smaller">
                                                <div className="percentage-item">25%</div>
                                                <div className="percentage-item">50%</div>
                                                <div className="percentage-item">75%</div>
                                                <div className="percentage-item">100%</div>
                                            </div>
                                        </Col>
                                        <Col xl="6" md="12">
                                            <InputGroup className="mt-3">
                                                <Input placeholder="0.00" style={{ height: "auto" }} />
                                                <InputGroupAddon addonType="append"><Button color="site-primary">Withdraw</Button></InputGroupAddon>
                                            </InputGroup>
                                            <div className="percentage smaller">
                                                <div className="percentage-item">25%</div>
                                                <div className="percentage-item">50%</div>
                                                <div className="percentage-item">75%</div>
                                                <div className="percentage-item">100%</div>
                                            </div>
                                        </Col>
                                    </Row>
                                </Container>
                                <Container>
                                    <Row className="justify-content-center">
                                        <Col xl="9">
                                            <Row className="mt-4">
                                                <Col xl="6" md="12">
                                                    <Button color="outline-site-primary" block >Stabilize</Button>
                                                </Col>
                                                <Col xl="6" md="12" className='mt-3 mt-xl-0'>
                                                    <Button color="outline-site-primary" block >Stabilize & Exit</Button>
                                                </Col>
                                            </Row>

                                        </Col>
                                    </Row>
                                </Container>

                            </div>
                        </Card>
                    </Col>
                </Row>
                <Row className="mt-4 justify-content-center">
                    <Col xl="8" lg="8" md="10" sm="12">
                        <Card className="custom-card">
                            <div className="p-3">
                                <h4 className="mb-4">Global Stabilizer Status</h4>
                                <div className="content">
                                    <div className="d-flex">
                                        <span>Total Deposited cBUSD:</span>
                                        <span className="ml-auto">0.000</span>
                                    </div>
                                    <div className="d-flex">
                                        <span>Total BUSD Deposited in Yearn:</span>
                                        <span className="ml-auto">0.000</span>
                                    </div>
                                    <div className="d-flex">
                                        <span>Estimated BUSD Daily Yield:</span>
                                        <span className="ml-auto">0.000</span>
                                    </div>
                                    <div className="d-flex">
                                        <span>Total BUSD Available for Stabilization:</span>
                                        <span className="ml-auto">0.000</span>
                                    </div>
                                    <div className="d-flex">
                                        <span>Yearly Stabilization Rate:</span>
                                        <span className="ml-auto">0.000</span>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Swap;
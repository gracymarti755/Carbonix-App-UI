import { useState } from "react";
import { Link } from "react-router-dom";
import { Badge, Card, Progress, Table } from "reactstrap";

const Proposals = (props) => {
    let [activeTab, setActiveTab] = useState("all proposals");
    return (<>
        <h3 className="font-weight-bold">Proposals</h3>
        <Card className="custom-card mt-4">
            <div className="bar-items-wrapper">
                <div className="bar-items bg-site-secondary pl-5" style={{ minWidth: "470px" }}>
                    <Link to="#" className={`bar-item ml-0 ${activeTab == "all proposals" ? "active" : ""}`} onClick={e => setActiveTab("all proposals")}>
                        <span >All proposals</span>
                    </Link>
                    <Link to="#" className={`bar-item ${activeTab == "active" ? "active" : ""}`} onClick={e => setActiveTab("active")}>
                        <span >Active</span>
                    </Link>
                    <Link to="#" className={`bar-item ${activeTab == "executed" ? "active" : ""}`} onClick={e => setActiveTab("executed")}>
                        <span >Executed</span>
                    </Link>
                    <Link to="#" className={`bar-item ${activeTab == "failed" ? "active" : ""}`} onClick={e => setActiveTab("failed")}>
                        <span >Failed</span>
                    </Link>
                </div>
            </div>
            <Table className="custom-table" responsive>
                <thead>
                    <tr>
                        <th>Proposal</th>
                        <th>Votes</th>
                    </tr>
                </thead>
                {activeTab == "all proposals" || activeTab == "executed" ?
                    <tbody>
                        <tr>
                            <td>
                                <div className="d-flex flex-column justify-content-center">
                                    <span className="font-weight-bold">PID-4: Bancor, Nexus, ImmuneFi & update DAO parameters</span>
                                    <div>
                                        <Badge className="d-inline-block" color="primary" pill>Executed</Badge>
                                    </div>
                                </div>
                            </td>
                            <td><div className="d-flex flex-column">
                                <div className="d-flex align-items-center">
                                    <div style={{ width: 150 }}>
                                        <Progress style={{ height: 10 }} color="success" value="100" />
                                    </div>
                                    <small className="ml-3">100.00%</small>
                                </div>
                                <div className="d-flex align-items-center">
                                    <div style={{ width: 150 }}>
                                        <Progress style={{ height: 10 }} color="success" value="0" />
                                    </div>
                                    <small className="ml-3">0.00%</small>
                                </div>
                            </div></td>
                        </tr>
                        <tr>
                            <td>
                                <div className="d-flex flex-column justify-content-center">
                                    <span className="font-weight-bold">PID-4: Bancor, Nexus, ImmuneFi & update DAO parameters</span>
                                    <div>
                                        <Badge className="d-inline-block" color="primary" pill>Executed</Badge>
                                    </div>
                                </div>
                            </td>
                            <td><div className="d-flex flex-column">
                                <div className="d-flex align-items-center">
                                    <div style={{ width: 150 }}>
                                        <Progress style={{ height: 10 }} color="success" value="100" />
                                    </div>
                                    <small className="ml-3">100.00%</small>
                                </div>
                                <div className="d-flex align-items-center">
                                    <div style={{ width: 150 }}>
                                        <Progress style={{ height: 10 }} color="success" value="0" />
                                    </div>
                                    <small className="ml-3">0.00%</small>
                                </div>
                            </div></td>
                        </tr>

                        <tr>
                            <td>
                                <div className="d-flex flex-column justify-content-center">
                                    <span className="font-weight-bold">PID-4: Bancor, Nexus, ImmuneFi & update DAO parameters</span>
                                    <div>
                                        <Badge className="d-inline-block" color="primary" pill>Executed</Badge>
                                    </div>
                                </div>
                            </td>
                            <td><div className="d-flex flex-column">
                                <div className="d-flex align-items-center">
                                    <div style={{ width: 150 }}>
                                        <Progress style={{ height: 10 }} color="success" value="100" />
                                    </div>
                                    <small className="ml-3">100.00%</small>
                                </div>
                                <div className="d-flex align-items-center">
                                    <div style={{ width: 150 }}>
                                        <Progress style={{ height: 10 }} color="success" value="0" />
                                    </div>
                                    <small className="ml-3">0.00%</small>
                                </div>
                            </div></td>
                        </tr>

                        <tr>
                            <td>
                                <div className="d-flex flex-column justify-content-center">
                                    <span className="font-weight-bold">PID-4: Bancor, Nexus, ImmuneFi & update DAO parameters</span>
                                    <div>
                                        <Badge className="d-inline-block" color="primary" pill>Executed</Badge>
                                    </div>
                                </div>
                            </td>
                            <td><div className="d-flex flex-column">
                                <div className="d-flex align-items-center">
                                    <div style={{ width: 150 }}>
                                        <Progress style={{ height: 10 }} color="success" value="100" />
                                    </div>
                                    <small className="ml-3">100.00%</small>
                                </div>
                                <div className="d-flex align-items-center">
                                    <div style={{ width: 150 }}>
                                        <Progress style={{ height: 10 }} color="success" value="0" />
                                    </div>
                                    <small className="ml-3">0.00%</small>
                                </div>
                            </div></td>
                        </tr>

                    </tbody>
                    : ""}
            </Table>

            {activeTab == "active" || activeTab == "failed" ?
                <small className="text-muted text-center w-100 mb-3 d-block">No proposals</small>
                : ""}
        </Card>
    </>);
}

export default Proposals;
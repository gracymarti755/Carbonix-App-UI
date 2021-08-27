import { Container, Col, Row, Card, Table } from "reactstrap";

const Overview = (props) => {
    return (<>
        <Row>
            <Col lg="6" className="mb-4">
                <Card className="custom-card p-24">
                    <small className="text-site-primary font-weight-semi-bold">cBUSD STAKED</small>
                    <div className="d-flex mt-5 align-items-baseline">
                        <h3 className="font-weight-bold">0.00</h3>
                        <p className="ml-1 text-muted text-uppercase">Bond</p>
                    </div>
                    <p className="text-muted mb-0">$0.00</p>
                </Card>
            </Col>
            <Col lg="6" className="mb-4">
                <Card className="custom-card p-24">
                    <small className="text-site-primary font-weight-semi-bold text-uppercase">vbond</small>
                    <div className="d-flex mt-5 align-items-baseline">
                        <h3 className="font-weight-bold">0.00</h3>
                    </div>
                </Card>
            </Col>
            <Col lg="6" className="mb-4">
                <Card className="custom-card p-24">
                    <small className="text-site-primary font-weight-semi-bold text-uppercase">AVG. LOCK TIME</small>
                    <div className="d-flex mt-5 align-items-baseline">
                        <h3 className="font-weight-bold">0mo 0d 0h 0m 0s</h3>
                    </div>
                    <p className="text-muted mb-0">average time</p>
                </Card>
            </Col>
            <Col lg="6" className="mb-4">
                <Card className="custom-card p-24">
                    <small className="text-site-primary font-weight-semi-bold">BOND REWARDS</small>
                    <div className="d-flex mt-5 align-items-baseline">
                        <h3 className="font-weight-bold">0.00</h3>
                    </div>
                    <p className="text-muted mb-0">out of 00</p>
                </Card>
            </Col>
            <Col lg="6" className="mb-4">
                <Card className="custom-card p-24">
                    <small className="text-site-primary font-weight-semi-bold text-uppercase">DELEGATED</small>
                    <div className="d-flex mt-5 align-items-baseline">
                        <h3 className="font-weight-bold">0.00</h3>
                    </div>
                    <p className="text-muted mb-0">out of 00</p>
                </Card>
            </Col>
            <Col lg="6" className="mb-4">
                <Card className="custom-card p-24">
                    <small className="text-site-primary font-weight-semi-bold text-uppercase">ADDRESSES</small>
                    <div className="d-flex mt-5 align-items-baseline">
                        <h3 className="font-weight-bold">0.00</h3>
                        <p className="ml-1 text-muted">holders</p>
                    </div>
                    <p className="text-muted mb-0">0 stakers & 0 voters</p>
                </Card>
            </Col>
        </Row>
        <Card className="custom-card">
            <h6 className="p-24 m-0 font-weight-semi-bold">Voter weights</h6>
            <Table className="custom-table" responsive>
                <thead>
                    <tr>
                        <th>Address</th>
                        <th>Staked Balance</th>
                        <th>Voting Power</th>
                        <th>Votes</th>
                    </tr>
                </thead>
                <tbody>
                    <center>Upcoming Features</center>
                    {/* <tr>
                        <td>
                            <div className="d-flex align-items-center">
                                <div className="square mr-3"></div>
                                <a href="#" className="font-weight-semi-bold">0x747dfb7d6d27671b4e3e98087f00e6b023d0aab7</a>
                            </div>
                        </td>
                        <td><span className="font-weight-semi-bold">50,567.80</span></td>
                        <td><span className="font-weight-semi-bold">90,537.98</span></td>
                        <td><span className="font-weight-semi-bold">4</span></td>
                    </tr>
                    <tr>
                        <td>
                            <div className="d-flex align-items-center">
                                <div className="square mr-3"></div>
                                <a href="#" className="font-weight-semi-bold">0x747dfb7d6d27671b4e3e98087f00e6b023d0aab7</a>
                            </div>
                        </td>
                        <td><span className="font-weight-semi-bold">50,567.80</span></td>
                        <td><span className="font-weight-semi-bold">90,537.98</span></td>
                        <td><span className="font-weight-semi-bold">4</span></td>
                    </tr>
                    <tr>
                        <td>
                            <div className="d-flex align-items-center">
                                <div className="square mr-3"></div>
                                <a href="#" className="font-weight-semi-bold">0x747dfb7d6d27671b4e3e98087f00e6b023d0aab7</a>
                            </div>
                        </td>
                        <td><span className="font-weight-semi-bold">50,567.80</span></td>
                        <td><span className="font-weight-semi-bold">90,537.98</span></td>
                        <td><span className="font-weight-semi-bold">4</span></td>
                    </tr>
                    <tr>
                        <td>
                            <div className="d-flex align-items-center">
                                <div className="square mr-3"></div>
                                <a href="#" className="font-weight-semi-bold">0x747dfb7d6d27671b4e3e98087f00e6b023d0aab7</a>
                            </div>
                        </td>
                        <td><span className="font-weight-semi-bold">50,567.80</span></td>
                        <td><span className="font-weight-semi-bold">90,537.98</span></td>
                        <td><span className="font-weight-semi-bold">4</span></td>
                    </tr>  */}
                </tbody>
            </Table>
            <div className="p-24 pagination-wrapper">
                <div className="d-md-flex">
                    <small className="m-0">Showing 0 to 0 out of 0 stakers</small>
                    <div className="d-flex pagination align-items-center mt-3 mt-md-0 ml-md-auto">
                        <i className="fa fa-angle-left"></i>
                        <span className="active">1</span>
                        <span>2</span>
                        <span>3</span>
                        <span>4</span>
                        <span>5</span>
                        <span className="mx-2">...</span>
                        <span>130</span>
                        <i className="fa fa-angle-right"></i>
                    </div>
                </div>
            </div>
        </Card>
    </>);
}

export default Overview;
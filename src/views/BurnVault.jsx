import { Card, Col, Container, Row,Button } from "reactstrap";
import CustomCard from "../components/global/CustomCard";

const BurnVault = () => {
    return (<>
        <Row className="m-5">
            <Col xl="4" lg="6" md="6" className="mb-4">
                <CustomCard title="BLACK TOKEN BALANCE" text="0" />
            </Col>
            <Col xl="4" lg="6" md="6" className="mb-4">
                <CustomCard title="1 BLACK" text="Infinity BNB" />
            </Col>
            <Col xl="4" lg="6" md="6" className="mb-4">
                <CustomCard title="BLACK TOKEN IN BURNVAULT" text="0" />
            </Col>
            <Col xl="4" lg="6" md="6" className="mb-4">
                <CustomCard title="MAXIMUM TRANSACTION LIMIT" text="0" />
            </Col>
            <Col xl="4" lg="6" md="6" className="mb-4">
                <Card className="custom-card p-24 text-white" color="site-primary">
                    <p>Please Check whether metamask is connected?</p>
                    <div className="text-center">
                        <Button color="dark">Connect Wallet</Button>
                    </div>
                </Card>
            </Col>
            <Col xl="4" lg="6" md="6" className="mb-4">
                <div className="h-100 d-flex flex-column">
                    <div className="border rounded border-site-primary py-2 px-4 mb-4">
                        Available limit for User to Swap
                    </div>
                <Button color="outline-site-primary" className="align-self-end" block>Swap</Button>
                </div></Col>
        </Row>
    </>);
}

export default BurnVault;
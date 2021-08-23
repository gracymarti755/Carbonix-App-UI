import { Card, Col, Container, Row,Button } from "reactstrap";
import CustomCard from "../components/global/CustomCard";
import burnvault from "./burnVaultAbi";
import web3 from "../web3";
import black from "./blackAbi";
import { useEffect } from "react";
import { useState } from "react";

const BurnVault = () => {
    const [tid1,setId1] = useState([]);
    var [maxta,setmaxt] = useState([]);
    const [tid2,setId2] = useState([]);
    const [tid3,setId3] = useState([]);
    const [tid4,setId4] = useState([]);
    const [burn,setburn] = useState([]);
    const bvb = async() => {
        let account = await web3.eth.getAccounts();
        setId1(await black.methods.balanceOf(account[0]).call());
        var maxtx  = await burnvault.methods.maxTxAmount().call();
        setmaxt(maxtx);
        var circulate = await burnvault.methods.getCirculatingSupply().call();
        var balance = await burnvault.methods.getBurnVaultBNBBalance().call();
        setId2(circulate/(balance/1000000000000000000));
        setId3(await burnvault.methods.getBurnVaultBLACKBalance().call());
        var burnbalan  = await burnvault.methods.senderBurnBalance(account[0]).call();
        var bb = maxta - burnbalan;
        setburn(bb/1000000000);
        var allowan = await black.methods.allowance(account[0],"0x2f52686F07F502Ff3F5495E8aDd917898da23117").call();
       if(allowan == 0){
        setId4(true);
        }
       else{
        var btn = document.getElementById('tid');
        btn.disabled = false;
       setId4(false);
      }
    }
    useEffect(()=>{bvb()},[tid1,maxta,tid2,tid3,burn,tid4])
    return (<>
        <Row className="m-5">
            <Col xl="4" lg="6" md="6" className="mb-4">
                <CustomCard title="BLACK TOKEN BALANCE" text={parseFloat(tid1/1000000000).toFixed(3)} />
            </Col>
            <Col xl="4" lg="6" md="6" className="mb-4">
                <CustomCard title="1 BLACK(BNB)" text={ parseFloat(1000000000/tid2).toFixed(15)} />
            </Col>
            <Col xl="4" lg="6" md="6" className="mb-4">
                <CustomCard title="BLACK TOKEN IN BURNVAULT" text={parseFloat(tid3/1000000000).toFixed(5)} />
            </Col>
            <Col xl="4" lg="6" md="6" className="mb-4">
                <CustomCard title="MAXIMUM TRANSACTION LIMIT" text= {parseFloat(maxta/1000000000).toFixed(3)}/>
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
                        Available limit for User to Swap {burn}
                    </div>
                <Button color="outline-site-primary" className="align-self-end" id = "tid"  disabled ="true" block>Swap</Button>
                </div></Col>
        </Row>
    </>);
}

export default BurnVault;
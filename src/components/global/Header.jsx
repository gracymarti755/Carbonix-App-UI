import { Container, Button } from "reactstrap"

const Header = (props) => {
    const toggleNav = () => {
        let sidebar = document.getElementsByClassName("sidebar")[0];
        sidebar.classList.toggle("collapse");   
    }
    return (<>
        <div className="header bg-site-secondary">
            <Container fluid className="px-md-5">
                <div className="d-flex align-items-center font-semi-bold">
                    <span className="mr-3 toggler-btn" onClick={e=>toggleNav()}><i className="fa fa-bars"></i></span>
                    <h5 className="m-0">Governance</h5>
                    <div className="ml-auto topbar-btns">
                        <Button color="outline-site-primary">Ethereum Mainnet</Button>
                        <Button color="site-primary" className="ml-4">Connect Wallet</Button>
                    </div>
                </div>
            </Container>
        </div>
    </>);
}

export default Header;
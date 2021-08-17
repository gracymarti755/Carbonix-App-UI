import { Link } from "react-router-dom";
import { Container, Button } from "reactstrap"

const Footer = (props) => {
    return (<>
        <div className="footer">
            <Container fluid className="px-md-5">
                <div className="d-flex justify-content-end">
                    <div className="footer-nav-links d-flex flex-wrap">
                        <Link to="#" className="footer-nav-link">
                            Website
                        </Link>
                        <Link to="#" className="footer-nav-link">
                            Discord
                        </Link>
                        <Link to="#" className="footer-nav-link">
                            Twitter
                        </Link>
                        <Link to="#" className="footer-nav-link">
                            Whitepaper
                        </Link>
                        <Link to="#" className="footer-nav-link">
                            Github
                        </Link>
                        <Link to="#" className="footer-nav-link">
                            Uniswap v2 USDC/BOND add liquidity
                        </Link>
                        <Link to="#" className="footer-nav-link">
                            Uniswap v2 USDC/BOND market
                        </Link>
                    </div>
                </div>
            </Container>
        </div>
    </>);
}

export default Footer;
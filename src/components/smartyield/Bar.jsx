import { Link } from "react-router-dom";

const Bar = (props) => {
    return (<>
        <div className="bar-items-wrapper">
            <div className="bar-items bg-site-secondary pl-5">
                <Link to="#" className={`bar-item ml-0 ${props.activeTab == "markets" ? "active" : ""}`} onClick={e=>props.setActiveTab("markets")}>
                    <i className="fas fa-poll"></i>
                    <span className="ml-2">Markets</span>
                </Link>
                {/* <Link to="#" className={`bar-item ${props.activeTab == "portfolio" ? "active" : ""}`} onClick={e => props.setActiveTab("portfolio")}>
                    <i className="fa fa-wallet"></i>
                    <span className="ml-2">Portfolio</span>
                </Link> */}
                {/* <Link to="#" className={`bar-item ${props.activeTab == "pools" ? "active" : ""}`} onClick={e => props.setActiveTab("pools")}>
                    <i className="fas fa-piggy-bank "></i>
                    <span className="ml-2">Pools</span>
                </Link> */}
                
                
            </div>
        </div>
    </>);
}

export default Bar;
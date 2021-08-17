import { Link } from "react-router-dom";

const Bar = (props) => {
    return (<>
        <div className="bar-items-wrapper">
            <div className="bar-items bg-site-secondary pl-5">
                <Link to="#" className={`bar-item ml-0 ${props.activeTab == "overview" ? "active" : ""}`} onClick={e=>props.setActiveTab("overview")}>
                    <i className="fa fa-chart-line"></i>
                    <span className="ml-2">Overview</span>
                </Link>
                <Link to="#" className={`bar-item ${props.activeTab == "portfolio" ? "active" : ""}`} onClick={e => props.setActiveTab("portfolio")}>
                    <i className="fa fa-wallet"></i>
                    <span className="ml-2">Portfolio</span>
                </Link>
                <Link to="#" className={`bar-item ${props.activeTab == "proposals" ? "active" : ""}`} onClick={e => props.setActiveTab("proposals")}>
                    <i className="fa fa-scroll "></i>
                    <span className="ml-2">Proposals</span>
                </Link>
                <Link to="#" className={`bar-item ${props.activeTab == "treasury" ? "active" : ""}`} onClick={e => props.setActiveTab("treasury")}>
                    <i className="fa fa-suitcase"></i>
                    <span className="ml-2">Treasury</span>
                </Link>
                <Link to="#" className={`bar-item ${props.activeTab == "signal" ? "active" : ""}`} onClick={e => props.setActiveTab("signal")}>
                    <i className="fa fa-comment"></i>
                    <span className="ml-2">Signal</span>
                </Link>
                <Link to="#" className={`bar-item ${props.activeTab == "fourm" ? "active" : ""}`} onClick={e => props.setActiveTab("fourm")}>
                    <i className="fa fa-comments"></i>
                    <span className="ml-2">Fourm</span>
                </Link>
            </div>
        </div>
    </>);
}

export default Bar;
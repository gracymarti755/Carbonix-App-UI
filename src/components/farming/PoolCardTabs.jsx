import { useState } from "react";

const PoolCardTabs = () => {
    let [active, setActive] = useState("Pool Statistics");
    return (<div className="pool-card-tabs" >
        <div onClick={e => setActive("Pool Statistics")} className={`pool-card-tab ${active == "Pool Statistics" ? "active" : ""}`}>
            Pool Statistics
        </div>
        <div onClick={e=>setActive("My Statistics")} className={`pool-card-tab ${active == "My Statistics" ? "active" : ""}`}>
            My Statistics
        </div>
    </div>
    );
}

export default PoolCardTabs;
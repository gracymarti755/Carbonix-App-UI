import React, { Component } from 'react';
import { Container } from 'reactstrap';
import Bar from '../components/governance/Bar';
import Overview from '../components/governance/Overview';
import Portfolio from '../components/governance/Portfolio';
import Proposals from '../components/governance/Proposals';
import Treasury from '../components/governance/Treasury';
class Governance extends Component {
    state = {
        activeTab: "overview"
    }
    setActiveTab = (tab) => {
        this.setState({ activeTab: tab })
    }
    componentDidMount() {
        document.getElementById("header-title").innerText = "Governance";
    }
    render() {
        return (<>
            <Bar activeTab={this.state.activeTab} setActiveTab={this.setActiveTab} />
            <Container fluid className="py-4 px-md-5">
                {this.state.activeTab == "overview" ? <Overview /> : ""}
                {this.state.activeTab == "portfolio" ? "Future Upcoming": ""}
                {this.state.activeTab == "proposals" ? "Future Upcoming" : ""}
                {this.state.activeTab == "treasury" ? "Future Upcoming" : ""}
            </Container>
        </>);
    }
}

export default Governance;
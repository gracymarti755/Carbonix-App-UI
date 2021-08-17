import React, { Component } from 'react';
import { Container } from 'reactstrap';
import Bar from '../components/smartyield/Bar';
import Markets from '../components/smartyield/Markets';
import Portfolio from '../components/smartyield/Portfolio';
import Pools from '../components/smartyield/Pools';

class SmartYield extends Component {
    state = {
        activeTab: "markets"
    }
    setActiveTab = (tab) => {
        console.log(tab)
        this.setState({ activeTab: tab })
    }
    render() {
        return (<>
            <Bar activeTab={this.state.activeTab} setActiveTab={this.setActiveTab} />
            <Container fluid className="py-4 px-md-5">
                {this.state.activeTab == "markets" ? <Markets /> : ""}
                {this.state.activeTab == "portfolio" ? <Portfolio /> : ""}
                {this.state.activeTab == "pools" ? <Pools /> : ""}
            </Container>
        </>);
    }
}

export default SmartYield;
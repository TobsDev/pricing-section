import React, { Component } from 'react';
import Switch from "../components/toggleSwitch"
import Cards from "../components/cards";
import "../scss/styles.scss";

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.togglePricing = this.togglePricing.bind(this);
    this.state = {
      monthlyPricing: false
    };
  }

  togglePricing = () => {
    const { monthlyPricing } = this.state;
    this.setState({monthlyPricing: !monthlyPricing});
  };

  render () {
    return (
      <div className="pricing" id="pricing">
        <div className="pricing__background"></div>
        <h1 className="pricing__heading">Our Pricing</h1>
        <Switch togglePricing={this.togglePricing}/>
        <Cards pricing={this.state.monthlyPricing ? "monthly" : "annually"}/>
      </div>
    );
  }
};

export default IndexPage

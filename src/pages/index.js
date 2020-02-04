import React from "react";
import Card from "../components/card"
import Switch from "../components/toggleSwitch"
import Cards from "../components/cards";
import "../scss/styles.scss";

const IndexPage = () => (
  <div className="pricing" id="pricing">
    <div className="pricing__background"></div>
    <h1 className="pricing__heading">Our Pricing</h1>
    <Switch />
    <Cards />
  </div>
  
)

export default IndexPage

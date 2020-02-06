import React, { Component } from 'react'

class ToggleSwitch extends React.Component {
    

    render() {
        const{ togglePricing } = this.props;

        return (
            <div className="switch">
                <p className="switch__labelLeft">Annually </p>
                <label className="switch__btn" >
                    <input type="checkbox" onClick={togglePricing}/>
                    <span className="switch__slider" ></span>
                </label>
                <p className="switch__labelRight">Monthly</p>
            </div>
        );
    }
};

export default ToggleSwitch
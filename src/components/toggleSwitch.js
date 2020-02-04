import React from 'react';

const ToggleSwitch = () => (
    <div className="switch">
        <p className="switch__labelLeft">Annually</p>
        <label className="switch__btn">
            <input type="checkbox"/>
            <span className="switch__slider"></span>
        </label>
        <p className="switch__labelRight">Monthly</p>
    </div>
)

export default ToggleSwitch
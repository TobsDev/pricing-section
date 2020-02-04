import React from 'react';

const ToggleSwitch = () => (
    <div className="switch">
        <p className="switch__labelLeft">Annually</p>
        <label className="switch__btn">
            <input type="checkbox" checked/>
            {/* <span class="slider round"></span> */}
        </label>
        <p className="switch__labelRight">Monthly</p>
    </div>
)

export default ToggleSwitch
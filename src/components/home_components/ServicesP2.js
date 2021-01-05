import React from 'react'
import JumpstartImg from "../../images/jumpstart-img.svg"

function ServicesP2() {
    return (
        <div className="jump-start-container">
            <div className="jump-start-text">
                <h2>Jumpstart your clinic’s efficiency</h2>
                <p>Our intake platform and built-in workflow automations are optimized specifically for urgent care clinics. </p>
            </div>
            <img src={JumpstartImg} alt="jumpstart"></img>
        </div>
    )
}

export default ServicesP2;

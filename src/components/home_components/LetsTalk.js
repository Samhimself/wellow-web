import React from 'react'
import ArrowIcon from "../../images/uil_arrow-to-right.svg";

function LetsTalk({btnHandler}) {
    return (
        <div className={"lets-talk-container "}>
            <h2>Let’s talk about your practice</h2>
            <p>Contact us to learn about our Urgent Care <br></br> Partners Program</p>
            <button className="home-screen-text__btn" type="button" onClick={btnHandler}>
              Learn more
              <img src={ArrowIcon} alt="arrow icon"></img>
            </button>
        </div>
    )
}

export default LetsTalk;

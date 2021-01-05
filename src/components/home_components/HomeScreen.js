import React from "react";
import HomeScreenIll from "../../images/UrgentCareIllustration.png";
import ArrowIcon from "../../images/uil_arrow-to-right.svg";
import ScrollIcon from "../../images/scroll-horitontal 1.svg";

function HomeScreen({btnHandler}) {

  return (
    <div className={"home-screen"}>
      <div>
        <div className="home-screen-container">
          <div className="home-screen-text">
            <h1>Reimagining Urgent Care</h1>
            <h3>
              Deliver effortless care, analyze business trends, and grow your
              practice with our cohesive electronic ecosystem.
            </h3>
            <button className="home-screen-text__btn" type="button" onClick={btnHandler}>
              Learn more
              <img src={ArrowIcon} alt="arrow icon"></img>
            </button>
          </div>
          <img
            className={"home-screen-container__ill "}
            src={HomeScreenIll}
            alt="urgent care illustration"
          ></img>
        </div>
        <div className="scroll-action-container">
          <img src={ScrollIcon} alt="scroll icon"></img>
          Scroll to explore
        </div>
      </div>
    </div>
  );
}

export default HomeScreen;

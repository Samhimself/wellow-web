import React from 'react';
import MainImg from "../../images/EMR-img.svg";
import Card from "./Card";
import Img1 from "../../images/EMR-img-1.svg";
import Img2 from "../../images/EMR-img-2.svg";
import Img3 from "../../images/EMR-img-3.svg";

function EMR({classToAdd}) {

    const cardTitle1 = "Intuitive Interface";
    const cardTitle2 = "Workflow Automations";
    const cardTitle3 = "Telehealth Ecosystem";

    const cardText1 = "Designed to fit with the natural progression of decision making.";
    const cardText2 = "Predicts treatment plans, prescriptions, billing codes and more.";
    const cardText3 = "Seamless experience built into the EMR and patient application.";


    return (
        <div className={"EMR "}>
        <div className="EMR-container">
            <h2>Bring the next generation of EMRs <br></br> to your  Urgent Care practice</h2>
            <div className="EMR-content">
                <img src={MainImg} className="EMRimg" alt="EMR img"></img>
                <div className="cards-container">
                    <Card image={Img1} title={cardTitle1} text={cardText1} />
                    <Card image={Img2} title={cardTitle2} text={cardText2} />
                    <Card image={Img3} title={cardTitle3} text={cardText3} />
                </div>
            </div>
        </div>
        </div>
    )
}

export default EMR;
import React from 'react';
import MainImg from "../../images/RCM-img.svg";
import Card from "./Card";
import Img1 from "../../images/RCM-img-1.svg"
import Img2 from "../../images/RCM-img-2.svg"
import Img3 from "../../images/RCM-img-3.svg"

function RCMAnalytics({classToAdd}) {

    const cardTitle1 = "Predictive Coding Engine";
    const cardTitle2 = "Efficient Medical Billing ";
    const cardTitle3 = "Operational Metrics";

    const cardText1 = "Precisely predicts CPT codes to enhance billing accuracy and efficiency.";
    const cardText2 = "One click and done. We handle the rest. Track status of claims, analyze payor mixture, and examine coding distribution.";
    const cardText3 = "Monitor clinic performance, practice trends, and identify areas of growth.";


    return (
        <div className={"EMR "}>
        <div className="EMR-container">
            <h2>Automated RCM and Analytics With <br></br> KPIs At your fingertips.</h2>
            <div className="EMR-content">
                <img src={MainImg} className="EMRimg" alt="EMR img"></img>
                <div className="cards-container">
                    <Card image={Img1} title={cardTitle1} text={cardText1} color="card-container--RCM-color"/>
                    <Card image={Img3} title={cardTitle2} text={cardText2} color="card-container--RCM-color"/>
                    <Card image={Img2} title={cardTitle3} text={cardText3} color="card-container--RCM-color"/>
                </div>
            </div>
        </div>
        </div>
    )
}

export default RCMAnalytics;
import React from 'react';
import MainImg from "../../images/PA-img.svg";
import Card from "./Card";
import Img1 from "../../images/PA-img-1.svg"
import Img2 from "../../images/PA-img-2.svg"

function PatientApp({classToAdd}) {

    const cardTitle1 = "Patient intake and Payments";
    const cardTitle2 = "Medical Wallet";

    const cardText1 = "Streamlined intake & payment experience for patients. ";
    const cardText2 = "Patients can track their health and access their medical record.";


    return (
        <div className={"EMR last"}>
        <div className="EMR-container">
            <h2>Empower patients with our patient app</h2>
            <div className="EMR-content">
                <div className="cards-container">
                    <Card image={Img1} title={cardTitle1} text={cardText1} color="card-container--PA-color"/>
                    <Card image={Img2} title={cardTitle2} text={cardText2} color="card-container--PA-color"/>
                </div>
                <img src={MainImg} className="EMRimg" alt="EMR img"></img>
            </div>
        </div>
        </div>
    )
}

export default PatientApp;
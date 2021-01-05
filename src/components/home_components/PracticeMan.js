import React from 'react';
import MainImg from "../../images/PM-img.svg";
import Card from "./Card";
import Img1 from "../../images/PM-img-1.svg";
import Img2 from "../../images/PM-img-2.svg";
import Img3 from "../../images/PM-img-3.svg";

function PracticeMan({classToAdd}) {

    const cardTitle1 = "Efficient Scheduling & Intake Platform";
    const cardTitle2 = "Simple Follow-up";
    const cardTitle3 = "Office Tasks Made Easy.";

    const cardText1 = "Allows patients to self register online or on the patient app to expedite the intake process. ";
    const cardText2 = "Easily communicate results and documents with patients using the patient portal.";
    const cardText3 = "In-office messaging, and intuitive task management system to increase practice efficiency.";


    return (
        <div className={"EMR "}>
        <div className="EMR-container">
            <h2>Streamlined Practice Management</h2>
            <div className="EMR-content">
                <div className="cards-container">
                    <Card image={Img2} title={cardTitle1} text={cardText1} color="card-container--PM-color"/>
                    <Card image={Img3} title={cardTitle2} text={cardText2} color="card-container--PM-color"/>
                    <Card image={Img1} title={cardTitle3} text={cardText3} color="card-container--PM-color"/>
                </div>
                <img src={MainImg} className="EMRimg" alt="EMR img"></img>
            </div>
        </div>
        </div>
    )
}

export default PracticeMan;
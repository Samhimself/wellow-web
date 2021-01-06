import React from 'react'
import IEMRIcon from "../../images/IEMRicon.png"; //Can't use this svg because of mobile issues
import ARCMIcon from "../../images/ARCMicon.svg";
import PhoneIcon from "../../images/Phoneicon.svg";
import SPMIcon from "../../images/SPMicon.svg";
import THIcon from "../../images/THicon.svg";
import BAIcon from "../../images/BAicon.svg";

function ServicesP1() {
    return (
        <div className="urgent-care-needs-container">
        <h2>1 platform for all urgent care practice needs</h2>
        <div className="urgent-care-needs">
          <div className="needs-box">
            <div className="needs-box-need">
              <img src={IEMRIcon} className="IEMRicon" alt=""></img>
              <p>
                Intuitive Electronic <br></br> Medical Record
              </p>
            </div>
            <div className="needs-box-need">
              <img src={ARCMIcon} alt="services immages" className="ARCMicon"></img>
              <p>Automated Revenue Cycle Management</p>
            </div>
            <div className="needs-box-need">
              <img src={SPMIcon} alt="services immages" className="SPMicon"></img>
              <p>Streamlined Practice Management</p>
            </div>
            <div className="needs-box-need">
              <img src={BAIcon} alt="services immages" className="BAicon"></img>
              <p>Business Analytics</p>
            </div>
            <div className="needs-box-need">
              <img src={THIcon} alt="services immages" className="THicon"></img>
              <p>Built-In Telehealth</p>
            </div>
            <div className="needs-box-need">
              <img src={PhoneIcon} alt="services immages" className="Phoneicon"></img>
              <p>Patient Application</p>
            </div>
          </div>
          <div className="urgent-care-needs__recTop"></div>
          <div className="urgent-care-needs__recBtm"></div>
        </div>
      </div>
    )
}

export default ServicesP1;
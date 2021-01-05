import React, { Component } from "react";
import AboutImg from "../images/about-img.png";
import ContactUs from "./ContactUsAbout";
import Nav from "./Nav";
import Footer from "./Footer";
import { render } from "react-dom";

class About extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contactUs: "",
    };

    this.toggleContactUs = this.toggleContactUs.bind(this);
  }

  // show and hide contact us card
  toggleContactUs() {
    if (this.state.contactUs == "") {
      this.setState({ contactUs: "active" });
    } else {
      this.setState({ contactUs: "" });
    }
  }

  render() {
    return (
      <React.Fragment>
        <Nav btnHandler={this.toggleContactUs} />
        <ContactUs
          classToAdd={this.state.contactUs}
          classToAddBG={this.state.contactUs}
          btnHandler={this.toggleContactUs}
        />
        <div className="about-container">
          <div className="about-content">
            <h2>About us</h2>
            <h4>Who we are?</h4>
            <p>
              We are physicians and engineers striving to strengthen healthcare
              connections, by building platforms rooted in the humanity of
              medicine and enabled by modern software technologies.
            </p>
            <h4>Mission</h4>
            <p>
              Our aim is to enable urgent care clinics to better serve the
              health needs of their community, by partnering with clinics to
              optimize operational workflow and serving as connectors fostering
              trust and engagement.
            </p>
          </div>
          <img src={AboutImg} alt="img about"></img>
        </div>
      </React.Fragment>
    );
  }
}

export default About;

import React, { Component } from "react";
import ReactDOM from "react-dom";
import HomeScreen from "./home_components/HomeScreen";
import Services from "./home_components/Services";
import EMR from "./home_components/EMR";
import PracticeMan from "./home_components/PracticeMan";
import RCMAnalytics from "./home_components/RCMAnalytics";
import PatientApp from "./home_components/PatientApp";
import LetsTalk from "./home_components/LetsTalk";
import ContactUs from "./ContactUsHome";
import Nav from "./Nav";
import Footer from "./Footer";

class Home extends Component {
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
        <ContactUs
          classToAdd={this.state.contactUs}
          classToAddBG={this.state.contactUs}
          btnHandler={this.toggleContactUs}
        />
        <Nav btnHandler={this.toggleContactUs} />
        <HomeScreen btnHandler={this.toggleContactUs} />
        <Services />
        <EMR />
        <PracticeMan />
        <RCMAnalytics />
        <PatientApp />
        <LetsTalk btnHandler={this.toggleContactUs} />
      </React.Fragment>
    );
  }
}

export default Home;

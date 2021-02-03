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
      activeClass: "",
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

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        activeClass: "active"
      })
    }, 250);
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
        <div className={`home-page ${this.state.activeClass}`}>
          <HomeScreen btnHandler={this.toggleContactUs} />
          <div className="main-home-area">
            <Services />
            <EMR />
            <PracticeMan />
            <RCMAnalytics />
            <PatientApp />
          </div>
          <LetsTalk btnHandler={this.toggleContactUs} />
          <Footer btnHandler={this.toggleContactUs} />
        </div>
      </React.Fragment>
    );
  }
}

export default Home;

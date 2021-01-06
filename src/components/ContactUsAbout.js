import React, { Component } from "react";
import ExitButton from "../images/exit-button-img.svg";
import EmailIcon from "../images/email-img.svg";
import NameIcon from "../images/name-img.svg";
import emailjs from "emailjs-com";
import axios from "axios";

class ContactUs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullName: "",
      position: "",
      email: "",
      radioBtn: "",
      message: "",
      errorMsg: "",

      // css classes signifier
      radioYes: "",
      radioNo: "",
      submitted: "",
      submitBtn: "",
    };

    this.radioHandler = this.radioHandler.bind(this);
    this.nameHandler = this.nameHandler.bind(this);
    this.positionHandler = this.positionHandler.bind(this);
    this.emailHandler = this.emailHandler.bind(this);
    this.messageHandler = this.messageHandler.bind(this);
    this.validateSubmitBtn = this.validateSubmitBtn(this);
    this.submitHandler = this.submitHandler.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
  }

  nameHandler = (event) => {
    this.setState({
      fullName: event.target.value,
    });
  };

  positionHandler = (event) => {
    this.setState({
      position: event.target.value,
    });
  };

  emailHandler = (event) => {
    this.setState({
      email: event.target.value,
    });
  };

  messageHandler = (event) => {
    this.setState({
      message: event.target.value,
    });
  };

  radioHandler = (event) => {
    const value = event.target.value;

    // form state changes + css class modifier
    if (value == "yes") {
      this.setState({
        radioBtn: value,
        radioYes: "active",
        radioNo: "",
      });
    } else {
      this.setState({
        radioBtn: value,
        radioYes: "",
        radioNo: "active",
      });
    }
  };

  validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const result = re.test(String(email).toLowerCase());

    if (result === false) {
      this.setState({
        errorMsg: "Please enter a valid email",
      });
    }
    return result;
  }


  validateSubmitBtn() {
    this.setState({
      submitBtn: "hit"
    })
  }

  submitHandler(e) {
    e.preventDefault();

    //validate email entry
    if (this.state.fullName == "") {
      this.setState({
        errorMsg: "Please enter a name",
      });
      return "false";
    }

    //validate position entry
    if (this.state.position == "") {
      this.setState({
        errorMsg: "Please enter a position",
      });
      return "false";
    }

    //validate email entry
    const valid = this.validateEmail(this.state.email);
    if (this.state.email == "" || valid == false) {
      this.setState({
        errorMsg: "Please enter a valid email",
      });
      return "false";
    }

    //validate radio btn entry
    if (this.state.radioBtn == "") {
      this.setState({
        errorMsg: "Please choose Yes or No",
      });
      return "false";
    }

    //// FORM VALIDATED 
    // send email 
    emailjs
      .sendForm("gmail", "gmail_default", e.target, "user_7IJFURCLK8Up98pDoDHNb")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    
    // Reset UI fields and State fields 
    e.target.reset();
    this.setState({
      fullName: "",
      position: "",
      email: "",
      radioBtn: "",
      message: "",
      radioYes: "",
      radioNo: ""
    });

    // notify user of successful email submission
    this.setState({
      errorMsg: "Submitted",
      submitted: "submitted",
    });

    // Reset the remaining fields after notifying user for 5s
    setTimeout(() => {
      this.setState({
        errorMsg: "",
        submitted: ""
      });
    }, 5000);
  }


  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.submitHandler}>
          <div className={"absolute-parent-about " + this.props.classToAdd}>
            <div className="contact-us-frame">
              <div className="contact-us-rec1"></div>
              <div className="contact-us-rec2"></div>
              <div className="contact-us-container">
                <div className={"exit-btn-container"}>
                  <img
                    src={ExitButton}
                    className="exit-btn-container__button"
                    onClick={this.props.btnHandler}
                  ></img>
                </div>
                <h2> Get in touch </h2>
                <h3>Enter your details below</h3>
                <div className="input-container">
                  <img src={NameIcon}></img>
                  <input
                    placeholder="Full Name"
                    name="name"
                    type="text"
                    value={this.state.fullName}
                    onChange={this.nameHandler.bind(this)}
                  ></input>
                </div>
                <div className="input-container">
                  <img src={NameIcon}></img>
                  <input
                    placeholder="Position" name="position_area" type="text"
                    value={this.state.position}
                    onChange={this.positionHandler.bind(this)}
                  ></input>
                </div>
                <div className="input-container">
                  <img src={EmailIcon}></img>
                  <input
                    placeholder="Email Address"
                    name="email"
                    type="text"
                    value={this.state.email}
                    onChange={this.emailHandler.bind(this)}
                  ></input>
                </div>
                <h3>
                  Are you contacting us on behalf of an urgent care clinic?
                </h3>

                <div className="radio-btn-container">
                  <input
                    type="radio"
                    id="yes"
                    value="yes"
                    name="radio_btn"
                    onChange={this.radioHandler.bind(this)}
                  ></input>
                  <label
                    for="yes"
                    className={"radio-yes " + this.state.radioYes}
                  >
                    YES
                  </label>
                  <input
                    type="radio"
                    id="no"
                    value="no"
                    name="radio_btn"
                    onChange={this.radioHandler.bind(this)}
                  ></input>
                  <label for="no" className={"radio-no " + this.state.radioNo}>
                    NO
                  </label>
                </div>

                <textarea
                  name="message"
                  type="text"
                  className="message"
                  placeholder="Message (Optional)"
                  value={this.state.message}
                  onChange={this.messageHandler}
                ></textarea>
                <div className="submit-container">
                  <button
                    type="submit"
                    className="submit-btn"
                    onClick={this.validateSubmitBtn}
                  >
                    Send now
                  </button>
                  <button
                    className="cancel-btn"
                    type="button"
                    onClick={this.props.btnHandler}
                  >
                    Cancel
                  </button>
                </div>
                <h5 className={"error-msg " + this.state.submitted}>
                  {this.state.errorMsg}
                </h5>
              </div>
            </div>
          </div>
        </form>
      </React.Fragment>
    );
  }
}

export default ContactUs;

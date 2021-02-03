import react, { Component } from "react";
import "./App.css";
import "./App_Responsive.css";
import "./inter-cufonfonts-webfont/style.css";
import "./syne-cufonfonts-webfont/style.css";
import Home from "./components/Home";
import About from "./components/About";
import Terms from "./components/Terms";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HashRouter as Router, Switch, Route  } from 'react-router-dom'
import ScrollToTop from "./components/ScrollToTop";

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          {/* <Nav /> */}
          <ScrollToTop>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/about" exact component={About} />
              <Route path="/terms" exact component={Terms} />
            </Switch>
          </ScrollToTop>
          {/* <Footer /> */}
        </div>
      </Router>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./pages/Landing";
import Page2 from "./pages/Page2";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

class App extends Component {

  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar/>
          <Switch>
            <Route exact path = "/" component = {Landing} />
          </Switch>

          <Footer />
        </div>
      </Router>
    )
  }
}


export default App;

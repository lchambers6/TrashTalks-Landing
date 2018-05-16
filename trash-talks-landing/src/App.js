import React, { Component } from 'react';
import Footer from "./components/footer/Footer";
import NavBar from "./components/navbar/NavBar";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <NavBar />
        <header className="App-header">
          <h1 className="App-title">Trash Talks</h1>
        </header>
        <p className="App-intro">
          Founders: Luke Chambers, Jackie Alexander, Arturo Salmeron
        </p>
        <Footer />
      </div>
    );
  }
}


export default App;

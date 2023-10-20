import "./App.css";
import Navbar from "./components/Navbar"
import React, { Component } from 'react'
import News from "./components/News";

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <div className="container my-3">
            <h2>Top Headlines</h2>
            <News/>
        </div>
        
        </div>
    )
  }
}

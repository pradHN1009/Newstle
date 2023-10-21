import "./App.css";
import Navbar from "./components/Navbar"
import React, { Component } from 'react'
import News from "./components/News";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default class App extends Component {
    constructor(){
        super();
        this.state = {
            mode : "light",
            country : "in",
        }
    }
    toggleMode = () => {
        if(this.state.mode === "light"){
            this.setState({mode : "dark"})
            document.body.style.backgroundColor = "#0F0F0F"
        }
        else{
            this.setState({mode : "light"})
            document.body.style.backgroundColor = "white"
        }
    }
  render() {
    return (
    <div>
        <BrowserRouter>
        <Navbar mode = {this.state.mode} toggleFunc = {this.toggleMode}/>
        <div className="container my-3">
            <Routes>
                <Route exact path="/" element={<News key="general" mode = {this.state.mode} country = {this.state.country} category = "general" />}/> 
                <Route exact path="/general" element={<News key="general" mode = {this.state.mode} country = {this.state.country} category = "general" />}/>
                <Route exact path="/business" element={<News key="business" mode = {this.state.mode} country = {this.state.country} category = "business" />}/>
                <Route exact path="/entertainment" element={<News key="entertainment" mode = {this.state.mode} country = {this.state.country} category = "entertainment" />}/>
                <Route exact path="/health" element={<News key="health" mode = {this.state.mode} country = {this.state.country} category = "health" />}/>
                <Route exact path="/science" element={<News key="science" mode = {this.state.mode} country = {this.state.country} category = "science" />}/>
                <Route exact path="/sports" element={<News key="sports" mode = {this.state.mode} country = {this.state.country} category = "sports" />}/>
                <Route exact path="/technology" element={<News key="technology" mode = {this.state.mode} country = {this.state.country} category = "technology" />}/>
            </Routes>
            </div>
        </BrowserRouter>
    </div>
    )
  }
}

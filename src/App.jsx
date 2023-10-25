import "./App.css";
import Navbar from "./components/Navbar"
import React, { Component } from 'react'
import News from "./components/News";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
    apiKey = process.env.REACT_APP_API_KEY
    constructor(){
        super();
        this.state = {
            mode : "light",
            country : "in",
            progress : 0
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
    setProgress = (progress) => {
        this.setState({progress : progress})
    }
  render() {
    return (
    <div>
        <BrowserRouter>
        <Navbar mode = {this.state.mode} toggleFunc = {this.toggleMode}/>
        <LoadingBar
        color={this.state.mode === 'light' ? '#0d6efd' : 'white'}
        progress={this.state.progress}
        onLoaderFinished={() => this.setProgress(0)}
      />
        <div className="container my-3">
            <Routes>
                <Route exact path="/" element={<News setProgress={this.setProgress} apiKey = {this.apiKey} key="general" mode = {this.state.mode} country = {this.state.country} category = "general" />}/> 
                <Route exact path="/general" element={<News setProgress={this.setProgress} apiKey = {this.apiKey} key="general" mode = {this.state.mode} country = {this.state.country} category = "general" />}/>
                <Route exact path="/business" element={<News setProgress={this.setProgress} apiKey = {this.apiKey} key="business" mode = {this.state.mode} country = {this.state.country} category = "business" />}/>
                <Route exact path="/entertainment" element={<News setProgress={this.setProgress} apiKey = {this.apiKey} key="entertainment" mode = {this.state.mode} country = {this.state.country} category = "entertainment" />}/>
                <Route exact path="/health" element={<News setProgress={this.setProgress} apiKey = {this.apiKey} key="health" mode = {this.state.mode} country = {this.state.country} category = "health" />}/>
                <Route exact path="/science" element={<News setProgress={this.setProgress} apiKey = {this.apiKey} key="science" mode = {this.state.mode} country = {this.state.country} category = "science" />}/>
                <Route exact path="/sports" element={<News setProgress={this.setProgress} apiKey = {this.apiKey} key="sports" mode = {this.state.mode} country = {this.state.country} category = "sports" />}/>
                <Route exact path="/technology" element={<News setProgress={this.setProgress} apiKey = {this.apiKey} key="technology" mode = {this.state.mode} country = {this.state.country} category = "technology" />}/>
            </Routes>
            </div>
        </BrowserRouter>
    </div>
    )
  }
}

import "./App.css";
import Navbar from "./components/Navbar"
import React, { useState } from 'react'
import News from "./components/News";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = () => {
    const apiKey = process.env.REACT_APP_API_KEY
    const [mode, setmode] = useState("light")
    const [country, setcountry] = useState("in")
    const [progress, setprogress] = useState(0)
    const toggleMode = () => {
        if(mode === "light"){
            setmode("dark")
            document.body.style.backgroundColor = "#0F0F0F"
        }
        else{
            setmode("light")
            document.body.style.backgroundColor = "white"
        }
    }
    return (
    <div>
        <BrowserRouter>
        <Navbar mode = {mode} toggleFunc = {toggleMode}/>
        <LoadingBar
        color={mode === 'light' ? '#0d6efd' : 'white'}
        progress={progress}
        onLoaderFinished={() => setprogress(0)}
      />
        <div className="container my-3">
            <Routes>
                <Route exact path="/" element={<News setProgress={setprogress} apiKey = {apiKey} key="general" mode = {mode} country = {country} category = "general" />}/> 
                <Route exact path="/general" element={<News setProgress={setprogress} apiKey = {apiKey} key="general" mode = {mode} country = {country} category = "general" />}/>
                <Route exact path="/business" element={<News setProgress={setprogress} apiKey = {apiKey} key="business" mode = {mode} country = {country} category = "business" />}/>
                <Route exact path="/entertainment" element={<News setProgress={setprogress} apiKey = {apiKey} key="entertainment" mode = {mode} country = {country} category = "entertainment" />}/>
                <Route exact path="/health" element={<News setProgress={setprogress} apiKey = {apiKey} key="health" mode = {mode} country = {country} category = "health" />}/>
                <Route exact path="/science" element={<News setProgress={setprogress} apiKey = {apiKey} key="science" mode = {mode} country = {country} category = "science" />}/>
                <Route exact path="/sports" element={<News setProgress={setprogress} apiKey = {apiKey} key="sports" mode = {mode} country = {country} category = "sports" />}/>
                <Route exact path="/technology" element={<News setProgress={setprogress} apiKey = {apiKey} key="technology" mode = {mode} country = {country} category = "technology" />}/>
            </Routes>
            </div>
        </BrowserRouter>
    </div>
    )
}

export default App
import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import "./Navbar.css"

const Navbar= (props) => {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary" id = "navbar" data-bs-theme = {props.mode}>
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/"><h4 style = {{marginTop : "7px"}}>Newstle</h4></NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item"><NavLink className={`nav-link ${props.mode === 'light' ? 'light' : 'dark'}`} aria-current="page" to="/">General</NavLink></li>
                    <li className="nav-item"><NavLink className={`nav-link ${props.mode === 'light' ? 'light' : 'dark'}`} to="/business">Business</NavLink></li>
                    <li className="nav-item"><NavLink className={`nav-link ${props.mode === 'light' ? 'light' : 'dark'}`} to="/entertainment">Entertainment</NavLink></li>
                    <li className="nav-item"><NavLink className={`nav-link ${props.mode === 'light' ? 'light' : 'dark'}`} to="/health">Health</NavLink></li>
                    <li className="nav-item"><NavLink className={`nav-link ${props.mode === 'light' ? 'light' : 'dark'}`} to="/science">Science</NavLink></li>
                    <li className="nav-item"><NavLink className={`nav-link ${props.mode === 'light' ? 'light' : 'dark'}`} to="/sports">Sports</NavLink></li>
                    <li className="nav-item"><NavLink className={`nav-link ${props.mode === 'light' ? 'light' : 'dark'}`} to="/technology">Technology</NavLink></li>
                </ul>
                <input type="checkbox" className="btn-check" id="btn-check-4" autoComplete="off" onClick={props.toggleFunc}/>
                <label className={`btn btn-${props.mode === "light" ? "primary" : "dark"}`} htmlFor="btn-check-4">{props.mode === "light" ? "Dark" : "Light"} Mode</label>
                </div>
            </div>
            </nav>
      </div>
    )
}

Navbar.propTypes = {
    mode : PropTypes.string,
    toggleFunc : PropTypes.func
}

Navbar.defaultProps = {
    mode : "light",
    toggleFunc : () => {}
}

export default Navbar
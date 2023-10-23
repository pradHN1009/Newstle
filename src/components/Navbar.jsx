import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import "./Navbar.css"

export default class Navbar extends Component {
    static defaultProps = {
        mode : "light",
        toggleFunc : () => {}
    }
    static propTypes = {
        mode : PropTypes.string,
        toggleFunc : PropTypes.func
    }
  render() {
    let {mode , toggleFunc} = this.props;
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary" id = "navbar" data-bs-theme = {mode}>
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/"><h4>Newstle</h4></NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item"><NavLink className={`nav-link ${mode === 'light' ? 'light' : 'dark'}`} aria-current="page" to="/">General</NavLink></li>
                    <li className="nav-item"><NavLink className={`nav-link ${mode === 'light' ? 'light' : 'dark'}`} to="/business">Business</NavLink></li>
                    <li className="nav-item"><NavLink className={`nav-link ${mode === 'light' ? 'light' : 'dark'}`} to="/entertainment">Entertainment</NavLink></li>
                    <li className="nav-item"><NavLink className={`nav-link ${mode === 'light' ? 'light' : 'dark'}`} to="/health">Health</NavLink></li>
                    <li className="nav-item"><NavLink className={`nav-link ${mode === 'light' ? 'light' : 'dark'}`} to="/science">Science</NavLink></li>
                    <li className="nav-item"><NavLink className={`nav-link ${mode === 'light' ? 'light' : 'dark'}`} to="/sports">Sports</NavLink></li>
                    <li className="nav-item"><NavLink className={`nav-link ${mode === 'light' ? 'light' : 'dark'}`} to="/technology">Technology</NavLink></li>
                </ul>
                <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick = {toggleFunc}/>
                        <label className={`form-check-label text-${mode === "light" ? "dark" : "light"}`} htmlFor="flexSwitchCheckDefault"> Dark Mode</label>
                </div>
                </div>
            </div>
            </nav>
      </div>
    )
  }
}

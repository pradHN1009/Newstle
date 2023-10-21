import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
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
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme = {mode}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/"><h4>Newstle</h4></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">General</a>
                    </li>
                    <li className="nav-item"><Link className="nav-link" to="/business">Business</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/entertainment">Entertainment</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/health">Health</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/science">Science</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/sports">Sports</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/technology">Technology</Link></li>
                </ul>
                <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick = {toggleFunc}/>
                        <label class={`form-check-label text-${mode === "light" ? "dark" : "light"}`} for="flexSwitchCheckDefault"> Dark Mode</label>
                </div>
                </div>
            </div>
            </nav>
      </div>
    )
  }
}

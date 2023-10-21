import React, { Component } from "react";

export default class Spinner extends Component {
  render() {
    return (
        <div className="text-center">
            <div className="spinner-grow text-primary my-5" role="status">
                <span className="visually-hidden"> Loading... </span>{" "}
            </div>
        </div>
      
    );
  }
}

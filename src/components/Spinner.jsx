import React from "react";

const Spinner = () => {
    return (
        <div className="text-center">
            <div className="spinner-grow text-primary my-5" role="status">
                <span className="visually-hidden"> Loading... </span>{" "}
            </div>
        </div>
      
    );
}

export default Spinner

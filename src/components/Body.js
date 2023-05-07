import React from "react";
import { Link } from "react-router-dom";
import Contact from "./Contact";

const Body = () =>{
    return(
        <div className="homePhoto">
            <div className="container">
                <h1>Kaizen</h1>
                <p>NEVER ENDING IMPROVEMENT</p>
                <Link className="Link" to={'/Contact'}> <p>Shop All</p></Link>
            </div>
        </div>
    )
}

export default Body
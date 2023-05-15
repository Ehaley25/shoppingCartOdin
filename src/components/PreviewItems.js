import React from "react";
import Products from "./Products";

const PreviewItems = () =>{

    return(
        <div className="homePagePreview">
            <h1>CLOTHING MADE FOR EVERYDAY ACTIVITY</h1>
            <h3 className="container">Featured Products</h3>
            <div className="container">
                <Products />
            </div>
        </div>
    )
}
export default PreviewItems
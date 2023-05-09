import React from "react";
import { inventory } from "../data/clotheData";
import { Link } from "react-router-dom";

const PreviewItems = () =>{

    function viewInventory() {
        return(
            inventory.map( data => {
                return(
                    <div key={data._id}>
                        <img src={data.img} alt="This is a test" />
                        <Link className="link-products" to={`/product/${data._id}`}>
                            <p>{data.title}</p>
                            <p>${data.price}.00 USD</p>
                        </Link>
                    </div>
                )
            })
        )
    }
    return(
        <div className="homePagePreview">
            <h1>CLOTHING MADE FOR EVERYDAY ACTIVITY</h1>
            <h3 className="container">Featured Products</h3>
            <div className="container">
                    {viewInventory()}
            </div>
        </div>
    )
}
export default PreviewItems
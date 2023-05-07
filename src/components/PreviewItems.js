import React from "react";
import { inventory } from "../data/clotheData";


const PreviewItems = () =>{

    function viewInventory() {
        return(
            inventory.map( (data, id) => {
                return(
                    <div key={id}>
                        <img src={data.img} alt="This is a test" />
                        <p>{data.title}</p>
                        <p>$ {data.price}.00 USD</p>
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
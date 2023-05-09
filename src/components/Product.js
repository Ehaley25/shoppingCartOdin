import {React} from "react";
import { useParams } from "react-router-dom";
import { inventory } from "../data/clotheData";
const Product = () =>{
    const {id} = useParams()
    const clothing = inventory.find(clothe => clothe._id == id)
    
    const mainProduct = () => {
            return(
                <div>
                    <p>{clothing.title}</p>
                </div>
            )
    }

    return(
        <div>
            {mainProduct()}
        </div>
    )
}

export default Product
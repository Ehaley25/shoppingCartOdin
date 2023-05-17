import {React} from "react";
import { useParams } from "react-router-dom";
import { inventory } from "../data/clotheData";
import Increment from "./Increment";
const Product = () =>{
    // const {isSelected , setIsSelected} = useState(false)
    const {id} = useParams()
    const clothing = inventory.find(clothe => clothe._id == id)

    return(
        <div className="border-top">
            <div className="container viewOne" >
                <img src={clothing.img} alt={`${clothing.title}`}/>
                <div>
                    <p>React</p>
                    <h1>{clothing.title}</h1>
                    <p>${clothing.price}.00 USD</p>
                    <p>Size</p>
                    <button>Small</button>
                    <button>Medium</button>
                    <button>Large</button>
                    <Increment 
                        title={clothing.title}
                        price={clothing.price} 
                        img={clothing.img} 
                    />
                </div>
            </div>
        </div>
    )
}

export default Product
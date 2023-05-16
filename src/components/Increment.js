import {React , useState , useContext} from "react";
import { MyContext } from "../context/MyContext";

const Increment = () =>{
    const [quantity , setQuantity] = useState(0)
    const {cartAmount , setCartAmount} = useContext(MyContext)
    function add(){
        setQuantity(quantity+1)
    }
    function subtract(){
        if(quantity > 0){
            setQuantity(quantity-1)
        }
    }

    function submitOrder(e){
        e.preventDefault()
        setCartAmount(prev =>{
            return(prev + quantity)
        })
    }


    return(
        <form onSubmit={submitOrder}>
            <p>Quantity</p>
            <div className="increment">
                <button type="button" onClick={subtract}>-</button>
                <input value={quantity} type='number'></input>
                <button type="button" onClick={add}>+</button>
            </div>
            <button>Buy It Now</button>
        </form>
    )
}

export default Increment
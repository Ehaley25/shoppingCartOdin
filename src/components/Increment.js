import {React , useState , useContext, useEffect} from "react";
import { MyContext } from "../context/MyContext";

const Increment = (props) =>{
    const [quantity , setQuantity] = useState(0)
    const {cart , setCart , data , setData} = useContext(MyContext)
    function add(){
        setQuantity(quantity+1)
    }
    function subtract(){
        if(quantity > 0){
            setQuantity(quantity-1)
        }
    }

    function submitOrder(e){
        let arr = [...cart]
        e.preventDefault()
        console.log(cart)
        arr.push({ _id:cart.length + 1 ,title:props.title , price:props.price , img: props.img })
        setCart(arr)
    }

    useEffect(() =>{
        console.log(cart)
    },[cart])


    return(
        <form onSubmit={submitOrder}>
            <p>Quantity</p>
            <div className="increment">
                <button type="button" onClick={subtract}>-</button>
                <input value={quantity} type='number'></input>
                <button type="button" onClick={add}>+</button>
            </div>
            <button>Add to Cart</button>
        </form>
    )
}

export default Increment
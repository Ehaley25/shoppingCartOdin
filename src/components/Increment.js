import {React , useState} from "react";


const Increment = () =>{
    const [quantity , setQuantity] = useState(0)

    function add(){
        setQuantity(quantity+1)
    }
    function subtract(){
        if(quantity > 0){
            setQuantity(quantity-1)
        }
    }

    return(
        <div className="increment">
            <button onClick={subtract}>-</button>
            <input value={quantity} type='number'></input>
            <button onClick={add}>+</button>
        </div>
    )
}

export default Increment
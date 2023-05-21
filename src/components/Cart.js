import {React, useContext} from "react";
import { MyContext } from '../context/MyContext'


const Cart = () =>{

    const {cart , setCart} = useContext(MyContext)

    console.log(cart)
    return(
        <div className="border-top">
            <div className="container ">
                {
                    !cart.length ? <p>Im an empty Cart</p> :
                    <p>{cart.length}</p>
                }
            </div>
        </div>
    )
}


export default Cart
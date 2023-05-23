import {React, useContext } from "react";
import { MyContext } from '../context/MyContext'


const Cart = () =>{

    const {cart , setCart} = useContext(MyContext)

    function removeItem(id){
        let newCart = cart.filter(item => item._id !== id)
        setCart(newCart)
    }


    function cartItems(){
        return(
            cart.map((item , key) =>{
                return(
                    <div key={key} className="checkout-Layout">
                        <img src={item.img} alt="This is a test" />
                        <div className="checkout-details">
                            <p>{item.title}</p>
                            <p>{item.price}</p>
                            <button onClick={() => removeItem(item._id)}>bye</button>
                        </div>
                    </div>
                )
            })
        )
    }

    cartItems()
    console.log(cart)
    return(
        <div className="border-top mid-screen">
            <div className="checkOut ">
                {
                    !cart.length ? <p>Im an empty Cart</p> :
                    cartItems()
                }
            </div>
        </div>
    )
}


export default Cart
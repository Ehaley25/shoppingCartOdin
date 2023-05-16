import {React, useState } from 'react'
import { MyContext } from './MyContext'

const Context = ({children}) =>{


    const [cartAmount , setCartAmount] = useState(0)

    return(
        <MyContext.Provider value={{cartAmount , setCartAmount}}>
            {children}
        </MyContext.Provider>
    )
}

export default Context
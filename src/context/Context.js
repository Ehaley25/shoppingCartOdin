import {React, useState } from 'react'
import { MyContext } from './MyContext'
import { inventory } from '../data/clotheData'
const Context = ({children}) =>{


    const [cart , setCart] = useState([])
    const [data, setData] = useState(inventory)

    return(
        <MyContext.Provider value={{cart , setCart , data , setData}}>
            {children}
        </MyContext.Provider>
    )
}

export default Context
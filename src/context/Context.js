import {React } from 'react'
import { MyContext } from './MyContext'

const Context = ({children}) =>{


    const test = "elijah"

    return(
        <MyContext.Provider value={{test}}>
            {children}
        </MyContext.Provider>
    )
}

export default Context
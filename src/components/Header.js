import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import Context from '../context/Context'
import { MyContext } from '../context/MyContext'
const Header = () =>{

    const {cart , setCart} = useContext(MyContext)
    
    
    return(
            <div className='header container'>
                <div>
                    <ul className='page-links'>
                        <Link className='header-li' to={'/'}><li>Home</li></Link>
                        <Link className='header-li' to={'/catalog'}><li>Catalog</li></Link>
                        <Link className='header-li' to={'/contact'}><li>Contact</li></Link>
                    </ul>
                </div>
                <div className='icons'>
                    <div>
                        <i class="fa" style={{fontSize:'24px'}}>&#xf07a;</i>
                        <span class='badge badge-warning' id='lblCartCount'> {cart.length} </span>
                    </div>
                    <h1>Test</h1>
                </div>
            </div>
    )
}
export default Header

// icons is a name for now will change when ready to deploy, just need to get some code put out
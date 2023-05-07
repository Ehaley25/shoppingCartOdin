import React from 'react'
import {Link} from 'react-router-dom'

const Header = () =>{
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
                <h1>Test</h1>
                <h1>Test</h1>
            </div>
        </div>
    )
}
export default Header

// icons is a name for now will change when ready to deploy, just need to get some code put out
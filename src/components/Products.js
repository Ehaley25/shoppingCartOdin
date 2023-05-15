import {React} from 'react'
import { inventory } from '../data/clotheData'
import {Link} from 'react-router-dom'

const Products = () =>{
    return(
        inventory.map( data => {
            return(
                <div key={data._id}>
                    <img src={data.img} alt="This is a test" />
                    <Link className="link-products" to={`/product/${data._id}`}>
                        <p>{data.title}</p>
                        <p>${data.price}.00 USD</p>
                    </Link>
                </div>
            )
        })
    )
}

export default Products
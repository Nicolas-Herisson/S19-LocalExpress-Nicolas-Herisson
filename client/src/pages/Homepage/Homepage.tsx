import './Homepage.scss'
import Product from "@/components/Product/Product"
import Cart from "@/components/Cart/Cart"



export default function Homepage() {



    return (
        <div className="homepage">
            <Product />
            <Cart />
        </div>
    )
}


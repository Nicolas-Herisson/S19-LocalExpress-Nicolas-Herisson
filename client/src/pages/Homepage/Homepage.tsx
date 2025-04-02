import { useEffect, useState } from "react"
import { getProducts } from "../../services/requests"
import type { IProduct, IProductInCart } from "../../@types"
import './Homepage.scss'
import ProductCard from "../../components/Cards/Product/productCard"
import BasketCard from "../../components/Cards/Basket/basketCard"


export default function Homepage() {

    const [productsByCategory, setProductsByCategory] = useState([]);
    const [cart, setCart] = useState<IProductInCart[]>([]);

    async function fetchProducts() {
        try {
            const fetchedProducts = await getProducts();
            const filteredProducts = Object.groupBy(fetchedProducts, (product: IProduct) => product.category);
            setProductsByCategory(filteredProducts);
        } catch (error) {
            console.error(error);
        }
    }
    
    useEffect(() => {
        fetchProducts();
    }, [])

    return (
        <div className="homepage">
            <div className="homepage__products-container">
                {productsByCategory.length === 0 && <p>Loading...</p>}
                {Object.entries(productsByCategory).map(([category, products]: [string, IProduct[]]) => (
                    <div className="homepage__category-container" key={category}>
                        <h2 className="homepage__category">{category}</h2>
                        <div className="homepage__products">
                            {products.map((product: IProduct) => (
                                <ProductCard key={product.id} product={product} cart={cart} setCart={setCart}/>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <div className="homepage__cart">
                <div className="homepage__cart-header">
                    <h2 className="homepage__cart-title">Panier</h2>
                    <button type="button" className="homepage__cart-button" onClick={() => setCart([])}>Vider</button>
                </div>
                <div className="homepage__cart-products">
                    {cart.length === 0 && <p>Panier vide</p>}
                    {cart.map((product: IProductInCart) => (
                        <BasketCard key={product.id} product={product} setCart={setCart} />
                    ))}
                </div>
                <div className="homepage__cart-total">
                    <div className="homepage__cart-total--price"><strong>Total: {cart.reduce((total, product) => total + product.price * product.quantity, 0)} €</strong></div>
                </div>
            </div>
        </div>
    )
}
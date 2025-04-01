import { useEffect, useState } from "react"
import { getProducts } from "../../services/requests"
import type { IProduct } from "../../@types"
import './Homepage.scss'
import Card from "../../components/Card/Card"


export default function Homepage() {

    const [productsByCategory, setProductsByCategory] = useState([]);

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
            {productsByCategory.length === 0 && <p>Loading...</p>}
            {Object.entries(productsByCategory).map(([category, products]: [string, IProduct[]]) => (
                <div className="homepage__category-container" key={category}>
                    <h2 className="homepage__category">{category}</h2>
                    <div className="homepage__products">
                        {products.map((product: IProduct) => (
                            <div key={product.id}>
                                <Card product={product} />
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}
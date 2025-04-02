import { useEffect, useState } from "react"
import type { IProduct } from "@/@types"
import ProductList from "@/components/Product/ProductList/ProductList"
import { getProducts } from "@services/requests"
import "./Product.scss"

export default function Product() {
    const [products, setProducts] = useState<IProduct[]>([]);

    function groupedByCategory(products: IProduct[]) {
        const grouped = Object.groupBy(products, (product: IProduct) => product.category);
        return  grouped as GroupedProducts;
    }

    async function fetchProducts() {
        try {
            const fetchedProducts = await getProducts();

            setProducts(fetchedProducts);
        } catch (error) {
            console.error(error);
        }
    }
    
    useEffect(() => {
        fetchProducts();
    }, [])
    return (
        <div className="products">
            {products.length === 0 && <p>Loading...</p>}
            <ProductList products={groupedByCategory(products)} />
        </div>
    )
}

interface GroupedProducts {
    [category: string]: IProduct[]
}
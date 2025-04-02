import type { IProduct } from "@/@types";    
import ProductCard from "@/components/Product/ProductCard/productCard";
import './productLists.scss';

export default function ProductList({ products }: ProductListProps) {
    return (
        <>
        {Object.entries(products).map(([category, products]: [string, IProduct[]]) => (
            <div className="product-list__category-container" key={category}>
                <h2 className="product-list__category">{category}</h2>
                <div className="product-list__products">
                    {products.map((product: IProduct) => (
                        <ProductCard key={product.id} product={product}/>
                    ))}
                </div>
            </div>
        ))}
        </>
    )
}

interface ProductListProps {
    products: GroupedProducts;
}

interface GroupedProducts {
    [category: string]: IProduct[]
}

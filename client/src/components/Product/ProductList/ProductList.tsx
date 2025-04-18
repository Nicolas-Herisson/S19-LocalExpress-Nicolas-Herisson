import type { IProduct } from "@/@types";    
import ProductCard from "@/components/Product/ProductCard/productCard";
import './productLists.scss';
import { useSelector } from "react-redux";
import { getGroupedByCategoryProducts } from "@/store/selector/productSelector";
import { useAppDispatch } from "@/hooks/redux";
import { useEffect } from "react";
import type { RootState } from "@/store";
import { fetchProducts } from "@/store/features/productSlice";

export default function ProductList() {
    const dispatch = useAppDispatch();
    const { loading } = useSelector((state: RootState) => state.product);
    const groupedProducts = useSelector(getGroupedByCategoryProducts) as GroupedProducts;

    useEffect(() => {
        if (loading === 'idle')
            dispatch(fetchProducts());
    }, [dispatch, loading])

    if (loading === 'failed')
        return <p>Failed to load products</p>;

    if (loading === 'pending')
        return <p>Loading...</p>;

    return (
        <>
        {loading === 'succeeded' && 
        Object.entries(groupedProducts).map(([category, products]: [string, IProduct[]]) => (
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

interface GroupedProducts {
    [category: string]: IProduct[]
}

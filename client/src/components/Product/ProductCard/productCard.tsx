import type { IProduct, IProductInCart } from "@/@types";
import './productCard.scss'
import Button from "@components/Button/Button";
import { useAppDispatch } from "@/hooks/redux";
import { addProduct } from "@/store/features/cartSlice";

export default function ProductCard({ product }: ProductCardProps) {

    const dispatch = useAppDispatch();

    const handleAddToCart = () => {
        dispatch(addProduct({ ...product, quantity: 1 } as IProductInCart));
    }

    return (
        <div className="product-card">

            <img className="product-card__image" src={product.images[0]} alt={product.title} />

            <div className="product-card__title"><strong>{product.title}</strong></div>
            <div className="product-card__description"> <em>{`${product.description.slice(0, 50)} ...`}</em> </div>

            <div className="product-card--Footer">
                <div className="product-card__price">{`${product.price} €`}</div>
                <Button label="Ajouter" onClick={handleAddToCart} />
            </div>
        </div>
    )
}

interface ProductCardProps {
    product: IProduct;
}
import type { IProduct, IProductInCart } from "@/@types";
import './productCard.scss'
import Button from "@components/Button/Button";
import { useAppDispatch } from "@/hooks/redux";
import { addProduct } from "@/store/features/cartSlice";
import { useState } from "react";
import ProductDetails from "../ProductDetails/ProductDetails";

export default function ProductCard({ product }: ProductCardProps) {
    const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
    const dispatch = useAppDispatch();

    const handleAddToCart = () => {
        dispatch(addProduct({ ...product, quantity: 1 } as IProductInCart));
    }

    return (
        <article className="product-card">
            <button type="button" className="product-card__button" onClick={() => (setIsOpenModal(true))}>
                <img className="product-card__image" src={product.images[0]} alt={product.title} />

                <div className="product-card__title"><strong>{product.title}</strong></div>
                <div className="product-card__description"> <em>{`${product.description.slice(0, 50)} ...`}</em> </div>
            </button>

            <div className="product-card--Footer">
                <div className="product-card__price">{`${product.price} €`}</div>
                <Button label="Ajouter" className="add" onClick={handleAddToCart} />
            </div>
            {isOpenModal && ProductDetails({ product, setIsOpenModal, handleAddToCart })}
        </article>
    )
}

interface ProductCardProps {
    product: IProduct;
}
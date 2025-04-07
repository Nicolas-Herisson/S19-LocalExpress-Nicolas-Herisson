import type { IProduct, IProductInCart } from "@/@types";
import './ProductDetails.scss'
import Button from "@components/Button/Button";
import Modal from "@/ui/Modal/Modal";
import type { Dispatch, SetStateAction } from "react";
import { createPortal } from "react-dom";

export default function ProductDetails({ product, setIsOpenModal, handleAddToCart }: ProductDetailsProps) {

    return (
        createPortal(
            <Modal setIsOpenModal={setIsOpenModal} >
            
                <article className="product-details">
                    <div className="product-details--title"><strong>{product.title}</strong></div>
                    <div className="product-details--image">
                        <img src={product.images[0]} alt={product.title} />
                </div>
                <div>{product.description}</div>
                <div>{`stock: ${product.stock}`}</div>
                <div>{`note: ${product.rating}`}</div>

                {/* <div className="footer"> */}
                    {product.discountPercentage ? (
                        <>
                        <div className="product-detils--discounted-price">{(product.price * (1 - product.discountPercentage / 100)).toFixed(2)}</div>
                        <div className="product-details--lineThrough-price">
                            {product.price} €   
                        </div>
                        
                        </>
                    ) :
                        <div className="product-details--price">{product.price}</div>
                    }
                    
                    <Button label="Ajouter" className="add" onClick={handleAddToCart} />
                {/* </div> */}
            </article>
        </Modal>,
        document.getElementById('portal-modal') as Element
    ))
}

interface ProductDetailsProps {
    product: IProduct;
    setIsOpenModal: Dispatch<SetStateAction<boolean>>;
    handleAddToCart: () => void;
}

import type { IProduct, IProductInCart } from "../../../@types";
import './productCard.scss'
import Button from "../../Button/Button";

export default function ProductCard({ product, cart, setCart }: ProductCardProps) {

    const handleAddToCart = () => {
        if (cart.some((item: IProductInCart) => item.id === product.id)) {
            setCart((prevCart: IProductInCart[]) => prevCart.map((item: IProductInCart) => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item))
        } else {
            setCart((prevCart: IProductInCart[]) => [...prevCart, { ...product, quantity: 1 }])
        }
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
    cart: IProductInCart[];
    setCart: React.Dispatch<React.SetStateAction<IProductInCart[]>>;
}
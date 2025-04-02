import './basketCard.scss'
import type { IProductInCart } from "../../../@types";
import Button from "../../Button/Button";

export default function BasketCard({ product, setCart }: BasketCardProps) {

    const handleRemoveFromCart = () => {
        setCart((prevCart: IProductInCart[]) => prevCart.filter((item: IProductInCart) => item.id !== product.id))
    }

    const total = product.price * product.quantity;

    return (
        <div className="basket-card">

            <div className="basket-card--Header">
                <Button label="x" onClick={handleRemoveFromCart} />
            </div>
            <div className="basket-card--Body">
                <img className="basket-card__image" src={product.images[0]} alt={product.title} />

                <div className="basket-card__title">{product.title}</div>
            </div>
            <div className="basket-card--Footer">
                <div className="basket-card__price"><strong>{`${total} €`}</strong></div>
                <input type="number" value={product.quantity} onChange={(e) => setCart((prevCart: IProductInCart[]) => prevCart.map((item: IProductInCart) => item.id === product.id ? { ...item, quantity: Number(e.target.value) } : item))} />
            </div>
        </div>
    )
}

interface BasketCardProps {
    product: IProductInCart;
    setCart: React.Dispatch<React.SetStateAction<IProductInCart[]>>;
}

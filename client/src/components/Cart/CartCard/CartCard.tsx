import './CartCard.scss'
import type { IProductInCart } from "@/@types";
import Button from "@components/Button/Button";
import { useAppDispatch } from "@/hooks/redux";
import { removeProduct, changeQuantity } from "@/store/features/cartSlice";

export default function CartCard({ product }: CartCardProps) {

    const dispatch = useAppDispatch();

    const handleRemoveFromCart = () => {
        dispatch(removeProduct(product.id))
    }

    const handleChangeQuantity = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(changeQuantity({ id: product.id, quantity: Number(event.target.value) }))  
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
                <input type="number" value={product.quantity}  onChange={handleChangeQuantity} />
            </div>
        </div>
    )
}

interface CartCardProps {
    product: IProductInCart;
}

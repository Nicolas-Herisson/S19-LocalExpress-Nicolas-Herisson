import { useSelector } from "react-redux";
import type { RootState } from "@/store";
import { clearCart } from "@/store/features/cartSlice";
import Button from "@/components/Button/Button";
import CartProductList from "@/components/Cart/CartList/CartProductList";
import { useAppDispatch } from "@/hooks/redux";
import "./Cart.scss"

export default function Cart() {
    const dispatch = useAppDispatch();
    const cart = useSelector((state: RootState) => state.cart.products);

    const total = cart.reduce((total, product) => total + product.price * product.quantity, 0);

    const clearContent = () => dispatch(clearCart());

    return (
        <div className="cart">
                <div className="cart-header">
                    <h2 className="cart-title">Panier</h2>
                    <Button label="Vider" className="cart-button" onClick={clearContent} />
                </div>
                <CartProductList />
                <div className="cart-total">
                    <div className="cart-total--price"><strong>Total: {total} €</strong></div>
                </div>
            </div>
        )
}
import type { IProductInCart } from "@/@types";
import CartCard from "@/components/Cart/CartCard/CartCard";
import { useSelector } from "react-redux";
import type { RootState } from "@/store";

export default function CartProductList() {
    const cart = useSelector((state: RootState) => state.cart.products);

    return (
        <div className="homepage__cart-products">
            {cart.length === 0 ? <p>Panier vide</p> :
            cart.map((product: IProductInCart) => (
                <CartCard key={product.id} product={product} />
            ))
            }
        </div>
    )
}

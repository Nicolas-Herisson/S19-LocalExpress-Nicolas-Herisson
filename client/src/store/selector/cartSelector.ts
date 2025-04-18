import type { RootState } from "@/store";

export const getCartProductById = (state: RootState, id: number) => state.cart.products.find(product => product.id === id);
export const getCart = (state: RootState) => state.cart.products;
export const getCartTotal = (state: RootState) => state.cart.products.reduce((total, product) => total + product.price * product.quantity, 0);
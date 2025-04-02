import type { RootState } from "@/store";

export const selectedCartProductById = (state: RootState, id: number) => state.cart.products.find(product => product.id === id);
export const selectedCart = (state: RootState) => state.cart.products;
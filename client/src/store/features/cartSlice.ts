import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import type { IProductInCart } from '@/@types';

type CartState = {
    products: IProductInCart[];
}

const initialState: CartState = {
    products: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProduct: (state, action: PayloadAction<IProductInCart>) => {
            {
                const product = action.payload;
                const existingProduct = state.products.find(p => p.id === product.id);

                if (existingProduct) 
                    existingProduct.quantity++;
                else 
                    state.products.push(product);
                
            }
        },
        removeProduct: (state, action: PayloadAction<number>) => {
            state.products = state.products.filter(product => product.id !== action.payload)
        },
        changeQuantity: (state, action: PayloadAction<{ id: number; quantity: number }>) => {
            state.products = state.products.map(product =>
            {
                if (product.id === action.payload.id)
                    product.quantity = action.payload.quantity;
                return product;
            })
        },
        clearCart: (state) => {
            state.products = [];
        }
    }
})

export const { addProduct, removeProduct, changeQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
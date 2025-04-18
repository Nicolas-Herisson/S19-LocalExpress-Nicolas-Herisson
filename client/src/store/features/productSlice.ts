import { createSlice , createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import type { IProduct } from '@/@types';

type ProductState = {
    products: IProduct[];
    loading: 'idle' | 'pending' | 'succeeded' | 'failed';
}

const initialState: ProductState = {
    products: [],
    loading: 'idle',
}



const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    try {
        const response = await axios.get('https://dummyjson.com/products');
        return response.data.products;
    } catch (error) {
        console.error(error);
        return [];
    }
})

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state) => {
            state.loading = 'pending';
        })
        .addCase(fetchProducts.fulfilled, (state, action) => {
            state.loading = 'succeeded';
            state.products = action.payload;
        })
        .addCase(fetchProducts.rejected, (state) => {
            state.loading = 'failed';
        })
    }
})

export default productSlice.reducer;
export { fetchProducts }


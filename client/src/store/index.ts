import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './features/cartSlice'
import productReducer from './features/productSlice'


export const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: productReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
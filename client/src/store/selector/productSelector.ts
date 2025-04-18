import type { RootState } from "@/store";
import { createSelector } from "@reduxjs/toolkit";

export const getProducts = (state: RootState) => state.product.products;
export const getProductById = (state: RootState, id: number) => state.product.products.find(product => product.id === id);
export const getGroupedByCategoryProducts = 
createSelector(getProducts, (products) => Object.groupBy(products, product => product.category));
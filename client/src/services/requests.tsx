import axios from 'axios'
import type { IProduct } from '../@types';

export async function getProducts(): Promise<IProduct[]> {
    try {
      const {data} = await axios.get('https://dummyjson.com/products');
      return data.products;
    } catch (error) {
        console.error(error);
        return [];
    }
}
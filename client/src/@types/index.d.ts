export interface IProduct {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    images: string[];
    tags: ITag[];
}

export interface ITag {
    id: number;
    name: string;
}

export interface IProductInCart extends IProduct {
    quantity: number;
}
import {Product} from "./product.model.js";
import {Cart} from "./cart.model.js";

Product.belongsToMany(Cart, { 
    through: "product_cart", 
    foreignKey: "product_id", 
    otherKey: "cart_id", 
    as: "carts", 
    onDelete: "CASCADE" });

Cart.belongsToMany(Product, { 
    through: "product_cart", 
    foreignKey: "cart_id", 
    otherKey: "product_id", 
    as: "products", 
    onDelete: "CASCADE" });

export {Product, Cart};
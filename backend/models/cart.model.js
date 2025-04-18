import { Model, DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export class Cart extends Model {};

Cart.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    sequelize,
    tableName: 'cart'
});

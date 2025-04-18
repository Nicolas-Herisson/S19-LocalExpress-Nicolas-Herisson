import { sequelize } from "../database/database.js";
import { Product, Cart } from "../models/association.model.js";

await sequelize.dropAllSchemas({force: true});
console.log("All schemas dropped");
await sequelize.sync({force: true});
console.log("Tables created");
await sequelize.close();

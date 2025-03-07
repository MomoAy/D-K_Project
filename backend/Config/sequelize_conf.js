import { Sequelize } from "sequelize";
import dotenv from 'dotenv';
dotenv.config();

const sequelize_conf = new Sequelize("todoapp", `${process.env.DATABASE_USER}`, `${process.env.DATABASE_PASSWORD}`, {
  host: "localhost",
  dialect: "postgres", 
  logging: false, 
});

export default sequelize_conf;

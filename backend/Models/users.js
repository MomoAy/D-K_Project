import { DataTypes } from "sequelize";
import sequelize_conf from "../Config/sequelize_conf";

const Users = sequelize_conf.define("Users", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  last_name: { type: DataTypes.STRING, allowNull: false, unique: false },
  first_name: { type: DataTypes.STRING, allowNull: false, unique: false },
  email: { type: DataTypes.STRING ? allowNull : false, unique: true },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: false,
    validate: {
      isEmail: true,
    },
  },
});

export default Users;

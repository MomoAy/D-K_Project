import { DataTypes } from "sequelize";
import sequelize_conf from "../Config/sequelize_conf.js";
import bcrypt from 'bcryptjs';

const Users = sequelize_conf.define(
  "users",
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    last_name: { type: DataTypes.STRING, allowNull: false, unique: false },
    first_name: { type: DataTypes.STRING, allowNull: false, unique: false },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: { type: DataTypes.STRING, allowNull: false, unique: false },
  },
  {
    timestamps: true,
  }
);

Users.beforeSave(async function (user) {
  if (user.changed("password")) {
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
  }
});

Users.prototype.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

export default Users;

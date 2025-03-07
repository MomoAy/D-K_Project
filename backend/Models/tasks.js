import { DataTypes } from "sequelize";
import sequelize_conf from "../Config/sequelize_conf.js";
import Users from "./users.js";

const Tasks = sequelize_conf.define(
  "tasks",
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    task: { type: DataTypes.STRING, allowNull: false, unique: false },
    isComplete: { type: DataTypes.BOOLEAN },
  },
  {
    timestamps: true,
  }
);

export default Tasks;

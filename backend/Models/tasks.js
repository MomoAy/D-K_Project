import { DataTypes } from "sequelize";
import sequelize_conf from "../Config/sequelize_conf";
import Users from "./users";

const Tasks = sequelize_conf.define(
  "Task",
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    task: { types: DataTypes.STRING, allowNull: false, unique: false },
    isComplete: { types: DataTypes.BOOLEAN },
  },
  {
    timestamps: true,
  }
);

Tasks.belongsTo(Users);

export default Tasks;

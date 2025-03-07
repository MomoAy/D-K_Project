import { DataTypes } from "sequelize";
import sequelize_conf from "../Config/sequelize_conf";

const Tasks = sequelize_conf.define("Task", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  name: { types: DataTypes.STRING, allowNull: false, unique: false },
  isCompletes: { types: DataTypes.BOOLEAN },
});

export default Tasks;

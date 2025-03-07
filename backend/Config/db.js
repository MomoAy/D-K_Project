import sequelize_conf from "./sequelize_conf.js";

const connectDB = async () => {
  try {
    await sequelize_conf.authenticate();

    await sequelize_conf.sync({ alter: true });  
  } catch (error) {
    console.error(error);
  }
  
}

export default connectDB;
import Tasks from "./tasks.js";
import Users from "./users.js";

Users.hasMany(Tasks);
Tasks.belongsTo(Users);

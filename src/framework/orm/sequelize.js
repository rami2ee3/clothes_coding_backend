import { Sequelize } from "sequelize";

import config from "./config.js";
export default new Sequelize(config[process.env.NODE_ENV]);

import mysql from "mysql2";
import { mysql_config } from "../config";

export default mysql.createPool(mysql_config);

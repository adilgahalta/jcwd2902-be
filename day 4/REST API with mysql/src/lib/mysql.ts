/** @format */

import { createPool } from "mysql2";
import { mysql_config } from "../config";

export default createPool(mysql_config);

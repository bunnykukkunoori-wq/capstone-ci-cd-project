import pkg from "pg";
const { Pool } = pkg;

const pool = new Pool({
  host: process.env.DB_HOST || "db",
  user: process.env.DB_USER || "app",
  password: process.env.DB_PASS || "password",
  database: process.env.DB_NAME || "appdb"
});

export default pool;

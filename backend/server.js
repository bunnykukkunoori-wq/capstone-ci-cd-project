import express from "express";
import cors from "cors";
import pkg from "pg";

const { Pool } = pkg;

const app = express();
app.use(cors());
app.use(express.json());

const pool = new Pool({
  host: process.env.DB_HOST || "db",
  user: process.env.DB_USER || "appuser",
  password: process.env.DB_PASSWORD || "apppass",
  database: process.env.DB_NAME || "appdb",
  port: 5432,
});

/*  Root route */
app.get("/", (req, res) => {
  res.send("Backend is running successfully ");
});

/*  Health check */
app.get("/health", async (req, res) => {
  try {
    await pool.query("SELECT 1");
    res.json({
      backend: "UP",
      database: "CONNECTED",
    });
  } catch (err) {
    res.json({
      backend: "UP",
      database: "DISCONNECTED",
    });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});



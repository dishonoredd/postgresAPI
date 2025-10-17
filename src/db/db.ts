import { Pool } from "pg";

const DBPORT = process.env.DBPORT || 5432;

export const pool = new Pool({
  user: "postgres",
  password: "2006",
  host: "localhost",
  port: Number(DBPORT),
  database: "node_postgres",
});

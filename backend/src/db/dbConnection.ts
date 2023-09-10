import { MySql2Database, drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";
import config from "@/config";

export let db: MySql2Database<Record<string, never>>;

export default async function connect() {
  const connection = await mysql.createConnection({
    host: "127.0.0.1",
    user: config.DB_USER,
    database: config.DB,
    password: config.DB_PASSWORD
  });

  db = drizzle(connection);
}
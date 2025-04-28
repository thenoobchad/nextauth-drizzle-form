import { drizzle } from "drizzle-orm/better-sqlite3";
import Database from "better-sqlite3";
import * as schema from "./schema/schema";

const sqlite = new Database(process.env.DATABASE_URL!); // Loaded from .env.local
export const db = drizzle(sqlite, { schema });

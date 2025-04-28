import { defineConfig } from "drizzle-kit";
import { loadEnvConfig } from "@next/env";

loadEnvConfig(process.cwd());

export default defineConfig({
	schema: "./db/schema/*",
	out: "./db",
	dialect: "sqlite",
	dbCredentials: {
		url: process.env.DATABASE_URL!,
	},
});

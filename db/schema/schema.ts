import { sqliteTable, text, integer, real } from "drizzle-orm/sqlite-core";


export const skillLevelEnum = ["Beginner", "Intermediate", "Advance", "Expert", "Master"] as const


export const books = sqliteTable("users", {
	id: integer("id").primaryKey({ autoIncrement: true }),
    firstName: text("first_name"),
    lastName: text("last_name"),
	email: text("title").notNull().unique(),
    image: text("image").default("no-image"),
	password: text("author").notNull(),
    skillLevel: text("skill_level", {enum: skillLevelEnum}).default("Beginner"),
	createdAt: integer("created_at", { mode: "timestamp" })
		.notNull()
		.default(new Date()),
	updatedAt: integer("updated_at", { mode: "timestamp" })
		.notNull()
		.default(new Date()),
});

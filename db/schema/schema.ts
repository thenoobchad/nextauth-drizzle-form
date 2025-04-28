import { sqliteTable, text, integer, real } from "drizzle-orm/sqlite-core";

export const skillLevelEnum = [
	"Beginner",
	"Intermediate",
	"Advance",
	"Expert",
	"Master",
] as const;

export const users = sqliteTable("users", {
	id: text("id").primaryKey(),
	firstName: text("first_name"),
	lastName: text("last_name"),
	email: text("email").notNull(),
	image: text("image").default("no-image"),
	password: text("password").notNull(),
	skillLevel: text("skill_level", { enum: skillLevelEnum }).default("Beginner"),
	createdAt: integer("created_at", { mode: "timestamp" })
		.notNull()
		.default(new Date()),
	updatedAt: integer("updated_at", { mode: "timestamp" })
		.notNull()
		.default(new Date()),
});

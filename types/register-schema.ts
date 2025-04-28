import * as z from "zod";

const skillLevelEnum = z.enum([
	"Beginner",
	"Intermediate",
	"Advanced",
	"Expert",
	"Master",
]);

export const registerSchema = z.object({
	email: z.string().email(),
	password: z.string(),
	firstName: z.string(),
	lastName: z.string(),
	location: z.string(),
	confirmPassword: z.string(),
    skillLevel: skillLevelEnum
});

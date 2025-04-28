import NextAuth from "next-auth";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { db } from "./index";

import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { eq } from "drizzle-orm";
import { loginSchema } from "@/types/login-schema";
import { users } from "./schema/schema";

export const { handlers, auth, signIn, signOut } = NextAuth({
	adapter: DrizzleAdapter(db),
	providers: [
		Credentials({
			authorize: async (credentials, request) => {
				const validatedFields = loginSchema.safeParse(credentials);

				if (validatedFields.success) {
					const { email, password } = validatedFields?.data;

					const [user] = await db
						.select()
						.from(users)
						.where(eq(users.email, email)).limit(1);

					if (!user || !user.password) return null;

					const passwordMatch = await bcrypt.compare(password, user.password);

					if (passwordMatch) return user;
				}

				return null;
			},
		}),
	],

	pages: {
		signIn: "/login",
	},
	secret: process.env.AUTH_SECRET,
    session: {
        strategy: "jwt"
    }
});

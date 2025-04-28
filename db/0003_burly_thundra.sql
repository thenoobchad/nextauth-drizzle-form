PRAGMA foreign_keys=OFF;--> statement-breakpoint
CREATE TABLE `__new_users` (
	`id` text PRIMARY KEY NOT NULL,
	`first_name` text,
	`last_name` text,
	`email` text NOT NULL,
	`image` text DEFAULT 'no-image',
	`password` text NOT NULL,
	`skill_level` text DEFAULT 'Beginner',
	`created_at` integer DEFAULT '"2025-04-28T11:35:55.124Z"' NOT NULL,
	`updated_at` integer DEFAULT '"2025-04-28T11:35:55.124Z"' NOT NULL
);
--> statement-breakpoint
INSERT INTO `__new_users`("id", "first_name", "last_name", "email", "image", "password", "skill_level", "created_at", "updated_at") SELECT "id", "first_name", "last_name", "email", "image", "password", "skill_level", "created_at", "updated_at" FROM `users`;--> statement-breakpoint
DROP TABLE `users`;--> statement-breakpoint
ALTER TABLE `__new_users` RENAME TO `users`;--> statement-breakpoint
PRAGMA foreign_keys=ON;
CREATE TABLE `users` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`first_name` text,
	`last_name` text,
	`title` text NOT NULL,
	`image` text DEFAULT 'no-image',
	`author` text NOT NULL,
	`skill_level` text DEFAULT 'Beginner',
	`created_at` integer DEFAULT '"2025-04-28T11:02:29.642Z"' NOT NULL,
	`updated_at` integer DEFAULT '"2025-04-28T11:02:29.642Z"' NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `users_title_unique` ON `users` (`title`);--> statement-breakpoint
DROP TABLE `books`;
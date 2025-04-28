CREATE TABLE `books` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`title` text NOT NULL,
	`author` text NOT NULL,
	`price` real,
	`created_at` integer DEFAULT '"2025-04-28T09:58:49.018Z"' NOT NULL,
	`updated_at` integer DEFAULT '"2025-04-28T09:58:49.018Z"' NOT NULL
);

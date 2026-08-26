import { pgTable, text, timestamp, uuid, varchar } from "drizzle-orm/pg-core";

export const projects = pgTable("projects", {
    id: uuid("id").primaryKey().defaultRandom(),
    title: varchar("title").notNull(),
    description: varchar("description").notNull(),
    releaseTime: varchar("release_time").notNull(),
    livelink: varchar("live_link").notNull(),
    githubLink: varchar("github_link").notNull(),
    techStack: varchar("tech_stack").notNull(),
    cover: text("cover").notNull(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull(),

})

export const contacts = pgTable("contacts", {
    id: uuid("id").primaryKey().defaultRandom(),
    email: varchar("email").notNull(),
    message: text("message").notNull(),
})

export const experiences = pgTable('experience', {
    id: uuid("id").primaryKey().defaultRandom(),
    period: varchar("period").notNull(),
    title: varchar("title").notNull(),
    company: varchar("company").notNull(),
    description: text("description").notNull(),
    tags: text("tags").array().notNull(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull(),
})
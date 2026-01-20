import { t } from "elysia";
import { createInsertSchema } from "drizzle-typebox";

import { posts } from "@/src/db/schema";

export type Post = typeof posts.$inferSelect;

export type CreatePostType = Omit<
  typeof posts.$inferInsert,
  "id" | "userId" | "createdAt" | "updatedAt"
>;

export const createPostInsertSchema = createInsertSchema(posts, {
  name: t.String(),
  content: t.String(),
});

export type UpdatePostType = Omit<
  typeof posts.$inferInsert,
  "id" | "userId" | "createdAt" | "updatedAt"
>;

export const updatePostInsertSchema = createInsertSchema(posts, {
  name: t.String(),
  content: t.String(),
});

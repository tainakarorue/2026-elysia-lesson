import { Elysia } from "elysia";
import { cors } from "@elysiajs/cors";

import { helloRouter } from "@/server/routes/hello";
import { postsRouter } from "@/server/routes/posts";

export const app = new Elysia({ prefix: "/api" })
  .use(
    cors({
      origin:
        process.env.NODE_ENV === "production"
          ? process.env.NEXT_PUBLIC_APP_URL
          : true,
      methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
      credentials: true,
      allowedHeaders: ["Content-Type", "Authorization", "Cookie"],
      exposeHeaders: ["Set-Cookie"],
    })
  )
  .use(helloRouter)
  .use(postsRouter);

export const GET = app.fetch;
export const POST = app.fetch;
export const PUT = app.fetch;
export const PATCH = app.fetch;
export const DELETE = app.fetch;
export const OPTIONS = app.fetch;

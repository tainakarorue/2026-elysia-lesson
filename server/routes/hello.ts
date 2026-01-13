import { Elysia, status, t } from "elysia";
import { betterAuth, protectedRoute } from "../protected-route";

export const helloRouter = new Elysia({ prefix: "/hello" })
  .use(betterAuth)
  .get("/", () => {
    const hello = "Hello Elysia";

    if (!hello) {
      throw new Response("Internal Error", { status: 500 });
      // return status(500)
    }

    return {
      hello,
    };
  })
  .post("/", ({ body }) => body, {
    body: t.Object({
      name: t.String(),
    }),
    auth: true,
  });

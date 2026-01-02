import { Elysia, status, t } from "elysia";

export const helloRouter = new Elysia({ prefix: "/hello" })
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
  });

import Fastify from "fastify";

const app = Fastify();

app.get("/", () => "Hello NLW");

app
  .listen({
    port: 3333,
  })
  .then(() => console.log(`Server running @${Date().toString()}`));

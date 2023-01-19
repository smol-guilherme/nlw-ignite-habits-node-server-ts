import Fastify from "fastify";
import { PrismaClient } from "@prisma/client";

const app = Fastify();
const prisma = new PrismaClient();

app.get("/", () => "Hello NLW");

app
  .listen({
    port: 3333,
  })
  .then(() => console.log(`Server running @${Date().toString()}`));

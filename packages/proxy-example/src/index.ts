import proxy from "@fastify/http-proxy";
import fastify from "fastify";

const server = fastify();

server.register(proxy, {
    upstream: "https://localhost:8080",
    replyOptions: {
        rewriteHeaders(headers, _req) {
            return headers;
        }
    }
});

server.listen({ port: 8081 });
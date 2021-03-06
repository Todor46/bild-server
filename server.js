const jsonServer = require("json-server");
const server = jsonServer.create();
const generate = require("./generate");
const router = jsonServer.router(generate());
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 8080;

server.use(middlewares);
server.use(router);
server.listen(port, () => {
  console.log("JSON Server is running");
});

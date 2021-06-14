const jsonServer = require("json-server");
const server = jsonServer.create();
const generate = require("./generate");
const router = jsonServer.router(generate());
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);
server.listen(3000, () => {
  console.log("JSON Server is running");
});

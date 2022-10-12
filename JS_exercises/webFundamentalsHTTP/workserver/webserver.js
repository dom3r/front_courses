const net = require("net");
const fs = require("fs");

const server = net.createServer((socket) => {
  socket.on("data", (buffer) => {
    const requestString = buffer.toString("utf-8");

    const request = parseRequest(requestString);

    // console.log(request, method, request.path, request.protocol);

    // console.log(requestString);

    if (request.method === "GET" && request.path === "/") {
      if (fs.existsSync(`.${path}`)) {
        socket.write("HTTP/1.0 200 OK");
      } else {
        socket.write("HTTP/1.0 404 Not found");
      }
    }
  });
});

const parseRequest = (requestString) => {
  const [method, path, protocol] = requestString.split(" ");
  return {
    method,
    path,
    protcol,
  };
};

//server.listen(9999, () => console.log("Listening"));

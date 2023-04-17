const http = require("http");

const server = http.createServer((req, res) => {
  let body = [];
  console.log(req.method, req.url);
  req.on("data", (chunk) => {
    body.push(chunk);
  });
  req.on("end", () => {
    body = Buffer.concat(body).toString();
    console.log(body);
    let userName = "Unknown user";
    if (body) {
      userName = body.split("=")[1];
    }
    res.setHeader("Content-Type", "text/html");
    res.write(`<h1>Hi ${userName}</h1>`);
    res.write(
      `<form method ="POST" action="/"><input name ="username" type="text"><button type="submit">Send</button></form>`
    );
    res.end();
  });
});

server.listen(3000);

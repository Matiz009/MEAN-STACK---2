console.log("Let's start the server...");
function sayHello(name) {
  console.log("Welcome " + name);
}
sayHello("Ali");

const { log } = require("console");
const os = require("os");
console.log(os.arch());

console.log(os.cpus());

console.log(os.freemem());

console.log(os.homedir());
console.log(os.hostname());
console.log(os.platform());
console.log(os.release());
console.log(os.totalmem());
console.log(os.type());

console.log(os.uptime());

console.log(os.userInfo());

const fs = require("fs");

fs.writeFile("hello.txt", "Hello World!", (err) => {
  if (err) throw err;
  console.log("File created successfully!");
});

fs.readFile("index.js", "utf-8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

const http = require("http");

http
  .createServer((req, res) => {
    if (req.url === "/") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write("<h1>Hello World!</h1>");
      res.end();
    } else if (req.url === "/about") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write("<h1>About Page!</h1>");
      res.end();
    }
  })
  .listen(3000, () => {
    console.log("Server is running on port 3000");
  });

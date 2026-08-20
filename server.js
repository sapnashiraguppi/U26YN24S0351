const http = require("http");
const fs = require("fs");
const server = http.createServer((req, resp) => {
    if (req.url === "/" || req.url === "/index.html") {
        fs.readFile("index.html", (err, data) => {
            resp.writeHead(200, { "Content-Type": "text/html" });
            resp.end(data);
        });
    }
    else if (req.url === "/about") {
        
        fs.readFile("about.html", (err, data) => {
            resp.writeHead(200, { "Content-Type": "text/html" });
            resp.end(data);
        });
    }
    else if (req.url === "/course") {
        fs.readFile("course.html", (err, data) => {
            resp.writeHead(200, { "Content-Type": "text/html" });
            resp.end(data);
        });
    }
    else if (req.url === "/contact" && req.method === "POST") {

        let body = "";

        req.on("data", (chunk) => {
            body += chunk;
        });
        req.on("end", () => {
            console.log("Form Data:");
            console.log(body);
            resp.writeHead(200, { "Content-Type": "text/html" });
            resp.end("<h2>Form Submitted Successfully</h2>");
        });
    }
    else if (req.url === "/contact" && req.method === "GET") {
        fs.readFile("contact.html", (err, data) => {
            resp.writeHead(200, { "Content-Type": "text/html" });
            resp.end(data);
        });
    }
    else {
        resp.writeHead(404, { "Content-Type": "text/html" });
        resp.end("<h1>Page Not Found</h1>");
    }
});
server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});                              
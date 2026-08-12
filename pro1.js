 const http=require("http");
 const server=http.createServer((req,resp)=>{
    resp.writeHead(200,{"conten-type":"text/html"})
    resp.write(`<h1>BLDEA's Commerce BHS Arts & TGP Science College</h1>`)
    resp.write(`<h2>Started Year 1963</h2>`)
    resp.write(`<h3>Located In Jamakhandi</h3>`);
    resp.end;
    })
    
 server.listen(3000,()=>{console.log("sever has been started")})
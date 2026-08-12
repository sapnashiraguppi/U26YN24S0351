const http=require("http")
const server=http.createServer((req,resp)=>{
    if(req.method=="GET"){
        resp.writeHead(200,{"content-type":"text/html"})
        resp.write(`<form method="post">`)
        resp.write(`Rollno<input type="text" name="rno" /><br><br />`)
        resp.write(`Name<input Type="text" name="name"/><br><br />`)
        resp.write(`<button type="submit">Save</button>`)
        resp.write(`</form>`)
        resp.end();
    }
    else if(req.method=="post"){
        let body=``
        req.on("data",(chunks)=>{
            body=body+chunks
        })
        req.on("end",()=>{
            let data=new URLSearchParams(body);
            console.log(`Rollno=${data.get("rno")}`)
            console.log(`Name=${data.get("name")}`)
        })
        resp.writeHead(200,{"conten-type":"text/html"})
        resp.write(`<h1>Your Information Has Been Received</h1>`)
        resp.end()
    }

})
server.listen(3000,()=>{console.log("server has been started")})
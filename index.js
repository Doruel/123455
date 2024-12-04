const fs = require("fs");
const path = require("path");
const http = require("http");
const { json } = require("stream/consumers");

const createPath = (...arg) =>
  path.join(__dirname, arg.join(",").replaceAll(",", "/"));

const server = http.createServer((req, res) => {
  if (req.url === "/" && req.method === "GET") {
  }
  else if(req.url==='/api/users'&&req.method==='GET'){

  }else if(req.url.match(/\/api\/users\/([0-9]+)/) && req.method==='GET' ){
    const id =req.url.split('/')[3]

    fs.promises.readFile(path.join(__dirname,'db','users.json'),'utf-8')
    .then((data)=>{
        const users=JSON.parse(data)
        const user=users.find((user)=>user.id===+id)
        if(user){
            res.writeHead(200,{'content-type':'application/json'})
            res,fs.write(JSON.stringify(user))
            res.end()
        }else{
            res.writeHead(200,{'content-type':'application/json'})
            res.writ('err')
            res.end()
        }
    })



    server.listen(4400,(err)=>{
        if(err){
            console.log(err)

        }else{
            console.log('server is Running')
        }
    })
  }
});

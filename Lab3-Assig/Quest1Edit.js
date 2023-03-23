var http=require("http")
var url=require("url")
var fs=require("fs")

var lookup=require("mime-types").lookup;

const server=http.createServer((req,res)=>{
    let parsedURl=url.parse(req.url.true);
    let path=parsedURl.path.replace(/^\/+|\/+$/g,"");
    if (path==""){
        path="Home.html";
    }
    let file=__dirname+"/"+path;
    fs.readFileSync(file,function(err,content){
        if(err){
            res.writeHead(404,{"content-type":"text/html"})
            res.end();
        }
        else{
            res.setHeader("X-Content-Type-Options","nosniff");
            let mime=lookup(path);
            res.writeHead(200,{"content-type": mime})
            // switch(path){
            //     case "style.css":
            //         res.writeHead(200,{"content-type":"text/css"});
            //         break;
            //     case "Home.html":
            //     res.writeHead(200,{"content-type":"text/html"});
            //     break;
            // }
            res.end(content);
        }
    })
})
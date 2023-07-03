const http = require('http')
const port = 3000

const server = http.createServer((req, res) =>{
if(req.url === '/'){
res.writeHead(200,{"Content-Type" : "text/html"});
res.write('<h1> Página inicial </h1>')
res.end()
}else if(req.url === '/sobre'){
    res.writeHead(200, {"Content-Type" : "text/html"});
    res.write('<h1> Página Sobre </h1>')
    res.end()
}else if(req.url === '/contato'){
    res.writeHead(200, {"Content-Type" : "text/html"});
    res.write('<h1> Página Contato </h1>')
    res.end()
}else{
    res.writeHead(200, {"Content-Type" : "text/html"});
    res.write('<h1> Página não encontrada </h1>')
    res.end()
}
})

server.listen(port, ()=>{
    console.log(`Servidor ON ${port} ╰(*°▽°*)╯`)
})
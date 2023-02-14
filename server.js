import app from "./SRC/app.js"
const port = process.env.PORT || 3000;

/*const rotas = {
    '/': 'Aprender node',
    '/jogos': 'Pagina de jogos',
    '/genero': 'Pagina de Generos',
    '/produtoras':'Lista de produtos'
}*/

/*const server = http.createServer((req,res) =>{
    res.writeHead(200,{'Content-Type':'text/plain'})
    //res.end("Aprendendo Node")
    res.end(rotas[req.url])
})*/

app.listen(port,() => {
    console.log(`Servidor excutando em http://localhost:${port}`)
})  
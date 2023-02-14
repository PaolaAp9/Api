//CRUD(Create, Read, Update and Delete - Criar, Ler, Atualizar e Excluir) 

import express from "express";
import db from "./config/dbConect.js";
import routes from "./routes/index.js"

db.on("error", console.log.bind(console, 'Erro de conexão'));
db.once("open", () => {
    console.log('Conexão com banco dados feito com sucesso!!')
})

const app = express();
app.use(express.json())
routes(app);


export default app
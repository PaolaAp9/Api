import express from "express";
import plataformas from "./plataformasRoutes.js";
import jogos from "./jogosRoutes.js";

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({titulo: "Aprendendo node"});
    })
    app.use(
        express.json(),
        jogos,
        plataformas
    )
}
export default routes
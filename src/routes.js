import { Router } from "express";

const routes = Router();

const db = [];

routes.get("/users", (req, res) => {
  return res.status(200).json(db);
});

routes.post("/users", (req, res) => {
  const { name } = req.body;
  db.push(name);
  return res
    .status(201)
    .json({ "mensagem:": `Usuário ${name} criado com sucesso` });
});

export { routes };

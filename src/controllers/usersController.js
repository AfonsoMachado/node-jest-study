import { db } from "../database.js";

const usersController = {
  createUser(req, res) {
    const { name } = req.body;

    if (name.length < 1)
      return res.status(403).json({ error: "Name is required" });

    db.push(name);
    return res
      .status(201)
      .json({ "mensagem:": `Usuário ${name} criado com sucesso` });
  },

  getUsers(req, res) {
    return res.status(200).json(db);
  },
};

export { usersController };

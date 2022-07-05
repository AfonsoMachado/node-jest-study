import { db } from "../database";
import { Request, Response } from "express";

export class UsersController {
  createUser(req: Request, res: Response): Response {
    const { name } = req.body;

    if (name.length < 1)
      return res.status(403).json({ error: "Name is required" });

    db.push(name);
    return res
      .status(201)
      .json({ mensagem: `Usuário ${name} criado com sucesso` });
  }

  getUsers(req: Request, res: Response): Response {
    return res.status(200).json(db);
  }
}

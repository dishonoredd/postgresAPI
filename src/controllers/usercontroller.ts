import { pool } from "../db/db";
import { Request, Response } from "express";

class UserController {
  async createUser(req: Request, res: Response) {
    const { name, surname } = req.body;
    const newPerson = await pool.query(
      "INSERT INTO person (name, surname) values ($1, $2) RETURNING *",
      [name, surname]
    );
    res.json(newPerson.rows[0]);
  }
  async getUsers(req: Request, res: Response) {
    const allPersons = await pool.query("SELECT * FROM person");
    res.json(allPersons.rows);
  }
  async getOneUser(req: Request, res: Response) {
    const id = req.params.id;
    const person = await pool.query("SELECT * FROM person where id = $1", [id]);
    res.json(person);
  }
  async updateUser(req: Request, res: Response) {}
  async deleteUser(req: Request, res: Response) {}
}

export default new UserController();

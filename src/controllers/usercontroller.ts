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
    res.json(person.rows[0]);
  }

  async updateUser(req: Request, res: Response) {
    const { id, name, surname } = req.body;
    const updatedPerson = await pool.query(
      "UPDATE person set name = 1$, surname = 2$ where id = 3$ RETURNING *",
      [name, surname, id]
    );
    res.json(updatedPerson.rows[0]);
  }

  async deleteUser(req: Request, res: Response) {
    const id = req.params.id;
    const person = await pool.query("DELETE FROM person where id = $1", [id]);
    res.json(person.rows[0]);
  }
}

export default new UserController();

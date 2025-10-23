import { pool } from "../db/db";
import { Request, Response } from "express";

class UserController {
  async createUser(req: Request, res: Response) {
    try {
      const { name, surname } = req.body;
      const newPerson = await pool.query(
        "INSERT INTO person (name, surname) values ($1, $2) RETURNING *",
        [name, surname]
      );
      res.json(newPerson.rows[0]);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async getUsers(req: Request, res: Response) {
    try {
      const allPersons = await pool.query("SELECT * FROM person");
      res.json(allPersons.rows);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async getOneUser(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const person = await pool.query("SELECT * FROM person where id = $1", [
        id,
      ]);
      res.json(person.rows[0]);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async updateUser(req: Request, res: Response) {
    try {
      const { id, name, surname } = req.body;
      const updatedPerson = await pool.query(
        "UPDATE person set name = $1, surname = $2 where id = $3 RETURNING *",
        [name, surname, id]
      );
      res.json(updatedPerson.rows[0]);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async deleteUser(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const person = await pool.query("DELETE FROM person where id = $1", [id]);
      res.json(person.rows[0]);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

export default new UserController();

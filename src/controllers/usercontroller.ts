import usersevice from "../services/usersevice";
import { Request, Response } from "express";

class UserController {
  async createUser(req: Request, res: Response) {
    try {
      const newPerson = await usersevice.createUser(req.body);
      res.json(newPerson.rows[0]);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async getUsers(req: Request, res: Response) {
    try {
      const allPersons = await usersevice.getUsers();
      res.json(allPersons.rows);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async getOneUser(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const person = await usersevice.getOneUser(id);
      res.json(person.rows[0]);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async updateUser(req: Request, res: Response) {
    try {
      const updatedPerson = await usersevice.updateUser(req.body);
      res.json(updatedPerson.rows[0]);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async deleteUser(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const person = await usersevice.deleteUser(id);
      res.json(person.rows[0]);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

export default new UserController();

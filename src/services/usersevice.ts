import { pool } from "../db/db";
import { User } from "../types/User";

class UserService {
  async createUser(user: User) {
    const createdUser = await pool.query(
      "INSERT INTO person (name, surname) values ($1, $2) RETURNING *",
      [user.name, user.surname]
    );
    return createdUser;
  }

  async getUsers() {
    const users = await pool.query("SELECT * FROM person");
    return users;
  }

  async getOneUser(id: string) {
    if (!id) {
      throw new Error("id is not defined");
    }
    const user = await pool.query("SELECT * FROM person where id = $1", [id]);
    return user;
  }

  async updateUser(user: User) {
    if (!user.id) {
      throw new Error("id is not defined");
    }
    const updatedUser = await pool.query(
      "UPDATE person set name = $1, surname = $2 where id = $3 RETURNING *",
      [user.name, user.surname, user.id]
    );
    return updatedUser;
  }

  async deleteUser(id: string) {
    if (!id) {
      throw new Error("id is not defined");
    }
    const deletedUser = await pool.query("DELETE FROM person where id = $1", [
      id,
    ]);
    return deletedUser;
  }
}

export default new UserService();

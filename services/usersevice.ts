type User = {
  name: string;
  surname: string;
  id: number;
};

class UserService {
  async createUser(user: User) {
    try {
    } catch (error) {}
  }
  async getUsers() {}
  async getOneUser() {}
  async updateUser() {}
  async deleteUser() {}
}

export default new UserService();

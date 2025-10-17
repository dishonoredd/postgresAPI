import { Router } from "express";
import userController from "../controllers/usercontroller";

const userUrl = "/users";

export const userRouter = Router();

userRouter.post(userUrl, userController.createUser);
userRouter.get(userUrl + "/:id", userController.getOneUser);
userRouter.get(userUrl, userController.getUsers);
userRouter.put(userUrl, userController.updateUser);
userRouter.delete(userUrl + "/:id", userController.deleteUser);

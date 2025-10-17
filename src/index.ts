import express, { Application } from "express";
import { userRouter } from "./routes/userrouter";
import { postRouter } from "./routes/postrouter";

const app: Application = express();

const defaultUrl = "/api";

app.use(express.json());
app.use(defaultUrl, userRouter);
app.use(defaultUrl, postRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server started on port" + PORT);
});

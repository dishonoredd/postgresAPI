import express, { Application } from "express";
import { userRouter } from "./routes/userrouter";

const app: Application = express();

const defaultUrl = "/api";

app.use(express.json());
app.use(defaultUrl, userRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server started on port" + PORT);
});

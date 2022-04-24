import express from "express";
import router from "./routers/repositories.routers";
import loginRouter from "./routers/login.routers";

const app = express();

app.use(express.json());
app.use("/users", router);
app.use("/login", loginRouter);

const port = 3000;

app.listen(port, () => {
  console.log(`App rodando na porta ${port}`);
});

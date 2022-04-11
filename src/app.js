import express from "express";
import router from "./routes/users.routes";
import routerLogin from "./routes/login.routes";

const app = express();

app.use(express.json());
app.use("/users", router);
app.use("/login", routerLogin);

const port = 3001;

app.listen(port, () => {
  console.log(`App rodando na porta ${port}`);
});

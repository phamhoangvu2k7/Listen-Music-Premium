import express, { Express, Request, Response } from "express";
import * as database from "./config/database";
import dotenv from "dotenv";
import routeClient from "./routes/index.route";

dotenv.config();

database.connect();

const app: Express = express();
const port: string | number = process.env.PORT || 3000;

app.set("views", `${__dirname}/view`);
app.set("view engine", "pug");

routeClient(app);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
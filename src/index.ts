import express, { Express } from "express";
import * as database from "./config/database";
import dotenv from "dotenv";
import path from "path";
import routeClient from "./routes/client/index.route";

dotenv.config();

database.connect();

const app: Express = express();
const port: string | number = process.env.PORT || 3000;

app.set("views", path.join(__dirname, "..", "view"));
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "../public")));

routeClient(app);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
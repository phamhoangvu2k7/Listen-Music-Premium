import express, { Express, Request, Response} from "express";
import * as database from "./config/database";
import dotenv from "dotenv";

dotenv.config();

database.connect();

const app: Express = express();
const port: string | number = process.env.PORT || 3000;


app.set("views", "./view");
app.set("view engine", "pug");

app.get("/topics", (req: Request, res: Response) => {
    res.render("client/pages/topics/index");
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
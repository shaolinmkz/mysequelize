import dotenv from "dotenv";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { todoRoutes, todoItemRoutes } from "./routes";
import logger from "morgan";
dotenv.config();

// initialize express
const app = express();

// use body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// logger
app.use(logger("dev"));

// use routers
app.use(todoRoutes);
app.use(todoItemRoutes);

// Enable cors (Cross Origin Resource Sharing)
app.use(cors());

app.get("*", (req, res) => {
    res.status(200).json({
        status: 200,
        message: "Welcome to the Todo sequelize training setup"
    })
});

const PORT = process.env.PORT;

app.listen(PORT, () => console.log("Listening on port " + PORT));

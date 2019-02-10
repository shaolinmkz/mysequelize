import dotenv from "dotenv";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import router from "./routes";
import logger from "morgan";
dotenv.config();

// initialize express
const app = express();

// use body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// logger
app.use(logger("dev"));

// use router
app.use(router);

// Enable cors (Cross Origin Resource Sharing)
app.use(cors());

const PORT = process.env.PORT;


app.listen(PORT, () => console.log("Listening on port " + PORT));

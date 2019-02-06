import dotenv from "dotenv";
import express from "express";
import cors from "cors";
dotenv.config();
const app = express();

// Enable cors (Cross Origin Resource Sharing)
app.use(cors());

const PORT = process.env.PORT;

// Test route
app.get("/", (req, res) => {
    res.status(200).json({
        status: 200,
        message: "Welcome to the sequelize setup"
    })
});

app.listen(PORT, () => console.log("Listening on port " + PORT));

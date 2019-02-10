import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
    res.status(200).json({
        status: 200,
        message: "Welcome to the sequelize setup"
    })
});

router.post("/post", (req, res) => {
    res.status(201).json({
        status: 201,
        message: "Post request successful"
    })
});

router.put("/put", (req, res) => {
    res.status(200).json({
        status: 200,
        message: "Put request successful"
    })
});

router.patch("/patch", (req, res) => {
    res.status(200).json({
        status: 200,
        message: "Patch request successful"
    })
});

router.delete("/delete", (req, res) => {
    res.status(200).json({
        status: 200,
        message: "Delete request successful"
    })
});

export default router;

import express from "express";
import cors from "cors";

const app = express();

// Middlewares 
app.use(cors());
app.use(express.json());

// Base Route
app.get("/", (req, res) => {
    res.send("Server is live!");
});

export default app;
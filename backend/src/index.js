import express from "express";
import cors from "cors";
import apiRoutes from "./routes/apiRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", apiRoutes);

app.listen(5000, () => {
    console.log("Mock API running on http://localhost:5000");
});

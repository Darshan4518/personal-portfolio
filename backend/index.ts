import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./utils/dbConnect";
import skillRoutes from "./routes/skill.route";
import projectRoutes from "./routes/project.route";
import bodyParser from "body-parser";
import cors from "cors";
dotenv.config();

const app = express();

app.use(bodyParser.json({ limit: "50mb" }));
app.use(express.json({ limit: "50mb" }));
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

// routes

app.use("/api/v1/skills", skillRoutes);
app.use("/api/v1/projects", projectRoutes);

const port = (process.env.PORT as string) || 3000;

app.listen(port, () => {
  connectDB();
  console.log(`server running at port number ${port}`);
});

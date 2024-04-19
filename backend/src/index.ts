import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose, { mongo } from "mongoose";

mongoose.connect(process.env.MONGO_URI as string)

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/api/test", async (req: Request, res: Response) => {
  res.json({ message: "hello from express endpoint" });
});

app.listen(3000, () => {
  console.log("app listening at port 3000");
});

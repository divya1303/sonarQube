import mongoose from "mongoose";
import { json } from "body-parser";
import express from "express"
import profileRoutes from "./routes/profile.route";

const app = express();
const port = 3000;
const dbURL = "mongodb://localhost/mymongoDB";

mongoose.connect(dbURL, {});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB error"));
db.once("open", () => {
  console.log("connected");
});

app.use(json());
app.use("/profile", profileRoutes);

app.listen(port, () => {
    console.log("server running")
});

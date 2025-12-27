import express from "express";
import cors from "cors";
import { connectDB } from "./db.js";

import auth from "./routes/auth.js";
import readings from "./routes/readings.js";
import support from "./routes/support.js";

connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", auth);
app.use("/api/readings", readings);
app.use("/api/support", support);

app.listen(5000, () => console.log("Server running on 5000"));

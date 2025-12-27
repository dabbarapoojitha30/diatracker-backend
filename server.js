import 'dotenv/config'; // load .env variables at the top
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

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));

import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

dotenv.config();
const PORT: number | string = process.env.PORT || 5000;
const corsOptions = { credentials: true, origin: process.env.url || "*" };

const app = express();
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use((req: Request, res: Response, next: NextFunction) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use("/", express.static(__dirname + "/public"));
app.listen(PORT, () => console.log(`Listening  to port ${PORT}`));

import express from "express";
import cors from "cors";
import morgan from "morgan";
import colors from "colors";
import dotenv from "dotenv";
import path from 'path';
import bodyParser from "body-parser";
const app = express();

dotenv.config();

connectDB();

app.use(morgan('dev'));

const corsOptions = {
  origin: [process.env.CLIENT_URL, 'http://localhost:3001', 'http://localhost:3002', 'http://localhost:3000', 'http://localhost:3004', 'https://dsa-tracker-website.vercel.app'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));

app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>DSA Tracker Backend</title>
      <style>
        body {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          margin: 0;
          font-family: Arial, sans-serif;
          background-color: #f0f0f0;
        }
        .container {
          text-align: center;
        }
        h1 {
          color: #333;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>Welcome to DSA Tracker Backend</h1>
      </div>
    </body>
    </html>
  `);
});
app.use("/auth", authRoute);
app.use("/scapeData", scrapingRoute);

app.listen(process.env.PORT, () => {
  console.log(`Backend server started at port ${PORT}`.green);
});
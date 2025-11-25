// // index.js
// import express from 'express';
// import mongoose from 'mongoose';
// import cors from 'cors';
// import userRoutes from './userRoutes.js';
// import dotenv from 'dotenv';
// dotenv.config();
// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());

// // ✅ MongoDB URI - Make sure this works (no &appName at the end)
// const uri = process.env.Mongo_uri;

// // Connect to MongoDB
// mongoose.connect(uri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
// .then(() => console.log("✅ MongoDB connected successfully"))
// .catch((err) => {
//   console.error("❌ MongoDB connection error:", err.message);
//   process.exit(1); // stop the server if DB doesn't connect
// });

// // Routes
// app.use('/api', userRoutes);

// // Start the server
// const PORT = process.env.PORT || 3001;
// app.listen(PORT, () => {
//   console.log(`🚀 Server running on http://localhost:${PORT}`);
// });



import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import userRoutes from "./userRoutes.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Connect to Mongo only once
let conn = null;
async function connectDB() {
  if (conn) return conn;
  conn = await mongoose.connect(process.env.Mongo_uri);
  console.log("✅ Mongo connected");
  return conn;
}

// Wrap the server for Vercel serverless
export default async function handler(req, res) {
  await connectDB(); // ensure db is connected
  return app(req, res); // let Express handle it
}

// Routes
app.use("/users", userRoutes);

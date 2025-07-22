// index.js
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import userRoutes from './userRoutes.js';

const app = express();
app.use(cors());
app.use(express.json());

const uri = "mongodb+srv://aryabarman002:aryabarman002@cluster0.n0gqnsv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(uri)
  .then(() => console.log("✅ MongoDB connected successfully"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

app.use('/api', userRoutes);

const PORT = process.env.PORT || 5173; // ✅ Changed to avoid conflict with Vite
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

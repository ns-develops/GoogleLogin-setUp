import mongoose from "mongoose";

const connectDB = async () => {
  try {
    console.log("Connecting to MongoDB...");

    mongoose.connection.on('connected', () => console.log("Database Connected"));
    mongoose.connection.on('error', (err) => console.error("MongoDB connection error:", err.message));

    await mongoose.connect(process.env.MONGODB_URI);
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error.message);
  }
};

export default connectDB;


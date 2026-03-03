import mongoose from "mongoose";


export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://gauri_db_user:8431580134@cluster0.fnocv9b.mongodb.net/food-del"
    );
    console.log("DB CONNECTED");
  } catch (error) {
    console.error("DB Connection Error:", error);
    process.exit(1); // optional: exit if connection fails
  }
}
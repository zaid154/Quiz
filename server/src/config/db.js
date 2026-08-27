import dns from "node:dns";
import mongoose from "mongoose";

export async function connectDB() {
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    throw new Error("MONGODB_URI is missing in .env");
  }

  // Some ISP/local DNS resolvers refuse the SRV lookups that mongodb+srv://
  // requires. Fall back to public resolvers so Atlas connections work anywhere.
  if (uri.startsWith("mongodb+srv://")) {
    dns.setServers(["8.8.8.8", "1.1.1.1"]);
  }

  mongoose.set("strictQuery", true);
  await mongoose.connect(uri);
  console.log("MongoDB connected");
}

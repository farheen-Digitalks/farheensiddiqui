import mongoose from "mongoose";

console.log("ALL ENV:", process.env);
console.log("MONGODB_URI:", process.env.MONGODB_URI);
const MONGODB_URI = process.env.MONGODB_URI as string;

if (!MONGODB_URI) {
  throw new Error("Please define MONGODB_URI in .env.local");
}

// ✅ Properly typed global cache
declare global {
  // eslint-disable-next-line no-var
  var mongoose: {
    conn: Awaited<ReturnType<typeof import("mongoose").connect>> | null;
  };
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null };
}

export async function connectDB() {
  if (cached.conn) {
    return cached.conn;
  }

  cached.conn = await mongoose.connect(MONGODB_URI);
  return cached.conn;
}

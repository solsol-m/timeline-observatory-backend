
import mongoose from "mongoose";
import dotenv from "dotenv";
import HistoricalEvent from "../models/HistoricalEvent.js";
import Era from "../models/Era.js";
import Story from "../models/Story.js";

dotenv.config();

// ⚠️  IMPORT MOCK DATA FROM frontend
// اكتبي المسار الصحيح لملف mockData.ts
import { mockEvents, mockEras, mockStories } from "./mockData.js";




const seedDatabase = async () => {
  try {
    console.log("Connecting to MongoDB...");
    await mongoose.connect(process.env.MONGO_URI);

    console.log("Clearing old data...");
    await HistoricalEvent.deleteMany();
    await Era.deleteMany();
    await Story.deleteMany();

    console.log("Inserting ERAS...");
    await Era.insertMany(mockEras);

    console.log("Inserting STORIES...");
    await Story.insertMany(mockStories);

    console.log("Inserting EVENTS...");
    await HistoricalEvent.insertMany(mockEvents);

    console.log("🌟 All data seeded successfully!");
    process.exit(0);
  } catch (error) {
    console.error("❌ Seeder Error:", error);
    process.exit(1);
  }
};

seedDatabase();

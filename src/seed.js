const mongoose = require("mongoose");
const Event = require("./config/models/Event");
require("dotenv").config();

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB for seeding..."))
  .catch((err) => {
    console.error("DB connection error:", err);
    process.exit(1);
  });

// Historical events data
const events = [
  {
    title: "Invention of Writing",
    year: -3200,
    category: "Civilization",
    continent: "Middle East",
    shortDescription: "The earliest known writing appears in Sumer.",
    coordinates: { type: "Point", coordinates: [45.0, 32.0] }
  },
  {
    title: "Construction of the Great Pyramid of Giza",
    year: -2560,
    category: "Architecture",
    continent: "Africa",
    shortDescription: "The Great Pyramid is built under Pharaoh Khufu.",
    coordinates: { type: "Point", coordinates: [31.1342, 29.9792] }
  },
  { title: "Code of Hammurabi", year: -1754, category: "Law", continent: "Middle East", coordinates: { type: "Point", coordinates: [44.4, 32.5] } },
  { title: "Formation of the Hittite Empire", year: -1600, category: "Empire", continent: "Asia", coordinates: { type: "Point", coordinates: [36.0, 39.0] } },
  { title: "Shang Dynasty Rise", year: -1600, category: "Empire", continent: "Asia", coordinates: { type: "Point", coordinates: [112.0, 34.0] } },
  { title: "Trojan War (Legendary)", year: -1200, category: "War", continent: "Europe", coordinates: { type: "Point", coordinates: [26.23, 39.96] } },
  { title: "Founding of Rome", year: -753, category: "Civilization", continent: "Europe", coordinates: { type: "Point", coordinates: [12.4964, 41.9028] } },
  { title: "Battle of Marathon", year: -490, category: "War", continent: "Europe", coordinates: { type: "Point", coordinates: [24.017, 38.150] } },
  { title: "Alexander the Great's Empire", year: -330, category: "Empire", continent: "Asia", coordinates: { type: "Point", coordinates: [44.0, 36.0] } },
  { title: "Library of Alexandria Built", year: -283, category: "Knowledge", continent: "Africa", coordinates: { type: "Point", coordinates: [29.9, 31.2] } },
  { title: "Fall of Western Roman Empire", year: 476, category: "Empire", continent: "Europe", coordinates: { type: "Point", coordinates: [12.5, 41.9] } },
  { title: "Rise of the Byzantine Empire", year: 527, category: "Empire", continent: "Europe", coordinates: { type: "Point", coordinates: [28.97, 41.01] } },
  { title: "Prophet Muhammad's Migration (Hijra)", year: 622, category: "Religion", continent: "Middle East", coordinates: { type: "Point", coordinates: [39.21, 21.39] } },
  { title: "Battle of Tours", year: 732, category: "War", continent: "Europe", coordinates: { type: "Point", coordinates: [0.698, 47.39] } },
  { title: "Viking Age Begins", year: 793, category: "Civilization", continent: "Europe", coordinates: { type: "Point", coordinates: [-2.0, 55.0] } },
  { title: "Black Death in Europe", year: 1347, category: "Disease", continent: "Europe", coordinates: { type: "Point", coordinates: [14.0, 41.0] } },
  { title: "Gutenberg Prints First Book", year: 1455, category: "Invention", continent: "Europe", coordinates: { type: "Point", coordinates: [8.247, 50.0] } },
  { title: "Columbus Reaches America", year: 1492, category: "Exploration", continent: "Americas", coordinates: { type: "Point", coordinates: [-61.5, 15.5] } },
  { title: "Ottoman Empire Takes Constantinople", year: 1453, category: "War", continent: "Europe", coordinates: { type: "Point", coordinates: [28.97, 41.01] } },
  { title: "Industrial Revolution", year: 1760, category: "Industry", continent: "Europe", coordinates: { type: "Point", coordinates: [-2.24, 53.48] } },
  { title: "American Revolution", year: 1776, category: "War", continent: "Americas", coordinates: { type: "Point", coordinates: [-77.0, 38.9] } },
  { title: "French Revolution", year: 1789, category: "War", continent: "Europe", coordinates: { type: "Point", coordinates: [2.352, 48.856] } },
  { title: "Napoleon Crowned Emperor", year: 1804, category: "Empire", continent: "Europe", coordinates: { type: "Point", coordinates: [2.352, 48.856] } },
  { title: "American Civil War", year: 1861, category: "War", continent: "Americas", coordinates: { type: "Point", coordinates: [-83, 39] } },
  { title: "Invention of Telephone", year: 1876, category: "Invention", continent: "Americas", coordinates: { type: "Point", coordinates: [-71.06, 42.36] } },
  { title: "Completion of Suez Canal", year: 1869, category: "Engineering", continent: "Africa", coordinates: { type: "Point", coordinates: [32.55, 30.5] } },
  { title: "World War I", year: 1914, category: "War", continent: "Europe", coordinates: { type: "Point", coordinates: [2.4, 50.0] } },
  { title: "Russian Revolution", year: 1917, category: "War", continent: "Europe", coordinates: { type: "Point", coordinates: [37.6, 55.75] } },
  { title: "Discovery of Penicillin", year: 1928, category: "Science", continent: "Europe", coordinates: { type: "Point", coordinates: [-0.1, 51.5] } },
  { title: "World War II", year: 1939, category: "War", continent: "Europe", coordinates: { type: "Point", coordinates: [13.4, 52.5] } },
  { title: "Atomic Bombings of Japan", year: 1945, category: "War", continent: "Asia", coordinates: { type: "Point", coordinates: [132.0, 34.3] } },
  { title: "Founding of United Nations", year: 1945, category: "Politics", continent: "Americas", coordinates: { type: "Point", coordinates: [-73.97, 40.75] } },
  { title: "First Man on the Moon", year: 1969, category: "Space", continent: "Americas", coordinates: { type: "Point", coordinates: [-80.6, 28.5] } },
  { title: "Fall of Berlin Wall", year: 1989, category: "Politics", continent: "Europe", coordinates: { type: "Point", coordinates: [13.4, 52.5] } },
  { title: "9/11 Attacks", year: 2001, category: "War", continent: "Americas", coordinates: { type: "Point", coordinates: [-74.0, 40.71] } },
  { title: "Arab Spring", year: 2011, category: "Politics", continent: "Middle East", coordinates: { type: "Point", coordinates: [31.0, 30.0] } },
  { title: "COVID-19 Pandemic", year: 2019, category: "Disease", continent: "Asia", coordinates: { type: "Point", coordinates: [114.3, 30.6] } }
];

// Add dummy events to reach 200
for (let i = events.length; i < 200; i++) {
  events.push({
    title: "Historical Event " + i,
    year: -500 + i,
    category: "General",
    continent: "Europe",
    shortDescription: "This is a sample historical event for demonstration.",
    coordinates: {
      type: "Point",
      coordinates: [10 + (i % 100), 30 - (i % 50)]
    },
  });
}

async function seedDB() {
  try {
    // Clear existing events
    await Event.deleteMany({});
    console.log("🗑️  Cleared existing events");

    // Insert new events
    const createdEvents = await Event.insertMany(events);
    console.log(`✅ Successfully seeded ${createdEvents.length} events`);

    // Close the connection
    mongoose.connection.close();
    console.log("🔌 Disconnected from MongoDB");
  } catch (error) {
    console.error("❌ Error seeding database:", error);
    process.exit(1);
  }
}

// Run the seed function
seedDB();
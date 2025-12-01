const mongoose = require("mongoose");
const Event = require("./config/models/Event");
require("dotenv").config();

// Connect to MongoDB
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("✅ Connected to MongoDB"))
    .catch((err) => {
        console.error("❌ DB connection error:", err);
        process.exit(1);
    });

async function testEvents() {
    try {
        // Count total events
        const totalEvents = await Event.countDocuments();
        console.log(`\n📊 Total Events in Database: ${totalEvents}`);

        // Get events by category
        const categories = await Event.aggregate([
            { $group: { _id: '$category', count: { $sum: 1 } } },
            { $sort: { count: -1 } }
        ]);

        console.log('\n📂 Events by Category:');
        categories.forEach(cat => {
            console.log(`   - ${cat._id}: ${cat.count} events`);
        });

        // Get events by continent
        const continents = await Event.aggregate([
            { $group: { _id: '$continent', count: { $sum: 1 } } },
            { $sort: { count: -1 } }
        ]);

        console.log('\n🌍 Events by Continent:');
        continents.forEach(cont => {
            console.log(`   - ${cont._id}: ${cont.count} events`);
        });

        // Get first 5 events
        const sampleEvents = await Event.find().limit(5).sort({ year: 1 });

        console.log('\n📜 Sample Events (First 5):');
        sampleEvents.forEach(event => {
            console.log(`   - ${event.year}: ${event.title} (${event.category})`);
        });

        console.log('\n✅ Test completed successfully!\n');

        // Close connection
        mongoose.connection.close();
    } catch (error) {
        console.error("❌ Error testing events:", error);
        process.exit(1);
    }
}

// Run the test
testEvents();

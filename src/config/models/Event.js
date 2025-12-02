const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  year: { type: Number, required: true },
  era: { type: String },
  category: { type: String },
  shortDescription: { type: String },
  longDescription: { type: String },
  continent: { type: String },
  locationName: { type: String },
  coordinates: {
    type: { type: String, default: "Point" },
    coordinates: { type: [Number], default: [0, 0] } // [lng, lat]
  },
  imageUrl: { type: String },
  sources: [String],
}, { timestamps: true });

EventSchema.index({ coordinates: "2dsphere" });

module.exports = mongoose.model("Event", EventSchema);

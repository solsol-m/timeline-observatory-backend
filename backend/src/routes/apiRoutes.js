import express from "express";
import { mockEras, mockStories, mockEvents } from "../data/mockData.js";

const router = express.Router();

// All events
router.get("/events", (req, res) => {
    res.json(mockEvents);
});

// Single event
router.get("/events/:id", (req, res) => {
    const event = mockEvents.find((e) => e.id === req.params.id);
    if (!event) return res.status(404).json({ message: "Event not found" });
    res.json(event);
});

// Eras
router.get("/eras", (req, res) => {
    res.json(mockEras);
});

// Stories
router.get("/stories", (req, res) => {
    res.json(mockStories);
});

export default router;

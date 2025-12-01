const express = require("express");
const router = express.Router();

const controller = require("../controllers/eventController");

// EVENTS CRUD
router.get("/", controller.getEvents);
router.get("/:id", controller.getEventById);
router.post("/", controller.createEvent);
router.put("/:id", controller.updateEvent);
router.delete("/:id", controller.deleteEvent);

// MAP DATA
router.get("/map/data", controller.getMapEvents);

// ANALYTICS / STATS
router.get("/stats/centuries", controller.getEventsByCentury);
router.get("/stats/continents", controller.getEventsByContinent);
router.get("/stats/categories", controller.getEventsByCategory);
router.get("/stats/peak", controller.getPeakTimeline);

module.exports = router;


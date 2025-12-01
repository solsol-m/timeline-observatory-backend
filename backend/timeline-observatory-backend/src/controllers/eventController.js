const Event = require("../config/models/Event");

// GET /api/events (list + filters + search)
exports.getEvents = async (req, res) => {
  try {
    const {
      page = 1,
      limit = 20,
      search,
      category,
      continent,
      start,
      end,
      sort
    } = req.query;

    const query = {};

    if (category) query.category = category;
    if (continent) query.continent = continent;

    if (start || end) {
      query.year = {};
      if (start) query.year.$gte = Number(start);
      if (end) query.year.$lte = Number(end);
    }

    if (search) {
      query.$text = { $search: search };
    }

    let sortObj = { year: -1 };
    if (sort) {
      const [field, dir] = sort.split(":");
      sortObj = { [field]: dir === "asc" ? 1 : -1 };
    }

    const events = await Event.find(query)
      .sort(sortObj)
      .skip((page - 1) * limit)
      .limit(Number(limit));

    const total = await Event.countDocuments(query);

    res.json({
      data: events,
      total,
      page: Number(page),
      pages: Math.ceil(total / limit)
    });
  } catch (error) {
    res.status(500).json({ message: "Error fetching events" });
  }
};

// GET single event
exports.getEventById = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    res.json(event);
  } catch {
    res.status(404).json({ message: "Event not found" });
  }
};

// CREATE
exports.createEvent = async (req, res) => {
  try {
    const event = new Event(req.body);
    await event.save();
    res.json(event);
  } catch (error) {
    res.status(400).json({ message: "Error creating event" });
  }
};

// UPDATE
exports.updateEvent = async (req, res) => {
  try {
    const updated = await Event.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updated);
  } catch {
    res.status(400).json({ message: "Error updating event" });
  }
};

// DELETE
exports.deleteEvent = async (req, res) => {
  try {
    await Event.findByIdAndDelete(req.params.id);
    res.json({ message: "Event deleted" });
  } catch {
    res.status(400).json({ message: "Error deleting event" });
  }
};
// GET /api/events/map  (lightweight map data)
exports.getMapEvents = async (req, res) => {
  try {
    const events = await Event.find(
      {},
      {
        title: 1,
        year: 1,
        category: 1,
        coordinates: 1
      }
    );

    res.json(events);
  } catch (error) {
    console.error("MAP EVENTS ERROR:", error);
    res.status(500).json({ message: "Error fetching map events" });
  }
};

// Get events grouped by century
exports.getEventsByCentury = async (req, res) => {
  try {
    const centuries = await Event.aggregate([
      {
        $project: {
          century: { $floor: { $divide: ['$year', 100] } }
        }
      },
      {
        $group: {
          _id: '$century',
          count: { $sum: 1 }
        }
      },
      { $sort: { _id: 1 } }
    ]);
    res.json(centuries);
  } catch (error) {
    console.error("CENTURIES ERROR:", error);
    res.status(500).json({ message: 'Error fetching events by century' });
  }
};

// Get events grouped by continent
exports.getEventsByContinent = async (req, res) => {
  try {
    const continents = await Event.aggregate([
      { $group: { _id: '$continent', count: { $sum: 1 } } },
      { $sort: { count: -1 } }
    ]);
    res.json(continents);
  } catch (error) {
    console.error("CONTINENTS ERROR:", error);
    res.status(500).json({ message: 'Error fetching events by continent' });
  }
};

// Get events grouped by category
exports.getEventsByCategory = async (req, res) => {
  try {
    const categories = await Event.aggregate([
      { $group: { _id: '$category', count: { $sum: 1 } } },
      { $sort: { count: -1 } }
    ]);
    res.json(categories);
  } catch (error) {
    console.error("CATEGORIES ERROR:", error);
    res.status(500).json({ message: 'Error fetching events by category' });
  }
};

// Get peak periods in the timeline
exports.getPeakTimeline = async (req, res) => {
  try {
    const peaks = await Event.aggregate([
      {
        $project: {
          decade: {
            $multiply: [{ $floor: { $divide: ['$year', 10] } }, 10]
          }
        }
      },
      {
        $group: {
          _id: '$decade',
          count: { $sum: 1 }
        }
      },
      { $sort: { count: -1 } },
      { $limit: 10 }
    ]);
    res.json(peaks);
  } catch (error) {
    console.error("PEAK TIMELINE ERROR:", error);
    res.status(500).json({ message: 'Error fetching timeline peaks' });
  }
};

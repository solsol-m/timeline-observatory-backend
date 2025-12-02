import Story from "../models/Story.js";

export const getStories = async (req, res) => {
  try {
    const stories = await Story.find({});
    res.json(stories);
  } catch (error) {
    console.error("Error fetching stories:", error);
    res.status(500).json({ message: "Server error" });
  }
};

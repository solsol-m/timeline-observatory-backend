import Era from "../models/Era.js";

export const getEras = async (req, res) => {
  try {
    const eras = await Era.find({});
    res.json(eras);
  } catch (error) {
    console.error("Error fetching eras:", error);
    res.status(500).json({ message: "Server error" });
  }
};

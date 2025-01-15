const categoryModel = require("../models/categoryModel");

// create category
const createCategoryController = async (req, res) => {
  try {
    const { title, imgurl } = req.body;
    if (!title) {
      return res.status(400).send({
        success: false,
        message: "Title and image URL are required"
      });
    }
    const newCategory = new categoryModel({ title, imgurl });
    await newCategory.save();
    res.send(newCategory);
    res.status(200).send({
      message: "category saved successfully",
      success: true,
      newCategory: newCategory
    })

  } catch (err) {
    console.error(err.message);
    res.status(500).send("Failed to create category");
  }
}

module.exports = { createCategoryController };

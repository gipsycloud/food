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
};

// get all category
const getAllCategoryController = async (req, res) => {
  try {
    const categories = await categoryModel.find({});
    if (!categories) {
      return res.status(404).send("No categories found");
    }
    res.status(200).send({
      success: true,
      totalCategory: categories.length,
      categories
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Failed to get all categories");
  }
};

module.exports = { createCategoryController, getAllCategoryController };

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

const updateCategoryController = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(req.body);
    const { title, imgurl } = req.body;
    const updateCategory = await categoryModel.findByIdAndUpdate(id, { title, imgurl }, { new: true });
    if (!updateCategory) {
      return res.status(404).send({
        success: false,
        message: "Category not found"
      });
    }
    res.status(200).send({
      success: true,
      message: "Category updated successfully",
      updatedCategory: updateCategory
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send({
      success: false,
      err,
      message: "Failed to update category"
    });
  }
};

const deleteCategoryController = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).send({
        success: false,
        message: "Invalid category id"
      });
    }
    const deleteCategory = await categoryModel.findByIdAndDelete(id);
    res.status(200).send({
      success: true,
      message: "Category deleted successfully"
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send({
      success: false,
      message: "Failed to delete category"
    });
  }
};

module.exports = { createCategoryController, getAllCategoryController, updateCategoryController, deleteCategoryController };

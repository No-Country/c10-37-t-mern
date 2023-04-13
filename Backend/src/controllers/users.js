const userSchema = require("../models/User");
const User = require("../models/User");

const postUser = async (req, res) => {
  console.log("entro");
  try {
    const user = userSchema(req.body);
    await user.save();
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ mensaje: error.message });
  }
};

const getUser = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const users = await User.findById(id);
    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const getElementByEmail = async (email) => {
  try {
    return await userSchema.findOne({ email });
  } catch (error) {
    return error;
  }
};

module.exports = { postUser, getUser, getUserById, getElementByEmail };

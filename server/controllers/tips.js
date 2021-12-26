import mongoose from "mongoose";
import CodeTip from "../models/codeTip.js";

export const getReactTips = async (req, res) => {
  try {
    const codeTips = await CodeTip.find();
    res.status(200).json(codeTips);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const createReactTip = async (req, res) => {
  const tip = req.body;
  const newTip = new CodeTip(tip);
  try {
    await newTip.save();
    res.status(201).json(newTip);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const updateReactTip = async (req, res) => {
  const { id: _id } = req.params;
  const tip = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404);

  const updatedTip = await CodeTip.findByIdAndUpdate(
    _id,
    { ...tip, _id },
    { new: true }
  );

  res.json(updatedTip);
};

export const deleteReactTip = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No post with that id");
  await CodeTip.findByIdAndRemove(id);

  res.json({ message: "post deleted succesfully" });
};

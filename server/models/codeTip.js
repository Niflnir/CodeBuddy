import mongoose from "mongoose";

const tipSchema = mongoose.Schema({
  title: String,
  description: String,
  creator: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const CodeTip = mongoose.model("CodeTip", tipSchema);
export default CodeTip;

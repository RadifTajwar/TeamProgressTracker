import mongoose from "mongoose";

const TeamProgressSchema = new mongoose.Schema(
  {
    completedDays: {
      type: [Number],
      default: [],
    },

    completedProblems: {
      type: [String],
      default: [],
    }
  },
  { timestamps: true }
);

export default mongoose.models.TeamProgress ||
  mongoose.model("TeamProgress", TeamProgressSchema);

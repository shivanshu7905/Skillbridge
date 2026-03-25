import mongoose from "mongoose";

const RoadmapSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    targetRole: String,
    steps: [String],
    completedSteps: [String],
    createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Roadmap || mongoose.model("Roadmap", RoadmapSchema);
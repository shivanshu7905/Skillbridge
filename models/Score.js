import mongoose from "mongoose";

const ScoreSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    totalScore: Number,
    breakdown: {
        projectQuality: Number,
        codeConsistency: Number,
        techDiversity: Number,
        dsa: Number,
        readme: Number,
    },
    analyzedAt: { type: Date, default: Date.now },
});

export default mongoose.models.Score || mongoose.model("Score", ScoreSchema);
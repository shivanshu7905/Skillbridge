import { analyzeGithubProfile } from "@/lib/gemini";
import connectDB from "@/lib/mongodb";
import Score from "@/models/Score";

export async function POST(request) {
    try {
        const data = await request.json();

        const score = await analyzeGithubProfile(data);

        try {
            await connectDB();
            await Score.create({
                totalScore: score.totalScore,
                breakdown: score.breakdown,
            });
        } catch (dbError) {
            // Don't fail the whole request if DB save fails
            console.error("Failed to save score to DB:", dbError.message);
        }

        return Response.json(score);
    } catch (error) {
        return Response.json({ error: error.message }, { status: 500 });
    }
}
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function callWithRetry(fn, retries = 2, delayMs = 3000) {
    for (let i = 0; i <= retries; i++) {
        try {
            return await fn();
        } catch (err) {
            const isRateLimit =
                err?.status === 429 ||
                err?.message?.includes("429") ||
                err?.message?.includes("quota") ||
                err?.message?.includes("Too Many Requests");

            if (isRateLimit && i < retries) {
                // Wait before retrying (exponential backoff)
                await new Promise((r) => setTimeout(r, delayMs * (i + 1)));
                continue;
            }

            if (isRateLimit) {
                throw new Error(
                    "AI service is temporarily rate-limited. Please wait a minute and try again."
                );
            }
            throw err;
        }
    }
}

export async function analyzeGithubProfile(data) {
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    const prompt = `
    Analyze this GitHub profile for placement readiness:
    
    Username: ${data.username}
    Public Repos: ${data.repoCount}
    Followers: ${data.followers}
    Languages Used: ${Object.keys(data.languages).join(", ")}
    Top Projects: ${data.topProjects.join(", ")}
    Total Stars: ${data.totalStars}
    
    Return ONLY a valid JSON object like this (no extra text):
    {
      "totalScore": 75,
      "breakdown": {
        "projectQuality": 70,
        "codeConsistency": 65,
        "techDiversity": 80,
        "dsa": 50,
        "readme": 60
      },
      "feedback": "Your profile shows good tech diversity but needs more DSA projects."
    }
  `;

    const result = await callWithRetry(() => model.generateContent(prompt));
    const text = result.response.text();
    const clean = text.replace(/```json|```/g, "").trim();

    try {
        return JSON.parse(clean);
    } catch {
        throw new Error("AI returned an invalid response. Please try again.");
    }
}
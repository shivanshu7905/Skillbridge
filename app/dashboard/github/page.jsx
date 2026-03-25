"use client";

import { useState } from "react";
import Image from "next/image";
import Card from "@/components/ui/Card";
import ProgressBar from "@/components/ui/ProgressBar";
import Badge from "@/components/ui/Badge";

export default function GitHubAnalyzerPage() {
    const [username, setUsername] = useState("");
    const [loading, setLoading] = useState(false);
    const [githubData, setGithubData] = useState(null);
    const [score, setScore] = useState(null);
    const [error, setError] = useState("");

    async function handleAnalyze() {
        if (!username) return;
        setLoading(true);
        setError("");
        setScore(null);
        setGithubData(null);

        try {
            const res1 = await fetch("/api/analyze/github", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username }),
            });
            const data = await res1.json();
            if (data.error) throw new Error(data.error);
            setGithubData(data);

            const res2 = await fetch("/api/analyze/score", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });
            const scoreData = await res2.json();
            if (scoreData.error) throw new Error(scoreData.error);
            setScore(scoreData);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }

    const scoreColor = (val) => {
        if (val >= 75) return "green";
        if (val >= 50) return "orange";
        return "red";
    };

    return (
        <div className="max-w-3xl mx-auto">
            <h1 className="text-2xl font-extrabold text-slate-800 mb-1">GitHub Profile Analyzer</h1>
            <p className="text-sm text-slate-400 mb-8">Enter a GitHub username to analyze placement readiness</p>

            {/* Input */}
            <Card className="mb-6">
                <div className="flex gap-3">
                    <input
                        type="text"
                        placeholder="Enter GitHub username..."
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && handleAnalyze()}
                        className="flex-1 border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-black bg-white focus:outline-none focus:border-blue-400"
                    />
                    <button
                        onClick={handleAnalyze}
                        disabled={loading}
                        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm px-6 py-2.5 rounded-lg transition disabled:opacity-50"
                    >
                        {loading ? "Analyzing..." : "Analyze"}
                    </button>
                </div>
                {error && <p className="text-red-500 text-sm mt-3">{error}</p>}
            </Card>

            {/* Profile Card */}
            {githubData && (
                <Card className="mb-6">
                    <div className="flex items-center gap-4 mb-6">
                        <Image
                            src={`https://avatars.githubusercontent.com/${githubData.username}`}
                            alt={githubData.username}
                            width={72}
                            height={72}
                            className="rounded-full border-2 border-blue-100"
                        />
                        <div>
                            <h2 className="text-lg font-extrabold text-slate-800">{githubData.username}</h2>
                            <a
                                href={`https://github.com/${githubData.username}`}
                                target="_blank"
                                className="text-sm text-blue-500 hover:underline"
                            >
                                github.com/{githubData.username}
                            </a>
                        </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                        {[
                            { label: "Public Repos", value: githubData.repoCount },
                            { label: "Followers", value: githubData.followers },
                            { label: "Total Stars", value: githubData.totalStars },
                        ].map((s) => (
                            <div key={s.label} className="bg-blue-50 rounded-xl p-3 text-center">
                                <p className="text-2xl font-extrabold text-blue-600">{s.value}</p>
                                <p className="text-xs text-slate-400 mt-1">{s.label}</p>
                            </div>
                        ))}
                    </div>

                    {/* Top Projects */}
                    <div className="mb-4">
                        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Top Projects</p>
                        <div className="flex flex-wrap gap-2">
                            {githubData.topProjects.map((proj) => (
                                <a
                                    key={proj}
                                    href={`https://github.com/${githubData.username}/${proj}`}
                                    target="_blank"
                                    className="text-xs bg-slate-100 hover:bg-blue-50 text-slate-600 hover:text-blue-600 px-3 py-1 rounded-full transition"
                                >
                                    {proj}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Languages */}
                    <div>
                        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Languages</p>
                        <div className="flex flex-wrap gap-2">
                            {Object.keys(githubData.languages).map((lang) => (
                                <Badge key={lang} label={lang} variant="blue" />
                            ))}
                        </div>
                    </div>
                </Card>
            )}

            {/* AI Score Card */}
            {score && (
                <Card>
                    <div className="flex justify-between items-center mb-2">
                        <h2 className="text-base font-bold text-slate-700">AI Placement Score</h2>
                        <div className="text-right">
                            <span className="text-4xl font-extrabold text-blue-600">{score.totalScore}</span>
                            <span className="text-base text-slate-400">/100</span>
                        </div>
                    </div>

                    {/* Overall Badge */}
                    <div className="mb-6">
                        <Badge
                            label={score.totalScore >= 75 ? "Placement Ready 🎉" : score.totalScore >= 50 ? "Needs Improvement" : "Not Ready Yet"}
                            variant={score.totalScore >= 75 ? "green" : score.totalScore >= 50 ? "orange" : "red"}
                        />
                    </div>

                    {/* Score Breakdown */}
                    <div className="flex flex-col gap-4 mb-6">
                        {Object.entries(score.breakdown).map(([key, val]) => (
                            <div key={key}>
                                <div className="flex justify-between mb-1">
                                    <span className="text-sm text-slate-600 font-medium capitalize">
                                        {key.replace(/([A-Z])/g, " $1")}
                                    </span>
                                    <span className="text-sm font-bold text-slate-500">{val}/100</span>
                                </div>
                                <ProgressBar value={val} color={scoreColor(val)} />
                            </div>
                        ))}
                    </div>

                    {/* AI Feedback */}
                    <div className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-xl p-5 border border-blue-100">
                        <div className="flex items-center gap-2 mb-2">
                            <span className="text-blue-600 text-lg">🤖</span>
                            <p className="text-sm font-bold text-blue-700">AI Detailed Feedback</p>
                        </div>
                        <p className="text-sm text-slate-600 leading-relaxed">{score.feedback}</p>
                    </div>

                    {/* Tips */}
                    <div className="mt-4 bg-amber-50 rounded-xl p-4 border border-amber-100">
                        <p className="text-sm font-bold text-amber-700 mb-1">💡 Quick Tips</p>
                        <ul className="text-sm text-slate-600 list-disc list-inside space-y-1">
                            {score.breakdown.dsa < 60 && <li>Add more DSA practice projects on GitHub</li>}
                            {score.breakdown.readme < 60 && <li>Improve README files in your top repos</li>}
                            {score.breakdown.projectQuality < 60 && <li>Work on project complexity and documentation</li>}
                            {score.breakdown.techDiversity < 60 && <li>Explore more programming languages</li>}
                            {score.breakdown.codeConsistency < 60 && <li>Commit code more regularly</li>}
                        </ul>
                    </div>
                </Card>
            )}
        </div>
    );
}
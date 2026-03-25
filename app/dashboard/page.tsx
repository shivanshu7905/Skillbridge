import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import ProgressBar from "@/components/ui/ProgressBar";

export default function DashboardPage() {
    return (
        <div className="max-w-5xl mx-auto">
            <h1 className="text-2xl font-extrabold text-slate-800 mb-1">Welcome back! 👋</h1>
            <p className="text-sm text-slate-400 mb-8">Here's your placement readiness overview</p>

            {/* Score Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                <Card>
                    <p className="text-xs text-slate-400 font-medium mb-1">Overall Score</p>
                    <p className="text-3xl font-extrabold text-blue-600">72<span className="text-base text-slate-400">/100</span></p>
                    <Badge label="Good" variant="green" />
                </Card>
                <Card>
                    <p className="text-xs text-slate-400 font-medium mb-1">GitHub Score</p>
                    <p className="text-3xl font-extrabold text-blue-600">65<span className="text-base text-slate-400">/100</span></p>
                    <Badge label="Average" variant="orange" />
                </Card>
                <Card>
                    <p className="text-xs text-slate-400 font-medium mb-1">Skill Match</p>
                    <p className="text-3xl font-extrabold text-blue-600">80<span className="text-base text-slate-400">/100</span></p>
                    <Badge label="Strong" variant="blue" />
                </Card>
            </div>

            {/* Progress Breakdown */}
            <Card className="mb-8">
                <h2 className="text-base font-bold text-slate-700 mb-5">Score Breakdown</h2>
                <div className="flex flex-col gap-4">
                    {[
                        { label: "Project Quality", value: 70, color: "blue" },
                        { label: "Code Consistency", value: 55, color: "orange" },
                        { label: "Tech Diversity", value: 80, color: "green" },
                        { label: "DSA Practice", value: 40, color: "red" },
                        { label: "README Quality", value: 65, color: "blue" },
                    ].map((item) => (
                        <div key={item.label}>
                            <div className="flex justify-between mb-1">
                                <span className="text-sm text-slate-600 font-medium">{item.label}</span>
                                <span className="text-sm text-slate-400">{item.value}%</span>
                            </div>
                            <ProgressBar value={item.value} color={item.color} />
                        </div>
                    ))}
                </div>
            </Card>

            {/* Quick Actions */}
            <Card>
                <h2 className="text-base font-bold text-slate-700 mb-4">Quick Actions</h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {[
                        { label: "Analyze GitHub", href: "/dashboard/github", color: "bg-blue-50 text-blue-600" },
                        { label: "Check Skill Gap", href: "/dashboard/skills", color: "bg-green-50 text-green-600" },
                        { label: "Detect Fake Job", href: "/dashboard/jobs", color: "bg-orange-50 text-orange-600" },
                        { label: "Get Roadmap", href: "/dashboard/roadmap", color: "bg-purple-50 text-purple-600" },
                    ].map((action) => (
                        <a
                            key={action.label}
                            href={action.href}
                            className={`${action.color} text-center text-sm font-semibold px-4 py-3 rounded-lg hover:opacity-80 transition`}
                        >
                            {action.label}
                        </a>
                    ))}
                </div>
            </Card>
        </div>
    );
}
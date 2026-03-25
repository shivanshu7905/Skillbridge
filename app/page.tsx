import LoginButton from "@/components/LoginButton";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f8faff] font-sans">

      {/* Main Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 bg-white border-b border-slate-200">
        <h1 className="text-2xl font-extrabold text-blue-600 tracking-tight">SkillBridge</h1>
        <LoginButton />
      </nav>

      {/* Sub Navbar */}
      <div className="flex items-center justify-center bg-white border-b-2 border-slate-200 overflow-x-auto">
        <a href="#" className="text-sm font-semibold text-blue-600 border-b-2 border-blue-600 px-5 py-3 whitespace-nowrap -mb-[2px]">Internships</a>
        <a href="#" className="text-sm font-medium text-slate-500 hover:text-blue-600 px-5 py-3 whitespace-nowrap">Jobs</a>
        <a href="#" className="text-sm font-medium text-slate-500 hover:text-blue-600 px-5 py-3 whitespace-nowrap">Trainings & Courses</a>
        <a href="#" className="text-sm font-medium text-slate-500 hover:text-blue-600 px-5 py-3 whitespace-nowrap">Placement Prep</a>
        <a href="#" className="text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md mx-4 my-2 whitespace-nowrap">Post a Job</a>
      </div>

      {/* Hero Section */}
      <section className="text-center py-16 px-8 bg-gradient-to-b from-blue-50 to-[#f8faff] border-b border-blue-100">
        <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-4 py-1 rounded-full uppercase tracking-wider mb-6">
          AI-Powered Career Platform
        </span>
        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-4">
          Bridge the gap between<br />
          <span className="text-blue-600">college & career</span>
        </h2>
        <p className="text-slate-500 text-base max-w-lg mx-auto mb-8 leading-relaxed">
          SkillBridge analyzes your GitHub profile, detects skill gaps, and generates a personalized roadmap to land your dream job.
        </p>
        <div className="flex items-center justify-center gap-3 flex-wrap">
          <a href="/dashboard" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm px-6 py-3 rounded-lg transition">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" /></svg>
            Get Started Free
          </a>
          <a href="#features" className="inline-flex items-center gap-2 bg-white border border-slate-300 hover:border-blue-500 hover:text-blue-600 text-slate-600 font-bold text-sm px-6 py-3 rounded-lg transition">
            See Demo
          </a>
        </div>

        {/* Stats */}
        <div className="flex justify-center gap-10 mt-10 flex-wrap">
          {[["10K+", "Students Helped"], ["500+", "Jobs Listed"], ["95%", "Placement Rate"]].map(([num, label]) => (
            <div key={label} className="text-center">
              <span className="block text-2xl font-extrabold text-blue-600">{num}</span>
              <p className="text-xs text-slate-400 mt-1">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-14 px-8">
        <p className="text-center text-xs font-bold text-blue-600 tracking-widest uppercase mb-2">Features</p>
        <h3 className="text-2xl font-extrabold text-center text-slate-900 mb-10">Everything you need to get placed</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {[
            { title: "GitHub Analyzer", desc: "AI scores your profile for placement readiness instantly" },
            { title: "Skill Gap Detector", desc: "Compare your skills vs top roles like SDE, ML Engineer" },
            { title: "Fake Job Detector", desc: "Detect red flags & scam signals in any job description" },
            { title: "AI Roadmap", desc: "Gemini generates a week-by-week personalized learning plan" },
          ].map((f) => (
            <div key={f.title} className="bg-white border border-slate-200 hover:border-blue-300 hover:shadow-md rounded-xl p-5 transition">
              <div className="w-9 h-9 bg-blue-50 rounded-lg flex items-center justify-center mb-3">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h4 className="text-sm font-bold text-slate-800 mb-1">{f.title}</h4>
              <p className="text-xs text-slate-400 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="py-14 px-8 bg-white border-t border-slate-200">
        <p className="text-center text-xs font-bold text-blue-600 tracking-widest uppercase mb-2">How it works</p>
        <h3 className="text-2xl font-extrabold text-center text-slate-900 mb-10">3 steps to placement ready</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 max-w-2xl mx-auto">
          {[
            ["1", "Login with GitHub", "One click OAuth login"],
            ["2", "Analyze Profile", "AI scans your repos & skills"],
            ["3", "Get Your Roadmap", "Personalized plan to get hired"],
          ].map(([num, title, desc], i) => (
            <div key={num} className="text-center px-6 py-4 relative">
              <div className="w-10 h-10 bg-blue-50 border-2 border-blue-600 rounded-full flex items-center justify-center text-blue-600 font-extrabold text-base mx-auto mb-3">
                {num}
              </div>
              <h4 className="text-sm font-bold text-slate-800 mb-1">{title}</h4>
              <p className="text-xs text-slate-400">{desc}</p>
              {i < 2 && <span className="absolute right-0 top-8 text-slate-300 text-2xl">›</span>}
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
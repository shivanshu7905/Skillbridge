"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
    { label: "Dashboard", href: "/dashboard", icon: "▦" },
    { label: "GitHub Analyzer", href: "/dashboard/github", icon: "⌥" },
    { label: "Skill Gap", href: "/dashboard/skills", icon: "◈" },
    { label: "Readiness Score", href: "/dashboard/score", icon: "◎" },
    { label: "Fake Job Detector", href: "/dashboard/jobs", icon: "⚑" },
    { label: "AI Roadmap", href: "/dashboard/roadmap", icon: "↗" },
    { label: "Public Profile", href: "/dashboard/profile", icon: "◉" },
];

export default function Sidebar() {
    const pathname = usePathname();

    return (
        <aside className="w-56 min-h-screen bg-white border-r border-slate-200 py-6 flex flex-col">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest px-5 mb-3">
                Menu
            </p>
            <nav className="flex flex-col gap-1">
                {navItems.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className={`flex items-center gap-3 px-5 py-2.5 text-sm font-medium rounded-lg mx-2 transition
              ${pathname === item.href
                                ? "bg-blue-50 text-blue-600 font-semibold"
                                : "text-slate-600 hover:bg-slate-50 hover:text-blue-600"
                            }`}
                    >
                        <span className="text-base">{item.icon}</span>
                        {item.label}
                    </Link>
                ))}
            </nav>
        </aside>
    );
}
"use client";

import Link from "next/link";
import LoginButton from "./LoginButton";

export default function Navbar() {
    return (
        <>
            {/* Main Navbar */}
            <nav className="flex justify-between items-center px-8 py-4 bg-white border-b border-slate-200">
                <Link href="/" className="text-2xl font-extrabold text-blue-600 tracking-tight">
                    SkillBridge
                </Link>
                <LoginButton />
            </nav>

            {/* Sub Navbar */}
            <div className="flex items-center justify-center bg-white border-b-2 border-slate-200 overflow-x-auto">
                <Link href="#" className="text-sm font-semibold text-blue-600 border-b-2 border-blue-600 px-5 py-3 whitespace-nowrap -mb-[2px]">Internships</Link>
                <Link href="#" className="text-sm font-medium text-slate-500 hover:text-blue-600 px-5 py-3 whitespace-nowrap">Jobs</Link>
                <Link href="#" className="text-sm font-medium text-slate-500 hover:text-blue-600 px-5 py-3 whitespace-nowrap">Trainings & Courses</Link>
                <Link href="#" className="text-sm font-medium text-slate-500 hover:text-blue-600 px-5 py-3 whitespace-nowrap">Placement Prep</Link>
                <Link href="#" className="text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md mx-4 my-2 whitespace-nowrap">Post a Job</Link>
            </div>
        </>
    );
}
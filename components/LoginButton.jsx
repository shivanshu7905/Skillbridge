"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function LoginButton() {
    const { data: session } = useSession();

    if (session) {
        return (
            <div className="flex items-center gap-3">
                <img
                    src={session.user.image}
                    alt="avatar"
                    className="w-8 h-8 rounded-full"
                />
                <span className="text-sm text-slate-300">{session.user.name}</span>
                <button
                    onClick={() => signOut()}
                    className="bg-red-500 hover:bg-red-600 text-white text-sm px-3 py-1 rounded-md"
                >
                    Logout
                </button>
            </div>
        );
    }

    return (
        <button
            onClick={() => signIn("github")}
            className="bg-accent hover:opacity-90 text-navy font-semibold px-4 py-2 rounded-md text-sm"
        >
            Login with GitHub
        </button>
    );
}
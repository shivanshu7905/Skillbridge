import { getRepos, getLanguages, getUserInfo } from "@/lib/github";

export async function POST(request) {
    try {
        const { username } = await request.json();

        if (!username) {
            return Response.json({ error: "Username required" }, { status: 400 });
        }

        const [userInfo, repos] = await Promise.all([
            getUserInfo(username),
            getRepos(username),
        ]);

        const languages = await getLanguages(repos);

        const data = {
            username,
            repoCount: userInfo.public_repos,
            followers: userInfo.followers,
            languages,
            topProjects: repos.slice(0, 5).map((r) => r.name),
            totalStars: repos.reduce((acc, r) => acc + r.stargazers_count, 0),
        };

        return Response.json(data);
    } catch (error) {
        return Response.json({ error: error.message }, { status: 500 });
    }
}
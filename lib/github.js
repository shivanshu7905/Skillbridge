export async function getRepos(username) {
    const res = await fetch(
        `https://api.github.com/users/${username}/repos?per_page=50&sort=updated`,
        { headers: { Accept: "application/vnd.github+json" } }
    );
    if (!res.ok) throw new Error("GitHub user not found");
    return res.json();
}

export async function getLanguages(repos) {
    const langCount = {};
    for (const repo of repos.slice(0, 10)) {
        const res = await fetch(repo.languages_url, {
            headers: { Accept: "application/vnd.github+json" },
        });
        const langs = await res.json();
        for (const lang of Object.keys(langs)) {
            langCount[lang] = (langCount[lang] || 0) + 1;
        }
    }
    return langCount;
}

export async function getUserInfo(username) {
    const res = await fetch(`https://api.github.com/users/${username}`, {
        headers: { Accept: "application/vnd.github+json" },
    });
    if (!res.ok) throw new Error("User not found");
    return res.json();
}
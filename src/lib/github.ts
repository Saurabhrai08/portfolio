import { featuredProjects, type Project } from "@/lib/portfolio-data";

type GitHubRepo = {
  name: string;
  html_url: string;
  description: string | null;
  topics?: string[];
  language: string | null;
  updated_at: string;
  stargazers_count: number;
  fork: boolean;
};

function normalize(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]/g, "");
}

export async function getProjects(): Promise<Project[]> {
  try {
    const response = await fetch(
      "https://api.github.com/users/Saurabhrai08/repos?sort=updated&per_page=100",
      {
        headers: {
          Accept: "application/vnd.github+json",
          "User-Agent": "portfolio-ai",
        },
        next: {
          revalidate: 3600,
        },
      },
    );

    if (!response.ok) {
      throw new Error("Failed to fetch GitHub repositories.");
    }

    const repos = (await response.json()) as GitHubRepo[];
    const portfolioRepos = repos.filter((repo) => !repo.fork);

    const mergedFeatured = featuredProjects.map((project) => {
      const matchedRepo = portfolioRepos.find((repo) =>
        normalize(repo.name).includes(normalize(project.title)),
      );

      return matchedRepo
        ? {
            ...project,
            github: matchedRepo.html_url,
            description: matchedRepo.description ?? project.description,
            techStack: matchedRepo.language
              ? [matchedRepo.language, ...project.techStack.filter((item) => item !== matchedRepo.language)]
              : project.techStack,
          }
        : project;
    });

    const featuredKeys = new Set(mergedFeatured.map((project) => normalize(project.title)));

    const additionalProjects = portfolioRepos
      .filter((repo) => !featuredKeys.has(normalize(repo.name)))
      .sort(
        (a, b) =>
          b.stargazers_count - a.stargazers_count ||
          new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime(),
      )
      .slice(0, 4)
      .map((repo) => ({
        title: repo.name.replace(/[-_]/g, " "),
        description:
          repo.description ??
          "Public GitHub project showcasing applied work across AI, automation, or software development.",
        techStack: [repo.language ?? "Code", "GitHub"],
        github: repo.html_url,
      }));

    return [...mergedFeatured, ...additionalProjects];
  } catch {
    return featuredProjects;
  }
}

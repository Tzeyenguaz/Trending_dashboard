interface GithubRepo {
  name: string;
  desc: string;
  stars: string;
  today: string;
  language: string;
  url: string;
}

export default function GithubCard({ repo, rank }: { repo: GithubRepo; rank: number }) {
  const [owner, repoName] = repo.name.split("/");

  return (
    <a
      href={repo.url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-start gap-3 py-3 hover:bg-[#f7f7f5] -mx-2 px-2 rounded transition-colors"
    >
      <span className="text-xs text-[#c9c8c5] font-mono w-4 pt-0.5 shrink-0 text-right">{rank}</span>
      <div className="min-w-0 flex-1">
        <div className="flex items-baseline gap-1.5">
          <span className="text-xs text-[#9b9a97]">{owner} /</span>
          <span className="text-sm font-medium text-[#37352f] hover:underline">{repoName}</span>
          {repo.language && (
            <span className="text-xs text-[#9b9a97] ml-auto shrink-0">{repo.language}</span>
          )}
        </div>
        {repo.desc && (
          <p className="text-xs text-[#787774] mt-0.5 line-clamp-1">{repo.desc}</p>
        )}
        <div className="flex items-center gap-3 mt-1 text-xs text-[#9b9a97]">
          <span>★ {repo.stars}</span>
          {repo.today && (
            <span className="text-[#448361]">{repo.today}</span>
          )}
        </div>
      </div>
    </a>
  );
}

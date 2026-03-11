interface PHProduct {
  name: string;
  desc: string;
  votes: number;
  url: string;
  thumbnail: string;
  topics: string[];
}

export default function ProductHuntCard({ product, rank }: { product: PHProduct; rank: number }) {
  return (
    <a
      href={product.url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-start gap-3 py-3 hover:bg-[#f7f7f5] -mx-2 px-2 rounded transition-colors"
    >
      <span className="text-xs text-[#c9c8c5] font-mono w-4 pt-0.5 shrink-0 text-right">{rank}</span>

      {/* Thumbnail */}
      <div className="shrink-0 mt-0.5">
        {product.thumbnail ? (
          <img
            src={product.thumbnail}
            alt={product.name}
            className="w-8 h-8 rounded object-cover"
          />
        ) : (
          <div className="w-8 h-8 rounded bg-[#f1f1ef] flex items-center justify-center text-xs text-[#9b9a97] font-medium">
            {product.name[0]}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="min-w-0 flex-1">
        <div className="flex items-baseline justify-between gap-2">
          <span className="text-sm font-medium text-[#37352f]">{product.name}</span>
          <span className="text-xs text-[#9b9a97] shrink-0">▲ {product.votes}</span>
        </div>
        <p className="text-xs text-[#787774] mt-0.5 line-clamp-1">{product.desc}</p>
        {product.topics.length > 0 && (
          <div className="flex gap-1 mt-1 flex-wrap">
            {product.topics.map((t) => (
              <span key={t} className="text-xs text-[#9b9a97] bg-[#f1f1ef] rounded px-1.5 py-0.5">
                {t}
              </span>
            ))}
          </div>
        )}
      </div>
    </a>
  );
}

import type { SystemBreakdown } from '../data/games';

export default function SystemBreakdownSection({ breakdown }: { breakdown: SystemBreakdown }) {
  return (
    <div className="system-breakdown">
      <h2>{breakdown.heading}</h2>
      <p className="system-breakdown-overview">{breakdown.overview}</p>

      {breakdown.highlights.length > 0 && (
        <div className="highlight-grid">
          {breakdown.highlights.map((h, i) => (
            <div key={i} className="highlight-card">
              <h4 className="highlight-card-title">{h.title}</h4>
              <p className="highlight-card-summary">{h.summary}</p>
              {h.details && h.details.length > 0 && (
                <ul className="highlight-card-details">
                  {h.details.map((d, j) => (
                    <li key={j}>{d}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

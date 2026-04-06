import Link from 'next/link';
import Image from 'next/image';
import { gamesData } from '../../data/games';
import ScreenshotGallery from '../../components/ScreenshotGallery';
import SystemBreakdownSection from '../../components/SystemBreakdown';
import StoreBadge from '../../components/StoreBadge';

export default async function GamePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const game = gamesData[slug as keyof typeof gamesData];

  if (!game) {
    return (
      <main className="detail-page">
        <div className="detail-container">
          <h1>Game not found</h1>
          <p>Looking for: {slug}</p>
          <Link href="/games" className="back-link">← Back to Games</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="detail-page">
      <div className="detail-container">
        <Link href="/games" className="back-link">← Back to Games</Link>
        <h1 className="detail-title">{game.title}</h1>
        <div className="tech-stack">
          {game.tech.split(',').map((t, i) => (
            <span key={i} className="tech-badge">
              {t.trim()}
            </span>
          ))}
        </div>

        {game.image && (
          <div className="detail-image-wrapper">
            <Image
              src={game.image}
              alt={game.title}
              className="detail-image"
              width={896}
              height={504}
              sizes="(max-width: 896px) 100vw, 896px"
              priority
              />
          </div>
        )}

        <div className="detail-content">
          <h2>Role & Scope</h2>
        </div>

        {game.roleScope && (
          <div className="role-scope">
            <div className="role-scope-grid">
              <div className="role-scope-item">
                <span className="role-scope-label">Role:</span>
                <span className="role-scope-value">{game.roleScope.role}</span>
              </div>
              <div className="role-scope-item">
                <span className="role-scope-label">Team Size:</span>
                <span className="role-scope-value">{game.roleScope.teamSize}</span>
              </div>
              <div className="role-scope-item">
                <span className="role-scope-label">Platform:</span>
                <span className="role-scope-value">{game.roleScope.platform}</span>
              </div>
              <div className="role-scope-item">
                <span className="role-scope-label">Duration:</span>
                <span className="role-scope-value">{game.roleScope.duration}</span>
              </div>
              <div className="role-scope-item">
                <span className="role-scope-label">Status:</span>
                <span
                  className={`role-scope-value ${game.roleScope.status.toLowerCase().includes('development') ? 'status-in-development' : 'status-shipped-and-live'}`}
                >
                  {game.roleScope.status}
                </span>
              </div>
            </div>
          </div>
        )}
        <div className="store-badges-container">
        {game.stores && game.stores.length > 0 && (
          <div className="store-badges-wrapper">
            {game.stores.map((store, index) => (
              <StoreBadge key={index} storeType={store.type} storeLink={store.link} />
            ))}
          </div>
        )}
        {game.installer && (
          <div className="installer-wrapper">
            <a href={game.installer} className="installer-badge-link" download>
              <h3>Download Installer</h3>
              <img
                src={game.installerBadge ?? undefined}
                alt="Download Installer"
                width={155}
                loading="lazy"
                decoding="async"
                height={40}
                className="installer-badge"
              />
            </a>
          </div>
        )}
        </div>

        <div className="detail-content">
          <h2>About this game</h2>
          <p className="detail-content">{game.fullDescription}</p>
        </div>

      {game.contributions && game.contributions.length > 0 && (
        <div className="detail-content">
          <h2>My Contributions</h2>
          {game.contributions.map((section, index) => (
            <div key={index} className="contribution-section">
              <h3>{section.category}</h3>
              <ul>
                {section.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              {section.blogLink?.href && (
                <a
                  href={section.blogLink.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="section-blog-link"
                >
                  {section.blogLink.text}
                </a>
              )}
            </div>
          ))}
        </div>
      )}

        {game.screenshots && game.screenshots.length > 0 && (
          <div className="detail-content">
            <h2>Screenshots</h2>
            <ScreenshotGallery screenshots={game.screenshots} />
          </div>
        )}

        {game.systemBreakdowns && game.systemBreakdowns.length > 0 && (
          <div className="detail-content">
            {game.systemBreakdowns.map((breakdown, index) => (
              <SystemBreakdownSection key={index} breakdown={breakdown} />
            ))}
          </div>
        )}
      </div>


    </main>
    );

}

export function generateStaticParams() {
  return Object.keys(gamesData).map((slug) => ({
    slug,
  }));
}
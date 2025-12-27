import Link from 'next/link';
import Image from 'next/image';
import { gamesData } from '../../data/games';

const StoreBadge = ({ storeType, storeLink }: { storeType: 'appstore' | 'itch' | 'steam' | 'googleplay', storeLink: string }) => {
  const badges = {
    appstore: {
      src: '/images/appstore-badge.png',
      alt: 'Download on the App Store',
      width: 135,
      height: 40
    },
    itch: {
      src: '/images/itch-badge.png',
      alt: 'Available on itch.io',
      width: 164,
      height: 40
    },
    steam: {
      src: '/images/steam-badge.png',
      alt: 'Available on Steam',
      width: 154,
      height: 40
    },
    googleplay: {
      src: '/images/googleplay-badge.png',
      alt: 'Get it on Google Play',
      width: 155,
      height: 40
    }
  };

  const badge = badges[storeType];

  return (
    <a href={storeLink} target="_blank" rel="noopener noreferrer" className="store-badge-link">
      <img 
        src={badge.src} 
        alt={badge.alt}
        width={badge.width}
        height={badge.height}
        className="store-badge"
      />
    </a>
  );
};

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
            <img 
              src={game.image} 
              alt={game.title}
              className="detail-image"
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
                src={game.installerBadge}
                alt="Download Installer"
                width={155}
                height={40}
                className="installer-badge"
              />
            </a>
          </div>
        )}

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
            </div>
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
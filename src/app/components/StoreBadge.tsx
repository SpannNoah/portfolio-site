export type StoreType = 'appstore' | 'itch' | 'steam' | 'googleplay' | 'github' | 'gitlab';

const StoreBadge = ({
  storeType,
  storeLink
}: {
  storeType: StoreType;
  storeLink: string;
}) => {
  const badges: Record<StoreType, { src: string; label: string; width: number; height: number }> = {
    appstore: {
      src: '/images/appstore-badge.webp',
      label: 'Download on the App Store',
      width: 135,
      height: 40
    },
    itch: {
      src: '/images/itch-badge.webp',
      label: 'Available on itch.io',
      width: 164,
      height: 40
    },
    steam: {
      src: '/images/steam-badge.webp',
      label: 'Available on Steam',
      width: 154,
      height: 40
    },
    googleplay: {
      src: '/images/googleplay-badge.webp',
      label: 'Get it on Google Play',
      width: 155,
      height: 40
    },
    github: {
      src: '/images/github-badge.webp',
      label: 'View on GitHub',
      width: 150,
      height: 40
    },
    gitlab: {
      src: '/images/gitlab-logo.webp',
      label: 'View on GitLab',
      width: 150,
      height: 40
    }
  };

  const badge = badges[storeType];

  return (
    <a
      href={storeLink}
      target="_blank"
      rel="noopener noreferrer"
      className="store-badge-link"
      aria-label={badge.label}
    >
      <span className="store-badge-label">{badge.label}</span>
      <img
        src={badge.src}
        alt={badge.label}
        width={badge.width}
        height={badge.height}
        className={`store-badge store-badge--${storeType}`}
        loading="lazy"
        decoding="async"
      />
    </a>
  );
};

export default StoreBadge;

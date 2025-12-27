import GameCard from "../components/GameCard";
import styles from './page.module.css';
import { professionalGames, personalGames } from '../data/games';

export default function Games()
{
    return(
    <main className={styles.main}>
      <div className={styles.banner}>
        <div className={styles.bannerOverlay} />
        <div className={styles.bannerContent}>
          <h1 className={styles.bannerTitle}>GAMES</h1>
          <p className={styles.bannerSubtitle}>Click on a game to read more.</p>
        </div>
      </div>

      <div className={styles.container}>
        {/* Professional Games Section */}
        <section className={styles.categorySection}>
          <h2 className={styles.categoryHeader}>Professional Games</h2>
          <div className={styles.gamesGrid}>
            {professionalGames.map((game, index) => (
              <GameCard
                key={game.slug}
                title={game.title}
                image={game.image}
                slug={game.slug}
                dateRange={game.dateRange}
                technologies={game.technologies}
                isReversed={index % 2 !== 0}
              />
            ))}
          </div>
        </section>

        {/* Personal Games Section */}
        <section className={styles.categorySection}>
          <h2 className={styles.categoryHeader}>Personal Games</h2>
          <div className={styles.gamesGrid}>
            {personalGames.map((game, index) => (
              <GameCard
                key={game.slug}
                title={game.title}
                image={game.image}
                slug={game.slug}
                dateRange={game.dateRange}
                technologies={game.technologies}
                isReversed={index % 2 !== 0}
              />
            ))}
          </div>
        </section>
      </div>
    </main>
    )
}
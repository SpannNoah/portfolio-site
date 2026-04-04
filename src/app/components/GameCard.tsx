import Link from 'next/link';
import Image from 'next/image';
import styles from './GameCard.module.css';

type Props = {
    title: string;
    image: string;
    slug: string;
    dateRange: string;
    technologies: string[];
    isReversed?: boolean;
};

export default function GameCard({
    title,
    image,
    slug,
    dateRange,
    technologies,
    isReversed = false
}: Props) {
    return (
        <Link href={`/games/${slug}`} className={styles.gameLink}>
            <div className={`${styles.gameCard} ${isReversed ? styles.reversed : ''}`}>
                <div className={styles.imageContainer}>
                    <Image
                        className={styles.gameImage}
                        src={image}
                        alt={title}
                        width={864}
                        height={280}
                        sizes="(max-width: 768px) 100vw, 45vw"
                    />
                </div>
                <div className={styles.infoContainer}>
                    <h3 className={styles.title}>{title}</h3>
                    <p className={styles.dateRange}>{dateRange}</p>
                    <div className={styles.techBadges}>
                        {technologies.map((tech, index) => (
                            <span key={index} className={styles.badge}>
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </Link>
    );
}

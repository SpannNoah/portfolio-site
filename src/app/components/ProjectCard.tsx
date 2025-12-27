import Link from 'next/link';
import styles from './ProjectCard.module.css';

type Props = {
    title: string;
    image?: string;
    slug: string;
    technologies: string[];
    isReversed?: boolean;
};

export default function ProjectCard({
    title,  
    image, 
    slug, 
    technologies,
    isReversed = false
}: Props)
{
    return(
        <Link href={`/projects/${slug}`} className={styles.projectLink}>
            <div className={`${styles.projectCard} ${isReversed ? styles.reversed : ''}`}>
                <div className={styles.imageContainer}>
                    <img 
                    src={image} 
                    alt={title} 
                    className={styles.projectImage}
                    />
                </div>
                <div className={styles.infoContainer}>
                    <h3 className={styles.title}>{title}</h3>
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
import ProjectCard from "../components/ProjectCard";
import { projects } from '../data/projects';
import styles from './page.module.css';

export default function Projects()
{
    return(
    <main className={styles.main}>
      <div className={styles.banner}>
        <div className={styles.bannerOverlay} />
        <div className={styles.bannerContent}>
          <h1 className={styles.bannerTitle}>PROJECTS</h1>
          <p className={styles.bannerSubtitle}>Click on a project to read more.</p>
        </div>
      </div>

      <div className={styles.container}>
        <section className={styles.categorySection}>
          <h2 className={styles.categoryHeader}>Personal Projects</h2>
          <div className={styles.gamesGrid}>
            {projects.map((project, index) => (
              <ProjectCard
              key={project.slug}
              title={project.title}
              image={project.image}
              slug={project.slug}
              technologies={project.technologies}
              isReversed={index % 2 !== 0}
              />
            ))}
          </div>
        </section>
      </div>
    </main>
    )
}
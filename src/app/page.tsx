import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <div className={styles.hero}>
        {/* Background overlay */}
        <div className={styles.overlay} />
        
        {/* Hero Content */}
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Noah Spann
          </h1>
          <p className={styles.heroSubtitle}>
            Gameplay Programmer & Designer
          </p>
          
          {/* Navigation Buttons */}
          <div className={styles.buttonGroup}>
            <Link href="/games" className={styles.button}>
              GAMES
            </Link>
            <Link href="/projects" className={styles.button}>
              PROJECTS
            </Link>
          </div>
        </div>
      </div>

      {/* About Me Section */}
      <section id="about" className={styles.aboutSection}>
        <div className={styles.aboutContainer}>
          <div className={styles.profileImageContainer}>
            <img 
              src="/images/profile.png" 
              alt="Noah Spann" 
              className={styles.profileImage}
            />
          </div>
          <h2 className={styles.aboutTitle}>About Me</h2>
          <div className={styles.aboutContent}>
            <p>
              I'm an Austin, TX–based gameplay programmer currently working at Halfbrick. 
              I’m passionate about building fun experiences that bring players together.
            </p>
            <p>
              Over the past four years, I've contributed to multiple projects across Unity and 
              Unreal Engine, implementing gameplay features, building systems, and collaborating 
              closely with designers, artists, and engineers. My background in game design allows 
              me to translate design intent into robust, scalable gameplay code while maintaining 
              a strong focus on system architecture, iteration speed, and player experience.
            </p>
            <p>
              I care deeply about how players learn and master mechanics. When building gameplay 
              systems, I focus on clarity, agency, and progression which ensures mechanics teach 
              themselves through play rather than relying on heavy-handed instruction. This mindset 
              helps me create systems that feel intuitive and rewarding.
            </p>
            <p>
              I'm driven by opportunities where I can own gameplay systems, collaborate across 
              disciplines, and learn from the people around me.
            </p>
          </div>
          
          <div className={styles.linkedinContainer}>
            <a 
              href="https://www.linkedin.com/in/noah-spann" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.linkedinButton}
            >
              Connect with me on LinkedIn
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

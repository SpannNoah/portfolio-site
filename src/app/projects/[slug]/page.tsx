import Link from 'next/link';
import { projects } from '../../data/projects';

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    return (
      <main className="detail-page">
        <div className="detail-container">
          <h1>Project not found</h1>
          <Link href="/projects" className="back-link">← Back to Projects</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="detail-page">
      <div className="detail-container">
        <Link href="/projects" className="back-link">← Back to Projects</Link>
        
        <h1 className="detail-title">{project.title}</h1>
        
        <div className="tech-stack">
          {project.technologies.map((t, i) => (
            <span key={i} className="tech-badge">
              {t.trim()}
            </span>
          ))}
        </div>

        {project.image && (
          <div className="detail-image-wrapper">
            <img
              src={project.image}
              alt={project.title}
              className="detail-image"
              loading="lazy"
              decoding="async"
            />
          </div>
        )}

        <div className="detail-content">
          {project.link && (
            <div className="installer-wrapper">
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="installer-badge-link"
              >
                View Project →
              </a>
            </div>
          )}
          
          <h2>About this project</h2>
          <p>{project.about}</p>

          {project.sections && project.sections.length > 0 && (
            <div>
              {project.sections.map((section, index) => (
                <div key={index} className="contribution-section">
                  <h3>{section.heading}</h3>
                  {section.paragraphs?.map((text, i) => (
                    <p key={i}>{text}</p>
                  ))}
                  {section.bullets && section.bullets.length > 0 && (
                    <ul>
                      {section.bullets.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  )}
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

          {project.keyImpact && project.keyImpact.length > 0 && (
            <div className="contribution-section">
              <h3>Key Impact</h3>
              <ul>
                {project.keyImpact.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          )}


          {project.implementationDetails && (
            <div>
              <h2>Implementation Details</h2>
              <p>{project.implementationDetails}</p>
            </div>)}

            {project.lessonsLearned && (
            <div>
              <h2>Lessons Learned</h2>
              <p>{project.lessonsLearned}</p>
            </div>
            )}


        </div>

      </div>
    </main>
  );
}

export function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({
    slug,
  }));
}
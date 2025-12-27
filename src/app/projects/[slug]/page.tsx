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
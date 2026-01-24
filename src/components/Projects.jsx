import portfolioData from '../data/portfolioData';
import './Projects.css';

const { projects } = portfolioData;

export default function Projects() {
    return (
        <section id="projects" className="section">
            <div className="container">
                <h2 className="section-title">Professional Projects</h2>
                <p className="section-subtitle">Real-world applications I've built</p>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card">
                            {/* Project Header */}
                            <div className="project-header">
                                <div className="project-title-row">
                                    <h3 className="project-title">
                                        {project.title.split('–')[0].trim()}
                                    </h3>
                                    <span className="project-year-badge">
                                        {project.year}
                                    </span>
                                </div>

                                {/* Tech Stack */}
                                <p className="project-tech">
                                    {project.tech.join(' • ')}
                                </p>
                            </div>

                            {/* Description */}
                            <div className="project-description">
                                <ul className="project-list">
                                    {project.description.map((point, idx) => (
                                        <li key={idx} className="project-list-item">
                                            <span className="project-bullet">•</span>
                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

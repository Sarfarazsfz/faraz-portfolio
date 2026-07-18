import { useState } from 'react';
import { Calendar, Code, Database, FolderGit2, ChevronDown, ChevronUp } from 'lucide-react';
import { LuExternalLink, LuGithub } from 'react-icons/lu';
import portfolioData from '../data/portfolioData';
import './Projects.css';

const { projects } = portfolioData;

const featuredProjects = projects.filter(p => p.featured);
const standardProjects = projects.filter(p => !p.featured);

const ProjectCard = ({ project, isFeatured }) => (
    <div className={`project-card ${isFeatured ? 'featured-card' : 'standard-card'}`}>
        <div className="project-image-container">
            <img src={project.image} alt={project.title} className="project-image" />
        </div>
        
        <div className="project-content">
            <div className="project-header">
                <h3 className="project-title">
                    {project.title}
                </h3>
                <span className="project-year-badge">
                    <Calendar size={12} /> {project.year}
                </span>
            </div>
            
            <p className="project-short-desc">
                {project.shortDescription}
            </p>

            <div className="project-tech-stack">
                <Code size={16} className="tech-icon" />
                <div className="tech-chips">
                    {project.tech.map((t) => (
                        <span key={t} className="tech-chip">{t}</span>
                    ))}
                </div>
            </div>

            <ul className="project-list">
                {project.description.map((point, idx) => (
                    <li key={idx} className="project-list-item">
                        <span className="project-bullet">•</span>
                        <span>{point}</span>
                    </li>
                ))}
            </ul>
        </div>

        <div className="project-links">
            {project.demoLink && (
                <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link primary-link"
                >
                    <LuExternalLink size={16} /> Live Demo
                </a>
            )}
            
            {project.demoText && !project.demoLink && (
                <button
                    className="project-link secondary-link disabled-link"
                    disabled
                >
                    <LuExternalLink size={16} /> {project.demoText}
                </button>
            )}

            {project.githubLink && (
                <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link secondary-link"
                >
                    <LuGithub size={16} /> GitHub
                </a>
            )}
            
            {project.backendLink && (
                <a
                    href={project.backendLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link secondary-link"
                >
                    <Database size={16} /> API
                </a>
            )}
        </div>
    </div>
);

export default function Projects() {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <section id="projects" className="section">
            <div className="container">
                <h2 className="section-title"><FolderGit2 className="section-title-icon" size={28} /> Professional Projects</h2>
                <p className="section-subtitle">Real-world applications I've built</p>

                {/* Featured Projects Grid */}
                <div className="projects-grid featured-grid">
                    {featuredProjects.map((project, index) => (
                        <ProjectCard key={`featured-${index}`} project={project} isFeatured={true} />
                    ))}
                </div>

                {/* Standard Projects Expand/Collapse */}
                {standardProjects.length > 0 && (
                    <div className="expandable-projects">
                        <div className="expand-button-container">
                            <p className="expand-label">Additional Projects</p>
                            <button 
                                onClick={() => setIsExpanded(!isExpanded)} 
                                className="expand-button"
                            >
                                {isExpanded ? (
                                    <><ChevronUp size={20} /> Show Less</>
                                ) : (
                                    <><ChevronDown size={20} /> View More Projects</>
                                )}
                            </button>
                        </div>

                        <div className={`expandable-content ${isExpanded ? 'expanded' : ''}`}>
                            <div className="expandable-inner">
                                <div className="projects-grid standard-grid">
                                    {standardProjects.map((project, index) => (
                                        <ProjectCard key={`standard-${index}`} project={project} isFeatured={false} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}

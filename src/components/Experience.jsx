import portfolioData from '../data/portfolioData';
import './Experience.css';

const { education } = portfolioData;

export default function Experience() {
    return (
        <section id="experience" className="section">
            <div className="container">
                <h2 className="section-title">Education</h2>
                <p className="section-subtitle">My academic background</p>

                <div className="experience-container">
                    {education.map((edu, index) => (
                        <div key={index} className="experience-timeline-item">
                            {/* Timeline dot */}
                            <div className="timeline-dot" />

                            {/* Content */}
                            <div className="experience-card">
                                <div className="experience-header">
                                    <span className="experience-duration">
                                        {edu.duration}
                                    </span>
                                    {edu.score && (
                                        <span className="experience-score-badge">
                                            {edu.score}
                                        </span>
                                    )}
                                </div>

                                <h4 className="experience-degree">
                                    {edu.degree}
                                </h4>

                                <p className="experience-institution">
                                    {edu.institution}
                                </p>

                                <p className="experience-location">
                                    {edu.location}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

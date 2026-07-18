import { GraduationCap } from 'lucide-react';
import portfolioData from '../data/portfolioData';
import './Experience.css';

const { education } = portfolioData;

export default function Experience() {
    return (
        <section id="experience" className="section">
            <div className="container">
                <h2 className="section-title"><GraduationCap className="section-title-icon" size={28} /> Education</h2>
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
                                {edu.score && (
                                    <p className="experience-location" style={{ marginTop: '0.25rem' }}>
                                        {edu.score}
                                    </p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

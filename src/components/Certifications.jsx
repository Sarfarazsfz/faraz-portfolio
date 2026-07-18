import { Award, Cloud, GraduationCap, ExternalLink } from 'lucide-react';
import portfolioData from '../data/portfolioData';
import './Certifications.css';

const { certifications } = portfolioData;

const getIcon = (title) => {
    if (title.toLowerCase().includes('aws')) return <Cloud className="cert-icon" size={24} />;
    if (title.toLowerCase().includes('nptel') || title.toLowerCase().includes('management')) return <GraduationCap className="cert-icon" size={24} />;
    return <Award className="cert-icon" size={24} />;
};

export default function Certifications() {
    return (
        <section id="certifications" className="section">
            <div className="container">
                <h2 className="section-title"><Award className="section-title-icon" size={28} /> Certifications</h2>
                <p className="section-subtitle">Professional credentials and continued learning</p>

                <div className="certifications-grid">
                    {certifications.map((cert, index) => (
                        <div key={index} className="cert-card">
                            <div className="cert-header">
                                <div className="cert-icon-container">
                                    {getIcon(cert.title)}
                                </div>
                                <div className="cert-meta">
                                    <span className="cert-date">{cert.date}</span>
                                    {cert.achievement && <span className="cert-badge">{cert.achievement}</span>}
                                </div>
                            </div>
                            
                            <h3 className="cert-title">{cert.title}</h3>
                            <p className="cert-issuer">{cert.issuer}</p>
                            
                            <p className="cert-description">
                                {cert.description}
                            </p>

                            {cert.link && (
                                <div className="cert-footer">
                                    <a 
                                        href={cert.link} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="cert-link"
                                    >
                                        <ExternalLink size={16} /> View Credential
                                    </a>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

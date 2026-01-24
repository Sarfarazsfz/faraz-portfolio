import portfolioData from '../data/portfolioData';
import './Certifications.css';

const { certifications } = portfolioData;

export default function Certifications() {
    return (
        <section id="certifications" className="section">
            <div className="container">
                <h2 className="section-title">Certifications and Awards</h2>
                <p className="section-subtitle">Professional certifications</p>

                <div className="certifications-grid">
                    {certifications.map((cert, index) => (
                        <div key={index} className="certification-card">
                            <div className="certification-header">
                                <h3 className="certification-title">
                                    {cert.title}
                                </h3>
                                <span className="certification-date-badge">
                                    {cert.date}
                                </span>
                            </div>

                            {cert.issuer && (
                                <p className="certification-issuer">
                                    {cert.issuer}
                                </p>
                            )}

                            <p className="certification-link">
                                {cert.link}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

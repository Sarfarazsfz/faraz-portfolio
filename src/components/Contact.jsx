import { Mail } from 'lucide-react';
import portfolioData from '../data/portfolioData';
import { LuMail, LuLinkedin, LuGithub } from 'react-icons/lu';
import './Contact.css';

const { personal } = portfolioData;

export default function Contact() {
    return (
        <section id="contact" className="section">
            <div className="container">
                <h2 className="section-title"><Mail className="section-title-icon" size={28} /> Contact</h2>
                <p className="section-subtitle">Let's connect</p>

                <div className="contact-wrapper">
                    <div className="contact-container">
                        <p className="contact-intro">
                            I'm currently looking for internship and full-time opportunities.
                            Feel free to reach out!
                        </p>

                        <div className="contact-links">

                            {/* Email */}
                            <a
                                href={`mailto:${personal.email}`}
                                className="contact-link"
                            >
                                <span className="contact-icon">
                                    <LuMail size={20} />
                                </span>
                                <div>
                                    <div className="contact-label">Email</div>
                                    <div className="contact-value">{personal.email}</div>
                                </div>
                            </a>

                            {/* LinkedIn */}
                            <a
                                href={personal.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="contact-link"
                            >
                                <span className="contact-icon">
                                    <LuLinkedin size={20} />
                                </span>
                                <div>
                                    <div className="contact-label">LinkedIn</div>
                                    <div className="contact-value">
                                        linkedin.com/in/faraz4237
                                    </div>
                                </div>
                            </a>

                            {/* GitHub */}
                            <a
                                href={personal.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="contact-link"
                            >
                                <span className="contact-icon">
                                    <LuGithub size={20} />
                                </span>
                                <div>
                                    <div className="contact-label">GitHub</div>
                                    <div className="contact-value">
                                        github.com/Sarfarazsfz
                                    </div>
                                </div>
                            </a>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

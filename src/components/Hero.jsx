import { useState, useEffect, useRef } from 'react';
import portfolioData from '../data/portfolioData';
import './Hero.css';

const { personal } = portfolioData;

export default function Hero() {
    const [isVisible, setIsVisible] = useState(false);
    const heroRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect(); // Only animate once
                }
            },
            {
                threshold: 0.1, // Trigger when 10% of hero is visible
                rootMargin: '0px 0px -100px 0px' // Start animation slightly before fully visible
            }
        );

        if (heroRef.current) {
            observer.observe(heroRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section
            id="home"
            ref={heroRef}
            className={`hero-section ${isVisible ? 'hero-visible' : 'hero-hidden'}`}
        >
            {/* Hero Card - Professional Layout */}
            <div
                className="hero-card"
                style={{
                    background: 'linear-gradient(135deg, #1a365d 0%, #2563eb 100%)',
                    boxShadow: '0 25px 60px rgba(0, 0, 0, 0.4)',
                    minHeight: '600px'
                }}
            >
                <div className="hero-content">

                    {/* LEFT SECTION: Profile Image + Name + Role */}
                    <div className="hero-left">

                        {/* Profile Image - Slightly Lowered */}
                        <div
                            className="profile-image-container"
                            style={{
                                border: '4px solid rgba(255, 255, 255, 0.3)',
                                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), 0 0 20px rgba(59, 130, 246, 0.3)'
                            }}
                        >
                            <img
                                src="/profile.jpg"
                                alt={personal.name}
                                className="profile-image"
                            />
                        </div>

                        {/* Name - Single Line */}
                        <h1 className="hero-name">
                            {personal.name}
                        </h1>

                        {/* Role - Below Name */}
                        <p className="hero-role">
                            {personal.role}
                        </p>
                    </div>

                    {/* RIGHT SECTION: Contact Info, Links & Buttons */}
                    <div className="hero-right">

                        {/* Row 1: Availability + Location */}
                        <div className="info-row">
                            <div className="availability-badge">
                                <span></span>
                                <span className="availability-text">{personal.availability}</span>
                            </div>
                            <p className="info-item">
                                <span className="info-icon">📍</span>
                                {personal.location}
                            </p>
                        </div>

                        {/* Row 2: Phone + Email */}
                        <div className="info-row-phone-email">
                            <p className="info-item-phone-email">
                                <span className="info-icon">📞</span>
                                <span>{personal.phone}</span>
                            </p>
                            <p className="info-item-phone-email">
                                <span className="info-icon">📧</span>
                                <span>{personal.email}</span>
                            </p>
                        </div>

                        {/* Divider */}
                        <div className="divider"></div>

                        {/* Row 3: Social Links with Icons */}
                        <div className="social-links">
                            <a
                                href={personal.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-link"
                            >
                                <svg className="social-icon" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                                LinkedIn
                            </a>
                            <a
                                href={personal.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-link"
                            >
                                <svg className="social-icon" fill="currentColor" viewBox="0 0 24 24">
                                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                </svg>
                                GitHub
                            </a>
                            <a
                                href={personal.leetcode}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-link"
                            >
                                <svg className="social-icon" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
                                </svg>
                                LeetCode
                            </a>
                        </div>

                        {/* Row 4: Action Buttons */}
                        <div className="action-buttons">
                            <a
                                href="#projects"
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                                }}
                                className="btn-primary"
                            >
                                View Projects
                            </a>
                            <a
                                href="/resume.pdf"
                                download="MD_SARFARAZ_ALAM_Resume.pdf"
                                className="btn-secondary"
                            >
                                Download Resume
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

import { useState, useEffect, useRef } from 'react';
import { MapPin, Phone, Mail, CheckCircle, FileText, FolderOpen } from 'lucide-react';
import { LuLinkedin, LuGithub, LuCode } from 'react-icons/lu';
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
            <div className="hero-card">
                <div className="hero-content">

                    {/* LEFT SECTION: Profile Image + Name + Role */}
                    <div className="hero-left">

                        {/* Profile Image - Slightly Lowered */}
                        <div className="profile-image-container">
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
                                <CheckCircle size={16} color="#4ade80" />
                                <span className="availability-text">{personal.availability}</span>
                            </div>
                            <p className="info-item">
                                <MapPin className="info-icon" size={16} />
                                {personal.location}
                            </p>
                        </div>

                        {/* Row 2: Phone + Email */}
                        <div className="info-row-phone-email">
                            <p className="info-item-phone-email">
                                <Phone className="info-icon" size={16} />
                                <span>{personal.phone}</span>
                            </p>
                            <p className="info-item-phone-email">
                                <Mail className="info-icon" size={16} />
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
                                <LuLinkedin className="social-icon" size={20} />
                                LinkedIn
                            </a>
                            <a
                                href={personal.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-link"
                            >
                                <LuGithub className="social-icon" size={20} />
                                GitHub
                            </a>
                            <a
                                href={personal.leetcode}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-link"
                            >
                                <LuCode className="social-icon" size={20} />
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
                                <FolderOpen size={20} /> View Projects
                            </a>
                            <a
                                href="/resume.pdf"
                                download="MD_SARFARAZ_ALAM_Resume.pdf"
                                className="btn-secondary"
                            >
                                <FileText size={20} /> Download Resume
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

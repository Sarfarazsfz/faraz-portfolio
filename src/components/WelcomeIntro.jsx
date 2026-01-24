import { useState, useEffect } from 'react';
import './WelcomeIntro.css';

export default function WelcomeIntro() {
    const [displayText, setDisplayText] = useState('');
    const [isTypingComplete, setIsTypingComplete] = useState(false);
    const fullText = "Welcome to My Portfolio";

    useEffect(() => {
        let currentIndex = 0;
        const typingInterval = setInterval(() => {
            if (currentIndex <= fullText.length) {
                setDisplayText(fullText.slice(0, currentIndex));
                currentIndex++;
            } else {
                clearInterval(typingInterval);
                setIsTypingComplete(true);
            }
        }, 80); // Typing speed: 80ms per character

        return () => clearInterval(typingInterval);
    }, []);

    const handleScrollDown = () => {
        const heroSection = document.querySelector('#home');
        heroSection?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="welcome-intro">
            <div className="welcome-content">
                {/* Welcome Text with Typing Effect */}
                <h1 className="welcome-heading">
                    {displayText}
                    {!isTypingComplete && <span className="typing-cursor">|</span>}
                </h1>

                {/* Scroll Down Indicator */}
                {isTypingComplete && (
                    <div className="scroll-indicator" onClick={handleScrollDown}>
                        <p className="scroll-text">Scroll down</p>
                        <div className="scroll-arrow">
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M12 5v14M19 12l-7 7-7-7" />
                            </svg>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}

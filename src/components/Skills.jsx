import portfolioData from '../data/portfolioData';
import './Skills.css';

const { skills } = portfolioData;

// Exact categories from resume
const categories = [
    { key: 'Programming Languages', label: 'Programming Languages' },
    { key: 'Web Technologies', label: 'Web Technologies' },
    { key: 'Frontend', label: 'Frontend' },
    { key: 'Backend', label: 'Backend' },
    { key: 'APIs & Authentication', label: 'APIs & Authentication' },
    { key: 'Databases', label: 'Databases' },
    { key: 'AI Integration', label: 'AI Integration' },
    { key: 'Tools & DevOps', label: 'Tools & DevOps' },
    { key: 'Cloud & Services', label: 'Cloud & Services' },
    { key: 'CS Fundamentals', label: 'CS Fundamentals' },
];

export default function Skills() {
    return (
        <section id="skills" className="section">
            <div className="container">
                <h2 className="section-title">Technical Skills</h2>
                <p className="section-subtitle">Technologies from my resume</p>

                <div className="skills-grid">
                    {categories.map(({ key, label }) => (
                        <div key={key} className="skill-category-card">
                            <h3 className="skill-category-title">{label}</h3>
                            <div className="skill-tags">
                                {skills[key]?.map((skill) => (
                                    <span key={skill} className="skill-tag">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

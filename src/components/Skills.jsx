import { 
    Lightbulb, Code2, Monitor, Server, Database, TestTube, Terminal, BookOpen, CheckCircle2
} from 'lucide-react';
import portfolioData from '../data/portfolioData';
import './Skills.css';

const { skills } = portfolioData;

const categories = [
    { key: 'Software Engineering', label: 'Software Engineering', icon: Lightbulb },
    { key: 'Programming Languages', label: 'Programming Languages', icon: Code2 },
    { key: 'Frontend', label: 'Frontend', icon: Monitor },
    { key: 'Backend', label: 'Backend', icon: Server },
    { key: 'Databases', label: 'Databases', icon: Database },
    { key: 'Testing', label: 'Testing', icon: TestTube },
    { key: 'Developer Tools', label: 'Developer Tools', icon: Terminal },
    { key: 'Computer Science Fundamentals', label: 'Computer Science Fundamentals', icon: BookOpen },
];

export default function Skills() {
    return (
        <section id="skills" className="section">
            <div className="container">
                <h2 className="section-title"><Code2 className="section-title-icon" size={28} /> Technical Skills</h2>
                <p className="section-subtitle">Technologies from my resume</p>

                <div className="skills-grid">
                    {categories.map(({ key, label, icon: Icon }) => (
                        <div key={key} className="skill-category-card">
                            <div className="skill-category-header">
                                <Icon className="skill-category-icon" size={20} />
                                <h3 className="skill-category-title">{label}</h3>
                            </div>
                            <hr className="skill-divider" />
                            <ul className="skill-list">
                                {skills[key]?.map((skill) => (
                                    <li key={skill} className="skill-item">
                                        <CheckCircle2 className="skill-item-icon" size={16} />
                                        <span>{skill}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

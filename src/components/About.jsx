import { User } from 'lucide-react';
import portfolioData from '../data/portfolioData';

const { personal } = portfolioData;

export default function About() {
    return (
        <section id="about" className="section">
            <div className="container">
                <h2 className="section-title"><User className="section-title-icon" size={28} /> Professional Summary</h2>
                <p className="section-subtitle">About me</p>

                <div className="max-w-3xl">
                    <div className="card" style={{ padding: '2.5rem' }}>
                        <p
                            className="text-lg leading-relaxed"
                            style={{ color: 'var(--text-primary)' }}
                        >
                            {personal.summary}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

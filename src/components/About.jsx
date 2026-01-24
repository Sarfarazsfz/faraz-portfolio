import portfolioData from '../data/portfolioData';

const { personal } = portfolioData;

export default function About() {
    return (
        <section id="about" className="section">
            <div className="container">
                <h2 className="section-title">Professional Summary</h2>
                <p className="section-subtitle">About me</p>

                <div className="max-w-3xl mx-auto">
                    <div className="card">
                        <p
                            className="text-base leading-relaxed"
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

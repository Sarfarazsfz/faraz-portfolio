import portfolioData from '../data/portfolioData';

const { languages } = portfolioData;

export default function Languages() {
    return (
        <section id="languages" className="section section-alt">
            <div className="container">
                <h2 className="section-title">Languages</h2>
                <p className="section-subtitle">Language proficiency</p>

                <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                    {languages.map((lang, index) => (
                        <div key={index} className="card text-center">
                            <h3 className="font-semibold text-lg text-white mb-2">
                                {lang.name}
                            </h3>
                            <p
                                className="text-sm"
                                style={{ color: 'var(--text-secondary)' }}
                            >
                                {lang.proficiency}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

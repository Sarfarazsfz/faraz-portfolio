import portfolioData from '../data/portfolioData';
import Contact from './Contact';

const { personal } = portfolioData;

export default function Footer() {
    return (
        <footer
            style={{
                borderTop: '1px solid var(--border)',
                paddingTop: '5rem',
                paddingBottom: '2rem'
            }}
        >
            <div className="container">
                {/* Contact Section Title */}
                <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                    <h2 className="section-title">Contact</h2>
                    <p className="section-subtitle">Let's connect</p>
                </div>

                {/* Contact Card */}
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '4rem' }}>
                    <div className="card" style={{ maxWidth: '28rem', width: '100%' }}>
                        <Contact />
                    </div>
                </div>

                {/* Copyright */}
                <p
                    className="text-sm"
                    style={{ color: 'var(--text-muted)', textAlign: 'center' }}
                >
                    © {new Date().getFullYear()} {personal.name}. Built with React.
                </p>
            </div>
        </footer>
    );
}

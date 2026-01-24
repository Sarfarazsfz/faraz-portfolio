import portfolioData from '../data/portfolioData';

const { personal } = portfolioData;

export default function Footer() {
    return (
        <footer
            style={{
                borderTop: '1px solid var(--border)',
                paddingTop: '2rem',
                paddingBottom: '2rem',
                marginTop: '4rem'
            }}
        >
            <div className="container">
                <p
                    className="text-sm"
                    style={{
                        color: 'var(--text-muted)',
                        textAlign: 'center'
                    }}
                >
                    © {new Date().getFullYear()} {personal.name}. Built with React.
                </p>
            </div>
        </footer>
    );
}

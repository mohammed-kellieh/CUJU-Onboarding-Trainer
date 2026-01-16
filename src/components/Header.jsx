import React from 'react';

const Header = () => {
    const headerStyle = {
        height: '64px',
        backgroundColor: 'var(--color-surface)',
        borderBottom: '1px solid var(--color-border)',
        display: 'flex',
        alignItems: 'center',
        padding: '0 2rem',
        position: 'sticky',
        top: 0,
        zIndex: 10,
        justifyContent: 'space-between'
    };

    const logoStyle = {
        fontSize: '1.25rem',
        fontWeight: '700',
        color: 'var(--color-secondary)',
        letterSpacing: '-0.02em',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem'
    };

    const badgeStyle = {
        backgroundColor: 'var(--color-primary)',
        color: 'white',
        fontSize: '0.75rem',
        padding: '0.25rem 0.5rem',
        borderRadius: '4px',
        fontWeight: '600',
        textTransform: 'uppercase'
    };

    return (
        <header style={headerStyle} className="no-print">
            <div className="container" style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                <div style={logoStyle}>
                    CUJU <span style={{ color: 'var(--color-text-muted)', fontWeight: '400' }}>|</span> Onboarding Trainer
                </div>
                <div style={{ marginLeft: 'auto' }}>
                    <span style={badgeStyle}>Training Mode</span>
                </div>
            </div>
        </header>
    );
};

export default Header;

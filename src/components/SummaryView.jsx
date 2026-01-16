import React from 'react';

const SummaryView = ({ score, totalQuestions }) => {
    const percentage = Math.round((score / totalQuestions) * 100);
    const passed = percentage >= 66;

    return (
        <div className="container" style={{ maxWidth: '800px', padding: '2rem 1rem' }}>
            <div className="card" style={{ padding: '3rem', position: 'relative' }}>

                {/* Header for Print/View */}
                <div style={{ borderBottom: '2px solid var(--color-border)', paddingBottom: '1.5rem', marginBottom: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                        <h1 style={{ fontSize: '1.5rem', color: 'var(--color-primary)' }}>CUJU | Training Summary</h1>
                        <p style={{ color: 'var(--color-text-muted)' }}>Onboarding Session Report</p>
                    </div>
                    <div className="no-print">
                        <button className="btn-primary" onClick={() => window.print()}>
                            🖨️ Print / Save PDF
                        </button>
                    </div>
                </div>

                {/* Score Section */}
                <div style={{ display: 'flex', gap: '2rem', marginBottom: '2rem', alignItems: 'center' }}>
                    <div style={{
                        width: '100px',
                        height: '100px',
                        borderRadius: '50%',
                        border: `8px solid ${passed ? 'var(--color-success)' : 'var(--color-error)'}`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.5rem',
                        fontWeight: 'bold',
                        color: 'var(--color-secondary)'
                    }}>
                        {percentage}%
                    </div>
                    <div>
                        <h2 style={{ fontSize: '1.25rem' }}>Session Result: {passed ? "PASSED" : "REVIEW NEEDED"}</h2>
                        <p style={{ color: 'var(--color-text-muted)' }}>
                            Knowledge Check: {score}/{totalQuestions} Correct
                        </p>
                    </div>
                </div>

                {/* Summary Content */}
                <div style={{ display: 'grid', gap: '2rem' }}>

                    <section>
                        <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--color-secondary)', borderLeft: '4px solid var(--color-primary)', paddingLeft: '0.5rem' }}>Session Objective</h3>
                        <p style={{ fontSize: '0.95rem', color: 'var(--color-text-main)' }}>
                            To equip the operator/trainer with the necessary skills to set up the CUJU testing station, conduct player assessments, and avoid common data capture errors.
                        </p>
                    </section>

                    <section>
                        <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--color-secondary)', borderLeft: '4px solid var(--color-primary)', paddingLeft: '0.5rem' }}>Key Takeaways (Dos & Don'ts)</h3>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                            <div style={{ background: '#F0FDF4', padding: '1rem', borderRadius: 'var(--radius-sm)' }}>
                                <strong style={{ color: 'var(--color-success)' }}>DO</strong>
                                <ul style={{ paddingLeft: '1.2rem', marginTop: '0.5rem', fontSize: '0.9rem' }}>
                                    <li>Use a tripod at chest height</li>
                                    <li>Distance exactly 5 meters</li>
                                    <li>Sync data immediately after session</li>
                                </ul>
                            </div>
                            <div style={{ background: '#FEF2F2', padding: '1rem', borderRadius: 'var(--radius-sm)' }}>
                                <strong style={{ color: 'var(--color-error)' }}>DON'T</strong>
                                <ul style={{ paddingLeft: '1.2rem', marginTop: '0.5rem', fontSize: '0.9rem' }}>
                                    <li>Hold camera by hand</li>
                                    <li>Block the camera view</li>
                                    <li>Record in poor lighting</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--color-secondary)', borderLeft: '4px solid var(--color-primary)', paddingLeft: '0.5rem' }}>Trainer Notes</h3>
                        <div style={{
                            height: '150px',
                            border: '2px dashed var(--color-border)',
                            borderRadius: 'var(--radius-sm)',
                            padding: '1rem',
                            color: 'var(--color-text-muted)',
                            fontSize: '0.9rem'
                        }}>
                            (Space for handwritten notes or additional instructions during the live session)
                        </div>
                    </section>

                </div>

                <div style={{ marginTop: '3rem', textAlign: 'center', fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
                    Generated by CUJU Onboarding Trainer • {new Date().toLocaleDateString()}
                </div>

            </div>
        </div>
    );
};

export default SummaryView;

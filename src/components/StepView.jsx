import React, { useState, useEffect } from 'react';

const StepView = ({ stepData, onComplete }) => {
    const [interactions, setInteractions] = useState({});
    const [feedback, setFeedback] = useState("");

    // Reset state when step changes
    useEffect(() => {
        setInteractions({});
        setFeedback("");
    }, [stepData.id]);

    const handleInteraction = (id, type, value, feedbackText) => {
        setInteractions(prev => ({ ...prev, [id]: true }));

        if (typeof feedbackText === 'object') {
            setFeedback(feedbackText[value] || "Noted.");
        } else {
            setFeedback(feedbackText);
        }
    };

    const isStepComplete = () => {
        const required = stepData.interactions.map(i => i.id);
        const completed = Object.keys(interactions);
        return required.every(id => completed.includes(id));
    };

    useEffect(() => {
        if (isStepComplete()) {
            if (!feedback.includes("Proceed")) {
                // Optional: Auto-add a "ready to proceed" message or just let the user click Next
            }
        }
    }, [interactions]);

    return (
        <div className="card" style={{ padding: '2rem', maxWidth: '720px', width: '100%', animation: 'fadeIn 0.5s ease' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '2rem' }}>
                <div style={{
                    fontSize: '3rem',
                    marginBottom: '1rem',
                    background: 'var(--color-bg)',
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    {stepData.icon}
                </div>
                <h2 style={{ marginBottom: '1rem', color: 'var(--color-secondary)' }}>{stepData.title}</h2>
                <p style={{ maxWidth: '600px', lineHeight: '1.6', color: 'var(--color-text-muted)' }}>
                    {stepData.description}
                </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
                {stepData.interactions.map((interaction) => (
                    <div key={interaction.id} style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>

                        {!interactions[interaction.id] ? (
                            <>
                                {interaction.type === 'button' && (
                                    <button
                                        className="btn-outline"
                                        onClick={() => handleInteraction(interaction.id, interaction.type, null, interaction.feedback)}
                                        style={{ width: '100%', maxWidth: '300px' }}
                                    >
                                        {interaction.label}
                                    </button>
                                )}

                                {interaction.type === 'boolean' && (
                                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexDirection: 'column' }}>
                                        <span style={{ fontWeight: 500 }}>{interaction.label}</span>
                                        <div style={{ display: 'flex', gap: '0.5rem' }}>
                                            <button className="btn-outline" onClick={() => handleInteraction(interaction.id, interaction.type, 'yes', interaction.feedback)}>Yes</button>
                                            <button className="btn-outline" onClick={() => handleInteraction(interaction.id, interaction.type, 'no', interaction.feedback)}>No</button>
                                        </div>
                                    </div>
                                )}

                                {interaction.type === 'options' && (
                                    <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', flexDirection: 'column' }}>
                                        <span style={{ fontWeight: 500 }}>{interaction.label}</span>
                                        <div style={{ display: 'flex', gap: '0.5rem' }}>
                                            {interaction.options.map(opt => (
                                                <button key={opt} className="btn-outline" onClick={() => handleInteraction(interaction.id, interaction.type, opt, interaction.feedback)}>{opt}</button>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </>
                        ) : (
                            <div style={{ color: 'var(--color-success)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <span>✓</span> <span style={{ textDecoration: 'line-through', color: 'var(--color-text-muted)' }}>{interaction.label}</span>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {feedback && (
                <div style={{
                    marginTop: '2rem',
                    padding: '1rem',
                    background: 'var(--color-bg)',
                    borderRadius: 'var(--radius-sm)',
                    borderLeft: '4px solid var(--color-primary)',
                    width: '100%',
                    textAlign: 'center'
                }}>
                    <p style={{ fontWeight: '500' }}>{feedback}</p>
                </div>
            )}
        </div>
    );
};

export default StepView;

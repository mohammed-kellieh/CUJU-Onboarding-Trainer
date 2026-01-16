import React from 'react';

const ProgressBar = ({ currentStep, totalSteps }) => {
    const progressPercentage = Math.min(100, Math.max(0, ((currentStep) / totalSteps) * 100));

    const containerStyle = {
        width: '100%',
        height: '8px',
        backgroundColor: 'var(--color-border)',
        borderRadius: '4px',
        overflow: 'hidden',
        marginTop: '1.5rem',
        marginBottom: '2rem'
    };

    const fillStyle = {
        height: '100%',
        width: `${progressPercentage}%`,
        backgroundColor: 'var(--color-primary)',
        transition: 'width 0.4s ease-in-out',
        borderRadius: '4px'
    };

    const labelContainerStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: '0.875rem',
        color: 'var(--color-text-muted)',
        fontWeight: '500',
        marginBottom: '0.5rem'
    };

    return (
        <div className="no-print">
            <div style={labelContainerStyle}>
                <span>Step {currentStep > totalSteps ? totalSteps : currentStep} of {totalSteps}</span>
                <span>{Math.round(progressPercentage)}% Complete</span>
            </div>
            <div style={containerStyle}>
                <div style={fillStyle}></div>
            </div>
        </div>
    );
};

export default ProgressBar;

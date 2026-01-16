import React, { useState } from 'react';

const QuizView = ({ questions, onComplete }) => {
    const [answers, setAnswers] = useState({});
    const [showFeedback, setShowFeedback] = useState(null); // id of question showing feedback

    const handleAnswer = (qId, optionIndex, correctIndex) => {
        if (answers[qId] !== undefined) return; // Prevent re-answering

        const isCorrect = optionIndex === correctIndex;
        setAnswers(prev => ({ ...prev, [qId]: isCorrect }));
        setShowFeedback(qId);
    };

    const allAnswered = questions.length === Object.keys(answers).length;
    const score = Object.values(answers).filter(Boolean).length;

    return (
        <div className="card" style={{ padding: '2rem', maxWidth: '720px', width: '100%', animation: 'fadeIn 0.5s ease' }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <h2 style={{ marginBottom: '0.5rem' }}>Knowledge Check</h2>
                <p style={{ color: 'var(--color-text-muted)' }}>Test your understanding of the training.</p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                {questions.map((q, index) => (
                    <div key={q.id} className="quiz-card" style={{ padding: '1.5rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)' }}>
                        <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>{index + 1}. {q.question}</h3>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            {q.options.map((opt, optIdx) => {
                                const isSelected = showFeedback === q.id && answers[q.id] !== undefined; // In this simple version we don't track *which* wrong option was clicked, just result. 
                                // Actually to show "selected" state we might need more state. But prompt asked for "immediate feedback (correct/wrong)".

                                let btnStyle = { textAlign: 'left', justifyContent: 'flex-start' };
                                if (answers[q.id] !== undefined) {
                                    if (optIdx === q.correctIndex) {
                                        btnStyle = { ...btnStyle, backgroundColor: 'var(--color-success)', color: 'white', borderColor: 'var(--color-success)' };
                                    } else if (answers[q.id] === false && showFeedback === q.id) {
                                        // If we tracked exactly what they clicked we could highlight wrong.
                                        // For now let's just highlight the correct one after any answer.
                                        btnStyle = { ...btnStyle, opacity: 0.6 };
                                    } else {
                                        btnStyle = { ...btnStyle, opacity: 0.6 };
                                    }
                                }

                                return (
                                    <button
                                        key={optIdx}
                                        className="btn-outline"
                                        style={btnStyle}
                                        onClick={() => handleAnswer(q.id, optIdx, q.correctIndex)}
                                        disabled={answers[q.id] !== undefined}
                                    >
                                        {opt}
                                    </button>
                                );
                            })}
                        </div>

                        {answers[q.id] !== undefined && (
                            <div style={{ marginTop: '1rem', fontWeight: '500', color: answers[q.id] ? 'var(--color-success)' : 'var(--color-error)' }}>
                                {answers[q.id] ? "Correct!" : "Incorrect."}
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {allAnswered && (
                <div style={{ marginTop: '2rem', textAlign: 'center' }}>
                    <p style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem' }}>
                        You scored {score} / {questions.length}
                    </p>
                    <button className="btn-primary" onClick={() => onComplete(score)}>
                        View Certificate & Summary
                    </button>
                </div>
            )}
        </div>
    );
};

export default QuizView;

import React, { useState } from 'react';
import Header from './components/Header';
import ProgressBar from './components/ProgressBar';
import StepView from './components/StepView';
import QuizView from './components/QuizView';
import SummaryView from './components/SummaryView';
import { trainingSteps, quizQuestions } from './data/trainingContent';
import './App.css';

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [quizScore, setQuizScore] = useState(null);

  const totalTrainingSteps = trainingSteps.length;
  // Flow: 1..5 (Training) -> 6 (Quiz) -> 7 (Summary)

  const handleStepComplete = () => {
    setCurrentStep(prev => prev + 1);
  };

  const handleQuizComplete = (score) => {
    setQuizScore(score);
    setCurrentStep(prev => prev + 1);
  };

  const renderContent = () => {
    if (currentStep <= totalTrainingSteps) {
      const stepData = trainingSteps.find(s => s.id === currentStep);
      return (
        <div style={{ width: '100%', maxWidth: '720px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <StepView stepData={stepData} onComplete={handleStepComplete} />
          <div className="no-print" style={{ marginTop: '2rem', display: 'flex', gap: '1rem' }}>
            <button
              className="btn-outline"
              onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
              disabled={currentStep === 1}
            >
              Back
            </button>
            <button
              className="btn-primary"
              onClick={handleStepComplete}
            >
              Next Step
            </button>
          </div>
        </div>
      );
    } else if (currentStep === totalTrainingSteps + 1) {
      return (
        <div style={{ width: '100%', maxWidth: '720px' }}>
          <QuizView questions={quizQuestions} onComplete={handleQuizComplete} />
        </div>
      );
    } else {
      return <SummaryView score={quizScore} totalQuestions={quizQuestions.length} />;
    }
  };

  return (
    <div className="app-container">
      <Header />
      <main className="app-main container">
        {currentStep <= totalTrainingSteps + 1 && (
          <div style={{ width: '100%', maxWidth: '720px' }}>
            <ProgressBar currentStep={currentStep} totalSteps={totalTrainingSteps + 1} />
            {/* Using +1 to include Quiz in progress bar visually, or just keep it 5? 
                Let's include Quiz as step 6. So total 6 steps excluding summary. */}
          </div>
        )}

        {renderContent()}
      </main>
    </div>
  );
}

export default App;

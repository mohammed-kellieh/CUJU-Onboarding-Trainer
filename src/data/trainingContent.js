export const trainingSteps = [
    {
        id: 1,
        title: "Introduction & Goal",
        description: "Welcome to the CUJU Operator Training. In this session, you will learn how to set up the testing station and conduct accurate player analyses. Our goal is ensuring high-quality data capture for every athlete.",
        icon: "🎯",
        interactions: [
            {
                id: "ack_1",
                label: "I understand the goal",
                type: "button",
                feedback: "Great! Let's get started."
            },
            {
                id: "check_role",
                label: "Are you a Trainer or Operator?",
                type: "options",
                options: ["Trainer", "Operator"],
                feedback: "Role noted."
            }
        ]
    },
    {
        id: 2,
        title: "Station Setup",
        description: "Place the tripod 5 meters from the starting line. Ensure the camera is at chest height and level. The background should be clear of moving objects to avoid interference with the tracking AI.",
        icon: "📐",
        interactions: [
            {
                id: "dist_check",
                label: "Is the tripod 5m away?",
                type: "boolean",
                feedback: { yes: "Perfect distance.", no: "Please adjust to exactly 5m." }
            },
            {
                id: "level_check",
                label: "Is the camera level?",
                type: "boolean",
                feedback: { yes: "Good.", no: "Use the spirit level to adjust." }
            }
        ]
    },
    {
        id: 3,
        title: "Conducting Tests",
        description: "Select the player from the roster. Press 'Start Recording' when the player is ready. Ensure the player remains in frame for the entire duration of the specific drill. Stop recording only after the drill is complete.",
        icon: "🎥",
        interactions: [
            {
                id: "rec_start",
                label: "Simulate 'Start Recording'",
                type: "button",
                feedback: "Recording started..."
            },
            {
                id: "rec_stop",
                label: "Simulate 'Stop Recording'",
                type: "button",
                feedback: "Recording saved."
            }
        ]
    },
    {
        id: 4,
        title: "Common Errors",
        description: "Avoid holding the camera by hand; always use a tripod. Do not stand in front of the camera during a test. Ensure there is sufficient lighting if testing indoors.",
        icon: "⚠️",
        interactions: [
            {
                id: "err_check",
                label: "Identify the error: Handheld recording",
                type: "button",
                feedback: "Correct, this causes instability."
            },
            {
                id: "light_check",
                label: "Check lighting conditions",
                type: "button",
                feedback: "Lighting looks good."
            }
        ]
    },
    {
        id: 5,
        title: "Conclusion & Next Steps",
        description: "You have completed the core modules. Remember to sync your data after the session. If you encounter issues, proceed to the 'Help' section in the app sidebar.",
        icon: "✅",
        interactions: [
            {
                id: "sync_ack",
                label: "Will you sync data today?",
                type: "boolean",
                feedback: { yes: "Excellent.", no: "Please do it as soon as possible." }
            }
        ]
    }
];

export const quizQuestions = [
    {
        id: 1,
        question: "What is the correct distance for the tripod?",
        options: ["2 meters", "5 meters", "10 meters"],
        correctIndex: 1
    },
    {
        id: 2,
        question: "When should you stop recording?",
        options: ["When the player gets tired", "Immediately after the whistle", "After the drill is fully complete"],
        correctIndex: 2
    },
    {
        id: 3,
        question: "Which of these is a common error?",
        options: ["Using a tripod", "Handheld recording", "Cleaning the lens"],
        correctIndex: 1
    }
];

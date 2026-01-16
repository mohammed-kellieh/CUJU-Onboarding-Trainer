# CUJU Onboarding Trainer

A lightweight, interactive web application designed to simulate a product training session for new partners, trainers, and operators of the CUJU sport analysis app.

## 🎯 Project Goal
The goal of this tool is to provide a standardized, scalable, and self-paced onboarding experience. It replaces manual briefings with a guided digital flow that ensures every operator understands the critical setup and testing protocols before handling real athletes.

## 🚀 Setup Instructions

1. **Prerequisites**: Node.js installed.
2. **Install Dependencies**:
   ```bash
   npm install
   ```
3. **Run Development Server**:
   ```bash
   npm run dev
   ```
4. **Build for Production**:
   ```bash
   npm run build
   ```

## 📖 How to Use

- **Guided Flow**: Follow the 5-step interactive training modules.
- **Interactions**: Click through the simulated checks (e.g., verifying tripod distance, camera leveling).
- **Knowledge Check**: Complete the 3-question quiz at the end to validate understanding.
- **Certification**: Upon passing, generate a standardized 1-page summary PDF (via the Print button) to serve as proof of training.

## 🛠 Tech Stack
- **Frontend**: React + Vite
- **Styling**: Vanilla CSS (Sporty, Clean, Responsive)
- **State**: Local React State (No backend required)

## 📱 Context
This tool is intended to be used on tablets (iPad/Android) directly at the sports field or on desktops during remote onboarding sessions.

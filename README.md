A Student Registration Form application built using React + Vite + Tailwind CSS.
Users can add new students through a form, and the added student details appear instantly on the right side as a card.
Each student card also includes a delete option.

🚀 Live Demo

(Add your Netlify / Vercel link here when deployed)
Example:
🔗 https://your-demo-link.com

🖼️ Screenshot

(Place your screenshot as screenshot.png and it will show here)

![App Screenshot](./screenshot.png)

📌 Features

Add new students via a clean input form

Display student details instantly

Delete any student

Beautiful UI using Tailwind CSS

Fully responsive layout

Organized React component structure

Fast performance powered by Vite

🛠️ Tech Stack
Technology	Purpose
React.js	UI development
Vite	Dev environment & bundler
Tailwind CSS	Styling
JavaScript (ES6+)	Logic
useState Hook	State management
🔧 Installation & Setup
1️⃣ Clone the project
git clone https://github.com/yourusername/student-registration-form.git

2️⃣ Navigate into the folder
cd student-registration-form

3️⃣ Install dependencies
npm install

4️⃣ Run the development server
npm run dev

📁 Project Structure
📦 project-folder
 ┣ 📂 src
 ┃ ┣ 📂 components
 ┃ ┃ ┣ StudentForm.jsx
 ┃ ┃ ┗ StudentCard.jsx
 ┃ ┣ App.jsx
 ┃ ┗ main.jsx
 ┣ 📂 public
 ┣ index.html
 ┣ package.json
 ┣ tailwind.config.js
 ┗ README.md

🧩 Key Concepts
✔ State Management

Student data is stored using React’s useState.
When a student is added, the state updates and the UI automatically re-renders.

✔ Props

Data flows between components using props:
StudentForm → App → StudentCard

✔ Tailwind CSS

Fast and efficient styling using utility classes like:
flex, shadow-lg, rounded-xl, bg-blue-600, etc.

🧨 Production Build
npm run build


Build output will be inside:

dist/

🌐 Deployment Guide
▶ Deploy on Netlify

Website: https://www.netlify.com/

Steps:

Login to Netlify

New site from Git

Select your GitHub repo

Build Command → npm run build

Publish Directory → dist

Deploy 🎉

▶ Deploy on Vercel

Website: https://vercel.com/

Steps:

Import your GitHub repository

Framework preset: Vite

Build Command: npm run build

Output Directory: dist

Deploy 🎉

🧑‍💻 Developer Info

Developer: Mohammed Mahid
Project: Student Registration Form
Year: 2025

📜 License

This project is licensed under the MIT License.
You are free to modify and use it for your own projects.

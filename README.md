# Game Recommendation App

A full-stack web application that recommends games based on user preferences, built with **Next.js** (frontend) and **Express** (backend), using the IGDB API.

---

## Features

- 🎮 Personalized game recommendations based on a short questionnaire
- 🔍 Filter by genre, playtime
- ⚡ Fast, modern UI with React and Tailwind CSS
- 🔗 Real-time data from the IGDB API

---

## Demo

<img width="1895" height="922" alt="image" src="https://github.com/user-attachments/assets/d15a68bd-7b52-403b-a8f4-d6258375c0e4" /> 

[Live Demo](https://game-recommender-git-main-hihibingonamo-3416s-projects.vercel.app/) <!-- If deployed, add your live link here -->

---

## Tech Stack

- **Frontend:** Next.js, React, Tailwind CSS, [Vercel v0](https://v0.dev/) (AI-generated UI components)
- **Backend:** Express.js, TypeScript
- **API:** IGDB (Internet Game Database)
- **Other:** Axios, dotenv

---

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm

### Setup

1. **Clone the repository:**
   ```sh
   git clone https://github.com/yourusername/your-repo.git
   cd your-repo
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Set up environment variables:**
   - Create a `.env` file in the root:
     ```
     IDGB_CLIENT_ID=your_igdb_client_id
     IDGB_ACCESS_TOKEN=your_igdb_access_token
     ```


4. **Start the frontend (Next.js):**
   ```sh
   npm run dev
   ```
   The frontend runs on [http://localhost:3000](http://localhost:3000).

---

## Project Structure

```
/
├── .next/ # Next.js build output
├── app/ # Next.js app directory
│ ├── globals.css # Global styles
│ ├── layout.tsx # Root layout
│ └── page.tsx # Main page component
│
├── client/ # Client-side code
│ └── src/
│ ├── components/ # Reusable UI components
│ │ ├── survey/ # Survey-related components
│ │ ├── GameCard.jsx
│ │ ├── GameList.jsx
│ │ └── Games.ts
│ └── styles.css # Component-specific styles
│
├── components/ # Global/shared components
│ ├── ui/ # UI library wrappers
│ └── theme-provider.tsx # Theme provider
│
├── hooks/ # Custom React hooks
├── lib/ # Utility functions and helpers
├── node_modules/ # Project dependencies
│
├── pages/ # Next.js pages directory
│ └── api/
│ └── games.js # Serverless API route
│
├── public/ # Static assets
├── styles/ # Global styling
│
├── index.ts # Backend server entry point
├── postcss.config.mjs # PostCSS configuration
├── tailwind.config.js # TailwindCSS configuration
│
├── .env # Environment variables
├── .gitignore # Git ignore rules
├── components.json # Component configuration
└── package.json # Project metadata & dependencies
```

---

## Screenshots

<img width="1902" height="767" alt="image" src="https://github.com/user-attachments/assets/b1962417-3b2b-4768-a042-8681dc7d3de9" />
<img width="1893" height="917" alt="image" src="https://github.com/user-attachments/assets/3cef8f75-380f-4eed-ae1e-79dd1fa20e87" />


---

## About Me

Hi! I’m Dillon Monkam, a CS student aspiring to be a Software Engineer who's passionate about building engaging web experiences based on my interests. In this case, video games. 
Feel free to [connect with me on LinkedIn](https://linkedin.com/in/yourprofile).

---

## License

[MIT](LICENSE)

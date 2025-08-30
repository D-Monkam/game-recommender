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

![screenshot](<img width="1895" height="922" alt="image" src="https://github.com/user-attachments/assets/d15a68bd-7b52-403b-a8f4-d6258375c0e4" />) 

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

4. **Start the backend server:**
   ```sh
   npx nodemon --exec ts-node index.ts
   ```
   The backend runs on [http://localhost:4000](http://localhost:4000).

5. **Start the frontend (Next.js):**
   ```sh
   npm run dev
   ```
   The frontend runs on [http://localhost:3000](http://localhost:3000).

---

## Project Structure

```
/
├── app/                # Next.js frontend (pages, components)
├── client/             # (If present) Additional client-side code
├── index.ts            # Express backend entry point
├── .env                # Environment variables
├── package.json
└── README.md
```

---

## Screenshots

<!-- Add screenshots/gifs here to show off your UI -->

---

## About Me

Hi! I’m Dillon Monkam, a CS student aspiring to be a Software Engineer who's passionate about building engaging web experiences based on my interests. In this case video gaems. 
Feel free to [connect with me on LinkedIn](https://linkedin.com/in/yourprofile).

---

## License

[MIT](LICENSE)

"use client"

import { useState } from "react"
import GameList from "../client/src/components/GameList"
import Questionnaire from "../client/src/components/survey/Questionnaire"

export default function Page() {
  const [currentView, setCurrentView] = useState<"games" | "questionnaire">("games")
  const [answers, setAnswers] = useState<any>(null)

  const handleQuestionnaireSubmit = (surveyAnswers: any) => {
    setAnswers(surveyAnswers)
    setCurrentView("games")
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="pt-8 pb-6">
        <div className="card-gaming p-6 mx-6 md:mx-10">
          <h1 className="text-4xl font-bold text-center text-primary font-mono tracking-wider">
            GAME RECOMMENDATION ENGINE
          </h1>
          <p className="text-center text-muted-foreground font-mono mt-2">Find your next gaming adventure</p>
        </div>
      </div>

      <div className="flex justify-center gap-4 mb-8">
        <button
          onClick={() => setCurrentView("games")}
          className={`btn-gaming px-6 py-3 ${
            currentView === "games"
              ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
              : "btn-gaming-secondary"
          }`}
        >
          BROWSE GAMES
        </button>
        <button
          onClick={() => setCurrentView("questionnaire")}
          className={`btn-gaming px-6 py-3 ${
            currentView === "questionnaire"
              ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
              : "btn-gaming-secondary"
          }`}
        >
          TAKE SURVEY
        </button>
      </div>

      {currentView === "games" && (
        <div className="px-6">
          <GameList answers={answers}/>
        </div>
      )}

      {currentView === "questionnaire" && <Questionnaire onSubmit={handleQuestionnaireSubmit} />}
    </div>
  )
}

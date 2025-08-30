"use client"

import { useState } from "react"
import QuestionGroup from "./QuestionGroup"
import { questions } from "./Questions"

const Questionnaire = ({ onSubmit }) => {
  const [answers, setAnswers] = useState({})

  const handleChange = (key, value) => {
    setAnswers((prev) => ({
      ...prev,
      [key]: value,
    }))
  }

  const handleSubmit = () => {
    if (onSubmit) {
      onSubmit(answers)
    }
  }

  return (
    <div className="bg-background min-h-screen p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-primary font-mono tracking-wider mb-8 text-center">
          GAME PREFERENCE SURVEY
        </h1>
        {questions.map((q) => (
          <QuestionGroup key={q.id} question={q} value={answers[q.id]} onChange={(val) => handleChange(q.id, val)} />
        ))}
        <div className="flex justify-center mt-8">
          <button
            onClick={handleSubmit}
            className="btn-gaming text-lg px-12 py-4 hover:shadow-lg hover:shadow-primary/30"
          >
            START GAMING
          </button>
        </div>
      </div>
    </div>
  )
}

export default Questionnaire

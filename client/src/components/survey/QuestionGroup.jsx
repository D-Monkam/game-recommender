"use client"

const QuestionGroup = ({ question, value, onChange }) => {
  switch (question.type) {
    case "multiple":
      return (
        <div className="mb-8 card-gaming p-6">
          <h2 className="text-xl font-bold mb-6 text-primary font-mono tracking-wide">{question.label}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {question.options.map((option) => (
              <button
                key={option.value}
                onClick={() => onChange(option.value)}
                className={`px-6 py-4 rounded border-2 font-mono font-semibold tracking-wide transition-all duration-200 ${
                  value === option.value
                    ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/30"
                    : "bg-secondary text-secondary-foreground border-muted hover:border-primary hover:bg-muted"
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      )
    case "checkbox":
      return (
        <div className="mb-8 card-gaming p-6">
          <h2 className="text-xl font-bold mb-6 text-primary font-mono tracking-wide">{question.label}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {question.options.map((option) => (
              <label
                key={option.id}
                className="flex items-center space-x-3 p-3 rounded border border-muted hover:border-primary transition-colors duration-200 cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={value?.includes(option.id) || false}
                  onChange={(e) => {
                    const newVal = e.target.checked
                      ? [...(value || []), option.id]
                      : value.filter((v) => v !== option.id)
                    onChange(newVal)
                  }}
                  className="w-4 h-4 accent-primary"
                />
                <span className="text-foreground font-mono">{option.name}</span>
              </label>
            ))}
          </div>
        </div>
      )
    default:
      return null
  }
}

export default QuestionGroup

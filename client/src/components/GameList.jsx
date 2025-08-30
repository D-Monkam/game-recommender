"use client"

import { useEffect, useState } from "react"
import { fetchGames } from "./Games"
import GameCard from "./GameCard"

const GameList = ({ answers }) => {
  const [games, setGames] = useState([])
  const [page, setPage] = useState(0)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setPage(0)
  }, [answers])

  useEffect(() => {
    const fetchGames = async () => {
      setLoading(true)
      try {
        const params = new URLSearchParams({ ...answers, page }).toString()
        const res = await fetch(`/api/games?${params}`)
        const data = await res.json()

        console.log("Fetched games:", data)
        console.log("Page Number:", page)

        setGames(page === 0 ? data : (prev) => [...prev, ...data])
      } catch (err) {
        console.error("Failed to fetch games:", err)
      } finally {
        setLoading(false)
      }
    }

    fetchGames()
  }, [page, answers])


  const handleLoadMore = () => setPage((prev) => prev + 1)

  return (
    <div className="bg-background min-h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
        {games.map((game) => (
          <GameCard key={game.id} name={game.name} rating={game.rating} cover={game.cover} genre={game.genreNames} />
        ))}
      </div>
      <div className="flex justify-center mt-8 pb-8">
        <button
          onClick={handleLoadMore}
          className="btn-gaming text-lg px-8 py-3 hover:shadow-lg hover:shadow-primary/30"
          disabled={loading}
        >
          {loading ? "LOADING..." : "LOAD MORE GAMES"}
        </button>
      </div>
    </div>
  )
}

export default GameList

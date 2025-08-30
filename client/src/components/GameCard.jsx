const GameCard = ({ name, rating, cover, genre }) => {
  const coverUrl = cover?.image_id
    ? `https://images.igdb.com/igdb/image/upload/t_cover_big/${cover.image_id}.jpg`
    : "https://via.placeholder.com/264x374?text=No+Cover"
  return (
    <div className="card-gaming p-4 w-64 hover:scale-105 transition-transform duration-200">
      <img
        src={coverUrl || "/placeholder.svg"}
        alt={`${name} cover`}
        className="rounded border-2 border-muted mb-3 w-full h-40 object-cover hover:border-primary transition-colors duration-200"
      />
      <h2 className="text-lg font-bold text-foreground font-mono tracking-wide">{name}</h2>
      <p className="text-sm text-primary font-mono">Rating: {rating?.toFixed(1) ?? "N/A"}</p>
      <p className="text-sm text-muted-foreground font-mono">Genre: {genre?.join(", ") ?? "Unknown"}</p>
    </div>
  )
}

export default GameCard

import axios from "axios";


export default async function handler(req, res){
  console.log("IGDB Query:", req.query);
  const { playtime, page } = req.query;
  const genre = req.query.genre ?? req.query['genre[]'];
  const clientId = process.env.IDGB_CLIENT_ID;
  const accessToken = process.env.IDGB_ACCESS_TOKEN;


  const pageNum = parseInt(page) || 0;
  const limit = 10;
  const offset = pageNum * 10;

  let clause = "";
  const genreClause = genre ? ` & genres = (${genre})` : "";

  if (playtime === "short") {
    clause = "where normally < 7200;";
  } else if (playtime === "medium") {
    clause = "where normally >= 7200 & normally < 36000;";
  } else if (playtime === "long") {
    clause = "where normally >= 36000 & normally < 144000;";
  } else if (playtime === "s-long") {
    clause = "where normally >= 144000;";
  }

  const timeToBeatRes = await axios.post(
    `https://api.igdb.com/v4/game_time_to_beats`,
    `fields game_id, normally;${clause} limit ${limit}; offset ${offset};`,
    {
      headers: {
        "Client-ID": clientId,
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
  const timeToBeat = timeToBeatRes.data;
  const gameIds = timeToBeat.map((game) => game.game_id);
  console.log("Fetched game IDs:", gameIds);

  try {
    const response = await axios.post(
      "https://api.igdb.com/v4/games",
      `fields name, rating, genres, cover.image_id; where id = (${gameIds.join(
        ","
      )})${genreClause};`,
      {
        headers: {
          "Client-ID": clientId,
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    const games = response.data;
    const genreIds = [...new Set(games.flatMap((game) => game.genres ?? []))];

    const genreRes = await axios.post(
      "https://api.igdb.com/v4/genres",
      `fields id, name; where id = (${genreIds.join(",")});`,
      {
        headers: {
          "Client-ID": clientId,
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    const genreData = genreRes.data;
    const genreMap = Object.fromEntries(
      genreData.map((genre) => [
        genre.id,
        genre.name,
      ])
    );

    const enrichedGames = games.map((game) => ({
      ...game,
      genreNames: game.genres?.map((id) => genreMap[id] ?? []),
    }));

    res.status(200).json(enrichedGames);
  } catch (err) {
    if (err instanceof Error) {
      console.error("IGDB fetch failed:", err.message);
    } else {
      console.error("Unknown error:", err);
    }
  }
};




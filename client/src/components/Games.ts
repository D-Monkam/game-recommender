import axios from "axios";

type GameFilters = {
  playtime?: string;
  genre?: string;
  popularity?: string;
  page?: Number;
};

export async function fetchGames(filters: GameFilters = {}): Promise<any[]> {
  try {
    const response = await axios.get("/games", {
      params: filters,
    });
    return response.data as any[];
  } catch (err) {
    if ((err as any).isAxiosError) {
      console.error("Axios error:", (err as any).response?.data || (err as any).message);
    } else {
      console.error("Unexpected error:", err);
    }
    return [];
  }
}

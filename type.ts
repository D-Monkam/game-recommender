export type Game = {
  id: number;
  name: string;
  rating?: number;
  genres?: number[];
  cover?: {
    image_id: string;
  };
};

export type GameTime = {
  game_id: number;
  normally: number;
};

import { useData } from "./useData";

interface Ids {
  simkl_id: number;
}

interface Ratings {
  mal: Mal;
}

interface Mal {
  rating: number;
  votes: number;
}

export interface AnimeTrending {
  poster: string;
  ids: Ids;
  release_date: string;
  ratings: Ratings;
  runtime: string;
  status: string;
  total_episodes: number;
}

export type Interval = "today" | "week" | "month";

export function useAnimeTrending(interval: Interval) {
  const {
    data: animeTrending,
    error,
    isLoading,
  } = useData<AnimeTrending>(`/anime/trending/${interval}`, [interval]);

  return { animeTrending, error, isLoading };
}

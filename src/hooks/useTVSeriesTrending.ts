import { useData } from "./useData";

interface Ids {
  simkl_id: number;
}

interface Ratings {
  imdb: Imdb;
}

interface Imdb {
  rating: number;
  votes: number;
}

export interface TVSeriesTrending {
  poster: string;
  ids: Ids;
  release_date: string;
  ratings: Ratings;
  runtime: string;
  status: string;
  total_episodes: number;
  network: string;
}

export type Interval = "today" | "week" | "month";

export function useTVSeriesTrending(interval: Interval) {
  const {
    data: tvSeriesTrending,
    error,
    isLoading,
  } = useData<TVSeriesTrending>(`/tv/trending/${interval}`, [interval]);

  return { tvSeriesTrending, error, isLoading };
}

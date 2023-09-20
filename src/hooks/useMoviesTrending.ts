import { Interval } from "../model/Interval";
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

export interface MovieTrending {
  poster: string;
  ids: Ids;
  release_date: string;
  ratings: Ratings;
  status: string;
}

export function useMoviesTrending(interval: Interval) {
  const {
    data: moviesTrending,
    error,
    isLoading,
  } = useData<MovieTrending>(`/movies/trending/${interval}`, [interval]);

  return { moviesTrending, error, isLoading };
}

import { Filter } from "../model/Filter";
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

export interface TVSeriesBest {
  title: string;
  year: number;
  poster: string;
  ids: Ids;
  ratings: Ratings;
}


export function useTVSeriesBest(filter: Filter) {
  const {
    data: tvSeriesBest,
    error,
    isLoading,
  } = useData<TVSeriesBest>(`/tv/best/${filter}`, [filter]);

  return { tvSeriesBest, error, isLoading };
}

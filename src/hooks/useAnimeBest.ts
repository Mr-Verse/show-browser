import { Filter } from "../model/Filter";
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

export interface AnimeBest {
  title: string;
  year: number;
  poster: string;
  ids: Ids;
  ratings: Ratings;
}

export function useAnimeBest(filter: Filter) {
  const {
    data: animeBest,
    error,
    isLoading,
  } = useData<AnimeBest>(`/anime/best/${filter}`, [filter]);

  return { animeBest, error, isLoading };
}

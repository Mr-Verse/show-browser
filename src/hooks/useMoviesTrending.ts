import { useEffect, useState } from "react";
import apiClient, { AxiosError, CanceledError } from "../services/apiClient";

interface Ids {
  simkl_id: number;
  slug: string;
  tmdb: number;
}

interface Ratings {
  imdb: Imdb;
}

interface Imdb {
  rating: number;
  votes: number;
}

export interface Movie {
  title: string;
  year: number;
  poster: string;
  ids: Ids;
  release_date: string;
  ratings: Ratings;
  status: string;
}

export type Interval = "today" | "week" | "month";

export function useMoviesTrending(interval: Interval) {
  const [moviesTrending, setMoviesTrending] = useState<Movie[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const controller = new AbortController();
    apiClient
      .get<Movie[]>(`/movies/trending/${interval}`, {
        signal: controller.signal,
      })
      .then((res) => {
        setLoading(false);
        setMoviesTrending(res.data);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError((error as AxiosError).message);
        setLoading(false);
      });
    return () => controller.abort();
  }, [interval]);

  return { moviesTrending, error, isLoading };
}

import { useEffect, useState } from "react";
import apiClient, { AxiosError, CanceledError } from "../services/apiClient";

export function useData<T>(endpoint: string, deps?: any[]) {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(
    () => {
      setLoading(true);

      const controller = new AbortController();
      apiClient
        .get<T[]>(endpoint, {
          signal: controller.signal,
        })
        .then((res) => {
          setLoading(false);
          setData(res.data);
        })
        .catch((error) => {
          if (error instanceof CanceledError) return;
          setError((error as AxiosError).message);
          setLoading(false);
        });
      return () => controller.abort();
    },
    deps ? [...deps] : []
  );

  return { data, error, isLoading };
}

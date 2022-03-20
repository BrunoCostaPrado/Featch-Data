import { useEffect, useState } from "react";
import axios, { AxiosRequestConfig } from "axios";
const api = axios.create({ baseURL: "https://api.github.com/" });
export function useFetch<T = unknown>(
  url: string,
  options?: AxiosRequestConfig
) {
  const [data, setData] = useState<T | null>(null);
  const [isFetching, setisFetching] = useState(true);
  const [error, setisError] = useState<Error | null>(null);

  useEffect(() => {
    api
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        setisError(err);
      })
      .finally(() => {
        setisFetching(false);
      });
  }, []);
  return { data, error, isFetching };
}

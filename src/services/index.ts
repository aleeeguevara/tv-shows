import axios, { AxiosResponse } from "axios";

export const getPopular = async (page: number) => {
  const options = {
    method: "GET",
    url: `https://api.themoviedb.org/3/discover/movie?page=${page}`,
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZmVjMWUxYzFiYzA3MmQ2YmYwN2NkMWQ1NDkyMGRlOSIsInN1YiI6IjYzYmUxMWYwZmMzMWQzMDBjNTlkZjNjNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LhJYKXSAfd2qDEuviMWc0bYRQtbXYtAX0fLxG6J00O4",
    },
  };
  const data = await axios.request(options);
  return data;
};

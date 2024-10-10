"use client";

import { useEffect, useState } from "react";
import Navigation from "../../components/navigation";

export default function Page() {
  const [isLoading, setIsLoading] = useState(false);
  const [moives, setMovies] = useState();

  const getMovies = async () => {
    setIsLoading(true);
    const response = await fetch(
      "https://nomad-movies.nomadcoders.workers.dev/movies"
    );
    const json = await response.json();
    setMovies(json);
    setIsLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      <h1>Home</h1>
      {isLoading ? " Loading... " : JSON.stringify(moives)}
    </div>
  );
}

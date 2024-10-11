import Link from "next/link";
import {API_URL} from "@/app/(main)/(home)/constant";


export const metadata = {
  title: "Home",
};

const getMovies = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1));
  return fetch(API_URL).then((response) => response.json());
};

export default async function HomePage() {
  const movies = await getMovies();

  return (
    <div>
      {movies.map((movie) => (
        <li key={movie.id}>
          <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
        </li>
      ))}
    </div>
  );
}

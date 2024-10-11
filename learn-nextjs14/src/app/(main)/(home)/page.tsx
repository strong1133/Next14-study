import Link from "next/link";
import {getMovies} from "@/repository/apis/movies/movies";
import {signOut} from "@/auth";

export const metadata = {
  title: "Home",
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
        <form
            action={async () => {
              'use server';
              await signOut();
            }}
        >
          <button>
            Log Out
          </button>
        </form>
      </div>
  );
}

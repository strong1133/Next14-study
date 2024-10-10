import { Suspense } from "react";
import { API_URL } from "../../../(home)/page";
import MovieInfo from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";

export default async function MovieDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <div>
      <Suspense fallback={<h1>Loading Moive Info</h1>} >
        <MovieInfo  id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading Videos Info</h1>} >
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}

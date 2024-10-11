import { Suspense } from "react";

import MovieInfo from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";

export default async function MovieDetail({
  params: { id },
}: {
  params: { id: string };
}) {

  async function create(formData: FormData){
    'use server'
    console.log(formData)
}

  return (
    <div>
      <Suspense fallback={<h1>Loading Moive Info</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading Videos Info</h1>}>
        <MovieVideos id={id} />
      </Suspense>

      <form action={create}>
        <input type="text" name="title" />
        <textarea name="content" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

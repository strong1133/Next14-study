import { API_URL } from "../../../(home)/page";

const getMovie = async (id: string) => {
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
};

const getVideos = async (id: string) => {
  const response = await fetch(`${API_URL}/${id}/videos`);
  return response.json();
};

export default async function MovieDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  const [movie, video] = await Promise.all([getMovie(id), getVideos(id)]);

  return (
    <div>
      <h1>{movie.title}</h1>
    </div>
  );
}

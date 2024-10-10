import { API_URL } from "../app/(home)/page";

const getVideos = async (id: string) => {
  // //   const response = await fetch(`${API_URL}/${id}/videos`);
  //   return response.json();

  throw new Error("Err");
};

export default async function MovieVideos({ id }: { id: string }) {
  const videos = await getVideos(id);
  return <h6>{JSON.stringify(videos)}</h6>;
}

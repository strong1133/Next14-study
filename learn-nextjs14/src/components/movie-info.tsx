import {API_URL} from "@/app/(main)/(home)/constant";


const getMovie = async (id: string) => {
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
};

export default async function MovieInfo({ id }: { id: string }) {
  const movieInfo = await getMovie(id);
  return <h6>{JSON.stringify(movieInfo)}</h6>;
}

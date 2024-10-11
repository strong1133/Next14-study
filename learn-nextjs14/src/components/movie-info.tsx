import {getMovie} from "@/repository/apis/movies/movies";


export default async function MovieInfo({id}: { id: string }) {
    const movieInfo = await getMovie(id);
    return <h6>{JSON.stringify(movieInfo)}</h6>;
}

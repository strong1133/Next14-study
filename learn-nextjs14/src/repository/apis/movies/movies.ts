import {API_URL} from "@/app/(main)/(home)/constant";

export const getMovies = async () => {
    return fetch(API_URL).then((response) => response.json());
};

export const getVideos = async (id: string) => {
    const response = await fetch(`${API_URL}/${id}/videos`);
    return response.json();
};

export const getMovie = async (id: string) => {
    const response = await fetch(`${API_URL}/${id}`);
    return response.json();
};


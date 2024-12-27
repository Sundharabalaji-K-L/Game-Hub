import {useEffect, useState} from "react";
import apiClient from "../services/api-client.ts";
import {CanceledError} from "axios";

interface Genre{
    id: number;
    name: string;
}

interface FetchGenresResponse{
    count: number;
    results: Genre[];
}

const useGenre = ()=>{
    const [genres, setGenres] = useState<Genre[]>([]);
    const [error, setError] = useState('');
    const [isLoading, setLoading] = useState(true);

    useEffect(()=>{
        const controller = new AbortController();
        apiClient.get<FetchGenresResponse>('/genres', {signal: controller.signal})
            .then(response => {
                setGenres(response.data.results);
                setLoading(false);
            })
            .catch(error => {
                if(error instanceof CanceledError)  return;
                setError(error.message);
                setLoading(false);
            });

        return ()=> controller.abort();
    }, [])

    return {genres, error, setGenres, setError, isLoading};
}

export default useGenre

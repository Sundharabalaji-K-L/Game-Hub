import useGenre from "../hooks/useGenre.ts";

const GenreList = ()=>{
    const {data} = useGenre();

    return(
        <ul>
            {data.map(genre=><li key={genre.name}>{genre.name}</li>)}
        </ul>
    )
}

export default GenreList

import useGenre, {Genre} from "../hooks/useGenre.ts";
import {HStack, Image, List, ListItem, Spinner, Button, Heading} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url.ts";

interface Props{
    onSelectGenre: (genre: Genre)=>void;
    selectedGenre: Genre | null;
}

const GenreList = ({selectedGenre, onSelectGenre}:Props)=>{
    const {data, isLoading, error} = useGenre();

    if(error) return;
    if(isLoading) return <Spinner />;
    return(
        <>
        <Heading fontSize='2xl'marginBottom={3} >Genres</Heading>
        <List>
            {data.map(genre=><ListItem key={genre.id}>
                <HStack paddingY="5px">
                    <Image  objectFit='cover' boxSize="32px" src={getCroppedImageUrl(genre.image_background)} borderRadius={8} />
                   <Button whiteSpace="normal" textAlign="left" fontWeight={genre.id === selectedGenre?.id? 'bold': 'normal'} onClick={()=>onSelectGenre(genre)} fontSize="lg" variant="link"> {genre.name}</Button>
                </HStack>

            </ListItem>)}
        </List>
        </>
    )
}

export default GenreList

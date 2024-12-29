import useGenre, {Genre} from "../hooks/useGenre.ts";
import {HStack, Image, List, ListItem,  Spinner, Button} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url.ts";

interface Props{
    onSelectGenre: (genre: Genre)=>void;
}

const GenreList = ({onSelectGenre}:Props)=>{
    const {data, isLoading, error} = useGenre();

    if(error) return;
    if(isLoading) return <Spinner />;
    return(
        <List>
            {data.map(genre=><ListItem key={genre.id}>
                <HStack paddingY="5px">
                    <Image  boxSize="32px" src={getCroppedImageUrl(genre.image_background)} borderRadius={8} />
                   <Button onClick={()=>onSelectGenre(genre)} fontSize="lg" variant="link"> {genre.name}</Button>
                </HStack>

            </ListItem>)}
        </List>
    )
}

export default GenreList

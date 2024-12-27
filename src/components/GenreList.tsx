import useGenre from "../hooks/useGenre.ts";
import {HStack, Image, List, ListItem, Text} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url.ts";

const GenreList = ()=>{
    const {data} = useGenre();

    return(
        <List>
            {data.map(genre=><ListItem key={genre.id}>
                <HStack paddingY="5px">
                    <Image  boxSize="32px" src={getCroppedImageUrl(genre.image_background)} borderRadius={8} />
                   <Text fontSize="lg"> {genre.name}</Text>
                </HStack>

            </ListItem>)}
        </List>
    )
}

export default GenreList

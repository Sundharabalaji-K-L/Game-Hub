import {Grid, GridItem, Show} from "@chakra-ui/react";
import Navbar from "./components/Navbar.tsx";
import GameGrid from "./components/GameGrid.tsx";
import GenreList from "./components/GenreList.tsx";
import {useState} from "react";
import {Genre} from "./hooks/useGenre.ts";
import PlatformSelector from "./components/PlatformSelector.tsx";
import {Platform} from "./hooks/useGames.ts";


function App() {
        const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
        const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null)

  return (
      <Grid templateAreas= {
          {
              base: `"nav" "main"`,
              lg: `"nav nav" "aside main"`  // larger than 1024 px
          }

      }
            templateColumns={{
                base: '1fr',
                lg: '200px 1fr'
            }}
      >
          <GridItem area="nav">
              <Navbar />
          </GridItem>
         <Show above="lg">
             <GridItem   area="aside" paddingX={5}>
                <GenreList selectedGenre={selectedGenre} onSelectGenre={(genre)=>setSelectedGenre(genre) } />
             </GridItem>
         </Show>
          <GridItem area="main">
              <PlatformSelector selectedPlatform={selectedPlatform}  onSelectPlatform={(platform)=> setSelectedPlatform(platform)}/>
              <GameGrid selectedPlatform={selectedPlatform} selectedGenre={selectedGenre}/>
          </GridItem>
      </Grid>
  )
}

export default App

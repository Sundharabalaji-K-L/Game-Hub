import {Box, Flex, Grid, GridItem, Show} from "@chakra-ui/react";
import Navbar from "./components/Navbar.tsx";
import GameGrid from "./components/GameGrid.tsx";
import GenreList from "./components/GenreList.tsx";
import {useState} from "react";
import {Genre} from "./hooks/useGenre.ts";
import PlatformSelector from "./components/PlatformSelector.tsx";
import {Platform} from "./hooks/useGames.ts";
import SortSelector from "./components/SortSelector.tsx";
import './index.css';
import GameHeading from "./components/GameHeading.tsx";

export interface GameQuery {
    genre: Genre | null;
    platform: Platform | null;
    sortOrder: string;
    searchText: string;
}

function App() {
    const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery)
  return (
      <Grid templateAreas= {
          {
              base: `" nav" "main"`,
              lg: `"nav nav" "aside main"`  // larger than 1024 px
          }

      }
            templateColumns={{
                base: '1fr',
                lg: '200px 1fr'
            }}
      >
          <GridItem area="nav">
              <Navbar onSearch={(searchText)=> setGameQuery({...gameQuery, searchText})}/>
          </GridItem>
         <Show above="lg">
             <GridItem   area="aside" paddingX={5}>
                <GenreList selectedGenre={gameQuery.genre} onSelectGenre={(genre)=>setGameQuery({...gameQuery, genre}) } />
             </GridItem>
         </Show>
          <GridItem area="main">
               <Box paddingLeft={2}>
                   <GameHeading gameQuery={gameQuery} />
                   <Flex marginBottom={5}>
                       <Box marginRight={5}>
                           <PlatformSelector selectedPlatform={gameQuery.platform}  onSelectPlatform={(platform)=> setGameQuery({...gameQuery, platform})}/>
                       </Box>


                       <SortSelector sortOrder={gameQuery.sortOrder} onSelectSortOrder={(sortOrder)=> setGameQuery({...gameQuery, sortOrder}) }/>
                   </Flex>
               </Box>
              <GameGrid gameQuery={gameQuery}/>
          </GridItem>
      </Grid>
  )
}

export default App

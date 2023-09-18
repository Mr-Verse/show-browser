import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import MoviesTrendingContainer from "./components/MoviesTrendingContainer";
import TVSeriesTrendingContainer from "./components/TVSeriesTrendingContainer";
import TVSeriesBestContainer from "./components/TVSeriesBestContainer";
import CategoryList from "./components/CategoryList";
import { useState } from "react";
import AnimeTrendingContainer from "./components/AnimeTrendingContainer";
import AnimeBestContainer from "./components/AnimeBestContainer";

export type CategoryName = "Movies" | "TV Series" | "Anime";

function App() {
  const navBarHeight = "56px";
  const [categoryName, setCategoryName] = useState<CategoryName>("Movies");

  return (
    <Grid templateColumns={{ base: "200px 1fr", xl: "300px 1fr" }}>
      <GridItem
        position={{ base: "fixed", md: "static" }}
        colSpan={2}
        // bg="orange"
        h={navBarHeight}
        width="100%"
        boxShadow="md"
      >
        <NavBar />
      </GridItem>
      <Show above="md">
        <GridItem
          mt={{ base: navBarHeight, md: 0 }}
          // bg="purple.400"
          height={`calc(100vh - ${navBarHeight})`}
          overflowY="auto"
          p="8px"
          boxShadow="2xl"
        >
          <CategoryList
            onCategorySelect={(categoryName) => setCategoryName(categoryName)}
            selectedCategoryName={categoryName}
          />
        </GridItem>
      </Show>
      <GridItem
        colSpan={{ base: 2, md: 1 }}
        mt={{ base: navBarHeight, md: 0 }}
        height={`calc(100vh - ${navBarHeight})`}
        overflowY="auto"
        // bg="blue.300"w
      >
        {categoryName === "TV Series" && (
          <TVSeriesTrendingContainer interval="week" />
        )}
        {categoryName === "TV Series" && (
          <TVSeriesBestContainer filter="month" />
        )}
        {categoryName === "Movies" && (
          <MoviesTrendingContainer interval="week" />
        )}
        {categoryName === "Anime" && <AnimeTrendingContainer interval="week" />}
        {categoryName === "Anime" && <AnimeBestContainer filter="month" />}
      </GridItem>
    </Grid>
  );
}

export default App;

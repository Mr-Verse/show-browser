import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import MoviesTrendingContainer from "./components/MoviesTrendingContainer";
import TVSeriesTrendingContainer from "./components/TVSeriesTrendingContainer";
import TVSeriesBestContainer from "./components/TVSeriesBestContainer";
import CategoryList from "./components/CategoryList";
import { useState } from "react";
import AnimeTrendingContainer from "./components/AnimeTrendingContainer";
import AnimeBestContainer from "./components/AnimeBestContainer";
import FilterList from "./components/FilterList";
import { Interval } from "./model/Interval";
import { Filter } from "./model/Filter";

export type CategoryName = "Movies" | "TV Series" | "Anime";

export interface AppQuery {
  movieTrendingInterval: Interval;
  tvSeriesTrendingInterval: Interval;
  tvSeriesBestFilter: Filter;
  animeTrendingInterval: Interval;
  animeBestFilter: Filter;
}

function App() {
  const navBarHeight = "56px";
  const [categoryName, setCategoryName] = useState<CategoryName>("Movies");
  const [appQuery, setAppQuery] = useState<AppQuery>({
    movieTrendingInterval: "week",
    tvSeriesTrendingInterval: "week",
    tvSeriesBestFilter: "month",
    animeTrendingInterval: "week",
    animeBestFilter: "month",
  } as AppQuery);

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
          <FilterList
            categoryName={categoryName}
            appQuery={appQuery}
            onSelectMovieTrendingInterval={(interval) => {
              setAppQuery({ ...appQuery, movieTrendingInterval: interval });
            }}
            onSelectTVSeriesTrendingInterval={(interval) => {
              setAppQuery({ ...appQuery, tvSeriesTrendingInterval: interval });
            }}
            onSelectTVSeriesBestFilter={(filter) => {
              setAppQuery({ ...appQuery, tvSeriesBestFilter: filter });
            }}
            onSelectAnimeTrendingInterval={(interval) => {
              setAppQuery({ ...appQuery, animeTrendingInterval: interval });
            }}
            onSelectAnimeBestFilter={(filter) => {
              setAppQuery({ ...appQuery, animeBestFilter: filter });
            }}
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
          <TVSeriesTrendingContainer
            interval={appQuery.tvSeriesTrendingInterval}
          />
        )}
        {categoryName === "TV Series" && (
          <TVSeriesBestContainer filter={appQuery.tvSeriesBestFilter} />
        )}
        {categoryName === "Movies" && (
          <MoviesTrendingContainer interval={appQuery.movieTrendingInterval} />
        )}
        {categoryName === "Anime" && (
          <AnimeTrendingContainer interval={appQuery.animeTrendingInterval} />
        )}
        {categoryName === "Anime" && (
          <AnimeBestContainer filter={appQuery.animeBestFilter} />
        )}
      </GridItem>
    </Grid>
  );
}

export default App;

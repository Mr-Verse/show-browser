import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import MoviesTrendingContainer from "./components/MoviesTrendingContainer";
import TVSeriesTrendingContainer from "./components/TVSeriesTrendingContainer";
import TVSeriesBestContainer from "./components/TVSeriesBestContainer";
import CategoryList, { CategoryListProps } from "./components/CategoryList";
import { useState } from "react";
import AnimeTrendingContainer from "./components/AnimeTrendingContainer";
import AnimeBestContainer from "./components/AnimeBestContainer";
import FilterList, { FilterListProps } from "./components/FilterList";
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
  const [categoryName, setCategoryName] = useState<CategoryName>("TV Series");
  const [appQuery, setAppQuery] = useState<AppQuery>({
    movieTrendingInterval: "week",
    tvSeriesTrendingInterval: "week",
    tvSeriesBestFilter: "month",
    animeTrendingInterval: "week",
    animeBestFilter: "month",
  } as AppQuery);

  const categoryListProps: CategoryListProps = {
    onCategorySelect: (categoryName: CategoryName) =>
      setCategoryName(categoryName),
    selectedCategoryName: categoryName,
  };

  const filterListProps: FilterListProps = {
    categoryName: categoryName,
    appQuery: appQuery,
    onSelectMovieTrendingInterval: (interval: Interval) => {
      setAppQuery({ ...appQuery, movieTrendingInterval: interval });
    },
    onSelectTVSeriesTrendingInterval: (interval: Interval) => {
      setAppQuery({ ...appQuery, tvSeriesTrendingInterval: interval });
    },
    onSelectTVSeriesBestFilter: (filter: Filter) => {
      setAppQuery({ ...appQuery, tvSeriesBestFilter: filter });
    },
    onSelectAnimeTrendingInterval: (interval: Interval) => {
      setAppQuery({ ...appQuery, animeTrendingInterval: interval });
    },
    onSelectAnimeBestFilter: (filter: Filter) => {
      setAppQuery({ ...appQuery, animeBestFilter: filter });
    },
  };

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
        <NavBar
          categoryListProps={categoryListProps}
          filterListProps={filterListProps}
        />
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
          <CategoryList {...categoryListProps} />
          <FilterList {...filterListProps} />
        </GridItem>
      </Show>
      <GridItem
        colSpan={{ base: 2, md: 1 }}
        mt={{ base: navBarHeight, md: 0 }}
        height={`calc(100vh - ${navBarHeight})`}
        overflowY="auto"
        // bg="blue.300"w
      >
        {categoryName === "Movies" && (
          <MoviesTrendingContainer interval={appQuery.movieTrendingInterval} />
        )}
        {categoryName === "TV Series" && (
          <TVSeriesBestContainer filter={appQuery.tvSeriesBestFilter} />
        )}
        {categoryName === "TV Series" && (
          <TVSeriesTrendingContainer
            interval={appQuery.tvSeriesTrendingInterval}
          />
        )}
        {categoryName === "Anime" && (
          <AnimeBestContainer filter={appQuery.animeBestFilter} />
        )}
        {categoryName === "Anime" && (
          <AnimeTrendingContainer interval={appQuery.animeTrendingInterval} />
        )}
      </GridItem>
    </Grid>
  );
}

export default App;

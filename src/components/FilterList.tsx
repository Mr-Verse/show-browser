import { FormLabel, Heading, List, ListItem, Select } from "@chakra-ui/react";
import { AppQuery, CategoryName } from "../App";
import { Interval } from "../model/Interval";
import { Filter } from "../model/Filter";

export interface FilterListProps {
  categoryName: CategoryName;
  appQuery: AppQuery;
  onSelectMovieTrendingInterval: (interval: Interval) => void;
  onSelectTVSeriesTrendingInterval: (interval: Interval) => void;
  onSelectTVSeriesBestFilter: (filter: Filter) => void;
  onSelectAnimeTrendingInterval: (interval: Interval) => void;
  onSelectAnimeBestFilter: (filter: Filter) => void;
}

const FilterList = ({
  categoryName,
  appQuery,
  onSelectMovieTrendingInterval,
  onSelectTVSeriesTrendingInterval,
  onSelectTVSeriesBestFilter,
  onSelectAnimeTrendingInterval,
  onSelectAnimeBestFilter,
}: FilterListProps) => {
  const intervalMap: { interval: Interval; label: string }[] = [
    { interval: "today", label: "Today" },
    { interval: "week", label: "This Week" },
    { interval: "month", label: "This Month" },
  ];

  const FilterMap: { filter: Filter; label: string }[] = [
    { filter: "month", label: "This Month" },
    { filter: "year", label: "This Year" },
    { filter: "all", label: "All Time" },
  ];

  return (
    <>
      <Heading fontSize="xl" mb="16px" mt="24px">
        Filters
      </Heading>
      <List spacing="8px">
        <ListItem>
          <FormLabel htmlFor="interval">Trending {categoryName}</FormLabel>
          <Select
            id="interval"
            value={
              categoryName === "Movies"
                ? appQuery.movieTrendingInterval
                : categoryName === "TV Series"
                ? appQuery.tvSeriesTrendingInterval
                : categoryName === "Anime"
                ? appQuery.animeTrendingInterval
                : undefined
            }
            onChange={(event) => {
              if (categoryName === "Movies")
                onSelectMovieTrendingInterval(event.target.value as Interval);
              //correct way?
              else if (categoryName === "TV Series")
                onSelectTVSeriesTrendingInterval(
                  event.target.value as Interval
                );
              else if (categoryName === "Anime")
                onSelectAnimeTrendingInterval(event.target.value as Interval);
            }}
          >
            {intervalMap.map((interval) => (
              <option value={interval.interval} key={interval.interval}>
                {interval.label}
              </option>
            ))}
          </Select>
          {categoryName !== "Movies" && (
            <FormLabel htmlFor="filter">Best {categoryName}</FormLabel>
          )}
          {categoryName !== "Movies" && (
            <Select
              id="filter"
              value={
                categoryName === "TV Series"
                  ? appQuery.tvSeriesBestFilter
                  : categoryName === "Anime"
                  ? appQuery.animeBestFilter
                  : undefined
              }
              onChange={(event) => {
                if (categoryName === "TV Series")
                  onSelectTVSeriesBestFilter(event.target.value as Filter);
                else if (categoryName === "Anime")
                  onSelectAnimeBestFilter(event.target.value as Filter);
              }}
            >
              {FilterMap.map((filter) => (
                <option value={filter.filter} key={filter.filter}>
                  {filter.label}
                </option>
              ))}
            </Select>
          )}
        </ListItem>
      </List>
    </>
  );
};

export default FilterList;

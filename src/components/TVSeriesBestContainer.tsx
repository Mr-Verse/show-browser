import { Box, Grid, Heading, Text } from "@chakra-ui/react";
import { useTVSeriesBest } from "../hooks/useTVSeriesBest";
import TVSeriesBestCardSkeleton from "./TVSeriesBestCardSkeleton";
import TVSeriesBestCard from "./TVSeriesBestCard";
import { Filter } from "../model/Filter";

interface Props {
  filter: Filter;
}

const TVSeriesBestContainer = ({ filter }: Props) => {
  const { tvSeriesBest, error, isLoading } = useTVSeriesBest(filter);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <Box px="8px">
      <Heading fontSize="xl" mb="10px">
        Best TV Series{" "}
        {filter === "all"
          ? "All Time."
          : filter === "month"
          ? "This Month."
          : filter === "year"
          ? "This Year."
          : ""}
      </Heading>
      {error && <Text color="red">{error}</Text>}

      <Grid
        overflowX="auto"
        gap="12px"
        templateColumns={`repeat(${tvSeriesBest.length / 2},1fr)`}
        paddingBottom="12px"
      >
        {isLoading &&
          skeletons.map((Skeleton) => (
            <TVSeriesBestCardSkeleton key={Skeleton} />
          ))}
        {tvSeriesBest.map((tvSeriesBest) => (
          <TVSeriesBestCard
            key={tvSeriesBest.ids.simkl_id}
            tvSeriesBest={tvSeriesBest}
          />
        ))}
      </Grid>
    </Box>
  );
};

export default TVSeriesBestContainer;

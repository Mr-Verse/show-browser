import { Box, Grid, Heading, Text } from "@chakra-ui/react";
import { useAnimeBest } from "../hooks/useAnimeBest";
import AnimeBestCardSkeleton from "./AnimeBestCardSkeleton";
import AnimeBestBestCard from "./AnimeBestCard";
import { Filter } from "../model/Filter";

interface Props {
  filter: Filter;
}

const AnimeBestContainer = ({ filter }: Props) => {
  const { animeBest, error, isLoading } = useAnimeBest(filter);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <Box px="8px">
      <Heading fontSize="xl" mb="10px">
        Best Anime{" "}
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
        templateColumns={`repeat(${animeBest.length / 2},1fr)`}
        paddingBottom="12px"
      >
        {isLoading &&
          skeletons.map((Skeleton) => <AnimeBestCardSkeleton key={Skeleton} />)}
        {animeBest.map((animeBest) => (
          <AnimeBestBestCard
            key={animeBest.ids.simkl_id}
            animeBest={animeBest}
          />
        ))}
      </Grid>
    </Box>
  );
};

export default AnimeBestContainer;

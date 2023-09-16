import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import { Interval, useTVSeriesTrending } from "../hooks/useTVSeriesTrending";
import TVSeriesTrendingCardSkeleton from "./TVSeriesTrendingCardSkeleton";
import TVSeriesTrendingCard from "./TVSeriesTrendingCard";

interface Props {
  interval: Interval;
}

const TVSeriesTrendingContainer = ({ interval }: Props) => {
  const { tvSeriesTrending, error, isLoading } = useTVSeriesTrending(interval);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <Box px="8px">
      <Heading fontSize="xl" mb="10px">
        Trending TV Series{" "}
        {interval === "today"
          ? "Today"
          : interval === "week"
          ? "This Week"
          : "This Month"}
      </Heading>
      {error && <Text color="red">{error}</Text>}
      <SimpleGrid
        columns={{ base: 2, sm: 3, md: 3, lg: 5, xl: 6 }}
        spacing={{ base: "12px" }}
      >
        {isLoading &&
          skeletons.map((Skeleton) => (
            <TVSeriesTrendingCardSkeleton key={Skeleton} />
          ))}
        {tvSeriesTrending.map((tvSeriesTrending) => (
          <TVSeriesTrendingCard
            key={tvSeriesTrending.ids.simkl_id}
            tvSeriesTrending={tvSeriesTrending}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default TVSeriesTrendingContainer;

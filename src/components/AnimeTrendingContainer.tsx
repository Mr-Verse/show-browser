import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import { Interval, useAnimeTrending } from "../hooks/useAnimeTrending";
import AnimeTrendingCardSkeleton from "./AnimeTrendingCardSkeleton";
import AnimeTrendingCard from "./AnimeTrendingCard";

interface Props {
  interval: Interval;
}

const AnimeTrendingContainer = ({ interval }: Props) => {
  const { animeTrending, error, isLoading } = useAnimeTrending(interval);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <Box px="8px">
      <Heading fontSize="xl" mb="10px">
        Anime Trending{" "}
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
            <AnimeTrendingCardSkeleton key={Skeleton} />
          ))}
        {animeTrending.map((animeTrending) => (
          <AnimeTrendingCard
            key={animeTrending.ids.simkl_id}
            animeTrending={animeTrending}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default AnimeTrendingContainer;

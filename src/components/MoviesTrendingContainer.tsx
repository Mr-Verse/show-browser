import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import MovieTrendingCard from "./MovieTrendingCard";
import { Interval, useMoviesTrending } from "../hooks/useMoviesTrending";
import MovieTrendingCardSkeleton from "./MovieTrendingCardSkeleton";

interface Props {
  interval: Interval;
}

const MoviesTrendingContainer = ({ interval }: Props) => {
  const { moviesTrending, error, isLoading } = useMoviesTrending(interval);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <Box px="8px">
      <Heading fontSize="xl" mb="10px">
        Trending Movies{" "}
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
          skeletons.map((Skeleton) => <MovieTrendingCardSkeleton key={Skeleton} />)}
        {moviesTrending.map((movieTrending) => (
          <MovieTrendingCard
            key={movieTrending.ids.simkl_id}
            movieTrending={movieTrending}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default MoviesTrendingContainer;

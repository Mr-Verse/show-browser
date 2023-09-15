import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import MovieCard from "./MovieCard";
import { Interval, useMoviesTrending } from "../hooks/useMoviesTrending";

interface Props {
  interval: Interval;
}

const MoviesTrending = ({ interval }: Props) => {
  const { moviesTrending, error } = useMoviesTrending(interval);

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
      {error && <p>{error}</p>}
      <SimpleGrid
        columns={{ base: 2, sm: 3, md: 3, lg: 5, xl: 6 }}
        spacing={{ base: "12px" }}
      >
        {moviesTrending.map((movie) => (
          <MovieCard key={movie.ids.simkl_id} movie={movie} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default MoviesTrending;

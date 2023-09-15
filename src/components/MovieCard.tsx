import {
  Card,
  CardBody,
  Text,
  Image,
  Badge,
  HStack,
  Icon,
} from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";
import { BiLogoImdb } from "react-icons/bi";
import { FaStar } from "react-icons/fa";
import getPosterUrl from "../services/getPosterUrl";
import { Movie } from "../hooks/useMoviesTrending";

interface Props {
  movie: Movie;
}

const MovieCard = ({ movie }: Props) => {
  const { colorMode } = useColorMode();
  let cardBodyContent = null;

  if (movie.status === "soon")
    cardBodyContent = (
      <HStack flexDirection="column">
        <Badge px="6px" py="4px">
          Coming Soon
        </Badge>
        <Text>
          {new Date(movie.release_date).toLocaleString("en-us", {
            month: "short",
            year: "numeric",
          })}
        </Text>
      </HStack>
    );
  else
    cardBodyContent = (
      <HStack flexDirection="column">
        <HStack justifyContent="space-between" width="100%">
          <HStack>
            <Icon as={FaStar} color="gold" boxSize="16px"/>
            <Text fontWeight="bold">{movie.ratings.imdb.rating}</Text>
          </HStack>
          <Icon
            as={BiLogoImdb}
            boxSize="24px"
            color={colorMode === "dark" ? "yellow.400" : "#e2b616"}
          />
        </HStack>
        <Text>
          {new Date(movie.release_date).toLocaleString("en-us", {
            month: "short",
            year: "numeric",
          })}
        </Text>
      </HStack>
    );

  return (
    <Card borderRadius="12px" overflow="hidden">
      <Image src={getPosterUrl(movie.poster)} />
      <CardBody fontSize="sm" px={{ base: "8px" }} py={{ base: "16px" }}>
        {cardBodyContent}
      </CardBody>
    </Card>
  );
};

export default MovieCard;

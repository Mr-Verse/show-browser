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
import { MovieTrending } from "../hooks/useMoviesTrending";

interface Props {
  movieTrending: MovieTrending;
}

const MovieTrendingCard = ({ movieTrending }: Props) => {
  const { colorMode } = useColorMode();

  return (
    <Card borderRadius="12px" overflow="hidden">
      <Image src={getPosterUrl(movieTrending.poster)} />
      <CardBody fontSize="sm" px={{ base: "8px" }} py={{ base: "16px" }}>
        <HStack flexDirection="column">
          {movieTrending.status === "soon" ? (
            <Badge px="6px" py="4px">
              Coming Soon
            </Badge>
          ) : null}
          {movieTrending.ratings.imdb.rating ? (
            <HStack justifyContent="space-between" width="100%">
              <HStack>
                <Icon as={FaStar} color="gold" boxSize="16px" />
                <Text fontWeight="bold">
                  {movieTrending.ratings.imdb.rating}
                </Text>
              </HStack>
              <Icon
                as={BiLogoImdb}
                boxSize="24px"
                color={colorMode === "dark" ? "yellow.400" : "#e2b616"}
              />
            </HStack>
          ) : null}
          <Text>
            {new Date(movieTrending.release_date).toLocaleString("en-us", {
              month: "short",
              year: "numeric",
            })}
          </Text>
        </HStack>
      </CardBody>
    </Card>
  );
};

export default MovieTrendingCard;

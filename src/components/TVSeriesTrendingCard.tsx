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
import { TVSeriesTrending } from "../hooks/useTVSeriesTrending";

interface Props {
  tvSeriesTrending: TVSeriesTrending;
}

const TVSeriesTrendingCard = ({ tvSeriesTrending }: Props) => {
  const { colorMode } = useColorMode();

  return (
    <Card borderRadius="12px" overflow="hidden">
      <Image src={getPosterUrl(tvSeriesTrending.poster)} />
      <CardBody fontSize="sm" px={{ base: "8px" }} py={{ base: "16px" }}>
        <HStack flexDirection="column">
          {tvSeriesTrending.ratings.imdb.rating ? (
            <HStack justifyContent="space-between" width="100%">
              <HStack>
                <Icon as={FaStar} color="gold" boxSize="16px" />
                <Text fontWeight="bold">
                  {tvSeriesTrending.ratings.imdb.rating}
                </Text>
              </HStack>
              <Icon
                as={BiLogoImdb}
                boxSize="24px"
                color={colorMode === "dark" ? "yellow.400" : "#e2b616"}
              />
            </HStack>
          ) : null}
          {tvSeriesTrending.total_episodes && (
            <Text fontSize={{ base: "xs", md: "inherit" }} whiteSpace="nowrap">
              Episodes: {tvSeriesTrending.total_episodes} /
              {" " + tvSeriesTrending.runtime}
            </Text>
          )}
          <Text>
            {new Date(tvSeriesTrending.release_date).toLocaleString("en-us", {
              month: "short",
              year: "numeric",
            })}
          </Text>
          {tvSeriesTrending.status !== "ongoing" && (
            <Badge px="6px" py="4px">
              {tvSeriesTrending.status}
            </Badge>
          )}
        </HStack>
      </CardBody>
    </Card>
  );
};

export default TVSeriesTrendingCard;

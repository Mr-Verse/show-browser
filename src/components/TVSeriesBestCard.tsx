import { CardBody, Text, Image, HStack, Icon } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";
import { BiLogoImdb } from "react-icons/bi";
import getPosterUrl from "../services/getPosterUrl";
import { TVSeriesBest } from "../hooks/useTVSeriesBest";
import CardAutoWidth from "./CardAutoWidth";

interface Props {
  tvSeriesBest: TVSeriesBest;
}

const TVSeriesBestCard = ({ tvSeriesBest }: Props) => {
  const { colorMode } = useColorMode();

  return (
    <CardAutoWidth>
      <Image src={getPosterUrl(tvSeriesBest.poster)} />
      <CardBody fontSize="sm" px={{ base: "8px" }} py={{ base: "16px" }}>
        <HStack flexDirection="column">
          {<Text>{tvSeriesBest.title}</Text>}
          {tvSeriesBest.ratings.imdb.rating ? (
            <HStack justifyContent="space-between" width="100%">
              <Text>{tvSeriesBest.year}</Text>
              <HStack>
                <Icon
                  as={BiLogoImdb}
                  boxSize="24px"
                  color={colorMode === "dark" ? "yellow.400" : "#e2b616"}
                />
                <Text fontWeight="bold">
                  {tvSeriesBest.ratings.imdb.rating}
                </Text>
              </HStack>
            </HStack>
          ) : null}
        </HStack>
      </CardBody>
    </CardAutoWidth>
  );
};

export default TVSeriesBestCard;

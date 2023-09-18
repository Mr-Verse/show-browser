import { CardBody, Text, Image, HStack, Icon } from "@chakra-ui/react";
import { BiLogoImdb } from "react-icons/bi";
import getPosterUrl from "../services/getPosterUrl";
import CardAutoWidth from "./CardAutoWidth";
import { AnimeBest } from "../hooks/useAnimeBest";

interface Props {
  animeBest: AnimeBest;
}

const AnimeBestBestCard = ({ animeBest }: Props) => {
  return (
    <CardAutoWidth>
      <Image src={getPosterUrl(animeBest.poster)} />
      <CardBody fontSize="sm" px={{ base: "8px" }} py={{ base: "16px" }}>
        <HStack flexDirection="column">
          {<Text>{animeBest.title}</Text>}
          {animeBest.ratings.mal.rating ? (
            <HStack justifyContent="space-between" width="100%">
              <Text>{animeBest.year}</Text>
              <HStack>
                <Icon as={BiLogoImdb} boxSize="24px" color="#2e51a2" />
                <Text fontWeight="bold">{animeBest.ratings.mal.rating}</Text>
              </HStack>
            </HStack>
          ) : null}
        </HStack>
      </CardBody>
    </CardAutoWidth>
  );
};

export default AnimeBestBestCard;

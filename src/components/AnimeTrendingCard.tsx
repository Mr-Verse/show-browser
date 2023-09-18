import {
  Card,
  CardBody,
  Text,
  Image,
  Badge,
  HStack,
  Icon,
} from "@chakra-ui/react";
import { SiMyanimelist } from "react-icons/si";
import { FaStar } from "react-icons/fa";
import getPosterUrl from "../services/getPosterUrl";
import { AnimeTrending } from "../hooks/useAnimeTrending";

interface Props {
  animeTrending: AnimeTrending;
}

const AnimeTrendingCard = ({ animeTrending }: Props) => {
  return (
    <Card borderRadius="12px" overflow="hidden">
      <Image src={getPosterUrl(animeTrending.poster)} />
      <CardBody fontSize="sm" px={{ base: "8px" }} py={{ base: "16px" }}>
        <HStack flexDirection="column">
          {animeTrending.ratings.mal.rating ? (
            <HStack justifyContent="space-between" width="100%">
              <HStack>
                <Icon as={FaStar} color="gold" boxSize="16px" />
                <Text fontWeight="bold">
                  {animeTrending.ratings.mal.rating}
                </Text>
              </HStack>
              <Icon as={SiMyanimelist} boxSize="24px" color={"#2e51a2"} />
            </HStack>
          ) : null}
          {animeTrending.total_episodes && (
            <Text fontSize={{ base: "xs", md: "inherit" }} whiteSpace="nowrap">
              Episodes: {animeTrending.total_episodes} /
              {" " + animeTrending.runtime}
            </Text>
          )}
          <Text>
            {new Date(animeTrending.release_date).toLocaleString("en-us", {
              month: "short",
              year: "numeric",
            })}
          </Text>
          {animeTrending.status !== "ongoing" && (
            <Badge px="6px" py="4px">
              {animeTrending.status}
            </Badge>
          )}
        </HStack>
      </CardBody>
    </Card>
  );
};

export default AnimeTrendingCard;

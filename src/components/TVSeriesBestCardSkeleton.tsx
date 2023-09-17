import { CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";
import CardInFlex from "./CardAutoWidth";

const TVSeriesBestCardSkeleton = () => {
  return (
    <CardInFlex>
      <Skeleton height={{ base: "250px", lg: "200px" }} />
      <CardBody fontSize="sm" px={{ base: "8px" }} py={{ base: "16px" }}>
        <SkeletonText />
      </CardBody>
    </CardInFlex>
  );
};

export default TVSeriesBestCardSkeleton;

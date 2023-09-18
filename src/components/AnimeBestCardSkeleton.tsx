import { CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";
import CardAutoWidth from "./CardAutoWidth";

const AnimeBestCardSkeleton = () => {
  return (
    <CardAutoWidth>
      <Skeleton height={{ base: "250px", lg: "200px" }} />
      <CardBody fontSize="sm" px={{ base: "8px" }} py={{ base: "16px" }}>
        <SkeletonText />
      </CardBody>
    </CardAutoWidth>
  );
};

export default AnimeBestCardSkeleton;

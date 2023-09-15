import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const MovieCardSkeleton = () => {
  return (
    <Card borderRadius="12px" overflow="hidden">
      <Skeleton height={{base:"250px", lg:"200px"}}/>
      <CardBody fontSize="sm" px={{ base: "8px" }} py={{ base: "16px" }}>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default MovieCardSkeleton;

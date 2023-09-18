import {
  Badge,
  Button,
  Heading,
  List,
  ListIcon,
  ListItem,
} from "@chakra-ui/react";
import { BiCameraMovie } from "react-icons/bi";
import { PiTelevisionSimpleBold } from "react-icons/pi";
import { GiPunch } from "react-icons/gi";
import { CategoryName } from "../App";
import { IconType } from "react-icons";

interface Props {
  onCategorySelect: (categoryName: CategoryName) => void;
  selectedCategoryName: CategoryName;
}

const CategoryList = ({ onCategorySelect, selectedCategoryName }: Props) => {
  const Categories: { name: CategoryName; icon: IconType }[] = [
    { name: "Movies", icon: BiCameraMovie },
    { name: "TV Series", icon: PiTelevisionSimpleBold },
    { name: "Anime", icon: GiPunch },
  ];

  return (
    <>
      <Heading fontSize="xl" mb="16px">
        Categories
      </Heading>
      <List spacing="8px">
        {Categories.map((category, index) => (
          <ListItem key={category.name}>
            <Badge
              width="100%"
              borderRadius="10px"
              px="8px"
              paddingTop="4px"
              paddingBottom="8px"
            >
              <ListIcon
                as={category.icon}
                boxSize="28px"
                color="currentcolor"
                position="relative"
                top={index === 1 ? "2px" : index === 2 ? "4px" : ""}
              />
              <Button
                variant="link"
                fontSize="lg"
                fontWeight={
                  category.name === selectedCategoryName ? "bold" : "normal"
                }
                textDecoration={
                  category.name === selectedCategoryName ? "underline" : "none"
                }
                position="relative"
                left={category.name === selectedCategoryName ? "8px" : ""}
                onClick={() => onCategorySelect(category.name)}
              >
                {category.name}
              </Button>
            </Badge>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default CategoryList;

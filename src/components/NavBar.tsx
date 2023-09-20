import {
  Flex,
  HStack,
  Heading,
  Icon,
  Hide,
  useDisclosure,
} from "@chakra-ui/react";
import { PiFireDuotone as Logo } from "react-icons/pi";
import { FiMenu } from "react-icons/fi";
import ColorModeSwitch from "./ColorModeSwitch";
import AsideDrawer from "./AsideDrawer";
import { CategoryListProps } from "./CategoryList";
import { FilterListProps } from "./FilterList";

interface Props {
  categoryListProps: CategoryListProps;
  filterListProps: FilterListProps;
}

const NavBar = ({ categoryListProps, filterListProps }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex justifyContent="space-between" padding="8px" alignItems="center">
      <HStack>
        <Hide above="md">
          <Icon as={FiMenu} boxSize="28px" cursor="pointer" onClick={onOpen} />
          <AsideDrawer
            isOpen={isOpen}
            onClose={onClose}
            categoryListProps={categoryListProps}
            filterListProps={filterListProps}
          />
        </Hide>
        <Icon as={Logo} boxSize="40px" />
        <Heading as="h1" fontSize="2xl" userSelect="none">
          Show Browser
        </Heading>
      </HStack>
      <ColorModeSwitch />
    </Flex>
  );
};

export default NavBar;

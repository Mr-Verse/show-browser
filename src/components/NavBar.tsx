import { Flex, HStack, Heading, Icon, Hide } from "@chakra-ui/react";
import { PiFireDuotone as Logo } from "react-icons/pi";
import { FiMenu } from "react-icons/fi";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <Flex justifyContent="space-between" padding="8px" alignItems="center">
      <HStack>
        <Hide above="md">
          <Icon as={FiMenu} boxSize="28px" cursor="pointer" />
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

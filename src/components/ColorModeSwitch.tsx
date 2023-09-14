import { HStack, Icon, useColorMode } from "@chakra-ui/react";
import { BiSun } from "react-icons/bi";
import { BiMoon } from "react-icons/bi";

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const shadowStyle = {
    ":hover": {
      color: colorMode === "dark" ? "white" : "black",
      filter:
        colorMode === "dark"
          ? "drop-shadow(0px 0px 1.5px rgba(265,265,265,0.8))"
          : "drop-shadow(0px 0px 1.5px rgba(0,0,0,0.2))",
    },
  };

  return (
    <HStack>
      {colorMode === "light" ? (
        <Icon
          as={BiSun}
          boxSize={6}
          onClick={toggleColorMode}
          cursor="pointer"
          sx={shadowStyle}
        />
      ) : (
        <Icon
          as={BiMoon}
          boxSize={6}
          onClick={toggleColorMode}
          cursor="pointer"
          sx={shadowStyle}
        />
      )}
    </HStack>
  );
};

export default ColorModeSwitch;

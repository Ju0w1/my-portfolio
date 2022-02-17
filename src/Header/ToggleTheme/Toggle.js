import React from "react";
import { useColorMode, IconButton, Icon } from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";

const Toggle = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <IconButton icon={colorMode === 'light' ? <Icon as={FaMoon} /> : <Icon as={FaSun} />} size="lg" onClick={() => toggleColorMode()}>
            {colorMode}
        </IconButton>
    );
};

export default Toggle;
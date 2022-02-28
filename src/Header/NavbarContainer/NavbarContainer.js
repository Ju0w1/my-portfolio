import React from "react"
import { Flex, useColorMode, useMediaQuery } from "@chakra-ui/react"
import { checkThemeAndScreenSize } from "../../Utils/utils";


const NavBarContainer = ({ children, ...props }) => {
    const { colorMode } = useColorMode()
    const [isLargerThan768] = useMediaQuery('(min-width: 768px)')


    return (
        <Flex
            backdropFilter='blur(8px)'
            backgroundColor={checkThemeAndScreenSize(colorMode, isLargerThan768, 'whiteAlpha.600', 'white', 'blackAlpha.600', 'black')}

            zIndex={700}
            as="nav"
            align="center"
            justify="space-between"
            position='fixed'
            wrap="wrap"
            w="100%"
            mb={0}
            p={8}
            {...props}
        >
            {children}
        </Flex>
    );
};

export default NavBarContainer;
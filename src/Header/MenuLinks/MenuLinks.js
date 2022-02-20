import React from "react"
import { Box, Stack, Text } from "@chakra-ui/react"
import MenuItem from "../MenuItem/MenuItem";
import Toggle from "../ToggleTheme/Toggle";
import MenuLogo from "../MenuLogo/MenuLogo";

const MenuLinks = ({ isOpen }) => {
    return (
        <Box
            paddingInline='5%'
            display={{ base: isOpen ? "block" : "none", md: "block" }}
            flexBasis={{ base: "100%", }}
        >
            <Stack
                spacing={8}
                align="center"
                justify={["center", "space-between", "flex-end", "flex-end"]}
                direction={["column", "column", "row", "row"]}
                pt={[4, 4, 0, 0]}
            >
                <MenuLogo to="/" />
                <Box flex='1' />
                <MenuItem to="/about">About</MenuItem>
                <MenuItem to="/work">Work</MenuItem>
                <MenuItem to="/contact" >Contact</MenuItem>
                <Box flex='1' />
                <Toggle />
            </Stack>
        </Box>
    );
};

export default MenuLinks;
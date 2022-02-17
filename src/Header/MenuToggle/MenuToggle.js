import React from "react"
import { Box, Icon } from "@chakra-ui/react"
import { FaBars, FaTimes } from "react-icons/fa"

const MenuToggle = ({ toggle, isOpen }) => {
    return (
        <Box display={{ base: "block", md: "none" }} onClick={toggle}>
            {isOpen ? <Icon as={FaTimes} /> : <Icon as={FaBars} />}
        </Box>
    )
}

export default MenuToggle;
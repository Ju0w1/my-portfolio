import React from "react"
import { HStack } from "@chakra-ui/react"
import About from "../About/About"

const Home = ({ toggle, isOpen }) => {
    return (
        <HStack>
            <About></About>
        </HStack>
    )
}

export default Home;
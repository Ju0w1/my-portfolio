import React from "react"
import { VStack } from "@chakra-ui/react"
import Home from "../Home/Home"
import About from "../About"
import CodeStyleSnippet from "../Components/AboutCodeStyle"


const Main = ({ toggle, isOpen }) => {
    return (
        <VStack>
            <Home />
            <About />

        </VStack>
    )
}

export default Main;
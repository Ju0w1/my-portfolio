import React from "react"
import { Box, Image, } from "@chakra-ui/react"

const About = ({ ...props }) => {
    return (
        <Box w='100%' >
            <Image src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
        </Box>
    );
};

export default About;
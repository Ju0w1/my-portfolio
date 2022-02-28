import React from 'react'

import {
    Box,
    Center,
    Flex,
    Spacer,
    Stack,
    Text,
} from '@chakra-ui/react';
import Card from '../Components/Card';
import IconDisplayer from '../Components/IconDisplayer/index';
import CodeStyleSnippet from '../Components/AboutCodeStyle';


const About = (data) => {
    return (
        <>
            <Text fontSize={{ base: '4em', lg: '5em' }}>About me</Text>
            <CodeStyleSnippet />
            <Text fontSize={{ base: '4em', lg: '5em' }}>Technologies</Text>
            <IconDisplayer />
        </>

    );
}

export default About
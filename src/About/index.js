import React from 'react'

import {
    Center,
    Flex,
    Stack,
} from '@chakra-ui/react';
import Card from '../Components/Card';
import IconDisplayer from '../Components/IconDisplayer/index';


const About = (data) => {
    return (
        <Stack minH={'100vh'} direction={{ base: 'column', lg: 'row' }}>
            <Flex p={8} flex={1} align={'center'} justify={'center'}>
                <Stack spacing={6} w={'full'} maxW={'lg'}>
                    <Card />
                </Stack>
            </Flex>
            <Flex flex={1}>
                <Center>
                    <IconDisplayer />
                </Center>
            </Flex>
        </Stack>
    );
}

export default About
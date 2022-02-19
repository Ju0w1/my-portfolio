import React from "react"
import { Box, Image, Flex, Heading, Center, Spacer, Text, VStack, Link } from "@chakra-ui/react"
import ScrollIcon from "./ScrollAnim/ScrollIcon";

const Home = ({ ...props }) => {
    return (
        <VStack paddingInline='5%' position='relative'>
            <Box mt={12} h={'850px'} p={10} display={{ md: 'flex' }}>
                <Box w={['100%', '100%', '60%', '50%']} h={['10%', '20%', '100%',]} flexShrink={0}>
                    <Center h='100%'>
                        <VStack>
                            <Heading textAlign='center' fontSize={['1.5rem', '2rem', '2rem', '3rem']} >Hi, I'm Pablo Peculio.</Heading>
                            <Text textAlign='center' fontSize={['1rem', '1rem', '1rem', '2rem']} >I'm a software developer.</Text>
                        </VStack>
                    </Center>
                </Box>
                <Box w={['100%', '100%', '50%', '50%']} h={['50%', '75%', '100%',]} mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
                    <Center h={'100%'} w='100%'>
                        <Image border='8px solid' shadow='2px 10px 20px rgba(0, 0, 0, 0.2)' borderRadius='full' w={['70%', '70%', '100%', '40%']} objectFit='cover' src="/me.jpg" />
                    </Center>
                </Box>
            </Box>
            <Box w='100%'>
                <ScrollIcon />
            </Box>
        </VStack >
    );
};

export default Home;
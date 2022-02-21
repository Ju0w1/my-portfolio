
import {
    Box,
    Image,
    Link,
    useColorModeValue,
    chakra,
    Flex,
    Text,
    Code,
    Center
} from '@chakra-ui/react';

export default function Card() {
    return (
        <>
            <Flex
                p={50}
                w="full"
                alignItems="center"
                justifyContent="center"
            >
                <Box
                    mx="auto"
                    rounded="lg"
                    shadow="md"
                    bg={useColorModeValue("white", "gray.800")}
                    maxW="2xl"
                >
                    <Image
                        roundedTop="lg"
                        w="full"
                        // h={64}
                        fit="cover"
                        src="/snap.png"
                        alt="Article"
                    />

                    <Box p={6}>
                        <Center>
                            <Text
                                display="block"
                                color={useColorModeValue("gray.800", "white")}
                                fontWeight="bold"
                                fontSize="2xl"
                                mt={2}

                            >
                                About me
                            </Text>
                        </Center>
                    </Box>
                </Box>
            </Flex>
        </>

    );
}



import { Avatar, Badge, Box, Center, Flex, Text, Wrap, WrapItem } from '@chakra-ui/react'
import React from 'react'

const IconDisplayer = () => {
    return (
        <>
            <Wrap >
                <WrapItem>
                    <Flex>
                        <Center>
                            <Avatar size='xl' p={1} bgColor='teal' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' />
                            <Box ml='3'>
                                <Text fontWeight='bold'>
                                    React.js
                                    <Badge ml='1' colorScheme='green'>
                                        New
                                    </Badge>
                                </Text>
                                <Text fontSize='sm'>Learning</Text>
                            </Box>
                        </Center>
                    </Flex>
                </WrapItem>
                <WrapItem>
                    <Flex>
                        <Center>
                            <Avatar size='xl' p={1} bgColor='teal' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-line.svg' />
                            <Box ml='3'>
                                <Text fontWeight='bold'>
                                    Next.js
                                    <Badge ml='1' colorScheme='green'>
                                        New
                                    </Badge>
                                </Text>
                                <Text fontSize='sm'>Learning</Text>
                            </Box>
                        </Center>
                    </Flex>
                </WrapItem>
                <WrapItem>
                    <Flex>
                        <Center>
                            <Avatar size='xl' p={1} bgColor='teal' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg' />
                            <Box ml='3'>
                                <Text fontWeight='bold'>
                                    HTML
                                </Text>
                                <Text fontSize='sm'>Learned</Text>
                            </Box>
                        </Center>
                    </Flex>
                </WrapItem>
                <WrapItem>
                    <Flex>
                        <Center>
                            <Avatar size='xl' p={1} bgColor='teal' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg' />
                            <Box ml='3'>
                                <Text fontWeight='bold'>
                                    CSS
                                </Text>
                                <Text fontSize='sm'>Learned</Text>
                            </Box>
                        </Center>
                    </Flex>
                </WrapItem>
                <WrapItem>
                    <Flex>
                        <Center>
                            <Avatar size='xl' p={1} bgColor='teal' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' />
                            <Box ml='3'>
                                <Text fontWeight='bold'>
                                    Javascript
                                </Text>
                                <Text fontSize='sm'>Learned</Text>
                            </Box>
                        </Center>
                    </Flex>
                </WrapItem>
                <WrapItem>
                    <Flex>
                        <Center>
                            <Avatar size='xl' p={1} bgColor='teal' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' />
                            <Box ml='3'>
                                <Text fontWeight='bold'>
                                    Bootstrap
                                </Text>
                                <Text fontSize='sm'>Learned</Text>
                            </Box>
                        </Center>
                    </Flex>
                </WrapItem>
            </Wrap>
        </>
    )
}

export default IconDisplayer
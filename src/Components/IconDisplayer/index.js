import { Badge, Box, Center, Flex, Text, Wrap, WrapItem } from '@chakra-ui/react'
import React from 'react'
import { technologiesData } from '../../About/Data'

// import IconCard from '../IconCard/index'

const IconDisplayer = () => {
    return (
        <>

            <Wrap w='80%' justify='center'>
                {
                    technologiesData.map(card => (
                        <WrapItem bg='teal' p={5} borderRadius={10}>
                            <Flex>
                                <Center>
                                    {card.icon}
                                    <Box ml='3'>
                                        <Text fontWeight='bold'>
                                            {card.name}
                                            {card.isNew && <Badge ml='1' colorScheme='green'>New</Badge>}
                                        </Text>
                                        <Text fontSize='sm'>{card.comment}</Text>
                                    </Box>
                                </Center>
                            </Flex>
                        </WrapItem>
                    ))
                }

            </Wrap>
        </>
    )
}

export default IconDisplayer
import { Badge, Box, Center, Flex, Text, WrapItem } from '@chakra-ui/react'
import React from 'react'

const IconCard = (props) => {
    return (
        <>
            <WrapItem>
                <Flex>
                    <Center>
                        {props.icon}
                        <Box ml='3'>
                            <Text fontWeight='bold'>
                                {props.name}
                                {props.isNew && <Badge ml='1' colorScheme='green'>New</Badge>}
                            </Text>
                            <Text fontSize='sm'>{props.comment}</Text>
                        </Box>
                    </Center>
                </Flex>
            </WrapItem>
        </>
    )
}

export default IconCard
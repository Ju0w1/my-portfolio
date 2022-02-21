import { Badge, Box, Center, Flex, Text, useColorMode, useMediaQuery, Wrap, WrapItem } from '@chakra-ui/react'
import React from 'react'
import { technologiesData } from '../../About/Data'
import { checkThemeAndScreenSize } from '../../Utils/utils'

// import IconCard from '../IconCard/index'

const IconDisplayer = () => {
    const { colorMode } = useColorMode()
    const [isLargerThan768] = useMediaQuery('(min-width: 768px)')
    return (
        <>

            <Wrap spacing='20px' w='80%' justify='center'>
                {
                    technologiesData.map(card => (
                        <WrapItem p={3} bgColor={checkThemeAndScreenSize(colorMode, isLargerThan768, 'whiteAlpha.500', 'whiteAlpha.500', 'blackAlpha.500', 'blackAlpha.500')} boxShadow='dark-lg' borderRadius={10}>
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
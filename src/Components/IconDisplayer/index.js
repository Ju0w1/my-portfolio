import { Badge, Box, Center, Flex, Text, useColorMode, useMediaQuery, Wrap, WrapItem } from '@chakra-ui/react'
import React, { useState } from 'react'
import { technologiesData } from '../../About/Data'
import { checkThemeAndScreenSize } from '../../Utils/utils'

// import IconCard from '../IconCard/index'
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd"

const IconDisplayer = () => {
    const { colorMode } = useColorMode()
    const [isLargerThan768] = useMediaQuery('(min-width: 768px)')
    const [cards, setCards] = useState(technologiesData)
    const reorder = (list, startIndex, endIndex) => {
        const result = [...list]
        const [removed] = result.splice(startIndex, 1)
        result.splice(endIndex, 0, removed)
        return result
    }
    return (
        <>
            <DragDropContext onDragEnd={
                (result) => {
                    const { source, destination } = result;
                    if (!destination) {
                        return;
                    }
                    if (source.index === destination.index && source.droppableId === destination.droppableId) {
                        return;
                    }
                    setCards(prevTasks => reorder(prevTasks, source.index, destination.index))
                }
            }>
                <Droppable droppableId="cards" >
                    {
                        (droppableProvided) => (
                            <Wrap
                                ref={droppableProvided.innerRef}
                                {...droppableProvided.droppableProps}
                                spacing='20px' w='80%' justify='center' >
                                {
                                    cards.map((card, index) => (

                                        <Draggable

                                            key={card.id}
                                            draggableId={card.id.toString()}
                                            index={index}
                                            as="ul"
                                        >
                                            {
                                                (draggableProvided) => (
                                                    <WrapItem
                                                        ref={draggableProvided.innerRef}
                                                        {...draggableProvided.draggableProps}
                                                        {...draggableProvided.dragHandleProps}
                                                        p={8}
                                                        bgColor={checkThemeAndScreenSize(colorMode, isLargerThan768, 'whiteAlpha.500', 'whiteAlpha.500', 'blackAlpha.500', 'blackAlpha.500')}
                                                        boxShadow='dark-lg'
                                                        borderRadius={10}
                                                        as="li"
                                                    >
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
                                                )
                                            }
                                        </Draggable>
                                    ))}
                                {droppableProvided.placeholder}
                            </Wrap>
                        )
                    }
                </Droppable>

            </DragDropContext>
        </>
    )
}

export default IconDisplayer
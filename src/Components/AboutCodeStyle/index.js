import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/nightOwl";
import { Line, LineContent, LineNo, Pre } from './WithLineNumbersElements';



const CodeStyleSnippet = () => {

    return (
        <Box borderRadius='20px' height={{ base: '400px', lg: '500px' }} bg='teal.900' width={{ base: '450px', lg: '700px' }} color='white'>
            <Box borderRadius='20px 20px 0 0' display='flex' bg='teal.500' w='100%' h='40px' color='white'>
                <Box marginInline='8px' w='75px' h='40px' justifyContent='space-between' display='flex' alignItems='center'  >
                    <Box bg='red.400' padding='10px' display='flex' justifyContent='center' alignItems='center' w='15px' h='15px' borderRadius='full' />
                    <Box bg='green.400' padding='10px' display='flex' justifyContent='center' alignItems='center' w='15px' h='15px' borderRadius='full' />
                    <Box bg='yellow.400' padding='10px' display='flex' justifyContent='center' alignItems='center' w='15px' h='15px' borderRadius='full' />
                </Box>
                <Box fontWeight='bold' fontSize='14px' display='flex' borderRadius='8px 8px 0 0' alignSelf='flex-end' justifyContent='center' alignItems='center' bg='teal.900' w='120px' h='32px'>
                    about-me.js
                </Box>
            </Box>
            <WithLineNumbers />
            {/* <Box marginInline='8px' w='100%'>
            </Box> */}
        </Box>
    )
}
const text =
    `myInfo = {
    name: 'Pablo Peculio',
    age: 20,
    country: 'Uruguay',
    studies: [
        {
            id: 1,
            institution: 'ITSP',
            degree: 'Bachelor in Computer Science',
            progress: 'Completed',
        },
        {
            id: 2,
            institution: 'UTEC',
            degree: 'Technologist Degree in Computer Science',
            progress: 'In-progress',
        },
    ],
};`

const WithLineNumbers = () => (

    < Highlight {...defaultProps} theme={theme} code={text} language="js" >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <Pre className={className} style={style}>
                {tokens.map((line, i) => (
                    <Line key={i} {...getLineProps({ line, key: i })}>
                        <LineNo>{i + 1}</LineNo>
                        <LineContent>
                            {line.map((token, key) => (
                                <span key={key} {...getTokenProps({ token, key })} />
                            ))}
                        </LineContent>
                    </Line>
                ))}
            </Pre>
        )}
    </Highlight >
);

export default CodeStyleSnippet
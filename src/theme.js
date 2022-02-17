import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'
import ScrollIcon from './About/ScrollAnim/ScrollIcon';
const theme = extendTheme({
    fonts: {
        heading: 'Tommy',
        body: 'Montserrat',
    },
    styles: {
        global: (props) => ({
            body: {
                bg: mode('teal.300', 'gray.900')(props),

            },
            button: {
                colorScheme: mode('teal.300', 'gray.900')(props)
            }
        })
    },
    components: {
        ScrollIcon,
    }


})


export default theme;
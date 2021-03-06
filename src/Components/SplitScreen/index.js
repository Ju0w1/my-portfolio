import {
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import Card from '../Card';
import IconDisplayer from '../IconDisplayer';


export default function SplitScreen(data) {
  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Card />
        </Stack>
      </Flex>
      <Flex w='auto' flex={1}>
        <Center >
          <IconDisplayer {...data} />
        </Center>
      </Flex>
    </Stack>
  );
}
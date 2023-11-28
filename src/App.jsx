import { Box, Heading, Button, Flex, Stack } from "@chakra-ui/react";
import bgImage from '../src/resources/theme/images/night.jpg';

function App() {
  return (
    <Box 
      h='50vh'
      bg='gray'
      bgImage={`url(${bgImage})`}
      bgRepeat='no-repeat'
      bgSize='cover'
    >
      <Flex
        direction='column'
        alignItems='center'
        justify='center'
        h='100%'
        bg='rgb(0 0 0 / 50%)'
      >
        <Heading
          color='white'
          textTransform='uppercase'
          textAlign='center'
          fontWeight='light'
          letterSpacing='5px'
        >Domina el Terreno</Heading>
        <Stack
          direction={{ base: 'column', sm: 'row'}}
          spacing='40px'
          mt='30px'

        >
          <Button
            variant='outline'
            size='lg'
            textTransform='uppercase'
            fontWeight='light'
            borderRadius='0'
            color='white'
            letterSpacing='1px'
            _hover={{
              color: 'black',
              bg: 'white'
            }}
          >Ver detalles</Button>
          <Button
            variant='outline'
            size='lg'
            textTransform='uppercase'
            fontWeight='light'
            borderRadius='0'
            color='white'
            letterSpacing='1px'
            _hover={{
              color: 'black',
              bg: 'white'
            }}
          >Ver video</Button>
        </Stack>
      </Flex>
    </Box>
  );
}

export default App;
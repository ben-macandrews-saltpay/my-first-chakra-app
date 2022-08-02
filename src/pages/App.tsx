
import {
  ChakraProvider,
  Box,
  Grid,
  theme,
  GridItem,
  HStack,
  Stack,
  VStack,
  SimpleGrid
} from "@chakra-ui/react"
import PrimaryButton from "../components/button";
import Sidemenu from "../components/sidemenu";
import NavBar from "../components/navbar";
import Navbar from "../components/navbar";

export const App = () => (
  <ChakraProvider theme={theme}>
    <VStack alignItems="left" bg='gray.200' spacing="0px">
      <Box p="12px" bg="white">
        <Navbar />
      </Box>
      <Stack minH="100vh" alignItems='top' spacing="0px" direction="row">

        {/* SIDE MENU */}
        <Sidemenu />

        {/* CONTENT */}
        <Box minH='full' w='full' py='24px' px={['16px', '16px', '16px', '60px']} bg='gray.100'>
          <SimpleGrid columns={{sm: 4, md: 6, lg: 12}} spacing={{md: 4, lg: 6}} h="full" p={15}>
          <Box h='full' bg='purple.100'></Box>
          <Box h='full' bg='purple.100'></Box>
          <Box h='full' bg='purple.100'></Box>
          <Box h='full' bg='purple.100'></Box>
          <Box h='full' bg='purple.100'></Box>
          <Box h='full' bg='purple.100'></Box>
          <Box h='full' bg='purple.100'></Box>
          <Box h='full' bg='purple.100'></Box>
          <Box h='full' bg='purple.100'></Box>
          <Box h='full' bg='purple.100'></Box>
          <Box h='full' bg='purple.100'></Box>
          <Box h='full' bg='purple.100'></Box>
        </SimpleGrid>
      </Box>
    </Stack>
  </VStack>
  </ChakraProvider >
)


import {
  ChakraProvider,
  Box,
  Stack,
  VStack,
  SimpleGrid
} from "@chakra-ui/react"
import Navbar from "../components/navbar";
import ScSidemenu from '../components/scsidemenu';
import theme from "../theme/theme"

export const App = () => (
  

  <ChakraProvider theme={theme}>
    <VStack alignItems="left" bg='brand.pure.white' spacing="0px">
      <Box p="12px" bg="brand.pure.white" boxShadow="md" zIndex="overlay" position={"fixed"} minW="100vw">
        <Navbar />
      </Box>
      <Stack minH="100vh" alignItems='top' spacing="0px" direction="row">

        {/* SIDE MENU */}
        {/* <Sidemenu /> */}
        <ScSidemenu />

        {/* CONTENT */}
        <Box minH='full' w='full' py='72px' px={['16px', '16px', '16px', '60px']} bg="white">
          <SimpleGrid columns={{ sm: 4, md: 6, lg: 12 }} spacing={{ md: 4, lg: 6 }} minH="100vh" px={15} py={6}>
            <Box h='full' bg='brand.neutral.100'></Box>
            <Box h='full' bg='brand.neutral.100'></Box>
            <Box h='full' bg='brand.neutral.100'></Box>
            <Box h='full' bg='brand.neutral.100'></Box>
            <Box h='full' bg='brand.neutral.100'></Box>
            <Box h='full' bg='brand.neutral.100'></Box>
            <Box h='full' bg='brand.neutral.100'></Box>
            <Box h='full' bg='brand.neutral.100'></Box>
            <Box h='full' bg='brand.neutral.100'></Box>
            <Box h='full' bg='brand.neutral.100'></Box>
            <Box h='full' bg='brand.neutral.100'></Box>
            <Box h='full' bg='brand.neutral.100'></Box>
          </SimpleGrid>
        </Box>
      </Stack>
    </VStack>
  </ChakraProvider >
)



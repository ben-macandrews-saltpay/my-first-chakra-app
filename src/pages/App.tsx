
import {
  ChakraProvider,
  Box,
  Stack,
  HStack,
  VStack,
  SimpleGrid
} from "@chakra-ui/react"
import Navbar from "../components/navbar";
import ScSidemenu from '../components/scsidemenu';
import theme from "../theme/theme"
import ResizePanel from "../components/resizepanel"

export const App = () => (


  <ChakraProvider theme={theme}>

    {/* NAV BAR */}
    <VStack alignItems="left" bg='brand.pure.white' spacing="0px">
      <Box p="12px" bg="brand.pure.white" boxShadow="md" zIndex="overlay" position={"fixed"} minW="100vw">
        <Navbar />
      </Box>

      {/* PAGE WRAPPER */}
      <Stack minH="100vh" alignItems='top' spacing="0px" direction="row" bg={"brand.neutral.50"}>

        {/* SIDE MENU */}
        <ResizePanel direction="e">
          <Box
            minH={"100vh"}
            w='full'
            pt='72px'
            className="panel sidebar">
            <ScSidemenu />
          </Box>
        </ResizePanel>



        {/* CONTENT */}

        <Box minH='full' w='full' pt='72px' px={['16px', '16px', '16px', '60px']} bg="white">
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


      <HStack>

        <Box minW="100px"></Box>
      </HStack>


    </VStack>




  </ChakraProvider >
)




import {
  ChakraProvider,
  Box,
  Stack,
  HStack,
  VStack,
  Grid,
  GridItem,
  Divider,
} from "@chakra-ui/react"
import Navbar from "../components/navbar";
import ScSidemenu from '../components/sidemenu';
import theme from "../theme/theme";
import ResizePanel from "../components/resizepanel";
import "../global.css"
import "@fontsource/open-sans";

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

        <Box minH='full' w='full' pt='80px' px={['16px', '32px', '32px', '32px']} bg="brand.neutral.50">
          <Grid templateColumns={["repeat(4, 1fr)", "repeat(8, 1fr)", "repeat(12, 1fr)", "repeat(12, 1fr)"]} gap={[4, 4, 6, 6]} minH="100vh" py={6}>
            <GridItem colStart={[1, 1, 1, 3]} colEnd={[5, 9, 13, 11]} h='full'>
              {/* Header Section */}
              <Box className="header-section">
              <Box textStyle="heading-medium-semibold" color={"brand.neutral.900"} mb={8}>Applications</Box>
              <Box textStyle="body-regular" color={"brand.neutral.900"}  mb={8}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Box>
              <Divider color={"brand.neutral.300"} mb={4}/>
              </Box>

              {/* Content Section */}
              <Box className="content-section">
              <Box textStyle="heading-small-semibold" color={"brand.neutral.900"} >Subheader</Box>
              <Box textStyle="body-regular" color={"brand.neutral.900"}  mb={8}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </Box>
              <Divider color={"brand.neutral.300"}/>
              </Box>
            </GridItem>

          </Grid>
        </Box>

      </Stack>

      {/* columns = {{ sm: 4, md: 6, lg: 12 }} */}

      <HStack>

        <Box minW="100px"></Box>
      </HStack>


    </VStack>




  </ChakraProvider >
)



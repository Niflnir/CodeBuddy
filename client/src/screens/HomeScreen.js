import React from "react";
import { Box, ChakraProvider, Image, SimpleGrid, Flex } from "@chakra-ui/react";
import reacticon from "../images/reacticon.png";
import { Link } from "@chakra-ui/layout";
import { Link as RouterLink } from "react-router-dom";
import Navbar from "../components/Navbar";
import WithSubnavigation from "../components/WithSubnavigation";
const HomeScreen = () => {
  return (
    <ChakraProvider>
      <WithSubnavigation />
      <SimpleGrid columns={{ sm: 1, md: 1 }} p="15%" textAlign="center">
        <Link w="22.5%" overflow="hidden" as={RouterLink} to="/reacttips">
          <Box
            overflow="hidden"
            fontSize={20}
            fontFamily="cursive"
            w="200px"
            borderWidth="1px"
            borderRadius="md"
          >
            <Image src={reacticon} alt="logo" />
            React
          </Box>
        </Link>
      </SimpleGrid>
    </ChakraProvider>
  );
};

export default HomeScreen;

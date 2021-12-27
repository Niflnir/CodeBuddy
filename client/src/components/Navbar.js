import { Flex, Box, Link } from "@chakra-ui/layout";
import { Link as RouterLink } from "react-router-dom";
import React from "react";

const Navbar = () => {
  return (
    <Flex
      width="100%"
      height="20%"
      padding="10px 0px 10px 30px"
      backgroundColor="black"
      color="white"
      flexDirection="row"
    >
      CodeClown
      <Link as={RouterLink} to="/reacttips">
        <Box paddingLeft={20}>React</Box>
      </Link>
    </Flex>
  );
};

export default Navbar;

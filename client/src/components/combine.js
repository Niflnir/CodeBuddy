import { Flex, Spacer } from "@chakra-ui/react";
import React from "react";
import WithSubnavigation from "./WithSubnavigation";
import Postit from "./Postit";

const Navbar = () => {
  return (
    <div>
      <WithSubnavigation />

      <Flex>
        {/* first box */}
        <Postit />
        <Spacer />
        <Postit />
        <Spacer />
        <Postit />
      </Flex>
      <Flex justifyContent="space-between">
        <Postit />
        <Postit />
        <Postit />
      </Flex>
    </div>
  );
};

export default Navbar;

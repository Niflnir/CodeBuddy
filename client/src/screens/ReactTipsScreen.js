import React, { useEffect, useState } from "react";

import { getReactTips } from "../actions/reacttips";
import Tips from "../components/Tips/Tips";
import Form from "../components/Forms/Form";
import { useDispatch } from "react-redux";
import {
  ChakraProvider,
  GridItem,
  Flex,
  Grid,
  Container,
} from "@chakra-ui/react";
import NavBar from "../components/Navbar";
const WelcomeScreen = () => {
  const [currentId, setCurrentId] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getReactTips());
  }, [currentId, dispatch]);
  return (
    <ChakraProvider>
      <NavBar />

      <Flex position="relative" width="100%">
        <Tips setCurrentId={setCurrentId} />

        <Container position="fixed" top="25%" right="-5%">
          <Form currentId={currentId} setCurrentId={setCurrentId} />
        </Container>
      </Flex>
    </ChakraProvider>
  );
};

export default WelcomeScreen;

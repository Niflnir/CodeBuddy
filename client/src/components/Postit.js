import React from "react";
import { Flex, Text, IconButton, Button, Box } from "@chakra-ui/react";
import { FaTrash, FaEdit } from "react-icons/fa";

const Postit = () => {
  return (
    <div>
      <Box
        justifyContent="space-between"
        height="50vh"
        width="50vh"
        bg="#85caff"
        ml="50px"
        mt="50px"
        mr="50px"
        mb="50px"
        boxShadow="outline"
        rounded="md"
      >
        <Flex justifyContent="space-between">
          <Text variant="h4">Title:</Text>
          <IconButton
            aria-label="Delete"
            icon={<FaTrash />}
            isRound="true"
            size="sm"
          />
        </Flex>
        <Box align="center">
          <Text>[Content for title]</Text>
        </Box>

        <Text variant="h4">Description:</Text>
        <Flex justifyContent="center" align>
          <Box
            justifyContent="center"
            align="center"
            width="45vh"
            height="30vh"
            bg="white"
          >
            <Text>[Content for Description]</Text>
          </Box>
        </Flex>

        <Flex justifyContent="space-between">
          <Text>Created By:</Text>
          {/* <IconButton aria-label="Edit" icon={<FaEdit />} isRound="true" /> */}
        </Flex>
        <Flex justifyContent="right">
          <Button
            leftIcon={<FaEdit />}
            colorScheme="gray"
            variant="solid"
            size="xs"
          >
            Edit
          </Button>
        </Flex>
      </Box>
    </div>
  );
};

export default Postit;

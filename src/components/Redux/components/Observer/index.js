import React, { useState, useEffect, useCallback } from "react";

import { Flex, Text } from "@chakra-ui/react";

import store from "../Subject/store";

function Home({ children }) {
  const [, updateState] = useState();
  const forceUpdate = useCallback(() => updateState({}), []);

  useEffect(() => {
    store.subscribe(() => forceUpdate());
  }, []);

  const color = store.getState().color;

  return (
    <Flex
      align="center"
      justify="center"
      border="1px solid black"
      h="150px"
      w="150px"
      borderRadius="15px"
      bg={color}
      transition="all 1s ease"
    >
      <Text>{children}</Text>
    </Flex>
  );
}

export default Home;

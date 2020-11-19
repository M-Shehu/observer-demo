import React from "react";

import Subject from "./components/Subject";
import Observer from "./components/Observer";
import { Stack, Heading } from "@chakra-ui/react";

function Redux() {
  return (
    <Stack
      h="100vh"
      justify="center"
      align="center"
      spacing="100px"
      bg="#011527"
    >
      <Heading>Redux Demo</Heading>
      <Stack align="center" spacing="40px">
        <Subject />
        <Stack direction={["column", "row"]} justify="center" spacing="40px">
          <Observer>Observer 1</Observer>
          <Observer>Observer 2</Observer>
          <Observer>Observer 3</Observer>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default Redux;

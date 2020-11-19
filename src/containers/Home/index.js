import React from "react";

import rxjsLogo from "../../assets/images/rxjs.png";
import reduxLogo from "../../assets/images/redux.svg";
import { Text, Stack, Button } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";

function Home() {
  const history = useHistory();

  const navigateTo = route => {
    history.push(route);
  };
  return (
    <Stack
      direction={["column", "row"]}
      h="100vh"
      w="100%"
      align="center"
      justify="center"
      className="Home"
      spacing={["100px", "200px"]}
      bg="#011527"
    >
      <Stack spacing="15px" align="center">
        <Button
          _hover={{ background: "#35414d" }}
          borderRadius="30px"
          border="none"
          p="40px"
          h="200px"
          w="200px"
          onClick={() => navigateTo("/redux")}
        >
          <img
            src={reduxLogo}
            height="100%"
            className="Redux-logo"
            alt="logo"
          />
        </Button>
        <Text fontSize="30px" textAlign="center" color="white">
          Redux Demo
        </Text>
      </Stack>
      <Stack spacing="20px" align="center">
        <Button
          _hover={{ background: "#35414d" }}
          borderRadius="30px"
          border="none"
          p="40px"
          h="200px"
          w="200px"
          onClick={() => navigateTo("/rx-js")}
        >
          <img height="100%" src={rxjsLogo} className="RxJS-logo" alt="logo" />
        </Button>
        <Text fontSize="30px" textAlign="center" color="white">
          RxJS Demo
        </Text>
      </Stack>
    </Stack>
  );
}

export default Home;

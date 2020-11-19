import React, { useState } from "react";

import { Input, Button, HStack } from "@chakra-ui/react";

import store from "../Subject/store";

function Subject({ observerName }) {
  const [color, setColor] = useState();
  const onChange = e => {
    setColor(e.target.value);
  };

  const handleSubmit = () => {
    store.dispatch({
      type: "CHANGE_COLOR",
      color,
    });
    setColor("");
  };

  return (
    <HStack align="center" justify="center">
      <Input
        onChange={onChange}
        value={color}
        w="50%"
        placeholder="Enter color"
      />
      <Button onClick={handleSubmit}>Change Color</Button>
    </HStack>
  );
}

export default Subject;

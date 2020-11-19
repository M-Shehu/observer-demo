import React from "react";

import { Input, Stack, Button, Spinner } from "@chakra-ui/react";

function RxJS({
  zipCodes,
  selectZipCode,
  handleZipChange,
  zipValue,
  isLoading,
}) {
  return (
    <Stack w="100%" flex="1" align="center">
      <Input
        onChange={handleZipChange}
        value={zipValue}
        placeholder="Enter zip code"
      />
      {isLoading && <Spinner />}
      <Stack w="80%">
        {zipCodes.map(zipCode => (
          <Button onClick={() => selectZipCode(zipCode)}>{zipCode.code}</Button>
        ))}
      </Stack>
    </Stack>
  );
}

export default RxJS;

import React from "react";
import { Select } from "@chakra-ui/react";

function County({ countyValue, onSelectDropDown, counties }) {
  return (
    <Select
      value={countyValue}
      onChange={onSelectDropDown}
      flex="1"
      placeholder="Select county"
    >
      {counties.map(county => (
        <option value={county.id}>{county.name}</option>
      ))}
    </Select>
  );
}

export default County;

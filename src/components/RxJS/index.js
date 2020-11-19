import React, { useEffect } from "react";

import subject$, { getZipCodes } from "./rx";

import { Heading, Stack } from "@chakra-ui/react";

import ZipCode from "./components/ZipCode";
import County from "./components/County";

function RxJS() {
  const [zipValue, setZipValue] = React.useState("");
  const [countyValue, setCountyValue] = React.useState("");
  const [zipCodes, setZipCodes] = React.useState([]);
  const [zipCodeAndCounties, setZipAndCounties] = React.useState({});
  const [counties, setCounties] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const showLoader = () => setLoading(true);

  useEffect(() => {
    const subscription = getZipCodes(subject$, showLoader).subscribe(
      zipAndCounties => {
        setLoading(false);
        setZipAndCounties(zipAndCounties);
        setZipCodes(zipAndCounties.zipCodes);
      },
      error => {
        setLoading(false);
        console.error(error);
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  const handleZipChange = e => {
    setZipValue(e.target.value);
    subject$.next(e.target.value);
  };

  const selectZipCode = ({ code }) => {
    const countiesArray = zipCodeAndCounties.counties;
    if (zipCodeAndCounties.counties.length === 1) {
      setCountyValue(countiesArray[0].id);
    }
    setZipValue(code);
    setCounties(countiesArray);
    setZipCodes([]);
  };

  const onSelectDropDown = event => {
    setCountyValue(event.target.value);
  };

  return (
    <Stack h="100vh" pt="300px" align="center" bg="#011527" spacing="100px">
      <Heading>RxJS Demo</Heading>

      <Stack
        direction={["column", "row"]}
        width="60%"
        align="flex-start"
        spacing="50px"
      >
        <ZipCode
          zipCodes={zipCodes}
          selectZipCode={selectZipCode}
          handleZipChange={handleZipChange}
          zipValue={zipValue}
          isLoading={loading}
        />
        <County
          countyValue={countyValue}
          onSelectDropDown={onSelectDropDown}
          counties={counties}
        />
      </Stack>
    </Stack>
  );
}

export default RxJS;

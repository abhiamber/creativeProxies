import { Box } from "@chakra-ui/react";
import React from "react";
import Main from "../components/Main";
import Poster from "../components/Poster";
import Home from "../components/Home";

const HomePage = () => {
  return (
    <Box>
      {" "}
      <Home />
      <Box
        background="#0566D4"
        h="703px"
        // w="80%"
        pt="115px"
        fontFamily="Figtree"
        letterSpacing="-0.02em"
        fontStyle="normal"
        mt="8%"
        mb="8%"
      >
        <Poster />{" "}
      </Box>
      <Main />
    </Box>
  );
};

export default HomePage;

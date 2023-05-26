import Home from './components/Home';
import React from "react";
import { ChakraProvider } from '@chakra-ui/react'
import { ColorModeScript, theme } from "@chakra-ui/react";

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Home/>
    </ChakraProvider>
  )
};

export default App;

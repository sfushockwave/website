import { ChakraProvider, ColorModeScript } from "@chakra-ui/react"
import * as React from "react"
import ReactDOM from "react-dom"
import HomePage from "./HomePage"

ReactDOM.render(
  <ChakraProvider>
    <ColorModeScript />
    <HomePage />
  </ChakraProvider>,
  document.getElementById("root"),
)
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider as JotaiProvider } from "jotai";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ChakraProvider>
      <JotaiProvider>
        <App />
      </JotaiProvider>
    </ChakraProvider>
  </StrictMode>
);

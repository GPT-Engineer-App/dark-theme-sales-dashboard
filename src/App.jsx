import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Index from "./pages/Index.jsx";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "#1A1A1A",
        color: "#FFFFFF",
      },
    },
  },
  colors: {
    primary: {
      500: "#FF6600",
    },
    secondary: {
      500: "#C2BFBF",
    },
    accent: {
      green: "#00FF00",
      orange: "#FF9900",
    },
  },
  fonts: {
    heading: "Roboto, sans-serif",
    body: "Open Sans, sans-serif",
  },
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Index />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;

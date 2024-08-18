import React from "react";
import { Stack } from '@chakra-ui/react'
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <Stack className="bg-BgPrimary h-400">
    <Navbar />
    <Home />
    </Stack>
  );
}

export default App;

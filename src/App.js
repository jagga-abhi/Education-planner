import React from "react";
import { Image, Stack } from '@chakra-ui/react'
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import footer from "./resources/footer.svg"

function App() {
  return (
    <Stack className="bg-BgPrimary h-screen">
    <Navbar />
    <Home />
    <Image src={footer} />
    </Stack>
  );
}

export default App;

import '../styles/globals.css'
import { PlasmicRootProvider } from "@plasmicapp/react-web";
import Head from "next/head";
import { ChakraProvider } from '@chakra-ui/react'

function MyApp({ Component, pageProps }) {
  
  return (
    <ChakraProvider>
    <PlasmicRootProvider Head={Head}>
      <Component {...pageProps} />
    </PlasmicRootProvider>
    </ChakraProvider>
  );
}

export default MyApp
  
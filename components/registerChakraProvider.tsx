import { ChakraProvider, ChakraProviderProps } from "@chakra-ui/react";
import { GlobalContextMeta } from "@plasmicapp/host";
import registerGlobalContext from "@plasmicapp/host/registerGlobalContext";

export const chakraProviderMeta: GlobalContextMeta<ChakraProviderProps> = {
  name: "ChakraProvider",
  importPath: "@chakra-ui/react",
  props: {
    theme: "object",
  },
};



export function registerChakraProvider(){
  return (
    registerGlobalContext(ChakraProvider, chakraProviderMeta)
    )
}
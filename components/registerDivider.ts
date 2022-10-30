import registerComponent, {
    ComponentMeta,
  } from "@plasmicapp/host/registerComponent";
  import { Divider, DividerProps } from "@chakra-ui/react";


export const dividerMeta: ComponentMeta<DividerProps>={
  name: "Divider",
  importPath: "@chakra-ui/react",
  props: {
    orientation: {
      type: "choice",
      options: ["vertical", "horizontal"],
    },
    variant: {
      type: "choice",
      options: ["solid", "dashed"],
    },
  },
};

  export function registerDivider(){
    return(
      registerComponent(Divider, dividerMeta)
    )
  }
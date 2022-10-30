import registerComponent, {
    ComponentMeta,
  } from "@plasmicapp/host/registerComponent";
import { IconButton, IconButtonProps, IconProps, useDisclosure} from "@chakra-ui/react";
import { Drawer } from "./registerDrawerButtonIcon";

export const iconButtonMeta: ComponentMeta<IconButtonProps>={
    name: "IconButton",
    importPath: "@chakra-ui/react",
    props:{
        colorScheme: {
            type: "choice",
            options: [
              "whiteAlpha",
              "blackAlpha",
              "gray",
              "red",
              "orange",
              "yellow",
              "green",
              "teal",
              "blue",
              "cyan",
              "purple",
              "pink",
              "linkedin",
              "facebook",
              "messenger",
              "whatsapp",
              "twitter",
              "telegram",
            ],
          },
        variant: {
            type: "choice",
            options: [
              "ghost",
              "outline",
              "solid",
              "link",
              "unstyled",
            ],
            defaultValue: "solid",
          },
          size: {
            type: "choice",
            options: ["xs", "sm", "md", "lg"],
            defaultValue: "md",
          },
        isActive: {
            type: "boolean",
          },
        isDisabled: {
            type: "boolean",
          },
        children: {
            type: "slot",
        },
        onClick: {
            type: "string",
        },
    },
};



export function registerIconButton(){return registerComponent(IconButton, iconButtonMeta)}


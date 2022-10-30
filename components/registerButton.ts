import registerComponent, {
  ComponentMeta,
} from "@plasmicapp/host/registerComponent";
import {
  ButtonGroup,
  ButtonGroupProps,
  Button,
  ButtonProps,
} from "@chakra-ui/react";


export const buttonGroupMeta: ComponentMeta<ButtonGroupProps> = {
  name: "ButtonGroup",
  importPath: "@chakra-ui/react",
  props: {
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
    size: {
      type: "choice",
      options: ["xl", "sm", "md", "lg"],
      defaultValue: "md",
    },
    isAttached: {
      type: "boolean",
      defaultValue: false,
    },
    isDisabled: {
      type: "boolean",
      defaultValue: false,
    },
    spacing: {
      type: "string",
      defaultValue: "0.5rem",
    },
    children: {
      type: "slot",
      defaultValue: [
        {
          type: "component",
          name: "Button",
          props: {
            children: {
              type: "text",
              value: "Button 1",
            },
          },
        },
        {
          type: "component",
          name: "Button",
          props: {
            children: {
              type: "text",
              value: "Button 2",
            },
          },
        },
      ],
    },
  },
};

export function registerButtonGroup(){
  return (
    registerComponent(ButtonGroup, buttonGroupMeta)
  )
}



export const buttonMeta: ComponentMeta<ButtonProps> = {
  name: "Button",
  importPath: "@chakra-ui/react",
  parentComponentName: "ButtonGroup",
  props: {
    size: {
      type: "choice",
      options: ["xl", "sm", "md", "lg"],
    },
    variant: {
      type: "choice",
      options: ["ghost", "outline", "solid", "link", "unstyled"],
      defaultValue: "solid",
    },
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
    iconSpacing: "number",
    isActive: {
      type: "boolean",
    },
    isDisabled: {
      type: "boolean",
    },
    isLoading: {
      type: "boolean",
    },
    children: {
      type: "slot",
      defaultValue: {
        type: "text",
        value: "Button",
      },
    },
  },
};

export function registerButton(){
  return (
    registerComponent(Button, buttonMeta)
  )
}
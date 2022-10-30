import registerComponent, {
    ComponentMeta,
  } from "@plasmicapp/host/registerComponent";
  import { Input, InputProps, InputGroup, InputGroupProps, InputLeftElement, InputRightElement, InputElementProps, } from "@chakra-ui/react";

export const inputGroupMeta: ComponentMeta<InputGroupProps>={
    name: "InputGroup",
    importPath: "@chakra-ui/react",
    props: {
      children: {
        type: "slot",
        allowedComponents: [
          "InputLeftElement", "Input",
        ],
        defaultValue: [
          {
            type: "component",
            name: "InputLeftElement",
          },
          {
            type: "component",
            name: "Input",
          },
        ],
    },
  },
};

export function registerInputGroup(){return registerComponent(InputGroup, inputGroupMeta)}

export const inputLeftElementMeta: ComponentMeta<InputElementProps>={
  name: "InputLeftElement",
  importPath: "@chakra-ui/react",
  parentComponentName: "InputGroup",
  props: {
    children: {
      type: "slot",
    },
  },
};

export function registerInputLeftElement(){return registerComponent(InputLeftElement, inputLeftElementMeta)}


export const inputMeta: ComponentMeta<InputProps>={
  name: "Input",
  importPath: "@chakra-ui/react",
  parentComponentName: "InputGroup",
  props: {
    size: {
      type: "choice",
      options: ["xl", "sm", "md", "lg"],
    },
    variant: {
      type: "choice",
      options: ["outline", "filled", "flushed", "unstyled"],
    },
    isDisabled: {
      type: "boolean",
    },
    isInvalid: {
      type: "boolean",
    },
    isReadOnly: {
      type: "boolean",
    },
    isRequired: {
      type: "boolean",
    },
    errorBorderColor: {
      type: "string",
      defaultValue: "red.500",
    },
    focusBorderColor: {
      type: "string",
      defaultValue: "blue.500",
    },
    placeholder: {
      type: "string",
      defaultValue: "Type Place Holder Here",
    },
  },
};

export function registerInput(){return registerComponent(Input, inputMeta)}
  
  
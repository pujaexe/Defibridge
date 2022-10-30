import { Select, SelectProps } from "@chakra-ui/react";
import registerComponent, {
  ComponentMeta,
} from "@plasmicapp/host/registerComponent";
import { Option } from "./option";


export const selectMeta: ComponentMeta<SelectProps> = {
  name: "Select",
  importPath: "@chakra-ui/react",
  props: {
    size: {
      type: "choice",
      options: ["lg", "md", "sm", "xs"],
      defaultValue: "md",
    },
    variant: {
      type: "choice",
      options: ["outline", "filled", "flushed", "unstyled"],
      defaultValue: "outline",
    },
    placeholder: {
      type: "string",
    },
    errorBorderColor: {
      type: "string",
      defaultValueHint: "red.500",
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
    isRequred: {
      type: "boolean",
    },
    children: {
      type: "slot",
      defaultValue: [
        {
          type: "component",
          name: "Option",
          props: {
            children: {
              type: "text",
              value: "Option 01",
            },
          },
        },
        {
          type: "component",
          name: "Option",
          props: {
            children: {
              type: "text",
              value: "Option 02",
            },
          },
        },
        {
          type: "component",
          name: "Option",
          props: {
            children: {
              type: "text",
              value: "Option 03",
            },
          },
        },
      ],
    },
  },
};

export function registerSelect(){return registerComponent(Select, selectMeta)}


export function registerOption(){
  return registerComponent(Option, {
    name: "Option",
    importPath: "./option",
    parentComponentName: "Select",
    props: {
      value: "string",
      children: {
        type: "slot",
        defaultValue: {
          type: "text",
          value: "Option",
        },
      },
    },
  }
  
  )}
import registerComponent, {
  ComponentMeta,
} from "@plasmicapp/host/registerComponent";
import {
  Checkbox,
  CheckboxProps,
  CheckboxGroup,
  CheckboxGroupProps,
} from "@chakra-ui/react";


export const checkboxMeta: ComponentMeta<CheckboxProps> = {
  name: "Checkbox",
  importPath: "@chakra-ui/react",
  parentComponentName: "CheckboxGroup",
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
      defaultValue: "blue",
    },
    size: {
      type: "choice",
      options: ["xl", "sm", "md", "lg"],
    },
    value: {
      type: "string",
    },
    spacing: {
      type: "string",
      defaultValue: "0.5rem",
    },
    isChecked: {
      type: "boolean",
    },
    isIndeterminate: {
      type: "boolean",
    },
    isDisabled: {
      type: "boolean",
    },
    isRequired: {
      type: "boolean",
    },
    isInvalid: {
      type: "boolean",
    },
    children: {
      type: "slot",
      defaultValue: {
        type: "text",
        value: "Checkbox",
      },
    },
  },
};

export function registerCheckbox(){
  return(
    registerComponent(Checkbox, checkboxMeta)
  )
}

export const checkboxGroupMeta: ComponentMeta<CheckboxGroupProps> = {
  name: "CheckboxGroup",
  importPath: "@chakra-ui/react",
  props: {
    size: {
      type: "choice",
      options: ["xl", "sm", "md", "lg"],
      defaultValue: "md",
    },
    isDisabled: {
      type: "boolean",
    },
    children: {
      type: "slot",
      allowedComponents: ["Checkbox"],
      defaultValue: [
        {
          type: "component",
          name: "Checkbox",
          props: {
            value: "1",
            children: {
              type: "text",
              value: "Checkbox 1",
            },
          },
        },
        {
          type: "component",
          name: "Checkbox",
          props: {
            value: "2",
            children: {
              type: "text",
              value: "Checkbox 2",
            },
          },
        },
        {
          type: "component",
          name: "Checkbox",
          props: {
            value: "3",
            children: {
              type: "text",
              value: "Checkbox 3",
            },
          },
        },
      ],
    },
  },
};

export function registerCheckboxGroup(){
  return(
    registerComponent(CheckboxGroup, checkboxGroupMeta)
  )
}
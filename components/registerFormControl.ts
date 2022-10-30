import {
  FormControl,
  FormControlProps,
  FormErrorMessage,
  FormErrorMessageProps,
  FormHelperText,
  FormLabel,
  FormLabelProps,
  HelpTextProps,
} from "@chakra-ui/react";
import registerComponent, {
  ComponentMeta,
} from "@plasmicapp/host/registerComponent";


export const formControlMeta: ComponentMeta<FormControlProps> = {
  name: "FormControl",
  importPath: "@chakra-ui/react",
  props: {
    label: "string",
    isDisabled: "boolean",
    isInvalid: "boolean",
    isRequired: "boolean",
    isreadOnly: "boolean",
    children: {
      type: "slot",
      defaultValue: [
        {
          type: "component",
          name: "FormLabel",
        },
        {
          type: "component",
          name: "Input",
        },
      ],
    },
  },
};


export function registerFormControl() {
  return (
    registerComponent(FormControl, formControlMeta)
  )
}

export const formLabelMeta: ComponentMeta<FormLabelProps> = {
  name: "FormLabel",
  importPath: "@chakra-ui/react",
  props: {
    children: {
      type: "slot",
      defaultValue: {
        type: "text",
        value: "Label",
        styles: {
          display: "inline-block",
          width: "auto",
        },
      },
    },
  },
};


export function registerFormLabel() {
  return (
    registerComponent(FormLabel, formLabelMeta)
  )
}

export const formHelperTextMeta: ComponentMeta<HelpTextProps> = {
  name: "FormHelperText",
  importPath: "@chakra-ui/react",
  props: {
    children: {
      type: "slot",
      defaultValue: {
        type: "text",
        value: "We'll never share your email.",
      },
    },
  },
};

export function registerFormHelperText() {
  return (
    registerComponent(FormHelperText, formHelperTextMeta)
  )
}

export const formErrorMessageMeta: ComponentMeta<FormErrorMessageProps> = {
  name: "FormErrorMessage",
  importPath: "@chakra-ui/react",
  props: {
    children: {
      type: "slot",
      defaultValue: {
        type: "text",
        value: "This is an error message.",
      },
    },
  },
};


export function registerFormErrorMessage() {
  return (
    registerComponent(FormErrorMessage, formErrorMessageMeta)
  )
}


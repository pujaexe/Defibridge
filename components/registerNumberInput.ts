import registerComponent, {
  ComponentMeta,
} from "@plasmicapp/host/registerComponent";
import {
  NumberInput,
  NumberInputProps,
  NumberInputStepper,
  NumberInputStepperProps,
  NumberDecrementStepper,
  NumberDecrementStepperProps,
  NumberIncrementStepper,
  NumberIncrementStepperProps,
  NumberInputField, NumberInputFieldProps
} from "@chakra-ui/react";

export const numberInputMeta: ComponentMeta<NumberInputProps> = {
  name: "NumberInput",
  importPath: "@chakra-ui/react",
  props: {
    size: {
      type: "choice",
      options: ["xl", "sm", "md", "lg"],
    },
    variant: {
      type: "choice",
      options: ["outline", "filled", "flushed", "unstyled"],
    },
    inputMode: {
      type: "choice",
      options: [
        "text",
        "search",
        "none",
        "tel",
        "url",
        "email",
        "numeric",
        "decimal",
      ],
    },
    format: {
      type: "string",
    },
    step: {
      type: "number",
    },
    precision: {
      type: "number",
    },
    max: {
      type: "number",
    },
    min: {
      type: "number",
    },
    errorBorderColor: {
      type: "string",
      defaultValue: "red.500",
    },
    focusBorderColor: {
      type: "string",
      defaultValue: "blue.500",
    },
    allowMouseWheel: {
      type: "boolean",
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

    children: {
      type: "slot",
      defaultValue: [
        {
          type: "component",
          name: "NumberInputField",
        },
        {
          type: "component",
          name: "NumberInputStepper",
        },
      ],
    },
  },
};

export function registerNumberInput(){return registerComponent(NumberInput, numberInputMeta)}

export const numberInputStepperMeta: ComponentMeta<NumberInputStepperProps> = {
  name: "NumberInputStepper",
  importPath: "@chakra-ui/react",
  parentComponentName: "NumberInput",
  props: {
    children: {
      type: "slot",
      allowedComponents: ["NumberIncrementStepper", "NumberDecrementStepper"],
      defaultValue: [
        {
          type: "component",
          name: "NumberIncrementStepper",
        },
        {
          type: "component",
          name: "NumberDecrementStepper",
        },
      ],
    },
  },
};

export function registerNumberInputStepper(){return registerComponent(NumberInputStepper, numberInputStepperMeta)}
export const numberDecrementStepperMeta: ComponentMeta<NumberDecrementStepperProps> =
  {
    name: "NumberDecrementStepper",
    importPath: "@chakra-ui/react",
    parentComponentName: "NumberInputStepper",
    props: {},
  };

export function registerNumberDecrementStepper(){return registerComponent(NumberDecrementStepper, numberDecrementStepperMeta)}

export const numberIncrementStepperMeta: ComponentMeta<NumberIncrementStepperProps> =
  {
    name: "NumberIncrementStepper",
    importPath: "@chakra-ui/react",
    parentComponentName: "NumberInputStepper",
    props: {},
  };

export function registerNumberIncrementStepper(){return registerComponent(NumberIncrementStepper, numberIncrementStepperMeta)}

export const numberInputFieldMeta: ComponentMeta<NumberInputFieldProps>={
  name: "NumberInputField",
  importPath: "@chakra-ui/react",
  parentComponentName: "NumberInput",
  props: {},
};

  export function registerNumberInputField(){return registerComponent(NumberInputField, numberInputFieldMeta)}
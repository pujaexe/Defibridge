import { Progress, ProgressProps } from "@chakra-ui/react";
import registerComponent, {
  ComponentMeta,
} from "@plasmicapp/host/registerComponent";

export const progressMeta: ComponentMeta<ProgressProps> = {
  name: "Progress",
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
      defaultValue: "blue",
    },
    size: {
      type: "choice",
      options: ["xs", "sm", "md", "lg"],
      defaultValue: "md",
    },
    max: {
      type: "number",
      defaultValue: 100,
    },
    min: {
      type: "number",
      defaultValue: 0,
    },
    value: "number",

    isIndeterminate: {
      type: "boolean",
    },
    hasStripe: {
      type: "boolean",
    },
    isAnimated: {
      type: "boolean",
      hidden: (props) => !props.hasStripe,
    },
  },
};


export function registerProgress() {
  return (
    registerComponent(Progress, progressMeta)
  )
}

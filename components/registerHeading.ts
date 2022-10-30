import { Heading, HeadingProps } from "@chakra-ui/react";
import registerComponent, {
  ComponentMeta,
} from "@plasmicapp/host/registerComponent";


export const headingMeta: ComponentMeta<HeadingProps> = {
  name: "Heading",
  importPath: "@chakra-ui/react",
  props: {
    children: {
      type: "slot",
      defaultValue: {
        type: "text",
        value:
          "Basic text writing, including headings, body text, lists, and more.",
      },
    },
    size: {
      type: "choice",
      options: ["4xl", "3xl", "2xl", "xl", "lg", "md", "sm", "xs"],
      defaultValue: "xl",
    },
    noOfLines: {
      type: "number",
      defaultValue: 1,
    },
  },
};



export function registerHeading() {
  return (
    registerComponent(Heading, headingMeta)
  )
}

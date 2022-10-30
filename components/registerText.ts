import registerComponent, {
  ComponentMeta,
} from "@plasmicapp/host/registerComponent";
import { Text, TextProps } from "@chakra-ui/react";


export const textMeta: ComponentMeta<TextProps> = {
  name: "Text",
  importPath: "@chakra-ui/react",
  props: {
    children: {
      type: "slot",
      defaultValue: [
        {
          type: "text",
          value: "Some Text",
        },
      ],
    },
  },
};

export function registerText(){return registerComponent(Text, textMeta)}

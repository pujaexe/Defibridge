import registerComponent, {
    ComponentMeta,
  } from "@plasmicapp/host/registerComponent";
  import { Kbd, KbdProps } from "@chakra-ui/react";

export const kbdMeta: ComponentMeta<KbdProps>={
  name: "Kbd",
  importPath: "@chakra-ui/react",
  displayName: "Keyboard Key",
  props: {
    children: {
      type: "slot",
      defaultValue: [
        {
          type: "text",
          value: "⌘",
        },
      ],
    },
  },
};

  export function registerKbd(){return registerComponent(Kbd, kbdMeta)}
  
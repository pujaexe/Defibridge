import registerComponent, {
  ComponentMeta,
} from "@plasmicapp/host/registerComponent";
import { Badge, BadgeProps } from "@chakra-ui/react";

export const badgeMeta: ComponentMeta<BadgeProps> = {
  name: "Badge",
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
      defaultValue: "gray",
    },
    variant: {
      type: "choice",
      options: ["solid", "subtle", "outline"],
      defaultValue: "subtle",
    },
  },
};

export function registerBadge() {

  return(
    registerComponent(Badge, badgeMeta)
  )
  
}

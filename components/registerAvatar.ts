import {
  Avatar,
  AvatarBadge,
  AvatarBadgeProps,
  AvatarGroup,
  AvatarGroupProps,
  AvatarProps,
} from "@chakra-ui/react";
import registerComponent, {
  ComponentMeta,
} from "@plasmicapp/host/registerComponent";


export const avatarBadgeMeta: ComponentMeta<AvatarBadgeProps> = {
  name: "AvatarBadge",
  importPath: "@chakra-ui/react",
  parentComponentName: "Avatar",
  props: {
    boxSize: {
      type: "string",
      defaultValue: "1.25em",
    },
    bg: {
      type: "string",
      defaultValue: "green.500",
    },
    borderColor: "string",
  },
};

export function registerAvatarBadge() {
  return (
    registerComponent(AvatarBadge, avatarBadgeMeta)
  )
}


export const avatarMeta: ComponentMeta<AvatarProps> = {
  name: "Avatar",
  importPath: "@chakra-ui/react",
  props: {
    name: {
      type: "string",
      defaultValue: "Kola Tioluwani",
    },
    src: {
      type: "string",
      defaultValue: "https://bit.ly/dan-abramov",
    },
    size: {
      type: "choice",
      options: ["2xs", "xs", "sm", "md", "lg", "xl", "2xl", "full"],
    },
    loading: {
      type: "choice",
      options: ["eager", "lazy"],
    },
    showBorder: "boolean",
    children: {
      type: "slot",
      hidePlaceholder: true,
      defaultValue: {
        type: "component",
        name: "AvatarBadge",
      },
    },
  },
};

export function registerAvatar() {
  return (
    registerComponent(Avatar, avatarMeta)
  )
}


export const avatarGroupMeta: ComponentMeta<AvatarGroupProps> = {
  name: "AvatarGroup",
  importPath: "@chakra-ui/react",
  props: {
    size: {
      type: "choice",
      options: ["2xs", "xs", "sm", "md", "lg", "xl", "2xl", "full"],
    },
    max: {
      type: "number",
      description: "The maximum number of avatars to show before truncating.",
    },
    spacing: {
      type: "string",
      defaultValue: "-0.75rem",
    },
    children: {
      type: "slot",
      defaultValue: [
        {
          type: "component",
          name: "Avatar",
          props: {
            name: "Dan Abrahmov",
            src: "https://bit.ly/dan-abramov",
          },
        },
        {
          type: "component",
          name: "Avatar",
          props: {
            name: "Kola Tioluwani",
            src: "https://bit.ly/tioluwani-kolawole",
          },
        },
        {
          type: "component",
          name: "Avatar",
          props: {
            name: "Kent Dodds",
            src: "https://bit.ly/kent-c-dodds",
          },
        },
        {
          type: "component",
          name: "Avatar",
          props: {
            name: "Ryan Florence",
            src: "https://bit.ly/ryan-florence",
          },
        },
        {
          type: "component",
          name: "Avatar",
          props: {
            name: "Prosper Otemuyiwa",
            src: "https://bit.ly/prosper-baba",
          },
        },
        {
          type: "component",
          name: "Avatar",
          props: {
            name: "Christian Nwamba",
            src: "https://bit.ly/code-beast",
          },
        },
        {
          type: "component",
          name: "Avatar",
          props: {
            name: "Segun Adebayo",
            src: "https://bit.ly/sage-adebayo",
          },
        },
      ],
    },
  },
};


export function registerAvatarGroup() {
  return (
    registerComponent(AvatarGroup, avatarGroupMeta)
  )
}

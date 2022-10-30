import {
  Popover,
  PopoverArrow,
  PopoverArrowProps,
  PopoverBody,
  PopoverBodyProps,
  PopoverCloseButton,
  PopoverCloseButtonProps,
  PopoverContent,
  PopoverContentProps,
  PopoverHeader,
  PopoverHeaderProps,
  PopoverProps,
  PopoverTrigger,
} from "@chakra-ui/react";
import registerComponent, {
  ComponentMeta,
} from "@plasmicapp/host/registerComponent";


export const popoverMeta: ComponentMeta<PopoverProps> = {
  name: "Popover",
  importPath: "@chakra-ui/react",
  props: {
    gutter: {
      type: "number",
      defaultValue: 8,
    },
    arrowPadding: "number",
    arrowShadowColor: {
      type: "string",
      defaultValue: "rgba(0, 0, 0, 0.15)",
    },
    arrowSize: {
      type: "number",
    },
    offset: {
      type: "array",
      defaultValue: [0, 0],
    },
    closeDelay: "number",
    orientation: {
      type: "choice",
      options: ["horizontal", "vertical"],
    },
    placement: {
      type: "choice",
      options: ["top", "bottom", "left", "right"],
      defaultValue: "bottom",
    },
    direction: {
      type: "choice",
      options: ["ltr", "rtl"],
      defaultValue: "ltr",
    },
    trigger: {
      type: "choice",
      options: ["click", "hover"],
      defaultValue: "click",
    },
    isLazy: {
      type: "boolean",
    },
    isOpen: {
      type: "boolean",
    },
    children: {
      type: "slot",
      defaultValue: [
        {
          type: "component",
          name: "PopoverTrigger",
        },
        {
          type: "component",
          name: "PopoverContent",
        },
      ],
    },
  },
};

export function registerPopover(){return registerComponent(Popover, popoverMeta)}

export const popoverContentMeta: ComponentMeta<PopoverContentProps> = {
  name: "PopoverContent",
  importPath: "@chakra-ui/react",
  parentComponentName: "Popover",
  props: {
    children: {
      type: "slot",
      defaultValue: [
        {
          type: "component",
          name: "PopoverArrow",
        },
        {
          type: "component",
          name: "PopoverCloseButton",
        },
        {
          type: "component",
          name: "PopoverHeader",
          props: {
            children: {
              type: "text",
              value: "Confirmation!",
            },
          },
        },
        {
          type: "component",
          name: "PopoverBody",
          props: {
            children: {
              type: "text",
              value: "Are you sure you want to have that milkshake?",
            },
          },
        },
      ],
    },
  },
};

export function registerPopoverContent(){return registerComponent(PopoverContent,popoverContentMeta)}

export const popoverArrowMeta: ComponentMeta<PopoverArrowProps> = {
  name: "PopoverArrow",
  importPath: "@chakra-ui/react",
  parentComponentName: "PopoverContent",
  props: {},
};

export function registerPopoverArrow(){return registerComponent(PopoverArrow,popoverArrowMeta)}

export const popoverCloseButtonMeta: ComponentMeta<PopoverCloseButtonProps> = {
  name: "PopoverCloseButton",
  importPath: "@chakra-ui/react",
  parentComponentName: "PopoverContent",

  props: {},
};

export function registerPopoverCloseButton(){return registerComponent(PopoverCloseButton,popoverCloseButtonMeta)}

export const popoverHeaderMeta: ComponentMeta<PopoverHeaderProps> = {
  name: "PopoverHeader",
  importPath: "@chakra-ui/react",
  parentComponentName: "PopoverContent",
  props: {
    children: {
      type: "slot",
      defaultValue: {
        type: "text",
        value: "Confirmation!",
      },
    },
  },
};

export function registerPopoverHeader(){return registerComponent(PopoverHeader,popoverHeaderMeta)}

export const popoverBodyMeta: ComponentMeta<PopoverBodyProps> = {
  name: "PopoverBody",
  importPath: "@chakra-ui/react",
  parentComponentName: "PopoverContent",

  props: {
    children: {
      type: "slot",
      defaultValue: {
        type: "text",
        value: "Are you sure you want to have that milkshake?",
      },
    },
  },
};

export function registerPopoverBody(){return registerComponent(PopoverBody,popoverBodyMeta)}


export function registerPopoverTrigger(){
  return registerComponent(PopoverTrigger, {
      name: "PopoverTrigger",
      importPath: "@chakra-ui/react",
      parentComponentName: "Popover",
      props: {
        children: {
          type: "slot",
          defaultValue: {
            type: "component",
            name: "Button",
            props: {
              children: {
                type: "text",
                value: "Trigger",
              },
            },
          },
        },
      },
    }
)}

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  ModalProps,
  ModalOverlayProps,
  ModalContentProps,
  ModalHeaderProps,
  ModalBodyProps,
  ModalFooterProps,
  CloseButtonProps,
  } from "@chakra-ui/react";
  import registerComponent, {
    ComponentMeta,
  } from "@plasmicapp/host/registerComponent";

  export const modalMeta: ComponentMeta<ModalProps> ={
    name: "Modal",
    importPath: "@chakra-ui/react",
    props:{
        isOpen: {
            type: "boolean",
          },
        children: {
            type: "slot",
            defaultValue: [
              {
                type: "component",
                name: "ModalOverlay",
              },
            ],
        },
    },
  };

  export function registerModal() {
    return (
      registerComponent(Modal, modalMeta)
    )
  }
  

  export const modalOverlayMeta: ComponentMeta<ModalOverlayProps> ={
    name: "ModalOverlay",
    importPath: "@chakra-ui/react",
    parentComponentName: "Modal",
    props:{
    },
  };

  export function registerModalOverlay() {
    return (
      registerComponent(ModalOverlay, modalOverlayMeta)
    )
  }


  export const modalContentMeta: ComponentMeta<ModalContentProps> ={
    name: "ModalContent",
    importPath: "@chakra-ui/react",
    parentComponentName: "ModalOverlay",
    props:{
      children: {
        type: "slot",
        defaultValue: [
          {
            type: "component",
            name: "ModalCloseButton",
          },
          {
            type: "component",
            name: "ModalHeader",
            props: {
            },
          },
          {
            type: "component",
            name: "ModalBody",
            props: {
              children: {
                type: "text",
                value: "Are you sure you want to have that milkshake?",
              },
            },
          },
          {
            type: "component",
            name: "ModalFooter",
            props: {},
          },
        ],
      },
    },
  };

export function registerModalContent() {
    return (
      registerComponent(ModalContent, modalContentMeta)
    )
}

export const modalHeaderMeta: ComponentMeta<ModalHeaderProps> = {
  name: "ModalHeader",
  importPath: "@chakra-ui/react",
  parentComponentName: "ModalContent",
  props: {},
};

export function registerModalHeader() {
  return (
    registerComponent(ModalHeader, modalHeaderMeta)
  )
}

export const modalBodyMeta: ComponentMeta<ModalBodyProps> = {
  name: "ModalBody",
  importPath: "@chakra-ui/react",
  parentComponentName: "ModalContent",
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

export function registerModalBody() {
  return (
    registerComponent(ModalBody, modalBodyMeta)
  )
}

export const modalFooterMeta: ComponentMeta<ModalFooterProps> = {
  name: "ModalFooter",
  importPath: "@chakra-ui/react",
  parentComponentName: "ModalContent",
  props: {
    children: {
      type: "slot",
      defaultValue: {
        type: "component",
        name: "Button",
        porps:{},
      },
    },
  },
};

export function registerModalFooter() {
  return (
    registerComponent(ModalFooter, modalFooterMeta)
  )
}

export const modalCloseButtonMeta: ComponentMeta<CloseButtonProps> = {
  name: "ModalCloseButton",
  importPath: "@chakra-ui/react",
  parentComponentName: "ModalContent",
  props: {},
};

export function registerModalCloseButton(){return registerComponent(ModalCloseButton,modalCloseButtonMeta)}

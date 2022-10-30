import {
  Modal as Cakramodal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  ModalOverlayProps,
  Button,
  ButtonProps,
  Link,
  } from "@chakra-ui/react";


  import registerComponent, {
    ComponentMeta,
  } from "@plasmicapp/host/registerComponent";
  import React, { ReactNode, useState } from "react";


  
  export interface ModalProps {
    headerText?: string;
    body?: ReactNode;
    isVisible?: boolean;
    buttonCaption?:string;
    buttonCloseCaption?:string; 
    buttonCTACaption?:string; 
    href?:string;
    target?:string;
    onClose?: () => void;
  }

  export function Modal(props: ModalProps) {
    const { isOpen, onOpen, onClose, } = useDisclosure();
    
    return (
      <>
      <Button colorScheme='pink' onClick={onOpen}>{props.buttonCaption}</Button>
      <Cakramodal
        isOpen={isOpen} 
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
            <ModalHeader>{props.headerText}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                {props.body}
            </ModalBody>
            <ModalFooter>
              <Button colorScheme='pink' mr={3} as="a" href={props.href}>{props.buttonCTACaption}</Button>
              <Button variant='ghost' colorScheme='pink' onClick={onClose}>
                {props.buttonCloseCaption}
              </Button>
          </ModalFooter>
        </ModalContent>
      </Cakramodal>
      </>
    );
  }
  

  export function registerModal() {
    return (
      registerComponent(Modal, {
        name: "Modal",
        props: {
          body: "slot",
          headerText: {
            type: "string",
            defaultValue: "Judul Modal",
          },
          buttonCaption: {
            type: "string",
            defaultValue: "button",
          },
          buttonCloseCaption:{
            type: "string",
            defaultValue: "Close",
          },
          buttonCTACaption:{
            type: "string",
            defaultValue: "Gasskeun",
          },
          href: {
            type: "string",
            description: "Redirect url of link button",
          },
          target: {
            type: "choice",
            options: ["_blank", "_self", "_parent", "_top"],
            description:
              "Same as target attribute of a, works when href is specified",
            hidden: props => !props.href,
            defaultValueHint: "_self",
          },
          isVisible: "boolean",
        },
      importPath: "@chakra-ui/react",
      })
    )
  }

 
 
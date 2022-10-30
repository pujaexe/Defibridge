import registerComponent, {
    ComponentMeta,
  } from "@plasmicapp/host/registerComponent";
  import { Input, 
    Drawer as CakraDrawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    IconButton, 
    IconButtonProps,
    Button,
 } from "@chakra-ui/react";
 import React, { ReactNode, useState } from "react";


 export interface DrawerProps {
    content?: ReactNode;
    placement?: string;
    colorScheme?: string;
    variant?: string;
    size?: string;
    icon?: ReactNode;
    onClose?: () => void;
}

export function Drawer(props: DrawerProps) {
    const { isOpen, onOpen, onClose, } = useDisclosure();
    return (
        <>
            <IconButton
                onClick={onOpen}
                variant={props.variant}
                colorScheme={props.colorScheme}
                size={props.size}
                aria-label="open menu"
            >
                {props.icon} 
            </IconButton>
            <CakraDrawer 
            placement={props.placement} 
            onClose={onClose}
            isOpen={isOpen}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerBody>
                        {props.content}
                    </DrawerBody>
                </DrawerContent>
            </CakraDrawer>
        </>
    );
}

export function registerDrawerButtonIcon(){
    return(
        registerComponent(Drawer,{
            name: "DrawerButtonIcon",
            props: {
                content: "slot",
                placement: {
                    type: "choice",
                    options: ["top", "right", "bottom", "left"],
                },
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
                  },
                variant: {
                    type: "choice",
                    options: [
                      "ghost",
                      "outline",
                      "solid",
                      "link",
                      "unstyled",
                    ],
                    defaultValue: "solid",
                  },
                  size: {
                    type: "choice",
                    options: ["xs", "sm", "md", "lg"],
                    defaultValue: "md",
                  },
                  icon: {
                    type: "slot",
                },
            },
            importPath: "@chakra-ui/react",
        })
    )
}


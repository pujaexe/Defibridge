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
    Button,
 } from "@chakra-ui/react";
 import React, { ReactNode, useState } from "react";


 export interface DrawerProps {
    content?: ReactNode;
    placement?: string;
    onClose?: () => void;
}

export function Drawer(props: DrawerProps) {
    const { isOpen, onOpen, onClose, } = useDisclosure();
    return (
        <>
            <Button colorScheme='blue' onClick={onOpen}>
                Open
            </Button>
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
            },
            importPath: "@chakra-ui/react",
        })
    )
}


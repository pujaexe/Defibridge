import { Toast, ToastProps } from "@chakra-ui/react";
import registerComponent, {
  ComponentMeta,
} from "@plasmicapp/host/registerComponent";

export const toastMeta: ComponentMeta<ToastProps> = {
  name: "Toast",
  importPath: "@chakra-ui/react",
  props: {
    title: {
      type: "string",
      defaultValue: "Toast Title",
    },
    description: {
      type: "string",
      defaultValue: "Toast description",
    },
    variant: {
      type: "choice",
      options: ["solid", "subtle", "left-accent", "top-accent"],
    },
    duration: {
      type: "number",
      defaultValue: 5000,
    },
    isClosable: {
      type: "boolean",
    },
    position: {
      type: "choice",
      options: [
        "top",
        "top-right",
        "top-left",
        "bottom",
        "bottom-right",
        "bottom-left",
      ],
    },
    status: {
      type: "choice",
      options: ["info", "success", "warning", "error", "loading"],
    },
  },
};


export function registerToast() {
  return (
    registerComponent(Toast, toastMeta)
  )
}
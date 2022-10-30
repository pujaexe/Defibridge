import registerComponent, {
  ComponentMeta,
} from "@plasmicapp/host/registerComponent";
import {
  BreadcrumbItem,
  BreadcrumbItemProps,
  BreadcrumbLink,
  BreadcrumbLinkProps,
  Breadcrumb,
  BreadcrumbProps,
  BreadcrumbSeparator,
  BreadcrumbSeparatorProps,
} from "@chakra-ui/react";

export const breadcrumbItemMeta: ComponentMeta<BreadcrumbItemProps> = {
  name: "BreadcrumbItem",
  importPath: "@chakra-ui/react",
  parentComponentName: "Breadcrumb",
  props: {
    isCurrentPage: {
      type: "boolean",
    },
    isLastChild: {
      type: "boolean",
    },
    seperator: {
      type: "string",
      defaultValue: "/",
    },
    spacing: {
      type: "string",
      defaultValue: "8px",
    },
    children: {
      type: "slot",
      defaultValue: [
        {
          type: "component",
          name: "BreadcrumbLink",
          props: {
            children: {
              type: "text",
              value: "BreadcrumbItem",
            },
          },
        },
      ],
    },
  },
};

export function registerBreadcrumbItem() {
  return (
    registerComponent(BreadcrumbItem, breadcrumbItemMeta)
  )
}

export const breadcrumbLinkMeta: ComponentMeta<BreadcrumbLinkProps> = {
  name: "BreadcrumbLink",
  importPath: "@chakra-ui/react",
  parentComponentName: "BreadcrumbItem",

  props: {
    href: {
      type: "string",
      defaultValue: "#",
    },
    children: {
      type: "slot",
      defaultValue: [
        {
          type: "text",
          value: "Home",
        },
      ],
    },
  },
};

export function registerBreadcrumbLink() {
  return (
    registerComponent(BreadcrumbLink, breadcrumbLinkMeta)
  )
}

export const breadcrumbMeta: ComponentMeta<BreadcrumbProps> = {
  name: "Breadcrumb",
  importPath: "@chakra-ui/react",
  props: {
    separator: {
      type: "string",
      defaultValue: "/",
    },
    spacing: {
      type: "string",
      defaultValue: "8px",
    },
    children: {
      type: "slot",
      defaultValue: [
        {
          type: "component",
          name: "BreadcrumbItem",
          props: {
            children: {
              type: "component",
              name: "BreadcrumbLink",
              props: {
                children: {
                  type: "text",
                  value: "Home",
                },
              },
            },
          },
        },
        {
          type: "component",
          name: "BreadcrumbItem",
          props: {
            children: {
              type: "component",
              name: "BreadcrumbLink",
              props: {
                children: {
                  type: "text",
                  value: "Docs",
                },
              },
            },
          },
        },
        {
          type: "component",
          name: "BreadcrumbItem",
          props: {
            isLastChild: true,
            isCurrentPage: true,
            children: {
              type: "component",
              name: "BreadcrumbLink",
              props: {
                children: {
                  type: "text",
                  value: "Breadcrumb",
                },
              },
            },
          },
        },
      ],
    },
  },
};

export function registerBreadcrumb(){
  return (
    registerComponent(Breadcrumb, breadcrumbMeta)
  )
}

export const breadcrumbSeparatorMeta: ComponentMeta<BreadcrumbSeparatorProps> =
  {
    name: "BreadcrumbSeparator",
    importPath: "@chakra-ui/react",
    parentComponentName: "Breadcrumb",
    props: {
      children: {
        type: "slot",
        defaultValue: {
          type: "text",
          value: "/",
        },
      },
    },
  };

export function registerBreadcrumbSeparator(){
  return (
    registerComponent(BreadcrumbSeparator, breadcrumbSeparatorMeta)
  )
}

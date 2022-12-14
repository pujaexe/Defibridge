// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: a4bhUrqWbeGH9fzcN7EwNU
// Component: 7MQ4xCpNiH
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_defibridge.module.css"; // plasmic-import: a4bhUrqWbeGH9fzcN7EwNU/projectcss
import sty from "./PlasmicMenuItem.module.css"; // plasmic-import: 7MQ4xCpNiH/css

import TwitterSvgrepoComsvgIcon from "./icons/PlasmicIcon__TwitterSvgrepoComsvg"; // plasmic-import: irfeuZAX5P/icon

export type PlasmicMenuItem__VariantMembers = {
  isActive: "isActive";
};

export type PlasmicMenuItem__VariantsArgs = {
  isActive?: SingleBooleanChoiceArg<"isActive">;
};

type VariantPropType = keyof PlasmicMenuItem__VariantsArgs;
export const PlasmicMenuItem__VariantProps = new Array<VariantPropType>(
  "isActive"
);

export type PlasmicMenuItem__ArgsType = {
  button?: React.ReactNode;
  url?: string;
};

type ArgPropType = keyof PlasmicMenuItem__ArgsType;
export const PlasmicMenuItem__ArgProps = new Array<ArgPropType>(
  "button",
  "url"
);

export type PlasmicMenuItem__OverridesType = {
  root?: p.Flex<"div">;
  link?: p.Flex<"a"> & Partial<LinkProps>;
};

export interface DefaultMenuItemProps {
  button?: React.ReactNode;
  url?: string;
  isActive?: SingleBooleanChoiceArg<"isActive">;
  className?: string;
}

function PlasmicMenuItem__RenderFunc(props: {
  variants: PlasmicMenuItem__VariantsArgs;
  args: PlasmicMenuItem__ArgsType;
  overrides: PlasmicMenuItem__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(
    () =>
      Object.assign(
        {},

        props.args
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants
  };

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
      <p.Stack
        as={p.PlasmicLink}
        data-plasmic-name={"link"}
        data-plasmic-override={overrides.link}
        hasGap={true}
        className={classNames(projectcss.all, projectcss.a, sty.link, {
          [sty.linkisActive]: hasVariant(variants, "isActive", "isActive")
        })}
        component={Link}
        href={args.url}
        platform={"nextjs"}
      >
        {p.renderPlasmicSlot({
          defaultContents: (
            <React.Fragment>
              <TwitterSvgrepoComsvgIcon
                className={classNames(projectcss.all, sty.svg__bvYn4)}
                role={"img"}
              />

              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__mxKt3
                )}
              >
                {"Menu1"}
              </div>
            </React.Fragment>
          ),
          value: args.button
        })}
      </p.Stack>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "link"],
  link: ["link"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  link: "a";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicMenuItem__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicMenuItem__VariantsArgs;
    args?: PlasmicMenuItem__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicMenuItem__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicMenuItem__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicMenuItem__ArgProps,
          internalVariantPropNames: PlasmicMenuItem__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicMenuItem__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicMenuItem";
  } else {
    func.displayName = `PlasmicMenuItem.${nodeName}`;
  }
  return func;
}

export const PlasmicMenuItem = Object.assign(
  // Top-level PlasmicMenuItem renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    link: makeNodeComponent("link"),

    // Metadata about props expected for PlasmicMenuItem
    internalVariantProps: PlasmicMenuItem__VariantProps,
    internalArgProps: PlasmicMenuItem__ArgProps
  }
);

export default PlasmicMenuItem;
/* prettier-ignore-end */

// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: a4bhUrqWbeGH9fzcN7EwNU
// Component: ajlQM03Cp6
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
import sty from "./PlasmicWalletConnectItem.module.css"; // plasmic-import: ajlQM03Cp6/css

export type PlasmicWalletConnectItem__VariantMembers = {};

export type PlasmicWalletConnectItem__VariantsArgs = {};
type VariantPropType = keyof PlasmicWalletConnectItem__VariantsArgs;
export const PlasmicWalletConnectItem__VariantProps =
  new Array<VariantPropType>();

export type PlasmicWalletConnectItem__ArgsType = {
  buttonWallet?: React.ReactNode;
  url?: string;
};

type ArgPropType = keyof PlasmicWalletConnectItem__ArgsType;
export const PlasmicWalletConnectItem__ArgProps = new Array<ArgPropType>(
  "buttonWallet",
  "url"
);

export type PlasmicWalletConnectItem__OverridesType = {
  root?: p.Flex<"div">;
  link?: p.Flex<"a"> & Partial<LinkProps>;
};

export interface DefaultWalletConnectItemProps {
  buttonWallet?: React.ReactNode;
  url?: string;
  className?: string;
}

function PlasmicWalletConnectItem__RenderFunc(props: {
  variants: PlasmicWalletConnectItem__VariantsArgs;
  args: PlasmicWalletConnectItem__ArgsType;
  overrides: PlasmicWalletConnectItem__OverridesType;

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
        className={classNames(projectcss.all, projectcss.a, sty.link)}
        component={Link}
        href={args.url}
        platform={"nextjs"}
      >
        {p.renderPlasmicSlot({
          defaultContents: (
            <React.Fragment>
              <p.PlasmicImg
                alt={""}
                className={classNames(sty.img__vX85Y)}
                displayHeight={"24px" as const}
                displayMaxHeight={"none" as const}
                displayMaxWidth={"100%" as const}
                displayMinHeight={"0" as const}
                displayMinWidth={"0" as const}
                displayWidth={"24px" as const}
                loading={"lazy" as const}
                src={{
                  src: "/plasmic/defibridge/images/metaMaskFoxsvgpng.png",
                  fullWidth: 800,
                  fullHeight: 800,
                  aspectRatio: undefined
                }}
              />

              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__xlhFw
                )}
              >
                {"Wallet Name"}
              </div>
            </React.Fragment>
          ),
          value: args.buttonWallet
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
  PlasmicWalletConnectItem__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicWalletConnectItem__VariantsArgs;
    args?: PlasmicWalletConnectItem__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicWalletConnectItem__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicWalletConnectItem__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicWalletConnectItem__ArgProps,
          internalVariantPropNames: PlasmicWalletConnectItem__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicWalletConnectItem__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicWalletConnectItem";
  } else {
    func.displayName = `PlasmicWalletConnectItem.${nodeName}`;
  }
  return func;
}

export const PlasmicWalletConnectItem = Object.assign(
  // Top-level PlasmicWalletConnectItem renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    link: makeNodeComponent("link"),

    // Metadata about props expected for PlasmicWalletConnectItem
    internalVariantProps: PlasmicWalletConnectItem__VariantProps,
    internalArgProps: PlasmicWalletConnectItem__ArgProps
  }
);

export default PlasmicWalletConnectItem;
/* prettier-ignore-end */

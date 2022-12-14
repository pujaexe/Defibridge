// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: a4bhUrqWbeGH9fzcN7EwNU
// Component: BmAeYsXCwH
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
import { Heading } from "@chakra-ui/react"; // plasmic-import: By0uZvvYZc/codeComponent
import AssetItems from "../../AssetItems"; // plasmic-import: _3xOiX4pKP/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_defibridge.module.css"; // plasmic-import: a4bhUrqWbeGH9fzcN7EwNU/projectcss
import sty from "./PlasmicAssetContainer.module.css"; // plasmic-import: BmAeYsXCwH/css

export type PlasmicAssetContainer__VariantMembers = {};

export type PlasmicAssetContainer__VariantsArgs = {};
type VariantPropType = keyof PlasmicAssetContainer__VariantsArgs;
export const PlasmicAssetContainer__VariantProps = new Array<VariantPropType>();

export type PlasmicAssetContainer__ArgsType = {
  items?: React.ReactNode;
  header?: React.ReactNode;
};

type ArgPropType = keyof PlasmicAssetContainer__ArgsType;
export const PlasmicAssetContainer__ArgProps = new Array<ArgPropType>(
  "items",
  "header"
);

export type PlasmicAssetContainer__OverridesType = {
  root?: p.Flex<"div">;
  freeBox?: p.Flex<"div">;
  header?: p.Flex<"div">;
};

export interface DefaultAssetContainerProps {
  items?: React.ReactNode;
  header?: React.ReactNode;
  className?: string;
}

function PlasmicAssetContainer__RenderFunc(props: {
  variants: PlasmicAssetContainer__VariantsArgs;
  args: PlasmicAssetContainer__ArgsType;
  overrides: PlasmicAssetContainer__OverridesType;

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
        as={"div"}
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox)}
      >
        <div
          data-plasmic-name={"header"}
          data-plasmic-override={overrides.header}
          className={classNames(projectcss.all, sty.header)}
        >
          {p.renderPlasmicSlot({
            defaultContents: (
              <React.Fragment>
                <Heading
                  className={classNames("__wab_instance", sty.heading__ky9Rn)}
                  noOfLines={1 as const}
                  size={"md" as const}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__r7ME
                    )}
                  >
                    {"Header Title"}
                  </div>
                </Heading>

                <Heading
                  className={classNames("__wab_instance", sty.heading__eZm66)}
                  noOfLines={1 as const}
                  size={"md" as const}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___9Jn8S
                    )}
                  >
                    {"$23.76"}
                  </div>
                </Heading>
              </React.Fragment>
            ),
            value: args.header
          })}
        </div>

        {p.renderPlasmicSlot({
          defaultContents: (
            <AssetItems
              className={classNames("__wab_instance", sty.assetItems___1NrAu)}
            />
          ),

          value: args.items
        })}
      </p.Stack>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "freeBox", "header"],
  freeBox: ["freeBox", "header"],
  header: ["header"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  freeBox: "div";
  header: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicAssetContainer__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicAssetContainer__VariantsArgs;
    args?: PlasmicAssetContainer__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicAssetContainer__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicAssetContainer__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicAssetContainer__ArgProps,
          internalVariantPropNames: PlasmicAssetContainer__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicAssetContainer__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicAssetContainer";
  } else {
    func.displayName = `PlasmicAssetContainer.${nodeName}`;
  }
  return func;
}

export const PlasmicAssetContainer = Object.assign(
  // Top-level PlasmicAssetContainer renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),
    header: makeNodeComponent("header"),

    // Metadata about props expected for PlasmicAssetContainer
    internalVariantProps: PlasmicAssetContainer__VariantProps,
    internalArgProps: PlasmicAssetContainer__ArgProps
  }
);

export default PlasmicAssetContainer;
/* prettier-ignore-end */

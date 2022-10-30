// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BankSvgrepoComsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BankSvgrepoComsvgIcon(props: BankSvgrepoComsvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.1"}
      x={"0"}
      y={"0"}
      viewBox={"0 0 512 512"}
      xmlSpace={"preserve"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M469.313 448h-10.667v-10.667c0-13.888-8.939-25.621-21.333-30.037V254.037c12.395-4.416 21.333-16.149 21.333-30.037v-10.667h10.667c5.888 0 10.667-4.779 10.667-10.667v-32h10.667c4.736 0 8.917-3.136 10.24-7.68a10.704 10.704 0 00-4.501-11.989L261.718 1.664a10.69 10.69 0 00-11.456 0L15.595 150.997a10.662 10.662 0 00-4.501 11.989 10.65 10.65 0 0010.24 7.68H32v32c0 5.888 4.779 10.667 10.667 10.667h10.667V224c0 13.888 8.939 25.621 21.333 30.037v153.259c-12.395 4.416-21.333 16.149-21.333 30.037V448H42.667c-17.643 0-32 14.357-32 32v21.333c0 5.888 4.779 10.667 10.667 10.667h469.333c5.888 0 10.667-4.779 10.667-10.667V480c-.021-17.643-14.379-32-32.021-32zM186.07 108.459l64-42.667a10.676 10.676 0 0111.84 0l64 42.667a10.67 10.67 0 014.288 11.968A10.682 10.682 0 01319.979 128h-128a10.684 10.684 0 01-10.219-7.573c-1.365-4.502.406-9.366 4.31-11.968zm37.909 298.837c-12.395 4.416-21.333 16.149-21.333 30.037V448h-42.667v-10.667c0-13.888-8.939-25.621-21.333-30.037V254.037c12.395-4.416 21.333-16.149 21.333-30.037v-10.667h42.667V224c0 13.888 8.939 25.621 21.333 30.037v153.259zm149.334 0c-12.395 4.416-21.333 16.149-21.333 30.037V448h-42.667v-10.667c0-13.888-8.939-25.621-21.333-30.037V254.037c12.395-4.416 21.333-16.149 21.333-30.037v-10.667h42.667V224c0 13.888 8.939 25.621 21.333 30.037v153.259z"
        }
      ></path>
    </svg>
  );
}

export default BankSvgrepoComsvgIcon;
/* prettier-ignore-end */

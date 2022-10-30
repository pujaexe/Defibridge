// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ImageSvgrepoComsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ImageSvgrepoComsvgIcon(props: ImageSvgrepoComsvgIconProps) {
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
          "M0 371.116v36.103c0 20.34 16.548 36.887 36.887 36.887h438.224c20.342.002 36.889-16.545 36.889-36.886v-36.352l-512 .248zM475.113 67.893H36.887C16.548 67.892 0 84.44 0 104.781V283.03l96.853-72.731a12.201 12.201 0 0114.58-.054l153.028 113.127 146.651-74.601a12.203 12.203 0 0113.105 1.308L512 319.557V104.781c0-20.341-16.548-36.888-36.887-36.888zM325.987 221.887c-29.599 0-53.678-24.079-53.678-53.678 0-29.599 24.079-53.678 53.678-53.678 29.598 0 53.677 24.08 53.677 53.678 0 29.597-24.079 53.678-53.677 53.678z"
        }
      ></path>
    </svg>
  );
}

export default ImageSvgrepoComsvgIcon;
/* prettier-ignore-end */

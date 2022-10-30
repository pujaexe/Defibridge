// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FacebookSvgrepoComsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FacebookSvgrepoComsvgIcon(
  props: FacebookSvgrepoComsvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.1"}
      x={"0"}
      y={"0"}
      viewBox={"0 0 29.94 29.94"}
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
          "M27.56.684H2.383A2.38 2.38 0 000 3.064v23.813a2.381 2.381 0 002.383 2.379H27.56a2.382 2.382 0 002.38-2.379V3.064a2.382 2.382 0 00-2.38-2.38zm-7.435 8.483c-.619-.362-1.11-.648-1.727-.648-.604 0-1.12.151-1.384.405-.264.252-.395.74-.395 1.461v1.067h3.229l-.699 2.968h-2.53v9.862h-4.056V14.42H10.67v-2.968h1.895v-1.133c0-1.193.143-1.907.425-2.496.281-.587.826-1.241 1.584-1.611.757-.369 1.877-.555 3.036-.555 1.188 0 2.116.396 3.254.715l-.739 2.795z"
        }
      ></path>
    </svg>
  );
}

export default FacebookSvgrepoComsvgIcon;
/* prettier-ignore-end */

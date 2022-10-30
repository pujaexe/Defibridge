// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type WalletSvgrepoCom1SvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function WalletSvgrepoCom1SvgIcon(props: WalletSvgrepoCom1SvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.1"}
      x={"0"}
      y={"0"}
      viewBox={"0 0 223 223"}
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
          "M223 94.5c0-6.075-4.925-11-11-11h-63c-6.075 0-11 4.925-11 11v33c0 6.075 4.925 11 11 11h63c6.075 0 11-4.925 11-11v-33zm-53.485 29.467c-7.082 0-12.823-5.741-12.823-12.823 0-7.082 5.741-12.823 12.823-12.823 7.082 0 12.823 5.741 12.823 12.823 0 7.081-5.741 12.823-12.823 12.823z"
        }
      ></path>

      <path
        d={
          "M123.509 68.5H205v-33c0-8.271-6.395-15-14.667-15h-175C7.062 20.5 0 27.229 0 35.5v152c0 8.271 7.062 15 15.333 15h175c8.271 0 14.667-6.729 14.667-15v-34h-81.342l-.149-85z"
        }
      ></path>
    </svg>
  );
}

export default WalletSvgrepoCom1SvgIcon;
/* prettier-ignore-end */

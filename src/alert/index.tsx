import React from "react";
import t from "prop-types";

export interface AlertProps {
  /**
   * @description       Alert 的类型
   * @default           'info'
   */
  kind?: "info" | "positive" | "negative" | "warning";
  /**
   * @description       React Node
   * @default           null
   */
  children: React.ReactNode;
}

export type KindMap = Record<Required<AlertProps>["kind"], string>;

const prefixCls = "jecyu-alert";

const kinds: KindMap = {
  info: "#5352ED",
  positive: "#2ED573",
  negative: "#FF4757",
  warning: "#FFA502",
};

const Alert: React.FC<AlertProps> = ({ children, kind = "info", ...rest }) => (
  <div
    className={prefixCls}
    style={{
      background: kinds[kind],
    }}
    {...rest}
  >
    {children}
  </div>
);

Alert.propTypes = {
  kind: t.oneOf(["info", "positive", "negative", "warning"]),
};

export default Alert;

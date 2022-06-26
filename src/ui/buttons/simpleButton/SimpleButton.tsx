import React from "react";
import { classNameBuilder } from "../../../utils/className";

import "./simpleButton.scss";

export type Props = {
  children: string;
  type: "button" | "reset";
  readonly?: boolean;

  onClick?: () => void;
};

const SimpleButton: React.FC<Props> = ({ children, type, onClick, readonly, ...props }) => {
  //FIXME: FIX disable
  const disable = readonly ? "disabled" : undefined;

  return (
    <div className="wrapper">
      <button className={"btn-simple"} type={type} disabled={readonly} onClick={onClick} {...props}>
        {children}
      </button>
    </div>
  );
};

export default SimpleButton;

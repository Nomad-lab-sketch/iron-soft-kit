import React, { useCallback, useEffect, useState } from "react";
import { AlignItems, AttributeTypeInput, FlexDirection } from "../../../models/common";
import { Offset } from "../../../models/common";

import "./simpleInputs.scss";

interface Props {
  placeholder?: string;
  value?: string;
  type: AttributeTypeInput;
  label?: string;
  readonly?: boolean;

  onChange?: (e: string) => string;
}

const SimpleInputs: React.FC<Props> = ({ onChange, placeholder, type, label, readonly, ...props }) => {
  const [value, setValue] = useState("");

  const didOnChange = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      const text = e.currentTarget.value;
      onChange?.(text);
      setValue(text);
    },
    [setValue, onChange, value]
  );

  return (
    <div className="wrapper">
      <div className="content">
        <label>
          <input
            onChange={useCallback((e: React.FormEvent<HTMLInputElement>) => didOnChange(e), [didOnChange])}
            value={value}
            type={type}
            disabled={readonly}
            className="content-input"
            {...props}
          />
          {!readonly && <span className="content-placeholder">{placeholder}</span>}
        </label>
      </div>
    </div>
  );
};

export default SimpleInputs;

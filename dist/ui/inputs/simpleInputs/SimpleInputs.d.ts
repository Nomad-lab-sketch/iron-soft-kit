import React from "react";
import { AttributeTypeInput } from "../../../models/common";
import "./simpleInputs.scss";
interface Props {
    placeholder?: string;
    value?: string;
    type: AttributeTypeInput;
    label?: string;
    readonly?: boolean;
    onChange?: (e: string) => string;
}
declare const SimpleInputs: React.FC<Props>;
export default SimpleInputs;

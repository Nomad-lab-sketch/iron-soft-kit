import React from "react";
import { AttributeTypeInput } from "../../../models/common";
import "./simpleInput.scss";
import "./dataList.scss";
export interface DataList {
    data: string;
}
interface Props {
    placeholder?: string;
    value?: string;
    type: AttributeTypeInput;
    label?: string;
    readonly?: boolean;
    dataList: DataList[];
    onChange?: (e: string) => string;
}
declare const simpleInput: React.FC<Props>;
export default simpleInput;

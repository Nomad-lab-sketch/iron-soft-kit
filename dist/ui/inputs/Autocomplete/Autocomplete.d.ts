import React from 'react';
import { AttributeTypeInput } from '../../../models/common';
export interface DataList {
    data: string;
}
interface Props {
    placeholder?: string;
    value?: string;
    type: AttributeTypeInput;
    readonly?: boolean;
    dataList: DataList[];
    onChange?: (e: string) => string;
}
declare const Autocomplete: React.FC<Props>;
export default Autocomplete;

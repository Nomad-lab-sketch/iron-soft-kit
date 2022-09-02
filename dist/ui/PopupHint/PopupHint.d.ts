import React from 'react';
import { AlignItems, Offset } from '../../models/common';
interface Props {
    offsetLabel?: Offset;
    marginPopupHint?: number;
    position?: AlignItems;
    children: React.ReactNode;
    text: string;
}
declare const PopupHint: React.FC<Props>;
export default PopupHint;

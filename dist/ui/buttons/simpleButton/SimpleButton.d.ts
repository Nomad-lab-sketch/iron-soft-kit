import React from 'react';
export declare type Props = {
    children: string;
    type: 'button' | 'reset';
    readonly?: boolean;
    typeButton?: 'rectangle' | 'square' | 'circle';
    icon?: 'arrowCross';
    onClick?: () => void;
};
declare const SimpleButton: React.FC<Props>;
export default SimpleButton;

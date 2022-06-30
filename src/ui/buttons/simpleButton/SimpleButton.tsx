import React from 'react';

import s from './simpleButton.module.scss';

export type Props = {
  children: string;
  type: 'button' | 'reset';
  readonly?: boolean;

  onClick?: () => void;
};

const SimpleButton: React.FC<Props> = ({
  children,
  type,
  onClick,
  readonly,
  ...props
}) => {
  //hot-fix> FIX disable
  const disable = readonly ? 'disabled' : undefined;

  return (
    <div className={s['wrapper']}>
      <button
        className={s['btn-simple']}
        type={type}
        disabled={readonly}
        onClick={onClick}
        {...props}
      >
        {children}
      </button>
    </div>
  );
};

export default SimpleButton;

import React, { useCallback } from 'react';

import { ReactComponent as Download } from '../../../svg/download.svg';
import { ReactComponent as Upload } from '../../../svg/upload.svg';

import s from './simpleButton.module.scss';

export type Props = {
  children: string;
  type: 'button' | 'reset';
  readonly?: boolean;
  typeButton?: 'rectangle' | 'square' | 'circle';
  iconType?: 'download' | 'upload';
  prefix?: string;

  onClick: () => void;
  onClickIcon?: () => void;
};

const SimpleButton: React.FC<Props> = ({ children, type, onClick, onClickIcon, readonly, prefix, iconType, ...props }) => {
  const setIcon = (iconType: string | undefined) => {
    switch (iconType) {
      case 'download':
        return <Download onClick={onClickIcon} />;

      case 'upload':
        return <Upload onClick={onClickIcon} />;
    }
    return null;
  };

  return (
    <div className={s['wrapper']}>
      <button type={type} disabled={readonly} {...props}>
        <div className={s['container']}>
          <span className={s['container-fake_background']}></span>
          <span className={s['container-title']} onClick={useCallback(() => !readonly && onClick(), [onClick, readonly])}>
            {prefix && prefix.toUpperCase()} {children.toUpperCase()}
          </span>
          <span className={s['container-icon']}>{setIcon(iconType)}</span>
        </div>
      </button>
    </div>
  );
};

export default SimpleButton;

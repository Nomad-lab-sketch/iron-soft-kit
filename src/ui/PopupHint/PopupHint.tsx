import React, { useEffect, useRef, useState } from 'react';

import { AlignItems, Offset } from '../../models/common';

import s from './popupHint.module.scss';
interface Props {
  offsetLabel?: Offset;
  marginPopupHint?: number;
  position?: AlignItems;
  children: React.ReactNode;
  text: string;
}
interface AbsolutePosition {
  top?: number | string;
  left?: number | string;
  right?: number | string;
  bottom?: number | string;
}

interface Size {
  width: string | number;
  height: string | number;
}
//todo> Duplicate AbsolutePosition
interface PositionAbsoluteTriangle extends BorderTriangle {
  positionTop?: number | string;
  positionLeft?: number | string;
  positionRight?: number | string;
  positionBottom?: number | string;
}

interface BorderTriangle {
  borderLeft?: string;
  borderRight?: string;
  borderTop?: number | string;
  transform?: number | string;
}
type PositionTriangle = AbsolutePosition | BorderTriangle;

const PopupHint: React.FC<Props> = ({
  offsetLabel,
  children,
  text,
  marginPopupHint,
  position = AlignItems.center
}) => {
  const [offset, setOffset] = useState<AbsolutePosition | Size>({
    top: 'auto',
    left: 'auto',
    right: 'auto',
    bottom: 80
  });

  const [positionTriangle, setPositionTriangle] = useState<PositionTriangle>();
  const [positionBlock, setPositionBlock] =
    useState<{ alignItems: AlignItems }>();
  const [heightPopupHint, setHeightPopupHint] = useState<number>();
  const setMargin = (margin: number | string | undefined) => {
    return margin ? margin : 80;
  };

  const changingPositionHint = (
    {
      top = 'auto',
      left = 'auto',
      right = 'auto',
      bottom = 'auto'
    }: AbsolutePosition,
    {
      positionTop = 'auto',
      positionLeft = 'auto',
      positionRight = 'auto',
      positionBottom = 'auto',
      borderLeft = '8px solid transparent',
      borderRight = '8px solid transparent',
      borderTop = 13,
      transform = 0
    }: PositionAbsoluteTriangle,
    height: number | string = 'auto'
  ) => {
    setOffset({
      ...offset,
      top: setMargin(top),
      left: left,
      right: right,
      bottom: setMargin(bottom),
      height: height
    });

    setPositionTriangle({
      ...positionTriangle,
      top: positionTop,
      left: positionLeft,
      right: positionRight,
      bottom: positionBottom,
      borderTop: `${borderTop}px solid ${colorTriangle}`,
      borderLeft: borderLeft,
      borderRight: borderRight,
      transform: `rotate(${transform}deg)`
    });
  };

  const colorTriangle = 'grey';

  useEffect(() => {
    // note> -- Top side --
    if (offsetLabel === Offset.top_left_side) {
      changingPositionHint(
        { bottom: 0 },
        {
          positionTop: '100%',
          positionLeft: 10,
          transform: 0
        }
      );
    }
    if (offsetLabel === Offset.top_center) {
      changingPositionHint(
        { bottom: 0 },
        {
          positionTop: '100%',
          positionLeft: '50%',
          transform: 0
        }
      );
    }

    if (offsetLabel === Offset.top_right_side) {
      changingPositionHint(
        { bottom: 0 },
        {
          positionTop: '100%',
          positionRight: 10,
          transform: 0
        }
      );
    }
    // note> --left & right --
    if (offsetLabel === Offset.left_center_side) {
      changingPositionHint(
        { top: 0, left: 0, bottom: 0 },
        {
          positionRight: '-3.2%',
          transform: 148
        },
        heightPopupHint
      );
    }
    if (offsetLabel === Offset.right_center_side) {
      changingPositionHint(
        { top: 0, right: 0, bottom: 0 },
        {
          positionLeft: '-3.2%',
          transform: -148
        },
        heightPopupHint
      );
    }
    // note> --bottom--
    if (offsetLabel === Offset.bottom_left_side) {
      changingPositionHint(
        { top: 0 },
        {
          positionLeft: 10,
          positionBottom: '100%',
          transform: -180
        }
      );
    }
    if (offsetLabel === Offset.bottom_center) {
      changingPositionHint(
        { top: 0 },
        {
          positionLeft: '50%',
          positionBottom: '100%',
          transform: -180
        }
      );
    }
    if (offsetLabel === Offset.bottom_right_side) {
      changingPositionHint(
        { top: 0 },
        {
          positionRight: 10,
          positionBottom: '100%',
          transform: -180
        }
      );
    }
  }, [offsetLabel, marginPopupHint, heightPopupHint]);

  const changePositionBlock = (position: AlignItems) => {
    setPositionBlock({
      ...positionBlock,
      alignItems: position
    });
  };
  useEffect(() => {
    if (position === AlignItems.center) {
      changePositionBlock(AlignItems.center);
    }
    if (position === AlignItems.flex_start) {
      changePositionBlock(AlignItems.flex_start);
    }
    if (position === AlignItems.flex_end) {
      changePositionBlock(AlignItems.flex_end);
    }
  }, [position]);

  const ref = useRef<HTMLDivElement>(null);

  //todo> Adjust styles to remove unnecessary useEffect

  useEffect(() => {
    const height = ref.current?.getBoundingClientRect().height;
    setHeightPopupHint(height);
  }, [ref]);

  return (
    <div className={s['wrapper']}>
      <div className={s['child']} style={positionBlock}>
        {children}
        <div className={s['child-popupHint']} style={offset} ref={ref}>
          {text}
          <span
            className={s['child-popupHint-triangle']}
            style={positionTriangle as React.CSSProperties}
          ></span>
        </div>
      </div>
    </div>
  );
};

export default PopupHint;

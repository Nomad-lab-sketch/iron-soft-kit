import React, { useEffect, useState } from "react";
import { AlignItems, FlexDirection, Offset } from "../../models/common";

interface Props {
  offsetLabel: Offset;
}

const PopupHint: React.FC<Props> = ({ offsetLabel }) => {
  const [offset, setOffset] = useState<{ flexDirection: FlexDirection; alignItems: AlignItems }>({
    flexDirection: FlexDirection.column,
    alignItems: AlignItems.center,
  });

  useEffect(() => {
    if (offsetLabel) {
      // ^ --Top side --
      if (offsetLabel === Offset.top_right_side) {
        setOffset({ ...offset, flexDirection: FlexDirection.column, alignItems: AlignItems.flex_end });
      }
      if (offsetLabel === Offset.top_center) {
        setOffset({ ...offset, flexDirection: FlexDirection.column, alignItems: AlignItems.center });
      }
      if (offsetLabel === Offset.top_left_side) {
        setOffset({ ...offset, flexDirection: FlexDirection.column, alignItems: AlignItems.flex_start });
      }
      // ^ --Top side --

      // ^ --left & right --
      if (offsetLabel === Offset.left_center_side) {
        setOffset({ ...offset, flexDirection: FlexDirection.row, alignItems: AlignItems.center });
      }
      if (offsetLabel === Offset.right_center_side) {
        setOffset({ ...offset, flexDirection: FlexDirection.row_reverse, alignItems: AlignItems.center });
      }
      // ^ --left & right --

      // ^ --bottom--
      if (offsetLabel === Offset.bottom_right_side) {
        setOffset({ ...offset, flexDirection: FlexDirection.column_reverse, alignItems: AlignItems.flex_end });
      }
      if (offsetLabel === Offset.bottom_center) {
        setOffset({ ...offset, flexDirection: FlexDirection.column_reverse, alignItems: AlignItems.center });
      }
      if (offsetLabel === Offset.bottom_left_side) {
        setOffset({ ...offset, flexDirection: FlexDirection.column_reverse, alignItems: AlignItems.flex_start });
      }
      // ^ --bottom--
    }
  }, [offsetLabel]);

  return <div style={offset as React.CSSProperties}></div>;
};

export default PopupHint;

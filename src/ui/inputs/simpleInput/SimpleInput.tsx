import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
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

const DataListInput = ({
  dataList,
  onChange,
  didCloseData,
}: {
  dataList: DataList[] | undefined;
  onChange: (item: string) => void;
  didCloseData: () => void;
}) => {
  const didOnClickItem = useCallback(
    (item: string) => {
      onChange(item);
      didCloseData();
    },
    [onChange]
  );

  return (
    <div className="simpleInput-data-list">
      <ul>{dataList && dataList.map((i) => <li onClick={() => didOnClickItem(i.data)}>{i.data}</li>)}</ul>
    </div>
  );
};

const simpleInput: React.FC<Props> = ({ onChange, placeholder, type, label, dataList, readonly, ...props }) => {
  const [value, setValue] = useState("");
  const [showDataList, setShowDataList] = useState(false);
  const [filteredList, setFilteredList] = useState<DataList[]>(dataList);

  const didOpenList = useCallback(() => {
    setShowDataList(true);
  }, [setShowDataList]);

  const didCloseData = useCallback(() => {
    console.log("close");
    setShowDataList(false);
  }, [setShowDataList]);

  const didOnChange = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      const text = e.currentTarget.value;
      onChange?.(text);
      didOpenList();
      setValue(text);
    },
    [setValue, onChange]
  );

  const eventChangeValue = useCallback(
    (item: string) => {
      setValue(item);
    },
    [setValue]
  );

  useMemo(() => {
    const data = dataList?.filter((v) => v.data.toLowerCase().includes(value.toLowerCase()));
    setFilteredList(data);
  }, [value]);

  const textInput = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const onClick = (e: any) => (textInput.current && textInput.current.contains(e.target)) || setShowDataList(false);
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [textInput]);

  return (
    <div className="simpleInput-wrapper">
      <div className="simpleInput-content">
        <label>
          <input
            onChange={useCallback((e: React.FormEvent<HTMLInputElement>) => didOnChange(e), [didOnChange])}
            value={value}
            type={type}
            ref={textInput}
            disabled={readonly}
            className="simpleInput-content-input"
            {...props}
          />
          {!readonly && <span className="simpleInput-content-placeholder">{placeholder}</span>}
          <div className="simpleInput-content-dataList">
            {dataList && dataList.length > 0 && showDataList && (
              <DataListInput dataList={filteredList} onChange={eventChangeValue} didCloseData={didCloseData} />
            )}
          </div>
        </label>
      </div>
    </div>
  );
};

export default simpleInput;

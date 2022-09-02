import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';

import { AttributeTypeInput } from '../../../models/common';

import s from './autocomplete.module.scss';
import sDataList from './dataList.module.scss';

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

const ListOfHints = ({ dataList, onChange, didCloseData }: { dataList: DataList[] | undefined; onChange: (item: string) => void; didCloseData: () => void }) => {
  const didOnClickItem = useCallback(
    (item: string) => {
      onChange(item);
      didCloseData();
    },
    [onChange, didCloseData]
  );

  return (
    <div className={sDataList['data-list']}>
      <ul>
        {dataList &&
          dataList.map(({ data }) => (
            <li key={data} onClick={() => didOnClickItem(data)}>
              {data}
            </li>
          ))}
      </ul>
    </div>
  );
};

const Autocomplete: React.FC<Props> = ({ onChange, placeholder, type, dataList, readonly, ...props }) => {
  const [value, setValue] = useState('');
  const [showDataList, setShowDataList] = useState(false);
  const [filteredList, setFilteredList] = useState<DataList[]>(dataList);

  const didCloseData = useCallback(() => {
    setShowDataList(false);
  }, [setShowDataList]);

  const didOnChange = (e: React.FormEvent<HTMLInputElement>) => {
    const text = e.currentTarget.value;
    onChange?.(text);
    setShowDataList(true);
    setValue(text);
  };

  const eventChangeValue = useCallback(
    (item: string) => {
      setValue(item);
    },
    [setValue]
  );

  useMemo(() => {
    const data = dataList?.filter((i) => {
      const index = i.data.toLowerCase().indexOf(value.toLowerCase());
      return index === 0;
    });
    setFilteredList(data);
  }, [value]);

  const textInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => (textInput.current && textInput.current.contains(e.target as Node)) || setShowDataList(false);
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, [textInput]);

  return (
    <div className={s['wrapper']}>
      <div className={s['content']}>
        <label>
          <input
            onChange={useCallback((e: React.FormEvent<HTMLInputElement>) => didOnChange(e), [didOnChange])}
            value={value}
            type={type}
            ref={textInput}
            disabled={readonly}
            className={s['content-input']}
            {...props}
          />
          {!readonly && <span className={s['content-placeholder']}>{placeholder}</span>}
          <div className={s['content-dataList']}>
            {filteredList && filteredList.length > 0 && showDataList && <ListOfHints dataList={filteredList} onChange={eventChangeValue} didCloseData={didCloseData} />}
          </div>
        </label>
      </div>
    </div>
  );
};

export default Autocomplete;

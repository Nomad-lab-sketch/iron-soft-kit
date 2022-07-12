import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import PopupHint from '../ui/PopupHint/PopupHint';
import SimpleButton from '../ui/buttons/simpleButton/SimpleButton';
import SimpleInput, { DataList } from '../ui/inputs/simpleInput/SimpleInput';
import { AlignItems, AttributeTypeInput, Offset } from '../models/common';

export default {
  title: 'Example/PopupHint',
  component: PopupHint
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof PopupHint>;

const Template: ComponentStory<typeof PopupHint> = (args) => (
  <PopupHint {...args} />
);

export const button = Template.bind({});
button.args = {
  text: 'Lorem Ipsum is simply dummy text of the printing and typesetting',
  children: <SimpleButton type={'button'}>Hello</SimpleButton>,
  offsetLabel: Offset.top_right_side
};

const dataList: DataList[] = [
  { data: 'Добавляет элемент в конец списка' },
  { data: 'Расширяет список list, добавляя в конец все элементы списка L' },
  { data: 'Вставляет на i-ый элемент значение x' },
  {
    data: 'Удаляет первый элемент в списке, имеющий значение x. ValueError, если такого элемента не существует'
  },
  {
    data: 'Удаляет i-ый элемент и возвращает его. Если индекс не указан, удаляется последний элемент'
  },
  {
    data: 'Возвращает положение первого элемента со значением x (при этом поиск ведется от start до end)'
  },
  { data: 'Возвращает количество элементов со значением x' },
  { data: 'Сортирует список на основе функции' },
  { data: 'Разворачивает список' },
  { data: 'Поверхностная копия списка' },
  { data: 'Очищает список' },
  { data: 'Очищает список' },
  { data: 'Очищает список' },
  { data: 'Очищает список' },
  { data: 'Очищает список' },
  { data: 'Очищает список' },
  { data: 'Очищает список' }
];

export const input = Template.bind({});
input.args = {
  text: 'Lorem Ipsum is simply dummy text of the printing and typesetting',
  children: (
    <SimpleInput
      type={AttributeTypeInput.text}
      dataList={dataList}
      placeholder={'Какой то текст'}
    />
  ),
  offsetLabel: Offset.top_right_side
};

import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import SimpleInput, { DataList } from "../ui/inputs/simpleInput/SimpleInput";
import { AttributeTypeInput } from "../models/common";

export default {
  title: "Example/SimpleInputs",
  component: SimpleInput,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof SimpleInput>;

const Template: ComponentStory<typeof SimpleInput> = (args) => <SimpleInput {...args} />;

const event = (e: string): string => {
  return e;
};

const dataList: DataList[] = [
  { data: "Добавляет элемент в конец списка" },
  { data: "Расширяет список list, добавляя в конец все элементы списка L" },
  { data: "Вставляет на i-ый элемент значение x" },
  { data: "Удаляет первый элемент в списке, имеющий значение x. ValueError, если такого элемента не существует" },
  { data: "Удаляет i-ый элемент и возвращает его. Если индекс не указан, удаляется последний элемент" },
  { data: "Возвращает положение первого элемента со значением x (при этом поиск ведется от start до end)" },
  { data: "Возвращает количество элементов со значением x" },
  { data: "Сортирует список на основе функции" },
  { data: "Разворачивает список" },
  { data: "Поверхностная копия списка" },
  { data: "Очищает список" },
  { data: "Очищает список" },
  { data: "Очищает список" },
  { data: "Очищает список" },
  { data: "Очищает список" },
  { data: "Очищает список" },
  { data: "Очищает список" },
];

export const label = Template.bind({});
label.args = {
  placeholder: "Введите инн вашей компании",
  type: AttributeTypeInput.text,
  label: "Какой то label",
  dataList: dataList,
  onChange: event,
};

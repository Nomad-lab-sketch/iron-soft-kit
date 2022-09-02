import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import SimpleInput from '../ui/inputs/Autocomplete/Autocomplete';
import { AttributeTypeInput } from '../models/common';
import { dataList } from './mock/mock-data';

export default {
  title: 'Inputs/Autocomplete',
  component: SimpleInput
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof SimpleInput>;

const Template: ComponentStory<typeof SimpleInput> = (args) => <SimpleInput {...args} />;

const event = (e: string): string => {
  return e;
};

export const Autocomplete = Template.bind({});
Autocomplete.args = {
  placeholder: 'Введите инн вашей компании',
  type: AttributeTypeInput.text,
  dataList: dataList,
  onChange: event
};

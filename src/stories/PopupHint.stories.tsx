import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import PopupHint from '../ui/PopupHint/PopupHint';
import SimpleButton from '../ui/buttons/simpleButton/SimpleButton';
import { AttributeTypeInput, Offset } from '../models/common';
import Autocomplete from '../ui/inputs/Autocomplete/Autocomplete';

import { dataList } from './mock/mock-data';

export default {
  title: 'Tooltip/PopupHint',
  component: PopupHint
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof PopupHint>;

const Template: ComponentStory<typeof PopupHint> = (args) => <PopupHint {...args} />;

export const button = Template.bind({});
button.args = {
  text: 'Lorem Ipsum is simply dummy text of the printing and typesetting',
  children: (
    <SimpleButton type={'button'} onClick={() => console.log('first')}>
      Hello
    </SimpleButton>
  ),
  offsetLabel: Offset.bottom_center
};

export const input = Template.bind({});
input.args = {
  text: 'Lorem Ipsum is simply dummy text of the printing and typesetting',
  children: <Autocomplete type={AttributeTypeInput.text} dataList={dataList} placeholder={'Какой то текст'} />,
  offsetLabel: Offset.bottom_center
};

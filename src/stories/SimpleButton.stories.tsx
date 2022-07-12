import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import SimpleButton from '../ui/buttons/simpleButton/SimpleButton';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/SimpleButton',
  component: SimpleButton
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof SimpleButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SimpleButton> = (args) => (
  <SimpleButton {...args} />
);

export const name = Template.bind({});
name.args = {
  children: 'Hello',
  readonly: false
};

export const readonly = Template.bind({});
readonly.args = {
  children: 'Hello',
  readonly: true
};

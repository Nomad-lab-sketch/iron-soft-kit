import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import SimpleButton from '../ui/buttons/simpleButton/SimpleButton';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Buttons/SimpleButton',
  component: SimpleButton
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof SimpleButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SimpleButton> = (args) => <SimpleButton {...args} />;

export const simpleButton = Template.bind({});
simpleButton.args = {
  children: '7727563778',
  readonly: true,
  iconType: 'upload',
  prefix: 'INN:'
};

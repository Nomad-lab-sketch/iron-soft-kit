import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import SimpleInputs from "../ui/inputs/simpleInputs/SimpleInputs";
import { AttributeTypeInput } from "../models/common";

export default {
  title: "Example/SimpleInputs",
  component: SimpleInputs,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof SimpleInputs>;

const Template: ComponentStory<typeof SimpleInputs> = (args) => <SimpleInputs {...args} />;

const event = (e: string): string => {
  return e;
};

export const label = Template.bind({});
label.args = {
  placeholder: "Введите инн вашей компании",
  type: AttributeTypeInput.text,
  label: "Какой то label",

  onChange: event,
};

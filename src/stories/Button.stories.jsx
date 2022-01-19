import React from 'react';

import { Button } from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    color: {
      control: { type: 'select' },
    },
    size: {
      control: { type: 'select' },
    },
    variant: {
      control: { type: 'select' },
    },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Button {...args} />;

export const Outline = Template.bind({});
Outline.args = {
  label: 'Outline',
  variant: 'outline'
};
Outline.parameters = { controls: { exclude: ['color'] } };

export const Text = Template.bind({});
Text.args = {
  label: 'Text',
  variant: 'text'
};
Text.parameters = { controls: { exclude: ['color'] } };

export const Default = Template.bind({});
Default.args = {};
Default.parameters = { controls: { exclude: ['variant'] } };

export const Primary = Template.bind({});
Primary.args = {
  color: 'primary',
};
Primary.parameters = { controls: { exclude: ['variant'] } };

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Secondary',
  color: 'secondary',
};
Secondary.parameters = { controls: { exclude: ['variant'] } };

export const Danger = Template.bind({});
Danger.args = {
  label: 'Danger',
  color: 'danger',
};
Danger.parameters = { controls: { exclude: ['variant'] } };

export const Large = Template.bind({});
Large.args = {
  size: 'lg',
  color: 'primary',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  color: 'primary',
  size: 'sm',
  label: 'Button',
};

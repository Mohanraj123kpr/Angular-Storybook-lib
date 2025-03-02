
import type { Meta, StoryObj } from '@storybook/angular';

import { fn } from '@storybook/test';

import { SelectComponent } from './select.component';

export const ActionsData = {
    onSelectionChange: fn()
};

const meta: Meta<SelectComponent> = {
  title: 'Components/Select',
  component: SelectComponent,
  //👇 Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
  tags: ['autodocs'],
  args: {
    ...ActionsData,
  },
};

export default meta;
type Story = StoryObj<SelectComponent>;

export const Default: Story = {
  args: {
    appearance : 'fill',
    options : ['option 1', 'option 2']
  },
};

export const Outline: Story = {
  args: {
    appearance : 'outline',
    options : ['option 1', 'option 2']
  },
};

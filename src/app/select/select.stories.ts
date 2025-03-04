
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
    options : [{
      value: 'Option 1',
      icon: ''
    },
    {
      value: 'Option 2',
      icon: ''
    }
  ]
  },
};

export const Outline: Story = {
  args: {
    appearance : 'outline',
    options : [{
      value: 'Option 1',
      icon: 'assured_workload'
    },
    {
      value: 'Option 2',
      icon: 'shopping_cart_checkout'
    }
  ]
  },
};

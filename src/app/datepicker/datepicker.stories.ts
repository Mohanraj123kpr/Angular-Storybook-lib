import { DatepickerComponent } from './datepicker.component';
import { MatIconModule } from '@angular/material/icon';
import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';

import { fn } from '@storybook/test';


export const ActionsData = {
  onDateChange	: fn(),
  onInputChange: fn()
};

const meta: Meta<DatepickerComponent> = {
  title: 'Components/DatePicker',
  component: DatepickerComponent,
  //👇 Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
  tags: ['autodocs'],
  args: {
    // ...ActionsData,
  },
  decorators: [
    moduleMetadata({
      imports: [MatIconModule],
    }),
  ],
};

export default meta;
type Story = StoryObj<DatepickerComponent>;

export const Default: Story = {
  args: {
    appearance : 'fill',
  },
};

export const Outline: Story = {
  args: {
    appearance : 'outline',
  },
};

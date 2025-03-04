import { Component, EventEmitter, Input, Output, input } from '@angular/core';
import {ChangeDetectionStrategy} from '@angular/core';
import {provideMomentDateAdapter} from '@angular/material-moment-adapter';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatDatepickerInputEvent, MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {provideNativeDateAdapter} from '@angular/material/core';
import { SharedModule } from '../shared.module';
import * as _moment from 'moment';
import {default as _rollupMoment} from 'moment';

const moment = _rollupMoment || _moment;

export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'LL',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};


@Component({
  selector: 'app-datepicker',
  imports: [SharedModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, FormsModule, ReactiveFormsModule],
  providers: [provideMomentDateAdapter(MY_FORMATS),],
  templateUrl: './datepicker.component.html',
  styleUrl: './datepicker.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DatepickerComponent {
  @Input() appearance : 'fill'| 'outline' = 'fill'
  @Output() dateChange = new EventEmitter<Date | null>;
  @Output() inputChange = new EventEmitter<Date | null>;
  readonly date = new FormControl(moment());
  events: string[] = [];


  constructor() {
  }

  onInputChange(event: MatDatepickerInputEvent<moment.Moment>) {    
    const selectedDate = event.value ? event.value.toDate() : null;
    this.inputChange.emit(selectedDate)
  }

  onDateChange(event: MatDatepickerInputEvent<moment.Moment>) {    
    const selectedDate = event.value ? event.value.toDate() : null;
    this.dateChange.emit(selectedDate)
  }
}


import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from '../shared.module';

@Component({
  selector: 'app-select',
  imports: [MatSelectModule, MatIconModule, CommonModule, SharedModule],
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss'
})
export class SelectComponent {

  @Input() options: string[] = [];
  @Input() appearance: 'fill' | 'outline'  = 'outline';
  @Input() placeholder: string = '';
  @Input() disabled: boolean = false;
  @Input() height: string = 'auto';
  @Input() width: string = '100%';
  @Input() value: any = '';
  @Output() selectionChange = new EventEmitter<string>(); // Event emitter for selection change

  constructor() { }

  ngOnInit(): void {
  }

  onSelectionChange(event: any): void {
    console.log("this method is called..");
    this.selectionChange.emit(event.value);
  }
}

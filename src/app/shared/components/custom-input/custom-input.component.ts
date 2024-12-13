import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss'],
})
export class CustomInputComponent {
  @Input() labelName = '';
  @Input() control!: FormControl<any> | null;
  @Input() type = 'text';
  @Input() placeholder = '';
  constructor() {}
}

import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SelectOption } from '../../models/subscribe.model';

@Component({
  selector: 'app-custom-select',
  templateUrl: './custom-select.component.html',
  styleUrls: ['./custom-select.component.scss'],
})
export class CustomSelectComponent {
  @Input() options: SelectOption[] = [];
  @Input() labelName = '';
  @Input() control!: FormControl<any> | null;
  @Input() placeholder = '';
  constructor() {}
}

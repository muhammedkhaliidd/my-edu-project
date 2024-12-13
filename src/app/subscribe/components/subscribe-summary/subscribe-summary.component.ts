import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-subscribe-summary',
  templateUrl: './subscribe-summary.component.html',
  styleUrls: ['./subscribe-summary.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class SubscribeSummaryComponent {
  currency = 'SAR';
  summary = {
    name: 'Mystery Box',
    count: 1,
    type: 'monthly',
    price: 456,
    subtotal: 456,
    shipping: 0,
    tax: 4.0,
    total: 460,
  };
  constructor() {}
}

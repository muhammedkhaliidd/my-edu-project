import { Component, Input } from '@angular/core';

interface Link {
  label: string;
  url: string;
}
@Component({
  selector: 'app-page-footer',
  templateUrl: './page-footer.component.html',
  styleUrls: ['./page-footer.component.scss'],
})
export class PageFooterComponent {
  @Input() showSubscribe = false;
  links: Link[] = [
    { label: 'Link One', url: '/one' },
    { label: 'Link Two', url: '/two' },
    { label: 'Link Three', url: '/three' },
    { label: 'Link Four', url: '/four' },
    { label: 'Link Five', url: '/five' },
  ];
  email = '';
  constructor() {}
}

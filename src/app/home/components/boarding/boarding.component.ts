import { Component, OnInit } from '@angular/core';
import { IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-boarding',
  templateUrl: './boarding.component.html',
  styleUrls: ['./boarding.component.scss'],
  standalone: true,
  imports: [IonButton],
})
export class BoardingComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}

import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { SubscribeFG, SubscribeInfoFG } from '../shared/models/subscribe.model';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.scss'],
})
export class SubscribeComponent implements OnInit {
  subscribeFG!: FormGroup<SubscribeFG>;
  step = 1;
  constructor(private readonly fb: FormBuilder) {}

  ngOnInit() {
    this.initSubscribeFG();
  }

  initSubscribeFG() {
    this.subscribeFG = new FormGroup<SubscribeFG>({
      info: this.fb.group<SubscribeInfoFG>({
        name: this.fb.nonNullable.control('', Validators.required),
        email: this.fb.nonNullable.control('', [
          Validators.required,
          Validators.email,
        ]),
        childName: this.fb.nonNullable.control('', Validators.required),
        childBirthYear: this.fb.nonNullable.control(null, Validators.required),
        childBirthMonth: this.fb.nonNullable.control(null, Validators.required),
        childBirthDay: this.fb.nonNullable.control(null, Validators.required),
        childGender: this.fb.nonNullable.control(null, Validators.required),
        childGrade: this.fb.nonNullable.control(null, Validators.required),
        topics: this.fb.nonNullable.control([], Validators.required),
      }),
    });

    this.subscribeInfoFG.valueChanges.subscribe((value) => {
      console.log('subscribeInfoFG', this.subscribeInfoFG.controls);
    });
  }

  get subscribeInfoFG(): FormGroup<SubscribeInfoFG> {
    return this.subscribeFG.get('info') as FormGroup<SubscribeInfoFG>;
  }
}

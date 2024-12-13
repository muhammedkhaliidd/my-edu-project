import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { SubscribeFG, SubscribeInfoFG } from '../shared/models/subscribe.model';
import { strictEmailValidator } from '../shared/validators/strict-email.validators';

interface Breadcrumb {
  title: string;
  step: number;
}

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.scss'],
})
export class SubscribeComponent implements OnInit {
  subscribeFG!: FormGroup<SubscribeFG>;

  breadCrumbs: Breadcrumb[] = [
    { title: 'Cart', step: 0 },
    { title: 'Information', step: 1 },
    { title: 'Shipping', step: 2 },
    { title: 'Payment', step: 3 },
  ];
  currentBreadCrumb: Breadcrumb = {
    title: 'Information',
    step: 1,
  };
  constructor(private readonly fb: FormBuilder) {}

  ngOnInit() {
    this.initSubscribeFG();
  }

  // Initialize the subscribe form group
  initSubscribeFG() {
    this.subscribeFG = new FormGroup<SubscribeFG>({
      info: this.fb.group<SubscribeInfoFG>({
        name: this.fb.nonNullable.control('', Validators.required),
        email: this.fb.nonNullable.control('', [
          Validators.required,
          Validators.email,
          strictEmailValidator(),
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

  breadCrumbClicked(breadCrumb: Breadcrumb) {
    this.currentBreadCrumb = breadCrumb;
  }
}

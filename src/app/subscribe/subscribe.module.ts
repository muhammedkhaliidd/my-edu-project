import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubscribeRoutingModule } from './subscribe-routing.module';
import { IonicModule } from '@ionic/angular';
import { SubscribeComponent } from './subscribe.component';
import { SubscribeInfoFormComponent } from './components/subscribe-info-form/subscribe-info-form.component';
import { SubscribeSummaryComponent } from './components/subscribe-summary/subscribe-summary.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SubscribeComponent],
  imports: [
    CommonModule,
    SubscribeRoutingModule,
    IonicModule,
    SubscribeInfoFormComponent,
    SubscribeSummaryComponent,
    SharedModule,
    ReactiveFormsModule,
  ],
})
export class SubscribeModule {}

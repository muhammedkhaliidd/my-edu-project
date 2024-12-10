import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { BoardingComponent } from './components/boarding/boarding.component';
import { EnrollStepsComponent } from './components/enroll-steps/enroll-steps.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    SharedModule,
    BoardingComponent,
    EnrollStepsComponent,
  ],
  declarations: [HomePage],
})
export class HomePageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { PageFooterComponent } from './components/page-footer/page-footer.component';
import { IonicModule } from '@ionic/angular';
import { CustomInputComponent } from './components/custom-input/custom-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomSelectComponent } from './components/custom-select/custom-select.component';

@NgModule({
  declarations: [
    PageHeaderComponent,
    PageFooterComponent,
    CustomInputComponent,
    CustomSelectComponent,
  ],
  imports: [CommonModule, IonicModule, ReactiveFormsModule, FormsModule],
  exports: [
    PageHeaderComponent,
    PageFooterComponent,
    CustomInputComponent,
    CustomSelectComponent,
  ],
})
export class SharedModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { PageFooterComponent } from './components/page-footer/page-footer.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [PageHeaderComponent, PageFooterComponent],
  imports: [CommonModule, IonicModule],
  exports: [PageHeaderComponent, PageFooterComponent],
})
export class SharedModule {}

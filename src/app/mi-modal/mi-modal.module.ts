import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MiModalComponent } from './mi-modal.component';
import { WorkedPeriodDirective } from '../directives/worked-period.directive';
import { MiModalService } from './mi-modal.service';


@NgModule({
  declarations: [MiModalComponent],
  imports: [
    CommonModule,
    WorkedPeriodDirective
  ],
  exports: [MiModalComponent]
})
export class MiModalModule { }

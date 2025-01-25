import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MiNotificationComponent } from './mi-notification.component';


@NgModule({
  declarations: [MiNotificationComponent],
  imports: [
    CommonModule
  ],
  exports: [MiNotificationComponent]
})
export class MiNotificationModule { }

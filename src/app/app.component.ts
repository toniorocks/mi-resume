import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopMenuButtonComponent } from './top-menu-button/top-menu-button.component';
import { MiNotificationModule } from './mi-notification/mi-notification.module';
import { MiModalComponent } from "./mi-modal/mi-modal.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TopMenuButtonComponent, MiNotificationModule, MiModalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'mi-resume';

  constructor(
  ) {}

  clickedItem(item: string): void {
    if (item === "Edit Timeline") {
      console.log("Edit Timeline clicked");
    } else if (item === "Log Out") {
      console.log("Log Out clicked");
    }
  }



}

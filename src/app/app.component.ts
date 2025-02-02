import { Component, HostListener, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { TopMenuButtonComponent } from './top-menu-button/top-menu-button.component';
import { MiNotificationModule } from './mi-notification/mi-notification.module';
import { MiModalComponent } from "./mi-modal/mi-modal.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, RouterOutlet, TopMenuButtonComponent, MiNotificationModule, MiModalComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'mi-resume';
  state: boolean = true;
  currentYear: number = new Date().getFullYear();

  constructor(
  ) {}
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }

  clickedItem(item: string): void {
    if (item === "Edit Timeline") {
      console.log("Edit Timeline clicked");
    } else if (item === "Log Out") {
      console.log("Log Out clicked");
    }
  }



}

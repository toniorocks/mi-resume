import { Component, HostListener, inject, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { TopMenuButtonComponent } from './top-menu-button/top-menu-button.component';
import { MiNotificationModule } from './mi-notification/mi-notification.module';
import { MiModalComponent } from "./mi-modal/mi-modal.component";
import { CommonModule } from '@angular/common';
import { MiModalModule } from './mi-modal/mi-modal.module';
import { MiModalService } from './mi-modal/mi-modal.service';
import { TimelineStore } from './state/timeline.store';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterOutlet, TopMenuButtonComponent, MiNotificationModule, MiModalModule],
  providers: [],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'mi-resume';
  state: boolean = true;
  currentYear: number = new Date().getFullYear();

  readonly store = inject(TimelineStore);

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

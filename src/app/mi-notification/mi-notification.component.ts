import { Component, OnInit } from '@angular/core';
import { MiNotificationService } from './mi-notification.service';

@Component({
  selector: 'app-mi-notification',
  template: `<div *ngIf="notification" class="notification">
              {{ notification }}
            </div> `,
  styles: [` .notification { background-color: #ffcc00; padding: 10px; border-radius: 5px; position: fixed; top: 10px; right: 10px; z-index: 1000; } `]
})
export class MiNotificationComponent implements OnInit {
  notification: string = '';
  constructor(private notificationService: MiNotificationService) { }
  ngOnInit(): void { this.notificationService.notifications$.subscribe(message => this.notification = message); }
}

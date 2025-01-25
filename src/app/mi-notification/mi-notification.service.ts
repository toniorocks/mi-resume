import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MiNotificationService {
  private notificationSubject = new BehaviorSubject<string>('');
  public notifications$ = this.notificationSubject.asObservable();

  constructor() {}

  showNotification(message: string) {
    this.notificationSubject.next(message);
    setTimeout(() => { this.clearNotification(); }, 3000); // Clear notification after 3 seconds
  }

  clearNotification() {
    this.notificationSubject.next('');
  }
}

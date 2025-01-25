import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TimelineItem } from '../interfaces/timeline-item';


@Injectable({
  providedIn: 'root'
})
export class MiModalService {

  private modalSubject = new BehaviorSubject<TimelineItem | null>(null);
  public modals$ = this.modalSubject.asObservable();

  constructor() { }

  showModal(item: TimelineItem | null) {
    if (item) {
      this.modalSubject.next(item);
    }
  }

  closeModal() {
    this.modalSubject.next(null);
  }
}

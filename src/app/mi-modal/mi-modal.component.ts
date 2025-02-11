import { Component, OnInit } from '@angular/core';
import { MiModalService } from './mi-modal.service';
import { TimelineItem } from '../interfaces/timeline-item';
import { WorkedPeriodDirective } from '../directives/worked-period.directive';

declare var bootstrap: any;

@Component({
  selector: 'app-mi-modal',
  templateUrl: './mi-modal.component.html',
  styleUrl: './mi-modal.component.scss',
})
export class MiModalComponent implements OnInit {
  modal: any;
  activeItem: TimelineItem | null = null;
  constructor(private modalService: MiModalService) { }
  ngOnInit(): void {
    console.log('MiModalComponent initialized');
    this.modalService.modals$.subscribe((item: TimelineItem | null) => {
      console.log('item -------->', item);
      if (item !== null) {
        this.activeItem = item;
        this.openModal();
      }

    });
  }

  openModal(): void {
    const modalElement = document.getElementById('mainModal');
    if (modalElement) {
      this.modal = new bootstrap.Modal(modalElement);
      this.modal.show();
    } else {
      console.error('Modal element not found');
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { ElapsedPeriodDirective } from '../directives/elapsed-period.directive';
import { WorkedPeriodDirective } from '../directives/worked-period.directive';
import { MiModalService } from '../mi-modal/mi-modal.service';


@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [ElapsedPeriodDirective, WorkedPeriodDirective],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss'
})
export class TimelineComponent implements OnInit {

  items: any[];
  filteredYears: number[];
  constructor(private modal: MiModalService) {
    this.items = environment.data.timeline.items;
    this.filteredYears = this.getItemsYears();
  }
  ngOnInit(): void {
    console.log('Timeline component initialized');
    //this.modal.triggerModal();
  }

  private getItemsYears(): number[] {
    return Array.from(this.items.map(item => new Date(item.startDate).getFullYear()));
  }

  public openItemDetail(item: any): void {
    console.log('Item selected', item);
    this.modal.showModal(item);
  }

}

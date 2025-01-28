import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { ElapsedPeriodDirective } from '../directives/elapsed-period.directive';
import { WorkedPeriodDirective } from '../directives/worked-period.directive';
import { MiModalService } from '../mi-modal/mi-modal.service';
import { FixedPositionDirective } from '../directives/fixed-on-scroll.directive';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [ElapsedPeriodDirective, WorkedPeriodDirective, FixedPositionDirective, CommonModule],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss'
})
export class TimelineComponent implements OnInit {

  items: any[];
  filteredYears: number[];
  activeYear: number | null = null;

  constructor(private modal: MiModalService) {
    this.items = environment.data.timeline.items;
    this.filteredYears = this.getItemsYears();
  }
  ngOnInit(): void {
    console.log('Timeline component initialized');
  }

  private getItemsYears(): number[] {
    const years = this.items.map(item => new Date(item.startDate).getFullYear());
    return Array.from(new Set(years));
  }

  public openItemDetail(item: any): void {
    console.log('Item selected', item);
    this.modal.showModal(item);
  }

  public highlightItemByYear(year: number): void {
    this.activeYear = year;
    this.items.forEach(item => {
      item.active = new Date(item.startDate).getFullYear() === year;
    });
    const firstItem = this.items.find(item => item.active);
    const id:string = firstItem ? `item-${firstItem.id}` : '';
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }


  public getMainClass(item: any): string {
    return item.active ? 'highlight' : '';
  }

}

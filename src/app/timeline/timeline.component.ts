import { Component, Inject, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { ElapsedPeriodDirective } from '../directives/elapsed-period.directive';
import { WorkedPeriodDirective } from '../directives/worked-period.directive';
import { MiModalService } from '../mi-modal/mi-modal.service';
import { FixedPositionDirective } from '../directives/fixed-on-scroll.directive';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { JobsService } from '../services/jobs.service';
import { HttpClientModule } from '@angular/common/http';
import { TimelineItem } from '../interfaces/timeline-item';
import { MiModalModule } from '../mi-modal/mi-modal.module';
import { MiModalComponent } from '../mi-modal/mi-modal.component';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    ElapsedPeriodDirective,
    WorkedPeriodDirective,
    FixedPositionDirective,
    RouterModule,
    MiModalModule
  ],
  providers: [JobsService],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss'
})
export class TimelineComponent implements OnInit {

  items: any[] = [];
  filteredYears: number[] = [];
  activeYear: number | null = null;

  constructor(
    private modal: MiModalService,
    @Inject(JobsService) private jobsService: JobsService
  ) {
    this.fetchItems();
  }

  ngOnInit(): void {
    console.log('Timeline component initialized');
  }

  private getItemsYears(items:TimelineItem[]): number[] {
    const years = items.map(item => new Date(item.startDate).getFullYear());
    return Array.from(new Set(years));
  }

  private fetchItems(): void {
    this.jobsService.getJobs().subscribe(items => {
      this.items = items;
      this.filteredYears = this.getItemsYears(items);
    });
  }

  public openItemDetail(item: any): void {
    console.log('Item selected', item);
    this.modal.showModal(item);
  }

  public getMainClass(item: TimelineItem): string {
    return item.active ? 'highlight' : '';
  }

  public highlightItemByYear(year: number): void {
    this.activeYear = year;
    this.items.forEach(item => {
      item.active = new Date(item.startDate).getFullYear() === year;
    });
    this.scrollToItem(year);
  }

  public scrollToItem(year: number): void {
    const item = this.items.find(i => new Date(i.startDate).getFullYear() === year);
    if (item) {
      const element = document.getElementById(`item-${item.id}`);
      console.log('Scrolling to item', item.id, element);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }

  trackById(index: number, item: any): number {
    return item.id;
  }

  trackByIndex(index: number): number {
    return index;
  }
}

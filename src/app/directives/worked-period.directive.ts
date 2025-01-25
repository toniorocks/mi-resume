import { AfterViewInit, Directive, ElementRef, HostListener, Input } from '@angular/core';
import { TimelineItem } from '../interfaces/timeline-item';
import { DatePipe } from '@angular/common';

@Directive({
  selector: '[appWorkedPeriod]',
  standalone: true,
  providers: [DatePipe]
})
export class WorkedPeriodDirective implements AfterViewInit{

  @Input()
  timeline!: TimelineItem;

  constructor(private el: ElementRef, private datePipe: DatePipe) {}
  ngAfterViewInit(): void {
    this.calculateWorkedPeriod(this.timeline);
  }


  private calculateWorkedPeriod(timeline:TimelineItem): void {
    if (!timeline.endDate) {
      this.el.nativeElement.innerText = ` Current position since ${this.datePipe.transform(new Date(timeline.startDate), 'MMMM yyyy')}`;
      return;
    }

    const start = new Date(timeline.startDate);
    const end = timeline.endDate ? new Date(timeline.endDate) : new Date();
    const timeDiff = Math.abs(end.getTime() - start.getTime());
    const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
    const weeksDiff = Math.ceil(daysDiff / 7);
    const monthsDiff = Math.ceil(daysDiff / 30);
    const yearsDiff = Math.ceil(daysDiff / 365);


    const startDateFormatted = this.datePipe.transform(start, 'MMMM yyyy');
    const endDateFormatted = this.datePipe.transform(end, 'MMMM yyyy');

    if(yearsDiff > 0) {
      this.el.nativeElement.innerText = ` Work experience: ${yearsDiff} year${yearsDiff > 1 ? 's' : ''} from ${startDateFormatted} to ${endDateFormatted}`;
      return;
    }

    if(yearsDiff < 1 && monthsDiff > 0) {
      this.el.nativeElement.innerText = ` Work expirience: ${monthsDiff} month${monthsDiff > 1 ? 's' : ''} from ${startDateFormatted} to ${endDateFormatted}`;
      return;
    }

    if((yearsDiff < 1 && monthsDiff < 1) && weeksDiff > 0) {
      this.el.nativeElement.innerText = ` Work expirience: ${weeksDiff} week${weeksDiff > 1 ? 's' : ''} from ${startDateFormatted} to ${endDateFormatted}`;
      return;
    }

    if((yearsDiff < 1 && monthsDiff < 1) && weeksDiff < 1 && daysDiff > 0) {
      this.el.nativeElement.innerText = ` Work expirience: ${daysDiff} day${daysDiff > 1 ? 's' : ''} from ${startDateFormatted} to ${endDateFormatted}`;
      return;
    }
  }

}

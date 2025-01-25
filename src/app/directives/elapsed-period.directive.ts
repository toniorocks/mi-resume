import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { TimelineItem } from '../interfaces/timeline-item';

@Directive({
  selector: '[appElapsedPeriod]',
  standalone: true
})
export class ElapsedPeriodDirective implements OnInit {

  @Input() dates: TimelineItem | null = null;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.addIcon();
    this.calculateWorkedPeriod();
  }

  private addIcon(): void {
    const icon = this.renderer.createElement('i');
    this.renderer.addClass(icon, 'bi');
    this.renderer.addClass(icon, 'bi-alarm');
    this.renderer.insertBefore(this.el.nativeElement, icon, this.el.nativeElement.firstChild);
  }

  private calculateWorkedPeriod(): void {
    if (!this.dates) {
      return;
    }

    let textContent = '';

    if (!this.dates.endDate) {
      textContent = ` Current position`;
    } else {
      const start = new Date(this.dates.endDate);
      const end = new Date();
      const timeDiff = Math.abs(end.getTime() - start.getTime());
      const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
      const weeksDiff = Math.ceil(daysDiff / 7);
      const monthsDiff = Math.ceil(daysDiff / 30);
      const yearsDiff = Math.ceil(daysDiff / 365);

      if (yearsDiff > 0) {
        textContent = ` ${yearsDiff} year${yearsDiff > 1 ? 's' : ''} ago`;
      } else if (monthsDiff > 0) {
        textContent = ` ${monthsDiff} month${monthsDiff > 1 ? 's' : ''} ago`;
      } else if (weeksDiff > 0) {
        textContent = ` ${weeksDiff} week${weeksDiff > 1 ? 's' : ''} ago`;
      } else {
        textContent = ` ${daysDiff} day${daysDiff > 1 ? 's' : ''} ago`;
      }
    }

    // Añadir el texto calculado después del icono
    const textNode = this.renderer.createText(textContent);
    this.renderer.appendChild(this.el.nativeElement, textNode);
  }
}

import { Directive, ElementRef, HostListener, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appFixedPosition]',
  standalone: true
})
export class FixedPositionDirective implements AfterViewInit {
  private fixmeTop: number = 0;

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    this.fixmeTop = this.el.nativeElement.getBoundingClientRect().top + window.scrollY;
  }

  @HostListener('window:scroll', []) onWindowScroll() {
    const currentScroll = window.scrollY;
    const curreentElementWidth = this.el.nativeElement.getBoundingClientRect().width;

    if (currentScroll >= this.fixmeTop) {
      this.el.nativeElement.style.position = 'fixed';
      this.el.nativeElement.style.top = '0';
      this.el.nativeElement.style.width = curreentElementWidth + 'px';
    } else {
      this.el.nativeElement.style.position = 'static';
      this.el.nativeElement.style.width = 'auto';
    }
  }

  getElementPosition(): { top: number, left: number } {
    const rect = this.el.nativeElement.getBoundingClientRect();
    return {
      top: rect.top + window.scrollY,
      left: rect.left + window.scrollX
    };
  }
}

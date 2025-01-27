import { AfterViewInit, Directive, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective implements AfterViewInit, OnChanges {

  @Input()
  highlight: boolean = false;

  constructor() { }
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }

  ngOnChanges(): void {
    if (this.highlight)
      this.highlightElement();
  }

  private highlightElement(): void {
    console.info('Highlighting element');
  }

}

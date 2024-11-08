import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { TimelineItem } from '../timeline.component';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'item-aside',
  standalone: true,
  imports: [],
  template: `
    <div class="timeline-item-aside" data-aos="fade-right">
      <div class="timeline-item-aside-content">
        <h3>Aside</h3>
        <p>Aside content</p>
      </div>
    </div>
  `,
  encapsulation: ViewEncapsulation.None
})
export class ItemAsideComponent {
  constructor() {
    console.log('ItemAsideComponent created');
  }
}

@Component({
  selector: 'app-tl-item',
  standalone: true,
  imports: [],
  templateUrl: './tl-item.component.html',
  styleUrl: './tl-item.component.scss',
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('screen', [
      state('outLeft', style({ opacity: 0, transform: 'translateX(-100%)' })),
      state('outRight', style({ opacity: 0, transform: 'translateX(100%)' })),
      state('in', style({ opacity: 1, transform: 'translateX(0)' })),
      transition('in => outLeft', animate('1000ms ease-in')),
      transition('in => outRight', animate('1000ms ease-in')),
      transition('outLeft => in', animate('1000ms ease-out')),
      transition('outRight => in', animate('1000ms ease-out')),
    ])
  ]
})
export class TlItemComponent implements OnInit, OnChanges {

  @ViewChild('asideItem', { read: ViewContainerRef, static: true }) asideItem: ViewContainerRef | undefined;

  direction:string = 'outLeft';

  @Input() item: TimelineItem | undefined;
  //@Input() visibleItem: TimelineItem | undefined;

  constructor() {
    console.log('TlItemComponent created');

  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('TlItemComponent ngOnChanges', changes);
    if (changes['item'] && !changes['item'].isFirstChange()) {
      //this.triggerAnimation();
    }
  }

  ngOnInit(): void {
    if (this.item && this.item.id % 2 === 0) {
      this.direction = 'outRight';
    } else {
      this.direction = 'outLeft';
    }
  }

  triggerAnimation() {
    console.log('triggerAnimation', this.direction);
  }

  public toggleDescription(): void {

  }


}



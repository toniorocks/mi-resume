import { Component, Input, ViewEncapsulation } from '@angular/core';
import { TimelineItem } from '../timeline.component';

@Component({
  selector: 'app-tl-item',
  standalone: true,
  imports: [],
  templateUrl: './tl-item.component.html',
  styleUrl: './tl-item.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class TlItemComponent {

  @Input() item: TimelineItem | undefined;


}

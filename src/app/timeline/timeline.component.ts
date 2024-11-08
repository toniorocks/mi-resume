import { Component, HostListener, OnInit, ViewChildren, ViewEncapsulation } from '@angular/core';

import * as Aos from 'aos';

import { environment } from '../../environments/environment';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { TlItemComponent } from "./tl-item/tl-item.component";

export interface TimelineItem {
  id: number;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string | null;
  description: string[];
  visible: boolean | null;
}

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [TlItemComponent],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss',
  animations: [
    trigger('fade', [
      state('desvanecido', style({ opacity: 0 })),
      state('visible', style({ opacity: 1 })),
      transition('desvanecido => visible', animate('1000ms ease-in')),
      transition('visible => desvanecido', animate('1000ms ease-out')),
    ])
  ],
  encapsulation: ViewEncapsulation.None
})
export class TimelineComponent implements OnInit {

  items:TimelineItem[] = environment.data.timeline.items;
  animationState = 'desvanecido';
  closestElement: HTMLElement | null = null;
  @ViewChildren(TlItemComponent) tlItems: TlItemComponent[] | undefined;

  constructor() {
    console.log('TimelineComponent created', environment);
  }
  ngOnInit(): void {
    Aos.init();
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.scrollItems();
  }

  private scrollItems(): void {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const line:HTMLElement | null = document.querySelector('#vertical-line');
    if (line) {
      line.style.height = `${scrollPosition}px`;
    }

    //encontrar el elemento que se encuentra mas cerca del centro de la pantalla
    const elements = document.querySelectorAll('.timeline-item');
    let closestElement: HTMLElement | null = null;
    let closestDistance = Number.MAX_VALUE;

    elements.forEach((element) => {
      const rect = element.getBoundingClientRect();
      const distance = Math.abs(rect.top - windowHeight / 2);
      element = element as HTMLElement;
      const item = this.items.find((item) => item.id === parseInt(element.getAttribute('id') as string, 10));
      if (distance < closestDistance && item !== undefined) {
        if (closestElement !== null) {
          if(closestElement !== element) {
            item.visible = false;
          }
        }
        closestElement = element as HTMLElement;
        item.visible = true;
        this.triggerChildAnimation(item.id);
        console.log('triggerChildAnimation 2', item.id);

        closestDistance = distance;
        this.closestElement = closestElement;
      } else {
        if(item !== undefined)
          item.visible = false;
      }
    });

    //console.log('scrollPosition', scrollPosition, 'windowHeight', windowHeight, 'documentHeight', documentHeight, 'closestElement', closestElement);

    // Check if the scroll position is at the middle of the page
    if (scrollPosition > (documentHeight - windowHeight) / 2) {
      this.animationState = 'visible';
    } else {
      this.animationState = 'desvanecido';
    }
  }

  private triggerChildAnimation(itemId: number): void {
    const activeChildComponent = this.tlItems?.find((item) => item.item?.id === itemId);
    if (activeChildComponent) {
      activeChildComponent.triggerAnimation();
    }
  }

}



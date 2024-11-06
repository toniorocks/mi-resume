import { Component, HostListener, OnInit, ViewEncapsulation } from '@angular/core';

import * as Aos from 'aos';

import { environment } from '../../environments/environment.development';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { TlItemComponent } from "./tl-item/tl-item.component";

export interface TimelineItem {
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
  constructor() {
    console.log('TimelineComponent created', environment);
  }
  ngOnInit(): void {
    Aos.init();
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    //encontrar el elemento que se encuentra mas cerca del centro de la pantalla
    const elements = document.querySelectorAll('.timeline-item');
    let closestElement: HTMLElement | null = null;
    let closestDistance = Number.MAX_VALUE;

    elements.forEach((element) => {
      const rect = element.getBoundingClientRect();
      const distance = Math.abs(rect.top - windowHeight / 2);
      element = element as HTMLElement;
      if (distance < closestDistance) {
        if (closestElement !== null) {
          //closestElement.setAttribute('data-state', 'hidden');
          if(closestElement !== element) {
            closestElement.removeAttribute('data-state');
            closestElement.style.backgroundColor = 'white';
          }

        }
        closestElement = element as HTMLElement;
        closestElement.setAttribute('data-state', 'visible');
        //add background color
        closestElement.style.backgroundColor = 'red';

        closestDistance = distance;
      } else {
        element.removeAttribute('data-state');
        (element as HTMLElement).style.backgroundColor = 'white';
      }
    });

    console.log('scrollPosition', scrollPosition, 'windowHeight', windowHeight, 'documentHeight', documentHeight, 'closestElement', closestElement);

    // Check if the scroll position is at the middle of the page
    if (scrollPosition > (documentHeight - windowHeight) / 2) {
      this.animationState = 'visible';
    } else {
      this.animationState = 'desvanecido';
    }
  }

}



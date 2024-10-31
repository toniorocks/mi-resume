import { Component, OnInit } from '@angular/core';

import * as Aos from 'aos';

import { environment } from '../../environments/environment.development';

export interface TimelineItem {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string | null;
  description: string[];
}

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss'
})
export class TimelineComponent implements OnInit {
  items:TimelineItem[] = environment.data.timeline.items;
  constructor() {
    console.log('TimelineComponent created', environment);
  }
  ngOnInit(): void {
    Aos.init();
  }
}

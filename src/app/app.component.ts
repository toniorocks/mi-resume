import { Component, HostListener, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopMenuButtonComponent } from './top-menu-button/top-menu-button.component';
import { TimelineComponent } from "./timeline/timeline.component";
import { trigger, state, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TopMenuButtonComponent, TimelineComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('fade', [
      state('desvanecido', style({ opacity: 0 })),
      state('visible', style({ opacity: 1 })),
      transition('desvanecido => visible', animate('1000ms ease-in')),
      transition('visible => desvanecido', animate('1000ms ease-out')),
    ])
  ]
})
export class AppComponent implements OnInit {
  title = 'mi-resume';
  state: boolean = true;


  ngOnInit(): void {
    setTimeout(() => {
      this.state = false;
    }, 1000);
  }





  public clickedItem(item: string): void {
    console.log('clickedItem', item);
  }

}

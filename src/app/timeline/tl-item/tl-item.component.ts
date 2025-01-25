import { Component, Input, OnInit, Renderer2, ViewEncapsulation, AfterViewChecked, AfterViewInit } from '@angular/core';
import { TimelineItem } from '../timeline.component';
import { trigger, state, style, transition, animate } from '@angular/animations';

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
export class TlItemComponent implements OnInit, AfterViewInit {

  direction:string = 'outLeft';
  asideVisible = false;
  newDiv: HTMLDivElement | null = null;

  @Input() item: TimelineItem | undefined;

  constructor(private renderer: Renderer2) {  }

  ngOnInit(): void {

    this.direction = (this.item && this.item.id % 2 === 0) ? 'outRight' : 'outLeft';

  }

  ngAfterViewInit(): void {
    this.createDivElement();
  }

  private createDivElement(): void {
    const newDiv = this.renderer.createElement('div');
    const text = this.renderer.createText('Este es un div creado dinámicamente');
    this.renderer.appendChild(newDiv, text);
    this.renderer.setStyle(newDiv, 'background-color', 'lightblue');
    this.renderer.setStyle(newDiv, 'width', '300px');
    this.renderer.setStyle(newDiv, 'position', 'relative');
    this.renderer.setStyle(newDiv, 'display', 'block');
    this.renderer.setStyle(newDiv, 'height', '10vh');
    if(this.direction === 'outLeft'){
      this.renderer.setStyle(newDiv, 'float', 'left');
      this.renderer.setStyle(newDiv, 'margin-top', '15vh');
    }else{
      this.renderer.setStyle(newDiv, 'margin-top', '-25vh');
      this.renderer.setStyle(newDiv, 'float', 'right');
    }
    this.renderer.setStyle(newDiv, 'visibility', 'hidden');
    this.newDiv = newDiv;
    if (this.item) {
      const parentElement = this.renderer.selectRootElement(`#li-item-${this.item.id}`, true);
      this.renderer.appendChild(parentElement, this.newDiv);
    }
  }





  // triggerAnimation(itemId: number): void {
  //   const parentElement = this.renderer.selectRootElement('#li-item-' + itemId, true);

  //   if (this.item && this.item.id === itemId) {
  //     const newDivId = 'new-div-' + itemId;
  //     this.asideVisible = true;
  //     this.newDiv = this.renderer.createElement('div');

  //     const text = this.renderer.createText('Este es un div creado dinámicamente');
  //     this.renderer.appendChild(this.newDiv, text);
  //     this.renderer.addClass(this.newDiv, 'mi-clase');
  //     this.renderer.setStyle(this.newDiv, 'background-color', 'lightblue');
  //     if(this.item.visible){

  //       if (parentElement && !parentElement.attributes['aside-visible']) {

  //         this.renderer.setAttribute(parentElement, 'aside-visible', 'true');
  //         this.renderer.appendChild(parentElement, this.newDiv);

  //       }
  //       console.log(parentElement.attributes);
  //       //
  //     }
  //   }

  // }

  public toggleDescription(): void {

  }


}



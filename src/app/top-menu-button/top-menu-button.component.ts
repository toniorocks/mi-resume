import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

const items = ["Edit Timeline", "Log Out"];


@Component({
  selector: 'app-top-menu-button',
  standalone: true,
  templateUrl: './top-menu-button.component.html',
  styleUrls: ['./top-menu-button.component.scss']
})
export class TopMenuButtonComponent {

  @ViewChild('dropdownMenu') dropdownMenu: ElementRef | undefined;
  @Output() _clickedItem = new EventEmitter<string>();

  items = items;

  public toggle(): void {
    const dropdownMenuElement = this.dropdownMenu?.nativeElement;
    if (dropdownMenuElement) {
      const isHidden = window.getComputedStyle(dropdownMenuElement).visibility === 'hidden';
      if (isHidden) {
        dropdownMenuElement.classList.add('show');
        document.addEventListener('click', this.onDocumentClick);
      } else {
        dropdownMenuElement.classList.remove('show');
        document.removeEventListener('click', () => {});
      }
    }
  }

  public clickElement(i:number): void {
    this._clickedItem.emit(this.items[i]);
    const dropdownMenuElement = this.dropdownMenu?.nativeElement;
    if (dropdownMenuElement)
      dropdownMenuElement.classList.remove('show');
  }

  private onDocumentClick(event: MouseEvent): void {
    const dropdownMenuElement = document.getElementById('dropdownMenu');              //had to use getElementById because ElementRef was not working
    const dropdownButtonElement = document.getElementById('dropdownButton');          //had to use getElementById because ElementRef was not working
    if (dropdownMenuElement && !dropdownMenuElement.contains(event.target as Node) && dropdownButtonElement && !dropdownButtonElement.contains(event.target as Node)) {
      dropdownMenuElement?.classList.remove('show');
      document.removeEventListener('click', () => {});
    }
  }
}

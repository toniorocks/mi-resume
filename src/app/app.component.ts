import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopMenuButtonComponent } from './top-menu-button/top-menu-button.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TopMenuButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'mi-resume';

  clickedItem(item: string): void {
    if (item === "Edit Timeline") {
      console.log("Edit Timeline clicked");
    } else if (item === "Log Out") {
      console.log("Log Out clicked");
    }
  }

}

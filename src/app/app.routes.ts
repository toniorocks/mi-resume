import { Routes } from '@angular/router';
import { TimelineComponent } from './timeline/timeline.component';
import { MainComponent } from './main/main.component';
import { SkillsComponent } from './skills/skills.component';

export const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'experience', component: TimelineComponent },
  { path: 'skills', component: SkillsComponent },
];

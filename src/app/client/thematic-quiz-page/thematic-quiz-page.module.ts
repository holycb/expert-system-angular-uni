import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';

import { ThematicQuizPageComponent } from './thematic-quiz-page.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ThematicQuizPageComponent,
  },
];


@NgModule({
  declarations: [ThematicQuizPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
})

/** Thematic quiz page module. */
export class ThematicQuizPageModule { }

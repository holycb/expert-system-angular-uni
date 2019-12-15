import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from 'src/app/shared/shared.module';

import { MatTabsModule } from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';

import { ThematicEditPageComponent } from './thematic-edit-page.component';
import { EditClassComponent } from './dialogs/edit-class/edit-class.component';
import { EditQuestion } from './dialogs/edit-question/edit-question.component';
const routes: Routes = [
  {
    path: ':id',
    pathMatch: 'full',
    component: ThematicEditPageComponent,
  },
];

@NgModule({
  declarations: [ThematicEditPageComponent, EditClassComponent, EditQuestion],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    MatTabsModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
  ],
})

/**
 * Thematic edit page module.
 */
export class ThematicEditPageModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MatExpansionModule } from '@angular/material/expansion';

import { SharedModule } from 'src/app/shared/shared.module';


import { MatButtonModule } from '@angular/material/button';
import { NgxPermissionsModule } from 'ngx-permissions';

import { MatIconModule } from '@angular/material/icon';

import { ThematicSelectionPageComponent } from './thematic-selection-page.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ThematicSelectionPageComponent,
  },
];

@NgModule({
  declarations: [ThematicSelectionPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatExpansionModule,
    SharedModule,
    MatButtonModule,
    NgxPermissionsModule.forChild(),
    MatIconModule,
  ],
})

/**
 * Module for the page of thematic selection.
 */
export class ThematicSelectionPageModule { }

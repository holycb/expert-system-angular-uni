import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MatExpansionModule } from '@angular/material/expansion';

import { SharedModule } from 'src/app/shared/shared.module';


import { MatButtonModule } from '@angular/material/button';
import { NgxPermissionsModule } from 'ngx-permissions';

import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ThematicSelectionPageComponent } from './thematic-selection-page.component';
import { CreateThematicDialog } from './dialogs/create-thematic-dialog/create-thematic-dialog.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ThematicSelectionPageComponent,
  },
];

@NgModule({
  declarations: [ThematicSelectionPageComponent, CreateThematicDialog],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatExpansionModule,
    SharedModule,
    MatButtonModule,
    NgxPermissionsModule.forChild(),
    MatIconModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
  ],
  entryComponents: [CreateThematicDialog],
})

/**
 * Module for the page of thematic selection.
 */
export class ThematicSelectionPageModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('./thematic-selection-page/thematic-selection-page.module').then(m => m.ThematicSelectionPageModule),
  },
  {
    path: 'thematic/:id',
    loadChildren: () => import('./thematic-quiz-page/thematic-quiz-page.module').then(m => m.ThematicQuizPageModule),
  },
  {
    path: 'thematic/edit/:id',
    loadChildren: () => import('./thematic-edit-page/thematic-edit-page.module').then(m => m.ThematicEditPageModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

/** Client routing module. */
export class ClientRoutingModule { }

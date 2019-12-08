import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxPermissionsModule } from 'ngx-permissions';

import { ClientRoutingModule } from './client-routing.module';
import { ThematicEditPageComponent } from './thematic-edit-page/thematic-edit-page.component';


@NgModule({
  declarations: [ThematicEditPageComponent],
  imports: [
    CommonModule,
    ClientRoutingModule,
    NgxPermissionsModule.forChild(),

  ],
})

/** Client module. */
export class ClientModule { }

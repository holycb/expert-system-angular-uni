import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxPermissionsModule } from 'ngx-permissions';

import { ClientRoutingModule } from './client-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ClientRoutingModule,
    NgxPermissionsModule.forChild(),

  ],
})

/** Client module. */
export class ClientModule { }

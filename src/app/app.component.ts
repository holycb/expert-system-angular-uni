import { Component, Inject } from '@angular/core';
import { NgxPermissionsService } from 'ngx-permissions';

import { Role } from './core/models/role';
import { DOCUMENT } from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

/**
 * App component.
 */
export class AppComponent {

  /**
   * Constructor.
   *
   * @param permService Permissions service.
   * @param document Document.
   */
  public constructor(
    private permService: NgxPermissionsService,
    @Inject(DOCUMENT) private document: Document,
  ) {

    this.permService.loadPermissions([Role.Client]);

  }

  /**
   * Change role.
   *
   * @param isAdmin Is admin role.
   */
  public onRoleChange(isAdmin: boolean): void {
    if (isAdmin) {
      this.permService.loadPermissions([Role.Admin]);
      this.document.documentElement.style.setProperty('--background-color', 'rgba(194,24,91,.35)');
    } else {
      this.document.documentElement.style.setProperty('--background-color', '#212121');
      this.permService.removePermission(Role.Admin);
    }
  }
}

import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Class } from '../models/class';

@Injectable({
  providedIn: 'root',
})

/**
 * Classes service.
 */
export class ClassesService {

  /**
   * Get classes by their ids.
   *
   * @param ids Ids of classes.
   * @returns Array of classes.
   */
  public getClassesByIds(ids: number[]): Observable<Class[]> {
    return of(ids.map(id => new Class(
      `test${id.toString()}`,
      Math.random(),
    )));
  }
}

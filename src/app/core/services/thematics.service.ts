import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

import { ValidationErrors, AsyncValidatorFn, FormControl } from '@angular/forms';

import { Thematic } from '../models/thematic';


@Injectable({
  providedIn: 'root',
})

/**
 * Thematics service.
 */
export class ThematicsService {

  /**
   * Constructor.
   */
  public constructor() { }

  /**
   * Get thematic by id.
   *
   * @param id Thematic id.
   * @returns Thematic.
   */
  public getThematicById(id: string): Observable<Thematic> {
    return of(new Thematic({ id, name: 'Test thematic', description: '123' })).pipe(
      delay(1000),
    );
  }

  /**
   * Get thematics.
   *
   * @returns Thematics.
   */
  public getThematics(): Observable<Thematic[]> {
    return of<Thematic[]>([

      new Thematic({ classes: [], description: 'thematic description', name: 'thematic name', questions: [] }),
      new Thematic({ classes: [], description: 'thematic description', name: 'thematic name', questions: [] }),
      new Thematic({ classes: [], description: 'thematic description', name: 'thematic name', questions: [] }),
      new Thematic({ classes: [], description: 'thematic description', name: 'thematic name', questions: [] }),
      new Thematic({ classes: [], description: 'thematic description', name: 'thematic name', questions: [] }),
      new Thematic({ classes: [], description: 'thematic description', name: 'thematic name', questions: [] }),
      new Thematic({ classes: [], description: 'thematic description', name: 'thematic name', questions: [] }),
      new Thematic({ classes: [], description: 'thematic description', name: 'thematic name', questions: [] }),
      new Thematic({ classes: [], description: 'thematic description', name: 'thematic name', questions: [] }),
      new Thematic({ classes: [], description: 'thematic description', name: 'thematic name', questions: [] }),
      new Thematic({ classes: [], description: 'thematic description', name: 'thematic name', questions: [] }),
    ]).pipe(
      delay(2000),
    );
  }

  /**
   * Create new thematic.
   *
   * @param thematic Thematic.
   * @returns Void.
   */
  public createThematic(thematic: Thematic): Observable<Thematic> {

    // TODO (Viktor): Save the thematic and give it an ID.
    return of(new Thematic({ ...thematic, id: '123123' })).pipe(
      delay(2000),
    );
  }

  /**
   * Forbid existing thematic validator.
   * @returns Validation func.
   */
  public get forbidExistingThematic(): AsyncValidatorFn {
    return (control: FormControl): Observable<ValidationErrors> => {
      const name = control.value;

      // TODO (Viktor): Check for thematic existing and return error if there is such thematic.

      return of(null);
    };
  }

}

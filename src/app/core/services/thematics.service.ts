import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

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
}

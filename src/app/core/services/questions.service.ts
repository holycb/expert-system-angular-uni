import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Question, IClassProbability } from '../models/question';

@Injectable({
  providedIn: 'root',
})

/**
 * Questions service.
 */
export class QuestionsService {

  /**
   * Get questions by ids.
   * @param ids Ids of questions.
   * @returns Questions.
   */
  public getQuestionsByIds(ids: number[]): Observable<Question[]> {
    return of(ids.map(id => new Question(
      `Do you feel me${id.toString()}`,
      [],
    )));
  }
}

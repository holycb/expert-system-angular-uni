import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ThematicsService } from 'src/app/core/services/thematics.service';
import { Observable } from 'rxjs';
import { Thematic } from 'src/app/core/models/thematic';
import { Class } from 'src/app/core/models/class';
import { switchMap, shareReplay, map } from 'rxjs/operators';
import { ClassesService } from 'src/app/core/services/classes.service';
import { QuestionsService } from 'src/app/core/services/questions.service';
import { Question, IClassProbability } from 'src/app/core/models/question';

@Component({
  selector: 'app-thematic-edit-page',
  templateUrl: './thematic-edit-page.component.html',
  styleUrls: ['./thematic-edit-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

/**
 * Thematic edit page component.
 */
export class ThematicEditPageComponent {

  /** Thematic. */
  public thematic$: Observable<Thematic>;

  /** Thematic classes. */
  public classes$: Observable<Class[]>;

  /** Thematic questions. */
  public questions$: Observable<Question[]>;

  /** Questions table columns. */
  public columns$: Observable<string[]>;

  /**
   * Constructor.
   *
   * @param route Route.
   * @param thematicService Thematics service.
   * @param classesService Classes service.
   * @param questionsService Questions service.
   */
  public constructor(
    private route: ActivatedRoute,
    private thematicService: ThematicsService,
    private classesService: ClassesService,
    private questionsService: QuestionsService,
  ) {
    const id = this.route.snapshot.params.id;

    this.thematic$ = this.thematicService.getThematicById(id);

    this.classes$ = this.thematic$.pipe(
      switchMap(thematic => this.classesService.getClassesByIds(thematic.classes)),
      shareReplay(1),
    );
    this.questions$ = this.thematic$.pipe(
      switchMap(thematic => this.questionsService.getQuestionsByIds(thematic.questions)),
    );


    this.columns$ = this.classes$.pipe(map(classes => classes.map(c => c.name)));

  }

  /**
   * Extract positive and negative probabilities from classProbability.
   *
   * @param question Question.
   * @param classId Id of a class.
   * @returns Probability.
   */
  public extractProbability(question: Question, classId: number): IClassProbability {
    return question.classProbabilities.find(c => c.classId === classId);
  }


}

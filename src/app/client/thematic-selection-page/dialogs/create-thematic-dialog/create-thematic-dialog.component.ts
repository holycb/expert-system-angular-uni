import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { ThematicsService } from 'src/app/core/services/thematics.service';
import { Thematic } from 'src/app/core/models/thematic';
import { tap, catchError, first, finalize } from 'rxjs/operators';
import { EMPTY, BehaviorSubject } from 'rxjs';
import { NotificationService } from 'src/app/core/services/notification.service';
import { Router } from '@angular/router';

/** Dialog for creating a new thematic. */
@Component({
  selector: 'app-create-thematic-dialog',
  templateUrl: './create-thematic-dialog.component.html',
  styleUrls: ['./create-thematic-dialog.component.css'],
})

/**
 * Dialog for thematic creation.
 */
export class CreateThematicDialog {

  /** Is something loading. */
  public isLoading$ = new BehaviorSubject<boolean>(false);

  /** Form for creation a thematic. */
  public form = this.fb.group({
    name: new FormControl(null, Validators.required, this.thematicService.forbidExistingThematic),
    description: [null, [Validators.required]],
  });

  /**
   * Constructor.
   *
   * @param dialogRef Dialog ref.
   * @param fb Form builder.
   * @param thematicService Thematic service.
   * @param notification Notification service.
   * @param router Router.
   */
  public constructor(
    private dialogRef: MatDialogRef<CreateThematicDialog>,
    private fb: FormBuilder,
    private thematicService: ThematicsService,
    private notification: NotificationService,
    private router: Router,
  ) { }


  /**
   * Create thematic.
   */
  public onSubmit(): void {

    this.form.markAllAsTouched();

    if (this.form.valid) {
      this.isLoading$.next(true);

      const newThematic: Thematic = new Thematic(this.form.value);

      this.thematicService.createThematic(newThematic).pipe(
        first(),
        tap((thematic) => {
          this.notification.simpleNotify(
            `Создание ${newThematic.name} успешно!`,
            'Продолжить',
            () => this.router.navigate(['thematic', 'edit', thematic.id]),
          );
          this.dialogRef.close();
        }),
        catchError((error: string) => {
          this.notification.simpleError(error);
          return EMPTY;
        }),
        finalize(() => this.isLoading$.next(false)),
      ).subscribe();
    }
  }

  /** Close the dialog. */
  public onCancelClick(): void {
    this.dialogRef.close();
  }
}

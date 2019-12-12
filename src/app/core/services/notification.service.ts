import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { first } from 'rxjs/operators';

/** Notification service. */
@Injectable({
  providedIn: 'root',
})

/**
 * Notification service.
 */
export class NotificationService {

  /**
   * Constructor.
   *
   * @param snackBar Snackbar service.
   */
  public constructor(private snackBar: MatSnackBar) { }

  /**
   * Show simple notification.
   *
   * @param message Message.
   * @param buttonLabel Button label.
   * @param callback Callback for the button.
   */
  public simpleNotify(message: string, buttonLabel?: string, callback?: () => void): void {
    this.snackBar.open(message, buttonLabel, {
      duration: 5000,
    }).onAction().pipe(
      first(),
    ).subscribe(() => {
      callback();
    });
  }

  /**
   * Show simple error notification.
   *
   * @param message Message.
   */
  public simpleError(message: string): void {
    this.snackBar.open(message, undefined, {
      duration: 3000,
    });
  }
}

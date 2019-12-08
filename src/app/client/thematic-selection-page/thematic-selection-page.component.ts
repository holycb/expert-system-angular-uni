import { Component } from '@angular/core';
import { ThematicsService } from 'src/app/core/services/thematics.service';
import { Role } from 'src/app/core/models/role';
import { Thematic } from 'src/app/core/models/thematic';

@Component({
  selector: 'app-thematic-selection-page',
  templateUrl: './thematic-selection-page.component.html',
  styleUrls: ['./thematic-selection-page.component.css'],
})

/** Thematics selection page component. */
export class ThematicSelectionPageComponent {

  /**
   * Thematics.
   */
  public thematics$ = this.thematicsService.getThematics();

  /** Role. */
  public Role = Role;

  /**
   * Constructor.
   *
   * @param thematicsService Thematics service.
   */
  public constructor(
    private thematicsService: ThematicsService,
  ) { }

  /**
   * Remove thematic.
   *
   * @param thematic Thematic.
   */
  public onRemoveClick(thematic: Thematic): void {

  }

  /**
   * Create new thematic.
   */
  public onNewThematicClick(): void {
  }
}


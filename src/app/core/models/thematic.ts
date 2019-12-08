import { Question } from './question';
import { Class } from './class';

/**
 * Thematic.
 *
 * @description
 */
export class Thematic {

  /**
   * Thematic title.
   */
  public name: string;

  /**
   * Thematic id.
   */
  public id: string;

  /**
   * Thematic description.
   */
  public description: string;

  /**
   * Questions for the thematic.
   */
  public questions: number[];

  /**
   * Classes in thematic.
   */
  public classes: number[];

  /**
   * Constructor.
   *
   * @param thematic Thematic.
   */
  public constructor(thematic: Partial<Thematic>) {
    this.classes = thematic.classes;
    this.description = thematic.description;
    this.name = thematic.name;
    this.questions = thematic.questions;
    this.id = thematic.id;
  }
}

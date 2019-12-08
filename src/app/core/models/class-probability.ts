import { Class } from './class';

/**
 * Probabilities of the class with negative and positive answers.
 */
export class ClassProbability {
  /** 
   * Class.
   */
  public class: Class;

  private negativeProbability: number;
  private positiveProbability: number;


  public set negativeP(probability: number) {
    if (probability > 1 || probability < 0) {
      throw new TypeError('negative probability not in range [0, 1]');
    }
    this.negativeProbability = probability;
  }


  public set positiveP(probability: number) {
    if (probability > 1 || probability < 0) {
      throw new TypeError('positive probability not in range [0, 1]');
    }
    this.positiveProbability = probability;
  }

  public get negativeP(): number {
    return this.negativeProbability;
  }


  public get positiveP(): number {
    return this.positiveProbability;
  }


}
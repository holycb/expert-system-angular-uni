/** Class. */
export class Class {

  /**
   * Class name.
   */
  public name: string;

  /**
   * Probability value.
   */
  private p: number;


  /**
   * Probability setter.
   * @param probability Probability.
   */
  public set probability(probability: number) {
    if (probability < 0 || probability > 1) {
      throw new TypeError('Probability is not in range [0, 1]');
    }

    this.p = probability;
  }


  /**
   * Class probability getter.
   * @returns Probability.
   */
  public get probability(): number {
    return this.p;
  }
}

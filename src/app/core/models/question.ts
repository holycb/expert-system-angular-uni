
/** Class probability considering an answer. */
export interface IClassProbability {

  /** Class id. */
  classId: number;

  /** Probability of class with negative answer. */
  negativeProbability: number;

  /** Probability of class with positive answer. */
  positiveProbability: number;
}

/**
 * Question.
 */
export class Question {

  /**
   * Question text.
   */
  public text: string;

  /**
   * Class probabilities.
   */
  public classProbabilities: IClassProbability[];

  /**
   * Constructor.
   *
   * @param text Name.
   * @param classProbabilities Probability.
   */
  public constructor(
    text: string,
    classProbabilities: IClassProbability[],
  ) {
    this.classProbabilities = classProbabilities;
    this.text = text;
  }
}


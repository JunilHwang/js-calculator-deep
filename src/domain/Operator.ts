import {
  InvalidOperatorConstructException,
  InvalidOperatorParamException,
  NotFoundOperatorException,
} from "./exceptions";

export class Operator {
  private static values: Record<string, Operator> = {};

  public static ADD = new Operator("+", (x, y) => x + y);
  public static SUBTRACT = new Operator("-", (x, y) => x - y);
  public static MULTIPLY = new Operator("X", (x, y) => x * y);
  public static DIVISION = new Operator("/", (x, y) => x / y);

  constructor(
    private readonly operator: string,
    private readonly _calculate: (x: number, y: number) => number
  ) {
    if (operator === undefined || _calculate === undefined) {
      throw new InvalidOperatorConstructException();
    }
    Operator.values[operator] = this;
  }

  public get symbol() {
    return this.operator;
  }

  public calculate(x: number, y: number) {
    if (x === undefined || y === undefined) {
      throw new InvalidOperatorParamException();
    }
    return this._calculate(x, y);
  }

  public static calculate(symbol: string, x: number, y: number) {
    const operator: Operator = this.values[symbol];
    if (operator === undefined) {
      throw new NotFoundOperatorException();
    }
    return this.values[symbol].calculate(x, y);
  }
}
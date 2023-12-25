class Calculator {
  private _a: number;
  private _b: number;

  constructor(a: number, b: number) {
    this._a = a;
    this._b = b;
  }

  get a(): number {
    return this._a;
  }

  set a(value: number) {
    this._a = value;
  }

  get b(): number {
    return this._b;
  }

  set b(value: number) {
    this._b = value;
  }

  public add(): number {
    return this._a + this._b;
  }

  public subtract(): number {
    return this._a - this._b;
  }

  public multiply(): number {
    return this._a * this._b;
  }

  public divide(): number {
    if (this._b === 0) {
      throw new Error('0으로 나눌 수 없습니다.');
    }
    return this._a / this._b;
  }

  static addStatic(a: number, b: number): number {
    return a + b;
  }

  static subtractStatic(a: number, b: number): number {
    return a - b;
  }

  static multiplyStatic(a: number, b: number): number {
    return a * b;
  }

  static divideStatic(a: number, b: number): number {
    if (b === 0) {
      throw new Error('0으로 나눌 수 없습니다.');
    }
    return a / b;
  }
}

// 사용 예
const calc = new Calculator(10, 5);
console.dir(Calculator);
console.log(calc.add());
console.log(calc.subtract());
console.log(calc.multiply());
console.log(calc.divide());
console.log(Calculator.addStatic(10, 5));

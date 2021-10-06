class Result {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }

  static addResult(result, arr) {
    arr.push(result);
  }
}

export { Result as default };

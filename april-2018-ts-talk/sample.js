// sample.js - simple example TypeScript program
class Business {
  constructor(name, revenue, expenses) {
    this.name = name;
    this.revenue = revenue;
    this.expenses = expenses;
  }

  profit() {
    return this.revenue + this.expenses;
  }

  toString() {
    return `${this.name} ${this.revenue} ${this.expenses} ${this.profit()}`;
  }
}

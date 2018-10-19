// sample.ts

class Business {
  name: string;
  revenue: number;
  expenses: number;

  constructor(name, revenue, expenses) {
    this.name = name;
    this.revenue = revenue;
    this.expenses = expenses;
  }

  profit() {
    return this.revenue + this.expenses;
  }
}
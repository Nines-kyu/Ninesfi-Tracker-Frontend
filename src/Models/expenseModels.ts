import type { Expense } from "../Interfaces/Expense";

export class ExpenseModel {
  private data: Expense;

  constructor(data: Expense) {
    this.data = data;
  }

  get id(): number {
    return this.data.id;
  }

  get title(): string {
    return this.data.title;
  }

  get amount(): number {
    return this.data.amount;
  }

  get category(): string {
    return this.data.category_name ?? "Uncategorized";
  }

  get formattedAmount(): string {
    return `$${this.data.amount.toFixed(2)}`;
  }

  get formattedDate(): string {
    return new Date(this.data.date).toLocaleDateString();
  }

  // raw access if needed
  get raw(): Expense {
    return this.data;
  }
}

import type { Expense } from "../Interfaces/Expense";
import { ExpenseModel } from "../Models/expenseModels";

const API_URL = "http://localhost:3000"

export async function getExpenses(categoryId?: number, page: number = 1): Promise<ExpenseModel[]> {
    const url = categoryId
        ? `${API_URL}/expenses?category_id=${categoryId}&page=${page}`
        : `${API_URL}/expenses?page=${page}`;

    const response = await fetch(url);
    if(!response.ok) throw new Error("Failed to fetch expenses");

    const data: Expense[] = await response.json();
    return data.map(exp => new ExpenseModel(exp));
}

export async function createExpenses(expense: Omit<Expense, "id" | "created_at" | "updated_at">): Promise<ExpenseModel> {
    const response = await fetch(`${API_URL}/expenses`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ expense }),
    });
    if (!response.ok) throw new Error("Faile to create expense")
    const data: Expense = await response.json();
    return new ExpenseModel(data);
} 
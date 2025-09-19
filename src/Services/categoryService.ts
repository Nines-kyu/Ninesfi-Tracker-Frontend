import type { Category } from "../Interfaces/Category";


const API_URL = "http://localhost:3000"

export async function getCategories(): Promise<Category[]> {
    const response = await fetch(`${API_URL}/categories`);
    if (!response.ok) throw new Error("Failed to fetch categories")
    return response.json();
}
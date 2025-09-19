export interface Expense {
    id: number;
    title: string;
    amount: number;
    date: string;  // ISO string from Rails API
    category_id: number;
    category_name?: string; // optional if you preload category name
    created_at?: string;
    updated_at?: string;
}
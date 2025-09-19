import type { ExpenseModel } from "../../../Models/expenseModels";
import { useEffect, useState } from "react";
import { getExpenses } from "../../../Services/ExpenseService";

const Expenses: React.FC = () => {
  const [expenses, setExpenses] = useState<ExpenseModel[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const data = await getExpenses();
        setExpenses(data);
      } catch (err: any) {
        setError(err.message || "Failed to load expenses");
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [])

  return (
    <div className="h-full w-full p-4 flex flex-col gap-4 text-white">
      <h1 className="text-2xl font-bold mb-4">Expenses</h1>

      {/* Action Buttons */}
      <div className="flex gap-2">
        <button className="bg-navi-orange px-4 py-2 rounded-lg">Add Expense</button>
        <button className="bg-gray-700 px-4 py-2 rounded-lg">Placeholder 1</button>
        <button className="bg-gray-700 px-4 py-2 rounded-lg">Placeholder 2</button>
      </div>

      {/* Placeholder for Expenses Table */}
      <div className="flex-1 bg-gray-800 rounded-xl p-4 overflow-hidden">
        {loading && <p className="text-gray-400">Loading...</p>}
        {error && <p className="text-red-400">{error}</p>}

        {!loading && !error && expenses.length > 0 && (
          <table className="w-full border-collapse">
            <thead>
              <tr className="text-left border-b border-gray-600">
                <th className="p-2">Title</th>
                <th className="p-2">Amount</th>
                <th className="p-2">Category</th>
                <th className="p-2">Date</th>
              </tr>
            </thead>
            <tbody>
              {expenses.map((expense) => (
                <tr key={expense.id} className="border-b border-gray-700">
                  <td className="p-2">{expense.title}</td>
                  <td className="p-2">{expense.amount}</td>
                  <td className="p-2">{expense.category}</td>
                  <td className="p-2">{expense.formattedDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Expenses;
import React from 'react';
import {
  PieChart, Pie, Cell, Tooltip,
} from 'recharts';

const fakeBudget = [
  { category: 'Food', budget: 500, spent: 450 },
  { category: 'Transport', budget: 200, spent: 150 },
  { category: 'Entertainment', budget: 300, spent: 280 },
];

const fakeSavings = [
  { name: 'Emergency Fund', value: 60 },
  { name: 'Vacation', value: 30 },
  { name: 'Other', value: 10 },
];

const COLORS = ['#FF914D', '#00C49F', '#0088FE'];

const fakeTransactions = [
  { date: '2025-09-01', description: 'Groceries', amount: 50 },
  { date: '2025-09-02', description: 'Transport', amount: 15 },
  { date: '2025-09-03', description: 'Coffee', amount: 5 },
];

const Dashboard: React.FC = () => {
  return (
    <div className="h-full flex flex-col gap-4 p-2">

      {/* Action Buttons Bar */}
      <div className="w-full flex justify-center rounded-xl mx-auto space-x-10 p-2 h-[10%]">
        <button className="bg-navi-orange text-white px-4 py-2 rounded">Record Expense</button>
        <button className="bg-navi-orange text-white px-4 py-2 rounded">Create Report</button>
        <button className="bg-gray-700 text-white px-4 py-2 rounded">Placeholder 1</button>
        <button className="bg-gray-700 text-white px-4 py-2 rounded">Placeholder 2</button>
      </div>

      {/* Card 1: Financial Snapshot + Savings Goals */}
      <div className="border-2 border-gray-400 p-4 rounded-xl flex justify-between h-[28%]">
        <div className="flex flex-col justify-between w-2/3">
          <h2 className="text-softWhite font-bold">Financial Snapshot</h2>
          <p className="text-softWhite mt-2 text-lg truncate">Balance: $5,200</p>

          <h2 className="text-softWhite font-bold mt-2">Savings Goals</h2>
          <div className="flex gap-2 mt-2">
            <div className="bg-gray-800 h-12 w-24 rounded flex items-center justify-center text-white truncate">
              Emergency
            </div>
            <div className="bg-gray-800 h-12 w-24 rounded flex items-center justify-center text-white truncate">
              Vacation
            </div>
          </div>
        </div>

        {/* Pie Chart */}
        <div className="w-32 h-full flex items-center justify-center">
          <PieChart width={128} height={128}>
            <Pie
              data={fakeSavings}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={50}
              label
            >
              {fakeSavings.map((_entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </div>
      </div>

      {/* Card 2: Budget vs Actuals + Cash Flow */}
      <div className="border-2 border-gray-400 p-4 rounded-xl flex flex-col justify-between h-[28%]">
        <h2 className="text-softWhite font-bold">Budget vs Actuals</h2>
        <div className="flex flex-col gap-1 mt-2 flex-1 overflow-hidden">
          {fakeBudget.map((item) => (
            <div key={item.category} className="flex flex-col">
              <span className="text-softWhite text-sm truncate">{item.category}</span>
              <div className="bg-gray-700 h-3 w-full rounded mt-1 relative overflow-hidden">
                <div
                  className="bg-navi-orange h-3 rounded"
                  style={{ width: `${(item.spent / item.budget) * 100}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-softWhite font-bold mt-2">Cash Flow</h2>
        <div className="bg-gray-800 h-12 w-full rounded mt-1 overflow-hidden"></div>
      </div>

      {/* Card 3: Recent Transactions */}
      <div className="border-2 border-gray-400 p-4 rounded-xl flex flex-col justify-between h-[34%]">
        <h2 className="text-softWhite font-bold mb-2">Recent Transactions</h2>
        <div className="flex-1 flex flex-col gap-1 overflow-hidden">
          {fakeTransactions.map((t, index) => (
            <div key={index} className="flex justify-between text-white bg-gray-800 p-2 rounded truncate">
              <span className="truncate">{t.date}</span>
              <span className="truncate">{t.description}</span>
              <span className="truncate">${t.amount}</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Dashboard;

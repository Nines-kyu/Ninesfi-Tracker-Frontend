
const Reports: React.FC = () => {
  return (
    <div className="h-full w-full p-4 flex flex-col gap-4 text-white">
      <h1 className="text-2xl font-bold mb-4">Reports</h1>

      {/* Placeholder Buttons */}
      <div className="flex gap-2">
        <button className="bg-navi-orange px-4 py-2 rounded-lg">Generate Report</button>
        <button className="bg-gray-700 px-4 py-2 rounded-lg">Placeholder 1</button>
        <button className="bg-gray-700 px-4 py-2 rounded-lg">Placeholder 2</button>
      </div>

      {/* Placeholder for Charts / Graphs */}
      <div className="flex-1 bg-gray-800 rounded-xl p-4 overflow-hidden">
        <p className="text-gray-400">Charts and summary reports will appear here</p>
      </div>
    </div>
  );
};

export default Reports;

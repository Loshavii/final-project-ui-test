import React, { useState, useEffect } from 'react';

const CombinedDataTable = () => {
  const [combinedData, setCombinedData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:2003/api/profiles/pay/combined-data')
      .then(response => response.json())
      .then(data => {
        setCombinedData(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching combined data:', error);
        setError('Failed to load data');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px] bg-gray-900">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-[400px] bg-gray-900">
        <div className="text-red-500">{error}</div>
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-900 min-h-screen">
      <div className="max-w-4xl mx-auto rounded-lg bg-gray-800/50 border border-gray-700 overflow-hidden">
        {/* Header */}
        <div className="p-6 border-b border-gray-700">
          <h2 className="text-white text-2xl font-semibold">
            User and Payment Information
          </h2>
        </div>

        {/* Table Container */}
        <div className="p-6">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-700/40">
                  <th className="px-6 py-3 text-left text-gray-300 font-medium">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-gray-300 font-medium">
                    Email
                  </th>
                  <th className="px-6 py-3 text-left text-gray-300 font-medium">
                    Coach Email
                  </th>
                  <th className="px-6 py-3 text-left text-gray-300 font-medium">
                    Payment Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {combinedData.map((item, index) => (
                  <tr 
                    key={index}
                    className="border-t border-gray-700 bg-gray-800/50 hover:bg-gray-700/40 transition-colors"
                  >
                    <td className="px-6 py-4 text-white">
                      {item.name}
                    </td>
                    <td className="px-6 py-4 text-gray-400">
                      {item.email}
                    </td>
                    <td className="px-6 py-4 text-gray-400">
                      {item.coachEmail}
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex px-3 py-1 rounded-full text-sm ${
                        item.paymentInfo?.paymentStatus === 'Paid' 
                          ? 'bg-green-500/20 text-green-500' 
                          : 'bg-gray-700/30 text-gray-400'
                      }`}>
                        {item.paymentInfo?.paymentStatus || 'N/A'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CombinedDataTable;
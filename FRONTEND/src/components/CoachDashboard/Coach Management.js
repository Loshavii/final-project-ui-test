
// import React, { useState, useEffect } from 'react';
// import "../CSS/CoachManagement.css";

// function CoachManagement() {
//   const [pendingCoaches, setPendingCoaches] = useState([]);
//   const [approvedCoaches, setApprovedCoaches] = useState([]);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     // Fetch pending coaches
//     const fetchPendingCoaches = async () => {
//       try {
//         const response = await fetch('http://localhost:2003/api/coaches/coaches/pending');
//         if (!response.ok) {
//           throw new Error(`Error: ${response.statusText}`);
//         }
//         const data = await response.json();
//         setPendingCoaches(data);
//       } catch (error) {
//         setError('Failed to load pending coaches');
//       }
//     };

//     // Fetch approved coaches
//     const fetchApprovedCoaches = async () => {
//       try {
//         const response = await fetch('http://localhost:2003/api/coaches/coaches/approved');
//         if (!response.ok) {
//           throw new Error(`Error: ${response.statusText}`);
//         }
//         const data = await response.json();
//         setApprovedCoaches(data);
//       } catch (error) {
//         setError('Failed to load approved coaches');
//       }
//     };

//     fetchPendingCoaches();
//     fetchApprovedCoaches();
//   }, []);

//   const handleApproval = async (id, status) => {
//     try {
//       const response = await fetch(`http://localhost:2003/api/coaches/admin/coaches/${id}/approve`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ status }),
//       });

//       if (!response.ok) {
//         throw new Error(`Error: ${response.statusText}`);
//       }

//       // Update UI after approval/rejection
//       const approvedCoach = pendingCoaches.find(coach => coach._id === id);
//       if (status === 'approved') {
//         setApprovedCoaches([...approvedCoaches, { ...approvedCoach, status }]);
//       }
//       setPendingCoaches(pendingCoaches.filter(coach => coach._id !== id));
//     } catch (error) {
//       setError('Failed to update coach status');
//     }
//   };

//   return (
//     <div className="coach-management">
//       <h3>Coach Management</h3>
//       <p>Manage coaches and approve pending requests.</p>

//       <h4>Pending Coach Requests</h4>
//       {error && <p className="error-message">{error}</p>}
//       {pendingCoaches.length > 0 ? (
//         <table className="coach-table">
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Email</th>
//               <th>Specialization</th>
//               <th>Experience</th>
//               <th>Status</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {pendingCoaches.map(coach => (
//               <tr key={coach._id}>
//                 <td>{coach.firstName} {coach.lastName}</td>
//                 <td>{coach.email}</td>
//                 <td>{coach.specialization}</td>
//                 <td>{coach.experience} years</td>
//                 <td>{coach.status}</td>
//                 <td>
//                   <button
//                     onClick={() => handleApproval(coach._id, 'approved')}
//                     className="approve-btn"
//                   >
//                     Approve
//                   </button>
//                   <button
//                     onClick={() => handleApproval(coach._id, 'rejected')}
//                     className="reject-btn"
//                   >
//                     Reject
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       ) : (
//         <p>No pending requests</p>
//       )}

//       <h4>Approved Coaches</h4>
//       {approvedCoaches.length > 0 ? (
//         <table className="coach-table">
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Email</th>
//               <th>Specialization</th>
//               <th>Experience</th>
//               <th>Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             {approvedCoaches.map(coach => (
//               <tr key={coach._id}>
//                 <td>{coach.firstName} {coach.lastName}</td>
//                 <td>{coach.email}</td>
//                 <td>{coach.specialization}</td>
//                 <td>{coach.experience} years</td>
//                 <td>{coach.status}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       ) : (
//         <p>No approved coaches</p>
//       )}
//     </div>
//   );
// }

// export default CoachManagement;


import React, { useState, useEffect } from 'react';
import { CheckCircle, XCircle, UserCheck, Clock, Award } from 'lucide-react';

function CoachManagement() {
  const [pendingCoaches, setPendingCoaches] = useState([]);
  const [approvedCoaches, setApprovedCoaches] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPendingCoaches = async () => {
      try {
        const response = await fetch('http://localhost:2003/api/coaches/coaches/pending');
        if (!response.ok) throw new Error(`Error: ${response.statusText}`);
        const data = await response.json();
        setPendingCoaches(data);
      } catch (error) {
        setError('Failed to load pending coaches');
      }
    };

    const fetchApprovedCoaches = async () => {
      try {
        const response = await fetch('http://localhost:2003/api/coaches/coaches/approved');
        if (!response.ok) throw new Error(`Error: ${response.statusText}`);
        const data = await response.json();
        setApprovedCoaches(data);
      } catch (error) {
        setError('Failed to load approved coaches');
      }
    };

    fetchPendingCoaches();
    fetchApprovedCoaches();
  }, []);

  const handleApproval = async (id, status) => {
    try {
      const response = await fetch(`http://localhost:2003/api/coaches/admin/coaches/${id}/approve`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status }),
      });

      if (!response.ok) throw new Error(`Error: ${response.statusText}`);

      const approvedCoach = pendingCoaches.find(coach => coach._id === id);
      if (status === 'approved') {
        setApprovedCoaches([...approvedCoaches, { ...approvedCoach, status }]);
      }
      setPendingCoaches(pendingCoaches.filter(coach => coach._id !== id));
    } catch (error) {
      setError('Failed to update coach status');
    }
  };

  const TableHeader = ({ children }) => (
    <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
      {children}
    </th>
  );

  const TableCell = ({ children }) => (
    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
      {children}
    </td>
  );

  return (
    <div className="min-h-screen bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Coach Management</h1>
          <p className="text-gray-400">Manage coaches and approve pending requests</p>
        </div>

        {error && (
          <div className="mb-4 bg-red-500/20 border border-red-500 text-red-500 px-4 py-3 rounded">
            {error}
          </div>
        )}

        {/* Pending Coaches Section */}
        <div className="bg-gray-800/50 rounded-lg shadow-xl overflow-hidden border border-gray-700 mb-8">
          <div className="px-6 py-4 border-b border-gray-700 flex items-center">
            <Clock className="w-5 h-5 text-gray-300 mr-2" />
            <h2 className="text-xl font-semibold text-white">Pending Coach Requests</h2>
          </div>

          <div className="overflow-x-auto">
            {pendingCoaches.length > 0 ? (
              <table className="min-w-full divide-y divide-gray-700">
                <thead className="bg-gray-700/40">
                  <tr>
                    <TableHeader>Name</TableHeader>
                    <TableHeader>Email</TableHeader>
                    <TableHeader>Specialization</TableHeader>
                    <TableHeader>Experience</TableHeader>
                    <TableHeader>Status</TableHeader>
                    <TableHeader>Actions</TableHeader>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700">
                  {pendingCoaches.map(coach => (
                    <tr key={coach._id} className="hover:bg-gray-700/40 transition-colors duration-200">
                      <TableCell>{coach.username} </TableCell>
                      <TableCell>{coach.email}</TableCell>
                      <TableCell>{coach.specialization}</TableCell>
                      <TableCell>{coach.experience} years</TableCell>
                      <TableCell>
                        <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-500/20 text-yellow-500">
                          Pending
                        </span>
                      </TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <button
                            onClick={() => handleApproval(coach._id, 'approved')}
                            className="inline-flex items-center px-3 py-1 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-green-500 hover:bg-green-600 transition-colors duration-200"
                          >
                            <CheckCircle className="h-4 w-4 mr-1" />
                            Approve
                          </button>
                          <button
                            onClick={() => handleApproval(coach._id, 'rejected')}
                            className="inline-flex items-center px-3 py-1 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-red-500 hover:bg-red-600 transition-colors duration-200"
                          >
                            <XCircle className="h-4 w-4 mr-1" />
                            Reject
                          </button>
                        </div>
                      </TableCell>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <div className="text-center py-8 text-gray-400">No pending requests</div>
            )}
          </div>
        </div>

        {/* Approved Coaches Section */}
        <div className="bg-gray-800/50 rounded-lg shadow-xl overflow-hidden border border-gray-700">
          <div className="px-6 py-4 border-b border-gray-700 flex items-center">
            <Award className="w-5 h-5 text-gray-300 mr-2" />
            <h2 className="text-xl font-semibold text-white">Approved Coaches</h2>
          </div>

          <div className="overflow-x-auto">
            {approvedCoaches.length > 0 ? (
              <table className="min-w-full divide-y divide-gray-700">
                <thead className="bg-gray-700/40">
                  <tr>
                    <TableHeader>Name</TableHeader>
                    <TableHeader>Email</TableHeader>
                    <TableHeader>Specialization</TableHeader>
                    <TableHeader>Experience</TableHeader>
                    <TableHeader>Status</TableHeader>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700">
                  {approvedCoaches.map(coach => (
                    <tr key={coach._id} className="hover:bg-gray-700/40 transition-colors duration-200">
                      <TableCell>{coach.username} </TableCell>
                      <TableCell>{coach.email}</TableCell>
                      <TableCell>{coach.specialization}</TableCell>
                      <TableCell>{coach.experience} years</TableCell>
                      <TableCell>
                        <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-500/20 text-green-500">
                          Approved
                        </span>
                      </TableCell>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <div className="text-center py-8 text-gray-400">No approved coaches</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoachManagement;
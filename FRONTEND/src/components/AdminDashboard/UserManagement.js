
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { FaUser, FaEdit, FaTrash } from 'react-icons/fa';
// import '../CSS/UserManagement.css';

// const UserManagement = () => {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     // Fetch users from the server
//     const fetchUsers = async () => {
//       try {
//         const response = await axios.get('http://localhost:2003/api/users/users');
//         console.log(response.data); // Log the data for debugging
//         setUsers(response.data);
//       } catch (error) {
//         console.error('Error fetching users:', error);
//       }
//     };
//     fetchUsers();
//   }, []);

//   const handleEditUser = (id) => {
//     // Logic to edit user by id
//     const updatedData = { /* add updated user data */ };
//     axios.put(`http://localhost:2003/api/users/users/${id}`, updatedData)
//       .then(response => {
//         console.log(response.data);
//         alert('User updated successfully');
//       })
//       .catch(error => console.error('Error updating user:', error));
//   };

//   const handleDeactivateUser = (id) => {
//     if (window.confirm('Are you sure you want to deactivate this user?')) {
//       axios.put(`http://localhost:2003/api/users/users/${id}/deactivate`)
//         .then(response => {
//           console.log(response.data);
//           setUsers(users.map(user => (user._id === id ? { ...user, status: 'Deactivated' } : user)));
//         })
//         .catch(error => console.error('Error deactivating user:', error));
//     }
//   };

//   return (
//     <div className="contain">
//       <div className="main-content">
//         <h1 className="header">User Management</h1>
//         <table className="user-table">
//           <thead>
//             <tr>
//               <th className="table-header">Name</th>
//               <th className="table-header">Email</th>
//               <th className="table-header">Phone</th>
//               <th className="table-header">Registration Date</th>
//               <th className="table-header">Last Login</th>
//               <th className="table-header">Status</th>
//               <th className="table-header">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {users.map((User) => (
//               <tr key={User._id} className="table-row">
//                 <td className="table-cell">
//                   <div className="user-info">
//                     <div className="avatar01">
//                       <FaUser />
//                     </div>
//                     {`${User.username}`}
//                   </div>
//                 </td>
//                 <td className="table-cell">{User.email}</td>
//                 <td className="table-cell">{User.phone}</td>
//                 <td className="table-cell">{User.registrationDate}</td>
//                 <td className="table-cell">{User.lastLogin}</td>
//                 <td className="table-cell">
//                   <span className={`status ${User.status ? User.status.toLowerCase() : 'unknown'}`}>
//                     {User.status || 'Unknown'}
//                   </span>
//                 </td>
//                 <td className="table-cell">
//                   <button className="action-button" onClick={() => handleEditUser(User._id)}>
//                     <FaEdit /> Edit
//                   </button>
//                   <button className="action-button danger" onClick={() => handleDeactivateUser(User._id)}>
//                     <FaTrash /> Deactivate
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default UserManagement;
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { User, Edit, Trash2, AlertCircle } from 'lucide-react';

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:2003/api/users/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };
    fetchUsers();
  }, []);

  const handleEditUser = (id) => {
    const updatedData = { /* add updated user data */ };
    axios.put(`http://localhost:2003/api/users/users/${id}`, updatedData)
      .then(response => {
        console.log(response.data);
        alert('User updated successfully');
      })
      .catch(error => console.error('Error updating user:', error));
  };

  const handleDeactivateUser = async (id) => {
    setIsDeleting(true);
    try {
      if (window.confirm('Are you sure you want to deactivate this user?')) {
        const response = await axios.put(`http://localhost:2003/api/users/users/${id}/deactivate`);
        setUsers(users.map(user => (user._id === id ? { ...user, status: 'Deactivated' } : user)));
      }
    } catch (error) {
      console.error('Error deactivating user:', error);
    } finally {
      setIsDeleting(false);
    }
  };

  const StatusBadge = ({ status }) => {
    const statusClasses = {
      Active: 'bg-green-500/20 text-green-500',
      Deactivated: 'bg-red-500/20 text-red-500',
      unknown: 'bg-gray-500/20 text-gray-400'
    };

    return (
      <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${statusClasses[status || 'unknown']}`}>
        {status || 'Active'}
      </span>
    );
  };

  return (
    <div className="min-h-screen bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">User Management</h1>
          <p className="text-gray-400">Manage and monitor user accounts</p>
        </div>

        <div className="bg-gray-800/50 rounded-lg shadow-xl overflow-hidden border border-gray-700">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-700">
              <thead className="bg-gray-700/40">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    User
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    Email
                  </th>
                  {/* <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    Phone
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    Registration Date
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    Last Login
                  </th> */}
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700 bg-gray-800/30">
                {users.map((user) => (
                  <tr key={user._id} className="hover:bg-gray-700/40 transition-colors duration-200">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="h-10 w-10 flex-shrink-0">
                          <div className="h-10 w-10 rounded-full bg-green-500/20 flex items-center justify-center">
                            <User className="h-5 w-5 text-green-500" />
                          </div>
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-white">{user.username}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                      {user.email}
                    </td>
                    {/* <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                      {user.phone}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                      {user.registrationDate}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                      {user.lastLogin}
                    </td> */}
                    <td className="px-6 py-4 whitespace-nowrap">
                      <StatusBadge status={user.status} />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleEditUser(user._id)}
                          className="inline-flex items-center px-3 py-1 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-green-500 hover:bg-green-600 transition-colors duration-200"
                        >
                          <Edit className="h-4 w-4 mr-1" />
                          Edit
                        </button>
                        <button
                          onClick={() => handleDeactivateUser(user._id)}
                          disabled={isDeleting}
                          className="inline-flex items-center px-3 py-1 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-red-500 hover:bg-red-600 transition-colors duration-200 disabled:opacity-50"
                        >
                          <Trash2 className="h-4 w-4 mr-1" />
                          Deactivate
                        </button>
                      </div>
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

export default UserManagement;
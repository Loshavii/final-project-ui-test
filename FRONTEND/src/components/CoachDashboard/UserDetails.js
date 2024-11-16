
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import "../CSS/UserDetails.css";

// const CoachProfileTable = () => {
//   const [profiles, setProfiles] = useState([]);
//   const [payments, setPayments] = useState([]);


//   // Retrieve coachEmail from session storage
//   const coachEmail = sessionStorage.getItem("coachEmail");

//   useEffect(() => {
//     const fetchProfiles = async () => {
//       try {
//         const response = await axios.get(`http://localhost:2003/api/profiles/gofor/${coachEmail}`);
//         setProfiles(response.data);
//       } catch (error) {
//         console.error('Error fetching profiles:', error);
//       }
//     };

//     fetchProfiles();
//   }, [coachEmail]);

//   const handleEmailClick = (userEmail) => {
//     const subject = "Message from Your Coach";
//     const body = "Hello, this is a message from your coach.";
//     window.location.href = `mailto:${userEmail}?from=${coachEmail}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
//   };

//   return (
//     <div className="profile-table-container">
//       <h2>Profiles Managed by Coach {coachEmail}</h2>
//       <table className="profile-table">
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Status</th>
//             <th>Coach Email</th>
//             {/* <th>Payment Status</th> */}
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {profiles.map((profile, index) => (
//             <tr key={index}>
//               <td>{profile.name}</td>
//               <td>{profile.email}</td>
//               <td>{profile.status}</td>
//               <td>{profile.coachEmail}</td>
//               {/* <td>{payments.paymentStatus || 'N/A'}</td> */}
//               <td>
//                 <button onClick={() => handleEmailClick(profile.email)}>
//                   Send Email
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default CoachProfileTable;
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Mail } from 'lucide-react';

const CoachProfileTable = () => {
  const [profiles, setProfiles] = useState([]);
  const coachEmail = sessionStorage.getItem("coachEmail");

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const response = await axios.get(`http://localhost:2003/api/profiles/gofor/${coachEmail}`);
        setProfiles(response.data);
      } catch (error) {
        console.error('Error fetching profiles:', error);
      }
    };

    fetchProfiles();
  }, [coachEmail]);

  const handleEmailClick = (userEmail) => {
    const subject = "Message from Your Coach";
    const body = "Hello, this is a message from your coach.";
    window.location.href = `mailto:${userEmail}?from=${coachEmail}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="min-h-screen bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-800/50 rounded-lg shadow-xl overflow-hidden border border-gray-700">
          <div className="px-6 py-5 border-b border-gray-700">
            <h2 className="text-2xl font-semibold text-white">
              Profiles Managed by Coach {coachEmail}
            </h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-700">
              <thead>
                <tr className="bg-gray-700/40">
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-300 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-300 uppercase tracking-wider">
                    Email
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-300 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-300 uppercase tracking-wider">
                    Coach Email
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-300 uppercase tracking-wider">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                {profiles.map((profile, index) => (
                  <tr 
                    key={index}
                    className="hover:bg-gray-700/40 transition-colors duration-200"
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                      {profile.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                      {profile.email}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-500/20 text-green-500">
                        {profile.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                      {profile.coachEmail}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <button
                        onClick={() => handleEmailClick(profile.email)}
                        className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors duration-200"
                      >
                        <Mail className="h-4 w-4 mr-2" />
                        Send Email
                      </button>
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

export default CoachProfileTable;
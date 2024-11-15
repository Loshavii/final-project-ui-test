// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import "../CSS/UserDetails.css";

// const CoachProfileTable = () => {
//   const [profiles, setProfiles] = useState([]);
  
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
//             <th>Payment Status</th>
//           </tr>
//         </thead>
//         <tbody>
//           {profiles.map((profile, index) => (
//             <tr key={index}>
//               <td>{profile.name}</td>
//               <td>{profile.email}</td>
//               <td>{profile.status}</td>
//               <td>{profile.coachEmail}</td>
//               <td>{profile.paymentStatus ? profile.paymentStatus : 'N/A'}</td>
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
import "../CSS/UserDetails.css";

const CoachProfileTable = () => {
  const [profiles, setProfiles] = useState([]);
  const [payments, setPayments] = useState([]);


  // Retrieve coachEmail from session storage
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
    <div className="profile-table-container">
      <h2>Profiles Managed by Coach {coachEmail}</h2>
      <table className="profile-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
            <th>Coach Email</th>
            <th>Payment Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {profiles.map((profile, index) => (
            <tr key={index}>
              <td>{profile.name}</td>
              <td>{profile.email}</td>
              <td>{profile.status}</td>
              <td>{profile.coachEmail}</td>
              <td>{payments.paymentStatus || 'N/A'}</td>
              <td>
                <button onClick={() => handleEmailClick(profile.email)}>
                  Send Email
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CoachProfileTable;




// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import '../CSS/CoachDashboard.css';

// const CoachDashboard = () => {
//   const [user, setUser] = useState(null); // State to hold basic user details
//   const [profileData, setProfileData] = useState(null); // State to hold full profile data
//   const [paymentStatus, setPaymentStatus] = useState(''); // Payment status
//   const navigate = useNavigate();

//   // Fetch user and payment status when the component mounts
//   useEffect(() => {
//     const fetchCoachData = async () => {
//       try {
//         const userId = sessionStorage.getItem('id');
//         const token = sessionStorage.getItem('token');
  
//         if (userId && token) {
//           const userResponse = await axios.get(`http://localhost:2003/api/users/users/${userId}`, {
//             headers: {
//               Authorization: `Bearer ${token}`
//             }
//           });
//           const userData = userResponse.data;
//           setUser(userData);
  
//           const profileResponse = await axios.get(`http://localhost:2003/api/profiles/${userData.email}`, {
//             headers: {
//               Authorization: `Bearer ${token}`
//             }
//           });
//           const profile = profileResponse.data;
//           setProfileData(profile);
  
//           if (profile.contactOption) {
//             sessionStorage.setItem('contactOption', profile.contactOption);
//           }
  
//           const paymentResponse = await axios.get(`http://localhost:2003/api/payments/payment-get/${userId}`, {
//             headers: {
//               Authorization: `Bearer ${token}`
//             }
//           });
  
//           console.log('Payment Response:', paymentResponse.data);
  
//           // Convert payment status to lowercase to match conditions
//           const status = paymentResponse.data.paymentStatus.toLowerCase();
//           setPaymentStatus(status);
  
//         } else {
//           navigate('/loginuser');
//         }
//       } catch (error) {
//         console.error('Error fetching data:', error);
//         if (error.response) {
//           console.error('Error Response:', error.response.data);
//         }
//       }
//     };
  
//     fetchCoachData();
//   }, [navigate]);
  
  
//   const handleMakePayment = () => {
//     // Set payment status to pending before navigating to payment page
//     sessionStorage.setItem('paymentStatus', 'Pending');
//     setPaymentStatus('Pending');
//     navigate('/payment');
//   };

//   const goToProfile = () => {
//     navigate('/profile-setup');
//   };

//   const goToCoachcard = () => {
//     navigate('/coach');
//   };

//   const contactOption = sessionStorage.getItem('contactOption'); // Retrieve contactOption from session storage

//   return (
//     <div className="dashboard-container">
//       <aside className="sidebar">
//         <div className="profile-section">
//           {user && (
//             <>
//               <img src="profile-pic-url" alt="Profile" className="profile-pic" />
//               <h3>{`${user.username}`}</h3>
//               <p>{user.email}</p>
//             </>
//           )}
//         </div>
//         {/* Payment Status Section */}
//         <div className="payment-status-section">
//           <h4>Payment Status:</h4>
//           <p className={`payment-status ${paymentStatus}`}>
//             {paymentStatus === 'succeeded'
//               ? 'Payment completed successfully'
//               : paymentStatus === 'pending'
//               ? 'Payment is pending'
//               : paymentStatus === 'failed'
//               ? 'Payment failed'
//               : 'No payment made'}
//           </p>
//         </div>
//       </aside>
//       <main className="main-content">
//         <header className="dashboard-header">
//           <h2>My Dashboard</h2>
//         </header>
//         <section className="onboarding-section">
//           <div className="onboarding-text">
//             <h3>🌟 Welcome to Your User Dashboard! 🌟</h3>
//             <p>
//               You're just a few steps away from achieving your fitness goals! To get the best possible matches with coaches, please take a moment to fill out your assessment.
//             </p>
//             <p>
//               Let’s get started on your path to success! 💪✨
//             </p>
//           </div>
//           <div className="onboarding-buttons">
//             <button className="btn complete-profile" onClick={goToProfile}>Complete Your Profile</button>
//             <button className="btn take-assessment" onClick={goToCoachcard}>Find the Coach</button>
//           </div>
//         </section>
//         <section className="status-section">
//           {profileData && (
//             <div>
//               {profileData.status === 'approved' ? (
//                 <div className="status-message congratulation">
//                   <h3>🎉 Congratulations! Your profile has been approved! 🎉</h3>
//                   <p>You are now ready to start connecting with coaches. Best of luck on your fitness journey!</p>
//                   {paymentStatus === 'succeeded' ? (
//                     <p className="payment-success">Payment completed successfully. Thank you!</p>
//                   ) : (
//                     <button className="make-payment-button" onClick={handleMakePayment}>Make a Payment</button>
//                   )}
//                 </div>
//               ) : profileData.status === 'declined' ? (
//                 <div className="status-message rejection">
//                   <h3>❌ Unfortunately, your profile has been rejected. ❌</h3>
//                   <p>Please review your information and try again. We're here to help!</p>
//                 </div>
//               ) : profileData.status === 'pending' ? (
//                 <div className="status-message pending">
//                   <h3>⏳ Your profile is currently pending approval. ⏳</h3>
//                   <p>Thank you for your patience! We will notify you once the review process is complete.</p>
//                 </div>
//               ) : null}
//             </div>
//           )}
//         </section>
//       </main>
//     </div>
//   );
// };

// export default CoachDashboard;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { House, LogIn, MousePointer2,Signpost} from 'lucide-react';

import '../CSS/UserDashboard.css';
import { useNavigate } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';

import { MdCheckCircle } from 'react-icons/md';

const Dashboard = () => {

  const [user, setUser] = useState(null); // State to hold basic user details
  const [profileData, setProfileData] = useState(null); // State to hold full profile data
  const [paymentStatus, setPaymentStatus] = useState(''); // Payment status
  const navigate = useNavigate();

  // Fetch user and payment status when the component mounts
  useEffect(() => {
    const fetchCoachData = async () => {
      try {
        const userId = sessionStorage.getItem('id');
        const token = sessionStorage.getItem('token');
  
        if (userId && token) {
          const userResponse = await axios.get(`http://localhost:2003/api/users/users/${userId}`, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
          const userData = userResponse.data;
          setUser(userData);
  
          const profileResponse = await axios.get(`http://localhost:2003/api/profiles/${userData.email}`, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
          const profile = profileResponse.data;
          setProfileData(profile);
  
          // if (profile.contactOption) {
          //   sessionStorage.setItem('contactOption', profile.contactOption);
          // }
  
          const paymentResponse = await axios.get(`http://localhost:2003/api/payments/payment-get/${userId}`, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
  
          // console.log('Payment Response:', paymentResponse.data);
  
          // Convert payment status to lowercase to match conditions
          const status = paymentResponse.data.paymentStatus.toLowerCase();
          setPaymentStatus(status);
  
        } else {
          navigate('/loginuser');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        if (error.response) {
          console.error('Error Response:', error.response.data);
        }
      }
    };
  
    fetchCoachData();
  }, [navigate]);
  
  
  const handleMakePayment = () => {
    // Set payment status to pending before navigating to payment page
    sessionStorage.setItem('paymentStatus', 'Pending');
    setPaymentStatus('Pending');
    navigate('/payment');
  };

  const goToProfile = () => {
    navigate('/profile-setup');
  };

  const goToCoachcard = () => {
    navigate('/coach');
  };

  // const contactOption = sessionStorage.getItem('contactOption'); // Retrieve contactOption from session storage

  return (
    <div className="udashboard-container">
      <div className="fixed left-2 top-1/2 -translate-y-1/2">
  <div className="relative flex flex-col space-y-4 bg-gray-800/30 p-1 rounded-2xl backdrop-blur-lg border-l-4 border-emerald-500/50 shadow-lg shadow-emerald-500/5">
    {[
      { icon: House, path: '/', tooltip: 'Home' },
      { icon: MousePointer2, path: '/register-select', tooltip: 'Register' },
      { icon: Signpost, path: '/register-user', tooltip: 'Sign Up' },
      {
        icon: LogIn,
        tooltip: 'Logout',
        onClick: () => {
          sessionStorage.clear(); // Clear session storage
          navigate('/'); // Redirect to login page
        },
      },
    ].map(({ icon: Icon, path, tooltip, onClick }, index) => (
      <div key={index} className="group relative">
        <button
          onClick={onClick || (() => navigate(path))}
          className="p-3 w-12 h-12 rounded-xl bg-gray-700/50 hover:bg-emerald-500/20 text-gray-400 hover:text-emerald-500 transition-all duration-300 flex items-center justify-center hover:scale-110 hover:shadow-lg hover:shadow-emerald-500/20"
        >
          <Icon className="w-6 h-6" />
        </button>
        <div className="absolute left-full ml-4 px-3 py-1 bg-gray-800 text-emerald-500 text-sm rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap border border-emerald-500/20 shadow-lg shadow-emerald-500/5">
          {tooltip}
          <div className="absolute left-0 top-1/2 -translate-x-1 -translate-y-1/2 w-2 h-2 bg-gray-800 border-l border-t border-emerald-500/20 transform -rotate-45"></div>
        </div>
      </div>
    ))}
    <div className="absolute -left-[2px] top-0 w-[2px] h-full bg-gradient-to-b from-emerald-500/0 via-emerald-500/50 to-emerald-500/0"></div>
    <div className="absolute -z-10 inset-0 rounded-2xl bg-gradient-to-r from-emerald-500/5 to-transparent"></div>
  </div>
</div>

      {/* Left Side - Profile Section */}
      <div className="uprofile-section">
        <h2>My Profile</h2>
        <FaUserCircle className="profile-icon" />
           {user && (
             <>
               <h3>{`${user.username}`}</h3>
               <p>{user.email}</p>
             </>
           )}

        <div className="payment-status">
          <span>Payment Status:</span>
          <div className="status-completed">
            <MdCheckCircle className="status-icon" /> 
            <p className={`payment-s ${paymentStatus}`}>
             {paymentStatus === 'succeeded'
               ? 'Payment completed'
               : paymentStatus === 'pending'
               ? 'Payment is pending'
               : paymentStatus === 'failed'
               ? 'Payment failed'
               : 'No payment made'}
           </p>
          </div>
        </div>
      </div>

      {/* Right Side - Main Dashboard Content */}
      <div className="main-dashboard">
      {/* Welcome Message Section */}
        <div className="welcome-section">
        <h2>Welcome to Your Dashboard</h2>
        <p>
          You’re just a few steps away from achieving your fitness goals!
          To get the best possible matches with coaches, please take a moment to fill out your assessment. 
          Let's get started on your path to success! 
        </p>
          <div className="action-buttons">
            <button className="uprofile-btn" onClick={goToProfile}>Complete Your Profile</button>
            <button className="coach-btn" onClick={goToCoachcard}>Find a Coach</button>
        </div>
      </div>

      {/* Profile Status Message */}
        <div className="status-message">
           {profileData && (
            <div>
              {profileData.status === 'approved' ? (
                <div className="status-message congratulation">
                  <h3> Congratulations! Your profile has been approved! </h3>
                  <p>You are now ready to start connecting with coaches. Best of luck on your fitness journey!</p>
                  {paymentStatus === 'succeeded' ? (
                    <p className="payment-success">Payment completed successfully. Thank you!<br></br><br></br>
                    Please check your email for your coaching link.</p>
                    
                  ) : (
                    <button className="uprofile-btn" onClick={handleMakePayment}>Make a Payment</button>
                  )}
                </div>
              ) : profileData.status === 'declined' ? (
                <div className="status-message rejection">
                  <h3> Unfortunately, your profile has been rejected. </h3>
                  <p>Please review your information and try again. We're here to help!</p>
                </div>
              ) : profileData.status === 'pending' ? (
                <div className="status-message pending">
                  <h3> Your profile is currently pending approval. </h3>
                  <p>Thank you for your patience! We will notify you once the review process is complete.</p>
                </div>
              ) : null}
            </div>
          )}
        </div>
  </div>
  </div>
  );
};

export default Dashboard;

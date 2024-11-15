
// import "../CSS/CoachDetail.css";
// import React, { useState, useEffect } from "react";
// import { useNavigate, useParams } from 'react-router-dom';
// import axios from 'axios';

// function CoachDetail() {
//   const navigate = useNavigate();
//   const { coachEmail } = useParams(); // Fetch the email from the URL
//   const [coachProfile, setCoachProfile] = useState(null);
//   const [ setShowModal] = useState(false); // State for modal visibility

//   useEffect(() => {
//     // Fetch coach profile based on coachEmail
//     const fetchCoachProfile = async () => {
//       try {
//         const response = await axios.get(`http://localhost:2003/api/coachesProfiles/profile/${coachEmail}`);
//         setCoachProfile(response.data);
//       } catch (error) {
//         console.error('Error fetching coach profile:', error);
//       }
//     };

//     fetchCoachProfile();
//   }, [coachEmail]);

//   const handleSendRequest = () => {
//     setShowModal(true); // Show the modal when "Send Request" button is clicked
//   };

//   const handleCloseModal = () => {
//     setShowModal(false); // Close the modal
//   };

//   if (!coachProfile) {
//     return <p>Loading coach profile...</p>; // Display loading state while profile is being fetched
//   }

//   return (
//     <div className="profile-card">
//       <div className="profile-container">
//         <div className="left-side">
//           <div className="profile-picture">
//             <img src={coachProfile.profileImage || '/path/to/default/profile.jpg'} alt="Profile" />
//           </div>
//           <h2>{coachProfile.fullName || "John Doe"}</h2>
//           <h3>{coachProfile.specialization || "Fitness Coach"}</h3>
//           <div className="details">
//             <p><strong>Age:</strong> {coachProfile.age || 'N/A'}</p>
//             <p><strong>Education:</strong> {coachProfile.education || 'N/A'}</p>
//           </div>
//           <div className="buttons-row">
//             <button className="follow-button">Follow</button>
//             <button className="send-request-button" onClick={() => navigate('/profile-setup')}>Send Request</button>
//           </div>
//         </div>
//         <div className="right-side">
//           <div className="card">
//             <h4>Bio</h4>
//             <p>{coachProfile.bio || 'No bio available'}</p>
//           </div>
//           <div className="card">
//             <h4>Qualifications</h4>
//             <p>{coachProfile.qualification || 'No qualifications available'}</p>
//           </div>
//           <div className="card">
//             <h4>Coaching Style</h4>
//             <p>{coachProfile.coachingStyle || 'No coaching style available'}</p>
//           </div>
//           <div className="card">
//             <h4>Availability</h4>
//             <p>{coachProfile.availability || 'No availability information'}</p>
//           </div>
//         </div>
//       </div>


//     </div>
//   );
// }

// export default CoachDetail;


import { motion } from "framer-motion";
import { SendHorizontal, Award, Calendar, Book } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

export default function Component() {
  const navigate = useNavigate();
  const { coachEmail } = useParams(); // Fetch the email from the URL
  const [coachProfile, setCoachProfile] = useState(null);
  const [showModal, setShowModal] = useState(false); // State for modal visibility

  useEffect(() => {
    // Fetch coach profile based on coachEmail
    const fetchCoachProfile = async () => {
      try {
        const response = await axios.get(`http://localhost:2003/api/coachesProfiles/profile/${coachEmail}`);
        setCoachProfile(response.data);
      } catch (error) {
        console.error('Error fetching coach profile:', error);
      }
    };

    fetchCoachProfile();
  }, [coachEmail]);

  const handleSendRequest = () => {
    navigate('/profile-setup');  // Navigate to profile-setup page when the button is clicked
  };

  const handleCloseModal = () => {
    setShowModal(false); // Close the modal
  };

  if (!coachProfile) {
    return <p>Loading coach profile...</p>; // Display loading state while profile is being fetched
  }

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 20,
          duration: 0.6
        }}
        className="w-full max-w-4xl bg-gray-800/50 backdrop-blur-xl rounded-2xl overflow-hidden shadow-2xl border border-gray-700"
      >
        <div className="p-8">
          {/* Header Section */}
          <motion.div 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-start mb-8"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-full bg-green-500/20 animate-pulse" />
              <motion.h1
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-3xl font-bold text-white"
              >
                {coachProfile.fullName || "John Doe"}
              </motion.h1>
            </div>
            <motion.h2
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-400"
            >
              {coachProfile.specialization || "Fitness Coach"}
            </motion.h2>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex gap-6 mt-2"
            >
              <div className="text-green-400">
                <span className="font-semibold">Age:</span> {coachProfile.age || 'N/A'}
              </div>
              <div className="text-green-400">
                <span className="font-semibold">Education:</span> {coachProfile.education || 'N/A'}
              </div>
            </motion.div>
          </motion.div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2  gap-1 mt-1 ">
            {[
              { title: "Bio", icon: Book, content: coachProfile.bio || 'No bio available', delay: 0.3 },
              { title: "Qualifications", icon: Award, content: coachProfile.qualification || 'No qualifications available', delay: 0.4 },
              { title: "Coaching Style", icon: SendHorizontal, content: coachProfile.coachingStyle || 'No coaching style available', delay: 0.5 },
              { title: "Availability", icon: Calendar, content: coachProfile.availability || 'No availability information', delay: 0.6 }
            ].map((item) => (
              <motion.div
                key={item.title}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: item.delay }}
                whileHover={{ scale: 1.02 }}
                className="group relative bg-gray-700/30 w-96 h-30 rounded-xl p-6 hover:bg-gray-700/40 transition-all duration-300"
              >
                <div className="absolute top-0 left-0 w-10 h-30 bg-gradient-to-br from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
                <div className="relative">
                  <div className="flex items-center gap-3 mb-3">
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: item.delay + 0.1 }}
                      className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center"
                    >
                      <item.icon className="w-5 h-5 text-green-400" />
                    </motion.div>
                    <motion.h3
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: item.delay + 0.2 }}
                      className="text-lg font-semibold text-white"
                    >
                      {item.title}
                    </motion.h3>
                  </div>
                  <motion.p
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: item.delay + 0.3 }}
                    className="text-gray-300"
                  >
                    {item.content}
                  </motion.p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Action Button */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-8 flex justify-end"
          >
<motion.button
  onClick={handleSendRequest}
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="w-30 py-3 px-6 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 transform hover:scale-105 focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-gray-800 flex items-center gap-2"
>
  <SendHorizontal className="w-4 h-4" />
  Send Request
</motion.button>

          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

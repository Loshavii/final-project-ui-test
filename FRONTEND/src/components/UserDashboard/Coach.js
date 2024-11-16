

// import React, { useEffect, useState } from 'react';
// import '../CSS/Coach.css';
// import {  useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const Coach = () => {
//   const [coaches, setCoaches] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchCoaches = async () => {
//       try {
//         const response = await axios.get('http://localhost:2003/api/coaches/coaches/approved');
//         setCoaches(response.data);
//       } catch (error) {
//         console.error('Error fetching coaches:', error);
//       }
//     };

//     fetchCoaches();
//   }, []);

//   const handleViewDetails = (email) => {
//     // Store the coach's email in session storage
//     sessionStorage.setItem('coachEmail', email);
//     // Navigate to the coach's details page
//     navigate(`/coach/${email}`);
//   };

//   return (
//     <div className="login-page">

//     <div className="coaches-container">
//       {coaches.map((coach) => (
//         <div key={coach._id} className="coach-card">
//           <img src="/path/to/profile/image" alt="Coach" className="coach-img" />
//           <div className="coach-info">
//             <h2 className="coach-name">{coach.username || 'Unknown Coach'}</h2>
//             <p className="coach-text">
//               Specialization: {coach.specialization || 'N/A'}<br />
//               {coach.experience || 'N/A'} exp.
//             </p>
//             <button
//               className="book-session-btn"
//               onClick={() => handleViewDetails(coach.email)}
//             >
//               View Details
//             </button>
//           </div>
//         </div>
//       ))}
//     </div>
//     </div>
//   );
// };

// export default Coach;
// import React, { useEffect, useState, useRef } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { UserCircle2, Search, Dumbbell, Brain, Heart } from 'lucide-react';

// const coaches = [
//   { name: "jathushanjd", specialization: "Martial Arts", experience: "4 years", rating: 4.8 },
//   { name: "losh", specialization: "ICT Training", experience: "2 years", rating: 4.5 },
//   { name: "johnwick01", specialization: "Gym & Fitness", experience: "3 years", rating: 4.9 },
//   { name: "Jeyananthan Gayathiri", specialization: "Fitness", experience: "2 years", rating: 4.6 },
//   { name: "pavithan", specialization: "Personal Training", experience: "1 year", rating: 4.3 },
//   { name: "aaru", specialization: "Fitness & Nutrition", experience: "2 years", rating: 4.7 },
//   { name: "biranav", specialization: "Strength Training", experience: "2 years", rating: 4.4 },
//   { name: "teena", specialization: "Meditation & Yoga", experience: "5 years", rating: 4.9 },
// ];

// const CoachFinder = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [hoveredCard, setHoveredCard] = useState(null);
//   const [filteredCoaches, setFilteredCoaches] = useState(coaches);
//   const scrollRef = useRef(null);
//   const [scrollPosition, setScrollPosition] = useState(0);

//   useEffect(() => {
//     const filtered = coaches.filter(coach => 
//       coach.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       coach.specialization.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//     setFilteredCoaches(filtered);
//   }, [searchTerm]);

//   // Auto-scroll effect
//   useEffect(() => {
//     const scrollContainer = scrollRef.current;
//     if (!scrollContainer) return;

//     const scrollInterval = setInterval(() => {
//       setScrollPosition(prev => {
//         const newPosition = prev + 1;
//         const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
        
//         if (newPosition >= maxScroll) {
//           scrollContainer.scrollTo({ left: 0, behavior: 'smooth' });
//           return 0;
//         }
        
//         scrollContainer.scrollTo({ left: newPosition, behavior: 'auto' });
//         return newPosition;
//       });
//     }, 30);

//     return () => clearInterval(scrollInterval);
//   }, []);

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.2 }
//     }
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.5, ease: "easeOut" }
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 p-4 md:p-8">
//       {/* Animated background elements */}
//       <div className="fixed inset-0 overflow-hidden">
//         <div className="absolute w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl -top-48 -left-48 animate-pulse" />
//         <div className="absolute w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse delay-700" />
//       </div>

//       <div className="max-w-7xl mx-auto relative z-10">
//         <motion.div
//           initial="hidden"
//           animate="visible"
//           variants={containerVariants}
//           className="text-center mb-12"
//         >
//           <motion.h1 
//             variants={itemVariants}
//             className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent"
//           >
//             Find Your Perfect Coach
//           </motion.h1>
//           <motion.p 
//             variants={itemVariants}
//             className="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl mx-auto"
//           >
//             Discover expert coaches tailored to your fitness goals and personal growth journey.
//           </motion.p>
//           <motion.div 
//             variants={itemVariants}
//             className="relative max-w-xl mx-auto"
//           >
//             <input
//               type="text"
//               placeholder="Search by name or specialization..."
//               className="w-full px-6 py-4 rounded-2xl bg-gray-800/50 text-white border border-gray-700 pl-14 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//             />
//             <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-6 w-6" />
//           </motion.div>
//         </motion.div>

//         {/* Auto-scrolling coach cards with hidden scrollbar */}
//         <div className="mb-20 overflow-hidden">
//           <div 
//             ref={scrollRef}
//             className="flex gap-6 overflow-x-auto no-scrollbar"
//             style={{ 
//               scrollBehavior: 'smooth',
//               msOverflowStyle: 'none',
//               scrollbarWidth: 'none',
//             }}
//           >
//             <style jsx global>{`
              
//             .no-scrollbar::-webkit-scrollbar {
//               display: none;
//             }
              
          
//             .no-scrollbar {
//                 -ms-overflow-style: none;  
//                 scrollbar-width: none; 
//             }
//             `}</style>
//             {[...filteredCoaches, ...filteredCoaches].map((coach, index) => (
//               <motion.div
//                 key={index}
//                 variants={itemVariants}
//                 initial="hidden"
//                 animate="visible"
//                 exit={{ opacity: 0, scale: 0.9 }}
//                 whileHover={{ y: -8 }}
//                 className="flex-none w-72"
//               >
//                 <div className="group h-full">
//                   <div className="h-full rounded-2xl border border-gray-700 bg-gray-800/50 backdrop-blur-sm p-6 transition-all duration-300 hover:border-emerald-500/50 hover:bg-gray-800/80">
//                     <div className="relative mb-6">
//                       <motion.div 
//                         animate={{
//                           scale: hoveredCard === index ? 1.1 : 1,
//                           rotateY: hoveredCard === index ? 180 : 0
//                         }}
//                         transition={{ duration: 0.6 }}
//                         className="w-24 h-24 mx-auto rounded-full border-2 border-emerald-500 bg-emerald-500/10 flex items-center justify-center"
//                         onHoverStart={() => setHoveredCard(index)}
//                         onHoverEnd={() => setHoveredCard(null)}
//                       >
//                         <UserCircle2 className="w-16 h-16 text-emerald-400" />
//                       </motion.div>
//                       <motion.span 
//                         initial={{ scale: 0 }}
//                         animate={{ scale: 1 }}
//                         className="absolute -top-2 left-1/2 -translate-x-1/2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-4 py-1 rounded-full text-sm font-medium shadow-lg"
//                       >
//                         Coach
//                       </motion.span>
//                     </div>
                    
//                     <div className="text-center">
//                       <h3 className="text-xl font-bold text-white mb-2">{coach.name}</h3>
//                       <p className="text-emerald-400 font-medium mb-2">
//                         {coach.specialization}
//                       </p>
//                       <p className="text-gray-400 text-sm mb-6">
//                         {coach.experience} experience
//                       </p>
//                       <button
//                         className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 transform hover:scale-105 focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-gray-800"
//                       >
//                         View Profile
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>

//         {/* Why Choose Us section */}
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.6 }}
//           className="mt-16 text-center relative z-10"
//         >
//           <h2 className="text-3xl font-bold text-white mb-8 bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
//             Why Choose Our Coaches?
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
//             {[
//               { 
//                 icon: Dumbbell, 
//                 title: "Expert Guidance", 
//                 description: "Get training plans tailored to your goals and fitness level." 
//               },
//               { 
//                 icon: Brain, 
//                 title: "Continuous Learning", 
//                 description: "Stay updated with the latest fitness trends and training techniques." 
//               },
//               { 
//                 icon: Heart, 
//                 title: "Holistic Approach", 
//                 description: "Focus on both physical and mental well-being for complete transformation" 
//               },
//             ].map((feature, index) => (
//               <motion.div
//                 key={index}
//                 variants={itemVariants}
//                 whileHover={{ scale: 1.05, backgroundColor: 'rgba(16, 185, 129, 0.1)' }}
//                 className="bg-gray-800/50 backdrop-blur-lg p-8 rounded-xl border border-gray-700 transition-all duration-300"
//               >
//                 <motion.div
//                   whileHover={{ rotate: 360 }}
//                   transition={{ duration: 0.8 }}
//                 >
//                   <feature.icon className="w-12 h-12 text-emerald-500 mx-auto mb-4" />
//                 </motion.div>
//                 <h3 className="text-white font-semibold text-xl mb-3">{feature.title}</h3>
//                 <p className="text-gray-300">{feature.description}</p>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default CoachFinder;

import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { UserCircle2, Search, Dumbbell, Brain, Heart,House, LogIn, MousePointer2 ,LayoutDashboard} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CoachFinder = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [hoveredCard, setHoveredCard] = useState(null);
  const [filteredCoaches, setFilteredCoaches] = useState([]);
  const [coaches, setCoaches] = useState([]);
  const scrollRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCoaches = async () => {
      try {
        const response = await axios.get('http://localhost:2003/api/coaches/coaches/approved');
        setCoaches(response.data);
        setFilteredCoaches(response.data);
      } catch (error) {
        console.error('Error fetching coaches:', error);
      }
    };

    fetchCoaches();
  }, []);

  useEffect(() => {
    const filtered = coaches.filter(coach => 
      coach.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
      coach.specialization.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCoaches(filtered);
  }, [searchTerm, coaches]);

  // Auto-scroll effect
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scrollInterval = setInterval(() => {
      setScrollPosition(prev => {
        const newPosition = prev + 1;
        const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
        
        if (newPosition >= maxScroll) {
          scrollContainer.scrollTo({ left: 0, behavior: 'smooth' });
          return 0;
        }
        
        scrollContainer.scrollTo({ left: newPosition, behavior: 'auto' });
        return newPosition;
      });
    }, 30);

    return () => clearInterval(scrollInterval);
  }, []);

  const handleViewDetails = (email) => {
    // Store the coach's email in session storage
    sessionStorage.setItem('coachEmail', email);
    // Navigate to the coach's details page
    navigate(`/coach/${email}`);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 p-4 md:p-8">
      <div className="fixed left-2 top-1/2 -translate-y-1/2">
        <div className="relative flex flex-col space-y-4 bg-gray-800/30 p-1 rounded-2xl backdrop-blur-lg border-l-4 border-emerald-500/50 shadow-lg shadow-emerald-500/5">
        {[
  { icon: House, path: '/', tooltip: 'Home' },
  { icon: MousePointer2, path: '/register-select', tooltip: 'Register' },
  { icon: LogIn, path: '/register-user', tooltip: 'Sign Up' },
  { icon: LayoutDashboard, path: '/user-dashboard', tooltip: 'UserDashboard' }
].map(({ icon: Icon, path, tooltip }, index) => (
  <div key={index} className="group relative">
    <button
      onClick={() => navigate(path)}
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
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl -top-48 -left-48 animate-pulse" />
        <div className="absolute w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse delay-700" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center mb-12"
        >
          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent"
          >
            Find Your Perfect Coach
          </motion.h1>
          <motion.p 
            variants={itemVariants}
            className="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl mx-auto"
          >
            Discover expert coaches tailored to your fitness goals and personal growth journey.
          </motion.p>
          <motion.div 
            variants={itemVariants}
            className="relative max-w-xl mx-auto"
          >
            <input
              type="text"
              placeholder="Search by name or specialization..."
              className="w-full px-6 py-4 rounded-2xl bg-gray-800/50 text-white border border-gray-700 pl-14 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-6 w-6" />
          </motion.div>
        </motion.div>

        {/* Auto-scrolling coach cards with hidden scrollbar */}
        <div className="mb-20 overflow-hidden">
          <div 
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto no-scrollbar"
            style={{ 
              scrollBehavior: 'smooth',
              msOverflowStyle: 'none',
              scrollbarWidth: 'none',
            }}
          >
            <style jsx global>{`
              .no-scrollbar::-webkit-scrollbar {
                display: none;
              }
              
              .no-scrollbar {
                -ms-overflow-style: none;  
                scrollbar-width: none; 
              }
            `}</style>
            {[...filteredCoaches, ...filteredCoaches].map((coach, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -8 }}
                className="flex-none w-72"
              >
                <div className="group h-full">
                  <div className="h-full rounded-2xl border border-gray-700 bg-gray-800/50 backdrop-blur-sm p-6 transition-all duration-300 hover:border-emerald-500/50 hover:bg-gray-800/80">
                    <div className="relative mb-6">
                      <motion.div 
                        animate={{
                          scale: hoveredCard === index ? 1.1 : 1,
                          rotateY: hoveredCard === index ? 180 : 0
                        }}
                        transition={{ duration: 0.6 }}
                        className="w-24 h-24 mx-auto rounded-full border-2 border-emerald-500 bg-emerald-500/10 flex items-center justify-center"
                        onHoverStart={() => setHoveredCard(index)}
                        onHoverEnd={() => setHoveredCard(null)}
                      >
                        <UserCircle2 className="w-16 h-16 text-emerald-400" />
                      </motion.div>
                      <motion.span 
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute -top-2 left-1/2 -translate-x-1/2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-4 py-1 rounded-full text-sm font-medium shadow-lg"
                      >
                        Coach
                      </motion.span>
                    </div>
                    
                    <div className="text-center">
                      <h3 className="text-xl font-bold text-white mb-2">{coach.username}</h3>
                      <p className="text-emerald-400 font-medium mb-2">
                        {coach.specialization}
                      </p>
                      <p className="text-gray-400 text-sm mb-6">
                        {coach.experience} experience
                      </p>
                      <button
                        className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 transform hover:scale-105 focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-gray-800"
                        onClick={() => handleViewDetails(coach.email)}
                      >
                        View Profile
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Why Choose Us section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center relative z-10"
        >
          <h2 className="text-3xl font-bold text-white mb-8 bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
            Why Choose Our Coaches?
          </h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
             {[
              
               { 
                
                 icon: Dumbbell, 
                 title: "Expert Guidance", 
                 description: "Personalized training plans for your goals." 
               },
               { 
                 icon: Brain, 
                 title: "Continuous Learning", 
                 description: "Stay current with fitness trends and training tips." 
               },
               { 
                 icon: Heart, 
                 title: "Holistic Approach", 
                 description: "Balance physical and mental well-being." 
               },
             ].map((feature, index) => (
               <motion.div
                 key={index}
                 variants={itemVariants}
                 whileHover={{ scale: 1.05, backgroundColor: 'rgba(16, 185, 129, 0.1)' }}
                 className="bg-gray-800/50 backdrop-blur-lg p-8 rounded-xl border border-gray-700 transition-all duration-300"
               >
                 <motion.div
                   whileHover={{ rotate: 360 }}
                   transition={{ duration: 0.8 }}
                 >
                   <feature.icon className="w-12 h-12 text-emerald-500 mx-auto mb-4" />
                 </motion.div>
                 <h1 className="text-white font-semibold text-xl mb-2">{feature.title}</h1>
                 <p className="text-gray-300">{feature.description}</p>
               </motion.div>
             ))}
           </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CoachFinder;

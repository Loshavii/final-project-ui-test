


// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import '../CSS/CoachDashboard.css';
// const CoachDashboard = () => {
//   const [coach, setCoach] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchCoachData = async () => {
//       try {
//         const coachId = sessionStorage.getItem('id');
//         const token = sessionStorage.getItem('token');
//         if (coachId && token) {
//           const response = await axios.get(`http://localhost:2003/api/coaches/coaches/${coachId}`, {
//             headers: {
//               Authorization: `Bearer ${token}`
//             }
//           });
//           setCoach(response.data);
//         } else {
//           navigate('/login');
//         }
//       } catch (error) {
//         console.error('Error fetching coach data:', error);
//       }
//     };

//     fetchCoachData();
//   }, [navigate]);

//   const goToProfile = () => {
//     navigate('/coach-profile');
//   };

//   const viewRequests = () => {
//     if (coach && coach.email) {
//       navigate(`/profile-card/${coach.email}`); // Navigate to ProfileCard page with email
//     }
//   };

//   const UserDetails = () => {
//     if (coach && coach.email) {
//       navigate(`/UserDetails/${coach.email}`); // Navigate to ProfileCard page with email
//     }
//   };

// const handleClick = () => {
//   window.open('https://live-streaming-app-delta.vercel.app/', '_blank');
// };

  

//   return (
//     <div className="dashboard-container">
//       <aside className="sidebar">
//         <div className="profile-section">
//           {coach && (
//             <>
//               <img src="profile-pic-url" alt="Profile" className="profile-pic" />
//               <h3>{`${coach.username}`}</h3>
//               <p>{coach.email}</p>
              
//             </>
//           )}
//         </div>
//         <nav className="nav-links">
//           <a href="/dashboard" className="active">Dashboard</a>
//           {/* <a href="/UserDetails/${coach.email}">My Members</a> */}
//           <button className="btn take-assessment" onClick={UserDetails}>View Requests</button>
//           <button className="btn take-assessment " onClick={handleClick}>join Video chat</button>
//         </nav>
//       </aside>
//       <main className="main-content">
//         <header className="dashboard-header">
//           <h2>My Dashboard</h2>
//         </header>
//         <section className="onboarding-section">
//           <div className="onboarding-text">
//             <h3>Coach Onboarding</h3>
//             <p>
//               You’re a few steps away from getting started as a coach! 
//               Make sure to fill out your assessment to ensure you get the best possible matches with new alumni.
//             </p>
//           </div>
//           <div className="onboarding-buttons">
//             <button className="btn complete-profile" onClick={goToProfile}>Complete Your Profile</button>
//             <button className="btn take-assessment" onClick={viewRequests}>View Requests</button>
//           </div>
//         </section>
//         <section className="stats-section">
//           {/* Your stat cards */}
//         </section>
//       </main>
//     </div>
//   );
// };

// export default CoachDashboard;













import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaUser, FaSignOutAlt, FaEllipsisV} from "react-icons/fa";
import {
  Bell,
  ChevronDown,
  Home,
  Mail,
  PlusCircle,
  Users,
  Zap,
  Target,
  BarChart,
} from 'lucide-react';

// Reusable button component
const Button = ({ children, className, ...props }) => {
  return (
    <button
      className={`px-4 py-2 rounded-lg transition-all duration-200 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

// Dropdown Menu Components
const DropdownMenu = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return <div className="relative">{children(isOpen, setIsOpen)}</div>;
};

const DropdownMenuTrigger = ({ children, onClick }) => {
  return <div onClick={onClick}>{children}</div>;
};

const DropdownMenuContent = ({ children, isOpen }) => {
  if (!isOpen) return null;
  return (
    <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-[rgba(31,41,55,0.5)] ring-1 ring-black ring-opacity-5">
      <div className="py-1">{children}</div>
    </div>
  );
};

const DropdownMenuItem = ({ children, className, onClick }) => {
  return (
    <div
      className={`px-4 py-2 text-sm cursor-pointer ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

const DropdownMenuLabel = ({ children }) => {
  return <div className="px-4 py-2 text-sm font-medium text-white">{children}</div>;
};

const DropdownMenuSeparator = ({ className }) => {
  return <div className={`h-px my-1 ${className}`}></div>;
};

// Sidebar Components
const Sidebar = ({ children, className }) => {
  return <div className={`w-64 h-full ${className}`}>{children}</div>;
};

const SidebarHeader = ({ children, className }) => (
  <div className={className}>{children}</div>
);

const SidebarMenu = ({ children }) => <nav>{children}</nav>;
const SidebarMenuItem = ({ children }) => <div className="mb-1">{children}</div>;
const SidebarMenuButton = ({ children, className, onClick }) => (
  <button
    className={`flex items-center px-4 py-2 rounded-lg w-full ${className}`}
    onClick={onClick}
  >
    {children}
  </button>
);

// Main Dashboard Component
function CoachDashboard() {
  const [coach, setCoach] = useState(null);
  const navigate = useNavigate();
  const [mounted, setMounted] = useState(false);
   useEffect(() => {
     const fetchCoachData = async () => {
       try {
         const coachId = sessionStorage.getItem('id');
         const token = sessionStorage.getItem('token');
         if (coachId && token) {
           const response = await axios.get(`http://localhost:2003/api/coaches/coaches/${coachId}`, {
             headers: { Authorization: `Bearer ${token}` },
           });
           setCoach(response.data);
         } else {
           navigate('/login');
         }
       } catch (error) {
         console.error('Error fetching coach data:', error);
       }
     };

     fetchCoachData();
   }, [navigate]);
    
   const goToProfile = () => navigate('/coach-profile');
   const viewRequests = () => coach && navigate(`/profile-card/${coach.email}`);
   const joinVideoChat = () => window.open('https://live-streaming-app-delta.vercel.app/', '_blank');
   const UserDetails = () => {
     if (coach && coach.email) {
       navigate(`/UserDetails/${coach.email}`); // Navigate to ProfileCard page with email
     }
   };
   const handleLogout = () => {
    // Clear session storage or local storage
    sessionStorage.clear();
  
    // Optional: Reset state (if using a global state management solution)
  
    // Redirect to login or home page
    navigate("/login"); // Replace '/login' with your desired route
  };
  return (
    <div className="flex h-screen bg-[#111827] text-white">
      <Sidebar className="border-r border-[#374151] bg-[rgba(31,41,55,0.5)]">
        <SidebarHeader className="p-4">
          <h2 className="text-2xl font-bold text-white">CoachPro </h2>
        </SidebarHeader>
        <SidebarMenu>
          {[
            { icon: Home, label: 'Home', onClick: () => navigate('/') },
            { icon: Mail, label: 'Requests', onClick: viewRequests},
            { icon: Users, label: 'Clients', onClick: UserDetails },
            // { icon: Bell, label: 'Notifications', onClick: () => navigate('/notifications') },
            { icon: PlusCircle, label: 'New Session', onClick: joinVideoChat },
          ].map((item, index) => (
            <SidebarMenuItem key={index}>
              <SidebarMenuButton
                className="w-full justify-start text-[#D1D5DB] hover:bg-[rgba(55,65,81,0.4)] hover:text-white transition-all duration-200 ease-in-out"
                onClick={item.onClick}
              >
                <item.icon className="mr-2 h-4 w-4" />
                <span>{item.label}</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </Sidebar>

      <div className="flex-1 overflow-auto bg-[#111827]">
        <header className="flex items-center justify-between p-4 bg-[rgba(31,41,55,0.5)] border-b border-[#374151] shadow-md">
        <h1 className="text-2xl font-bold text-white">
    {coach?.username}, Welcome to CoachPro
  </h1>
          <DropdownMenu>
            {(isOpen, setIsOpen) => (
              <>
                <DropdownMenuTrigger onClick={() => setIsOpen(!isOpen)}>
                <Button className="h-8 w-8 p-0 rounded-full overflow-hidden border-2 border-[#10B981] hover:border-[#059669] transition-colors duration-200 relative">
  <img
    src="/placeholder.svg?height=32&width=32"
    alt="Coach avatar"
    className="rounded-full"
  />
  <FaEllipsisV className="absolute bottom-1 right-1 text-[#10B981] hover:text-[#059669] transition-colors duration-200" />
</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent isOpen={isOpen}>
  <DropdownMenuLabel>My Account</DropdownMenuLabel>
  <DropdownMenuSeparator className="bg-[#374151]" />
  
  <DropdownMenuItem
    className="hover:bg-[rgba(55,65,81,0.4)] text-[#D1D5DB] hover:text-white transition-colors duration-200 flex items-center"
    onClick={goToProfile}
  >
    <FaUser className="mr-2" />
    Profile
  </DropdownMenuItem>
  
  
  

  
  <DropdownMenuItem
  className="hover:bg-[rgba(55,65,81,0.4)] text-[#D1D5DB] hover:text-white transition-colors duration-200 flex items-center"
  onClick={handleLogout}
>
  <FaSignOutAlt className="mr-2" />
  Logout
</DropdownMenuItem>
</DropdownMenuContent>
              </>
            )}
          </DropdownMenu>
        </header>
           <main className="p-6 max-w-4xl mx-auto">
             <section className="mb-12">
               <h2 className="text-3xl font-bold mb-4 text-white">Elevate Your Coaching with CoachPro</h2>
               <p className="text-[#9CA3AF] mb-6">CoachPro is the ultimate platform designed to empower coaches and transform their practice. With our cutting-edge tools and intuitive interface, you can focus on what matters most: your clients' success.</p>
               <div className="grid md:grid-cols-3 gap-2">
                 {[
                   { icon: Zap, title: "Streamlined Workflow", description: "Manage sessions, track progress, and organize client information effortlessly." },
                   { icon: Target, title: "Goal Tracking", description: "Set and monitor client goals with our advanced tracking system." },
                   { icon: BarChart, title: "Insightful Analytics", description: "Gain valuable insights into your coaching practice with comprehensive analytics." },
                 ].map((feature, index) => (
                   <div key={index} className="bg-[rgba(31,41,55,0.5)] hover:bg-[rgba(55,65,81,0.4)] w-64 h-56 p-6 rounded-lg shadow-lg border border-[#374151] hover:shadow-xl transition-all duration-200 ease-in-out transform hover:-translate-y-1">
                     <feature.icon className="h-10 w-10 mb-2 text-[#10B981]" />
                     <h3 className="text-xl font-semibold mb-1 text-white">{feature.title}</h3>
                     <p className="text-[#9CA3AF]">{feature.description}</p>
                   </div>
                 ))}
               </div>
             </section>
             <section className="mb-12">
               <h2 className="text-2xl font-bold mb-4 text-white">Why Coaches Choose CoachPro</h2>
               <ul className="space-y-4">
                 {[
                   "Intuitive and user-friendly interface",
                   "Customizable coaching templates and resources",
                   "Secure client communication and file sharing",
                   "Automated scheduling and reminders",
                   "Comprehensive reporting and progress tracking",
                 ].map((item, index) => (
                   <li key={index} className="flex items-center">
                     <svg className="h-6 w-6 mr-2 text-[#10B981]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                     </svg>
                     <span className="text-[#D1D5DB]">{item}</span>
                   </li>
                 ))}
               </ul>
             </section>

             {/* <section>
               <h2 className="text-2xl font-bold mb-4 text-white">Ready to Transform Your Coaching?</h2>
               <p className="text-[#9CA3AF] mb-6">Join thousands of successful coaches who have elevated their practice with CoachPro. Start your journey today and experience the difference.</p>
               <div className="flex justify-center">
                 <Button className="w-fit bg-[#10B981] hover:bg-[#059669] text-white font-bold py-2 px-8 rounded-full shadow-lg transition-all duration-200 ease-in-out transform hover:-translate-y-1 hover:shadow-xl" onClick={joinVideoChat}>
                   Start Coaching
                 </Button>
               </div>
             </section> */}
           </main>
           <div className="fixed bottom-8 right-8">
             <div className="bg-[rgba(31,41,55)] hover:bg-[rgba(63,73,90,0.4)] p-4 rounded-lg shadow-lg border border-[#374151] max-w-sm">
               <h3 className="text-xl font-bold mb-2 text-white">Ready to Coach?</h3>
               <p className="text-[#9CA3AF] mb-4">Launch your coaching session with just one click. Our intuitive interface ensures a smooth experience for both you and your clients.</p>
               <Button 
  className="w-full bg-[#10B981] hover:bg-[#059669] text-white font-bold py-2 px-4 rounded-full shadow-lg transition-all duration-200 ease-in-out transform hover:-translate-y-1 hover:shadow-xl"
  onClick={joinVideoChat}
>
  Start Coaching
</Button>

             </div>
           </div>
      </div>
    </div>
  );
}

export default CoachDashboard;


// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import {
//   Bell,
//   Home,
//   Mail,
//   PlusCircle,
//   Users,
//   Zap,
//   Target,
//   BarChart,
// } from 'lucide-react';

// const Button = ({ children, className, ...props }) => (
//   <button className={`px-4 py-2 rounded-lg transition-all duration-200 ${className}`} {...props}>
//     {children}
//   </button>
// );

// const CoachDashboard = () => {
//   const [coach, setCoach] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchCoachData = async () => {
//       try {
//         const coachId = sessionStorage.getItem('id');
//         const token = sessionStorage.getItem('token');
//         if (coachId && token) {
//           const response = await axios.get(`http://localhost:2003/api/coaches/coaches/${coachId}`, {
//             headers: { Authorization: `Bearer ${token}` },
//           });
//           setCoach(response.data);
//         } else {
//           navigate('/login');
//         }
//       } catch (error) {
//         console.error('Error fetching coach data:', error);
//       }
//     };

//     fetchCoachData();
//   }, [navigate]);

//   const goToProfile = () => navigate('/coach-profile');
//   const viewRequests = () => coach && navigate(`/profile-card/${coach.email}`);
//   const joinVideoChat = () => window.open('https://live-streaming-app-delta.vercel.app/', '_blank');

//   if (!coach) return <div>Loading...</div>;

//   return (
//     <div className="flex h-screen bg-[#111827] text-white">
//       <aside className="w-64 border-r border-[#374151] bg-[rgba(31,41,55,0.5)]">
//         <div className="p-4">
//           <h2 className="text-2xl font-bold">CoachPro</h2>
//         </div>
//         <nav>
//           {[
//             { icon: Home, label: 'Dashboard', onClick: () => navigate('/coach-dashboard') },
//             { icon: Users, label: 'Clients', onClick: viewRequests },
//             { icon: PlusCircle, label: 'New Session', onClick: joinVideoChat },
//           ].map((item, index) => (
//             <button
//               key={index}
//               className="flex items-center px-4 py-2 w-full text-[#D1D5DB] hover:bg-[rgba(55,65,81,0.4)] hover:text-white"
//               onClick={item.onClick}
//             >
//               <item.icon className="mr-2" />
//               {item.label}
//             </button>
//           ))}
//         </nav>
//       </aside>

//       <main className="flex-1 p-6">
//         <header className="flex justify-between mb-6">
//           <h1 className="text-2xl font-bold">Welcome, {coach.username}</h1>
//           <Button className="bg-[#10B981]" onClick={goToProfile}>
//             Edit Profile
//           </Button>
//         </header>

//         <section className="mb-6">
//           <h2 className="text-xl font-bold mb-2">Coach Onboarding</h2>
//           <p className="text-[#9CA3AF]">
//             Fill out your assessment to ensure you get the best possible matches with new clients.
//           </p>
//           <Button className="bg-[#10B981] mt-4" onClick={viewRequests}>
//             View Requests
//           </Button>
//         </section>

//         <section className="grid md:grid-cols-3 gap-4">
//           {[
//             { icon: Zap, title: 'Streamlined Workflow', description: 'Manage sessions easily.' },
//             { icon: Target, title: 'Goal Tracking', description: 'Track and achieve goals.' },
//             { icon: BarChart, title: 'Analytics', description: 'Gain insights on performance.' },
//           ].map((feature, index) => (
//             <div
//               key={index}
//               className="p-4 bg-[rgba(31,41,55,0.5)] rounded-lg shadow hover:shadow-lg transition"
//             >
//               <feature.icon className="h-8 w-8 text-[#10B981] mb-2" />
//               <h3 className="font-semibold">{feature.title}</h3>
//               <p className="text-[#9CA3AF]">{feature.description}</p>
//             </div>
//           ))}
//         </section>
//       </main>
//     </div>
//   );
// };

// export default CoachDashboard;


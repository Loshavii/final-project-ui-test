
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import '../CSS/ProfileSetup.css';

// function ProfileSetup() {
//   const [formData, setFormData] = useState({
//     name: '',
//     dateOfBirth: '',
//     gender: '',
//     email: '',
//     phone: '',
//     height: '',
//     weight: '',
//     bloodType: '',
//     allergies: '',
//     chronicConditions: '',
//     medications: '',
//     dietaryPreferences: '',
//     exerciseRoutine: '',
//     sleepPattern: '',
//     targetWeight: '',
//     fitnessObjectives: '',
//     bloodPressure: '',
//     heartRate: '',
//     bloodSugarLevels: '',
//     contactOption: '', // New field for contact option
//     coachEmail: '', // Store coach email from session storage
//     userId: '', // New field to store the user ID from session storage
//   });

//   const [message, setMessage] = useState(''); // To display success or error message

//   // Fetch userId and coachEmail from sessionStorage when the component loads
//   useEffect(() => {
//     const storedCoachEmail = sessionStorage.getItem('coachEmail');
//     const storedUserId = sessionStorage.getItem('id');
//     const storedToken = sessionStorage.getItem('token'); // If needed for API requests
    
//     if (storedCoachEmail) {
//       setFormData((prevData) => ({
//         ...prevData,
//         coachEmail: storedCoachEmail, // Set coachEmail in formData
//       }));
//     }
    
//     if (storedUserId) {
//       setFormData((prevData) => ({
//         ...prevData,
//         userId: storedUserId, // Set userId in formData
//       }));
//     }
    
//     // Optionally use the token for API requests:
//     // If you want to use the token in headers for authentication, you can use the `storedToken` here.
//   }, []);

//   // Handle form input changes
//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   // Handle form submission and saving the profile to MongoDB
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:2003/api/profiles/', formData, {
//         headers: {
//           Authorization: `Bearer ${sessionStorage.getItem('token')}`, // Pass token in headers
//         }
//       });
//       setMessage('Profile saved successfully!');
//       console.log('Profile saved:', response.data);
//     } catch (error) {
//       setMessage('Error saving profile.');
//       console.error('There was an error saving the profile:', error);
//     }
//   };

//   return (
//     <div>
//       <form className="profile-form" onSubmit={handleSubmit}>
//         <h2 className="form-title">Personal Information</h2>
//         <div className="form-group">
//           <label>Name:</label>
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>Date of Birth:</label>
//           <input
//             type="date"
//             name="dateOfBirth"
//             value={formData.dateOfBirth}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>Gender:</label>
//           <select
//             name="gender"
//             value={formData.gender}
//             onChange={handleChange}
//             required
//           >
//             <option value="">Select</option>
//             <option value="male">Male</option>
//             <option value="female">Female</option>
//             <option value="other">Other</option>
//           </select>
//         </div>
//         <div className="form-group">
//           <label>Email:</label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>Phone:</label>
//           <input
//             type="tel"
//             name="phone"
//             value={formData.phone}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <h2 className="form-title">Health Information</h2>
//         <div className="form-group">
//           <label>Height (cm):</label>
//           <input
//             type="number"
//             name="height"
//             value={formData.height}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>Weight (kg):</label>
//           <input
//             type="number"
//             name="weight"
//             value={formData.weight}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>Blood Type:</label>
//           <input
//             type="text"
//             name="bloodType"
//             value={formData.bloodType}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="form-group">
//           <label>Allergies:</label>
//           <textarea
//             name="allergies"
//             value={formData.allergies}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="form-group">
//           <label>Chronic Conditions:</label>
//           <textarea
//             name="chronicConditions"
//             value={formData.chronicConditions}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="form-group">
//           <label>Medications:</label>
//           <textarea
//             name="medications"
//             value={formData.medications}
//             onChange={handleChange}
//           />
//         </div>

//         <h2 className="form-title">Lifestyle Information</h2>
//         <div className="form-group">
//           <label>Dietary Preferences:</label>
//           <input
//             type="text"
//             name="dietaryPreferences"
//             value={formData.dietaryPreferences}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="form-group">
//           <label>Exercise Routine:</label>
//           <textarea
//             name="exerciseRoutine"
//             value={formData.exerciseRoutine}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="form-group">
//           <label>Sleep Pattern (hours):</label>
//           <input
//             type="number"
//             name="sleepPattern"
//             value={formData.sleepPattern}
//             onChange={handleChange}
//           />
//         </div>

//         <h2 className="form-title">Fitness Goals</h2>
//         <div className="form-group">
//           <label>Target Weight (kg):</label>
//           <input
//             type="number"
//             name="targetWeight"
//             value={formData.targetWeight}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="form-group">
//           <label>Fitness Objectives:</label>
//           <textarea
//             name="fitnessObjectives"
//             value={formData.fitnessObjectives}
//             onChange={handleChange}
//           />
//         </div>

//         <h2 className="form-title">Health Metrics</h2>
//         <div className="form-group">
//           <label>Blood Pressure:</label>
//           <input
//             type="text"
//             name="bloodPressure"
//             value={formData.bloodPressure}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="form-group">
//           <label>Heart Rate (bpm):</label>
//           <input
//             type="number"
//             name="heartRate"
//             value={formData.heartRate}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="form-group">
//           <label>Blood Sugar Levels:</label>
//           <input
//             type="text"
//             name="bloodSugarLevels"
//             value={formData.bloodSugarLevels}
//             onChange={handleChange}
//           />
//         </div>

//         <div className="contact-options-container">
//           <h2 className="form-title">Contact Options</h2>
//           <div className="form-group">
//             <label className="form-label">How would you like to contact the coach?</label>
//             <div className="contact-options">
//               <label className="contact-option">
//                 <input
//                   type="radio"
//                   name="contactOption"
//                   value="chat"
//                   onChange={handleChange}
//                   className="custom-radio"
//                 />
//                 <span className="option-label">💬 Contact via Chat</span>
//               </label>
//               <label className="contact-option">
//                 <input
//                   type="radio"
//                   name="contactOption"
//                   value="video"
//                   onChange={handleChange}
//                   className="custom-radio"
//                 />
//                 <span className="option-label">📹 Contact via Video Interaction</span>
//               </label>
//             </div>
//           </div>
//         </div>

//         <div className="button-group">
//           <button type="submit">Save Profile</button>
//         </div>

//         {/* Display success or error message */}
//         {message && <p className="message">{message}</p>}
//       </form>
//     </div>
//   );
// }

// export default ProfileSetup;






import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { House, LogIn, MousePointer2,LayoutDashboard } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
function ProfileSetup() {
  const [formData, setFormData] = useState({
    name: '',
    dateOfBirth: '',
    gender: '',
    email: '',
    phone: '',
    height: '',
    weight: '',
    bloodType: '',
    allergies: '',
    chronicConditions: '',
    medications: '',
    dietaryPreferences: '',
    exerciseRoutine: '',
    sleepPattern: '',
    targetWeight: '',
    fitnessObjectives: '',
    bloodPressure: '',
    heartRate: '',
    bloodSugarLevels: '',
    // contactOption: '',
    coachEmail: '',
    userId: '',
  });

  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  useEffect(() => {
    const storedCoachEmail = sessionStorage.getItem('coachEmail');
    const storedUserId = sessionStorage.getItem('id');
    const storedToken = sessionStorage.getItem('token');

    if (storedCoachEmail) {
      setFormData((prevData) => ({
        ...prevData,
        coachEmail: storedCoachEmail,
      }));
    }

    if (storedUserId) {
      setFormData((prevData) => ({
        ...prevData,
        userId: storedUserId,
      }));
    }
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:2003/api/profiles/', formData, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem('token')}`,
        }
      });
      setMessage('Profile saved successfully!');
      console.log('Profile saved:', response.data);
    } catch (error) {
      setMessage('Error saving profile.');
      console.error('There was an error saving the profile:', error);
    }
  };

  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center p-6">
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
      <form
        onSubmit={handleSubmit}
        className="max-w-2xl w-full bg-gray-800/50 p-8 rounded-lg border border-gray-700 shadow-md"
      >
        <h2 className="text-3xl font-semibold text-green-500 col-span-full text-center mb-6 items-center justify-center">
          Personal Information
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="form-group">
          <label className="text-gray-400 font-semibold ">Name:</label><br></br>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-60 p-2 bg-gray-700/30 border border-gray-700 rounded focus:ring-2 focus:ring-green-500 text-white "
          />
        </div>

        <div className="form-group">
          <label className="text-gray-400 font-semibold">Date of Birth:</label><br></br>
          <input
            type="date"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            required
            className="w-60 p-2 bg-gray-700/30 border border-gray-700 rounded focus:ring-2 focus:ring-green-500 text-white "
          />
        </div>


        <div className="form-group">
          <label className="text-gray-400 font-semibold">Phone:</label><br></br>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-60 p-2 bg-gray-700/30 border border-gray-700 rounded focus:ring-2 focus:ring-green-500 text-white "
          />
        </div>

        <div className="form-group">
          <label className="text-gray-400 font-semibold">Gender:</label><br></br>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
            className="w-60 p-2 bg-gray-700/30 border border-gray-700 rounded focus:ring-2 focus:ring-green-500 text-white "
          >
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="form-group">
          <label className="text-gray-400 font-semibold">Email:</label><br></br>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-60 p-2 bg-gray-700/30 border border-gray-700 rounded focus:ring-2 focus:ring-green-500 text-white"
          />
        </div><br></br>


<p>
        <h2 className="text-3xl font-semibold text-green-500 col-span-full text-center mb-6 items-center justify-center">
          Health Information
        </h2></p><br></br>

        <div className="form-group">
          <label className="text-gray-400 font-semibold">Height (cm):</label><br></br>
          <input
            type="number"
            name="height"
            value={formData.height}
            onChange={handleChange}
            required
            className="w-60 p-2 bg-gray-700/30 border border-gray-700 rounded focus:ring-2 focus:ring-green-500 text-white"
          />
        </div>

        <div className="form-group">
          <label className="text-gray-400 font-semibold">Weight (kg):</label>
          <input
            type="number"
            name="weight"
            value={formData.weight}
            onChange={handleChange}
            required
            className="w-60 p-2 bg-gray-700/30 border border-gray-700 rounded focus:ring-2 focus:ring-green-500 text-white"
          />
        </div>

        <div className="form-group">
          <label className="text-gray-400 font-semibold">Blood Type:</label>
          <input
            type="text"
            name="bloodType"
            value={formData.bloodType}
            onChange={handleChange}
            className="w-60 p-2 bg-gray-700/30 border border-gray-700 rounded focus:ring-2 focus:ring-green-500 text-white"          />
        </div>

        <div className="form-group">
          <label className="text-gray-400 font-semibold">Allergies:</label>
          <input
            type="text"
            name="allergies"
            value={formData.allergies}
            onChange={handleChange}
            className="w-60 p-2 bg-gray-700/30 border border-gray-700 rounded focus:ring-2 focus:ring-green-500 text-white"          />
        </div>

        <div className="form-group">
          <label className="text-gray-400 font-semibold">Chronic Conditions:</label>
          <input
            type="text"
            name="chronicConditions"
            value={formData.chronicConditions}
            onChange={handleChange}
            className="w-60 p-2 bg-gray-700/30 border border-gray-700 rounded focus:ring-2 focus:ring-green-500 text-white"          />
        </div>

        <div className="form-group">
          <label className="text-gray-400 font-semibold">Medications:</label>
          <input
            type="text"
            name="medications"
            value={formData.medications}
            onChange={handleChange}
            className="w-60 p-2 bg-gray-700/30 border border-gray-700 rounded focus:ring-2 focus:ring-green-500 text-white"          />
        </div>

        <div className="form-group">
          <label className="text-gray-400 font-semibold">Dietary Preferences:</label>
          <input
            type="text"
            name="dietaryPreferences"
            value={formData.dietaryPreferences}
            onChange={handleChange}
            className="w-60 p-2 bg-gray-700/30 border border-gray-700 rounded focus:ring-2 focus:ring-green-500 text-white"          />
        </div>

        <div className="form-group">
          <label className="text-gray-400 font-semibold">Exercise Routine:</label>
          <input
            type="text"
            name="exerciseRoutine"
            value={formData.exerciseRoutine}
            onChange={handleChange}
            className="w-60 p-2 bg-gray-700/30 border border-gray-700 rounded focus:ring-2 focus:ring-green-500 text-white"          />
        </div>

        <div className="form-group">
          <label className="text-gray-400 font-semibold">Sleep Pattern:</label>
          <input
            type="text"
            name="sleepPattern"
            value={formData.sleepPattern}
            onChange={handleChange}
            className="w-60 p-2 bg-gray-700/30 border border-gray-700 rounded focus:ring-2 focus:ring-green-500 text-white"          />
        </div>

        <div className="form-group">
          <label className="text-gray-400 font-semibold">Target Weight (kg):</label>
          <input
            type="number"
            name="targetWeight"
            value={formData.targetWeight}
            onChange={handleChange}
            className="w-60 p-2 bg-gray-700/30 border border-gray-700 rounded focus:ring-2 focus:ring-green-500 text-white"          />
        </div>

        <div className="form-group">
          <label className="text-gray-400 font-semibold">Fitness Objectives:</label>
          <input
            type="text"
            name="fitnessObjectives"
            value={formData.fitnessObjectives}
            onChange={handleChange}
            className="w-60 p-2 bg-gray-700/30 border border-gray-700 rounded focus:ring-2 focus:ring-green-500 text-white"          />
        </div>

        <div className="form-group">
          <label className="text-gray-400 font-semibold">Blood Pressure:</label>
          <input
            type="text"
            name="bloodPressure"
            value={formData.bloodPressure}
            onChange={handleChange}
            className="w-60 p-2 bg-gray-700/30 border border-gray-700 rounded focus:ring-2 focus:ring-green-500 text-white"          />
        </div>

        <div className="form-group">
          <label className="text-gray-400 font-semibold">Heart Rate:</label>
          <input
            type="number"
            name="heartRate"
            value={formData.heartRate}
            onChange={handleChange}
            className="w-60 p-2 bg-gray-700/30 border border-gray-700 rounded focus:ring-2 focus:ring-green-500 text-white"          />
        </div>

        <div className="form-group">
          <label className="text-gray-400 font-semibold">Blood Sugar Levels:</label>
          <input
            type="text"
            name="bloodSugarLevels"
            value={formData.bloodSugarLevels}
            onChange={handleChange}
            className="w-60 p-2 bg-gray-700/30 border border-gray-700 rounded focus:ring-2 focus:ring-green-500 text-white"          />
        </div>

        {/* <h2 className="text-3xl font-semibold text-green-500 col-span-full text-center mt-8 mb-4">
          Contact Options
        </h2> */}

        {/* <div className="form-group col-span-full">
          <label className="text-gray-400 font-semibold">Preferred Contact Method:</label>
          <div className="flex space-x-6 mt-2">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="contactOption"
                value="chat"
                onChange={handleChange}
                className="hidden"
              />
              <span className="py-2 px-4 rounded-lg bg-gray-700/30 border border-gray-700 text-white hover:bg-green-600 transition">
                💬 Chat
              </span>
            </label>
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="contactOption"
                value="video"
                onChange={handleChange}
                className="hidden"
              />
              <span className="py-2 px-4 rounded-lg bg-gray-700/30 border border-gray-700 text-white hover:bg-green-600 transition">
                📹 Video
              </span>
            </label>
          </div>
        </div> */}
        </div>

        <div className="col-span-full mt-8 flex justify-between">
          <button
            type="submit"
            className="w-full p-3 bg-green-500 text-black rounded-lg font-semibold hover:bg-green-600 transition"
          >
            Save Profile
          </button>
        </div>

        {message && <p className="col-span-full text-center text-gray-300 mt-4">{message}</p>}
      </form>
    </div>
    
  );
}

export default ProfileSetup;
















// 'use client'
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { motion, AnimatePresence } from "framer-motion";
// import { ChevronRight, ChevronLeft, MessageSquare, Video } from 'lucide-react';
// import '../CSS/ProfileSetup.css';

// // Form Configuration
// const formSections = [
//   {
//     title: "Personal Information",
//     fields: [
//       { name: "name", label: "Name", type: "text" },
//       { name: "dateOfBirth", label: "Date of Birth", type: "date" },
//       { name: "gender", label: "Gender", type: "select", options: ["Male", "Female", "Other"] },
//       { name: "email", label: "Email", type: "email" },
//       { name: "phone", label: "Phone", type: "tel" },
//     ]
//   },
//   {
//     title: "Health Information",
//     fields: [
//       { name: "height", label: "Height (cm)", type: "number" },
//       { name: "weight", label: "Weight (kg)", type: "number" },
//       { name: "bloodType", label: "Blood Type", type: "text" },
//       { name: "allergies", label: "Allergies", type: "textarea" },
//       { name: "chronicConditions", label: "Chronic Conditions", type: "textarea" },
//       { name: "medications", label: "Medications", type: "textarea" },
//     ]
//   },
//   {
//     title: "Lifestyle Information",
//     fields: [
//       { name: "dietaryPreferences", label: "Dietary Preferences", type: "text" },
//       { name: "exerciseRoutine", label: "Exercise Routine", type: "textarea" },
//       { name: "sleepPattern", label: "Sleep Pattern (hours)", type: "number" },
//     ]
//   },
//   {
//     title: "Fitness Goals",
//     fields: [
//       { name: "targetWeight", label: "Target Weight (kg)", type: "number" },
//       { name: "fitnessObjectives", label: "Fitness Objectives", type: "textarea" },
//     ]
//   },
//   {
//     title: "Health Metrics",
//     fields: [
//       { name: "bloodPressure", label: "Blood Pressure", type: "text" },
//       { name: "heartRate", label: "Heart Rate (bpm)", type: "number" },
//       { name: "bloodSugarLevels", label: "Blood Sugar Levels", type: "text" },
//     ]
//   },
//   {
//     title: "Contact Options",
//     fields: [
//       { name: "contactOption", label: "Preferred Contact Method", type: "radio", options: ["Chat", "Video"] },
//     ]
//   }
// ];

// export default function ProfileSetup() {
//   const [currentStep, setCurrentStep] = useState(0);
//   const [formData, setFormData] = useState({
//     name: '',
//     dateOfBirth: '',
//     gender: '',
//     email: '',
//     phone: '',
//     height: '',
//     weight: '',
//     bloodType: '',
//     allergies: '',
//     chronicConditions: '',
//     medications: '',
//     dietaryPreferences: '',
//     exerciseRoutine: '',
//     sleepPattern: '',
//     targetWeight: '',
//     fitnessObjectives: '',
//     bloodPressure: '',
//     heartRate: '',
//     bloodSugarLevels: '',
//     contactOption: '',
//     coachEmail: '',
//     userId: '',
//   });

//   const [message, setMessage] = useState('');

//   useEffect(() => {
//     const storedCoachEmail = sessionStorage.getItem('coachEmail');
//     const storedUserId = sessionStorage.getItem('id');
//     const storedToken = sessionStorage.getItem('token');
//     setFormData((prevData) => ({
//       ...prevData,
//       coachEmail: storedCoachEmail || '',
//       userId: storedUserId || '',
//     }));
//   }, []);

//   const handleInputChange = (name, value) => {
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleNext = () => {
//     if (currentStep < formSections.length - 1) setCurrentStep((prev) => prev + 1);
//   };

//   const handlePrevious = () => {
//     if (currentStep > 0) setCurrentStep((prev) => prev - 1);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:2003/api/profiles/', formData, {
//         headers: { Authorization: `Bearer ${sessionStorage.getItem('token')}` },
//       });
//       setMessage('Profile saved successfully!');
//       console.log('Profile saved:', response.data);
//     } catch (error) {
//       setMessage('Error saving profile.');
//       console.error('Error:', error);
//     }
//   };

//   const renderField = (field) => {
//     switch (field.type) {
//       case 'textarea':
//         return (
//           <textarea
//             name={field.name}
//             value={formData[field.name] || ''}
//             onChange={(e) => handleInputChange(field.name, e.target.value)}
//             className="w-full px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-lg text-white"
//           />
//         );
//       case 'radio':
//         return (
//           <div className="flex space-x-4 mt-2">
//             {field.options.map((option) => (
//               <label key={option} className="flex items-center space-x-2">
//                 {option === 'Chat' ? <MessageSquare className="text-green-500" /> : <Video className="text-green-500" />}
//                 <input
//                   type="radio"
//                   name={field.name}
//                   value={option}
//                   onChange={(e) => handleInputChange(field.name, e.target.value)}
//                   className="text-white"
//                 />
//                 <span className="text-white">{option}</span>
//               </label>
//             ))}
//           </div>
//         );
//       default:
//         return (
//           <input
//             type={field.type}
//             name={field.name}
//             value={formData[field.name] || ''}
//             onChange={(e) => handleInputChange(field.name, e.target.value)}
//             className="w-full px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-lg text-white"
//           />
//         );
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
//       <div className="w-full max-w-4xl bg-gray-800 rounded-xl p-8 shadow-lg">
//         <div className="mb-8">
//           <div className="flex justify-between items-center">
//             {formSections.map((section, index) => (
//               <div key={index} className="flex items-center">
//                 <div className={`w-8 h-8 rounded-full flex items-center justify-center ${index <= currentStep ? 'bg-green-500 text-white' : 'bg-gray-700 text-gray-400'}`}>
//                   {index + 1}
//                 </div>
//                 {index < formSections.length - 1 && <div className={`h-1 w-16 ${index < currentStep ? 'bg-green-500' : 'bg-gray-700'}`} />}
//               </div>
//             ))}
//           </div>
//         </div>
//         <motion.div className="bg-gray-800/50 rounded-2xl p-8">
//           <form onSubmit={handleSubmit}>
//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={currentStep}
//                 initial={{ opacity: 0, x: 20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 exit={{ opacity: 0, x: -20 }}
//               >
//                 <h2 className="text-2xl font-bold text-white mb-6">
//                   {formSections[currentStep].title}
//                 </h2>
//                 <div className="space-y-4">
//                   {formSections[currentStep].fields.map((field) => (
//                     <div key={field.name} className="space-y-2">
//                       <label htmlFor={field.name} className="text-sm text-gray-300">{field.label}</label>
//                       {renderField(field)}
//                     </div>
//                   ))}
//                 </div>
//               </motion.div>
//             </AnimatePresence>
//             <div className="flex justify-between mt-8">
//               <motion.button
//                 type="button"
//                 whileHover={{ scale: 1.05 }}
//                 onClick={handlePrevious}
//                 disabled={currentStep === 0}
//                 className="px-6 py-2 bg-gray-700 text-white rounded-lg"
//               >
//                 <ChevronLeft className="w-4 h-4" /> Previous
//               </motion.button>
//               <motion.button
//                 type={currentStep === formSections.length - 1 ? "submit" : "button"}
//                 whileHover={{ scale: 1.05 }}
//                 onClick={currentStep === formSections.length - 1 ? undefined : handleNext}
//                 className="px-6 py-2 bg-green-500 text-white rounded-lg"
//               >
//                 {currentStep === formSections.length - 1 ? 'Submit' : 'Next'} <ChevronRight className="w-4 h-4" />
//               </motion.button>
//             </div>
//             {message && <p className="text-center text-green-500 mt-4">{message}</p>}
//           </form>
//         </motion.div>
//       </div>
//     </div>
//   );
// }


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../CSS/ProfileSetup.css';

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
    contactOption: '', // New field for contact option
    coachEmail: '', // Store coach email from session storage
    userId: '', // New field to store the user ID from session storage
  });

  const [message, setMessage] = useState(''); // To display success or error message

  // Fetch userId and coachEmail from sessionStorage when the component loads
  useEffect(() => {
    const storedCoachEmail = sessionStorage.getItem('coachEmail');
    const storedUserId = sessionStorage.getItem('id');
    const storedToken = sessionStorage.getItem('token'); // If needed for API requests
    
    if (storedCoachEmail) {
      setFormData((prevData) => ({
        ...prevData,
        coachEmail: storedCoachEmail, // Set coachEmail in formData
      }));
    }
    
    if (storedUserId) {
      setFormData((prevData) => ({
        ...prevData,
        userId: storedUserId, // Set userId in formData
      }));
    }
    
    // Optionally use the token for API requests:
    // If you want to use the token in headers for authentication, you can use the `storedToken` here.
  }, []);

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission and saving the profile to MongoDB
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:2003/api/profiles/', formData, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem('token')}`, // Pass token in headers
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
    <div>
      <form className="profile-form" onSubmit={handleSubmit}>
        <h2 className="form-title">Personal Information</h2>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Date of Birth:</label>
          <input
            type="date"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Gender:</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Phone:</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <h2 className="form-title">Health Information</h2>
        <div className="form-group">
          <label>Height (cm):</label>
          <input
            type="number"
            name="height"
            value={formData.height}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Weight (kg):</label>
          <input
            type="number"
            name="weight"
            value={formData.weight}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Blood Type:</label>
          <input
            type="text"
            name="bloodType"
            value={formData.bloodType}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Allergies:</label>
          <textarea
            name="allergies"
            value={formData.allergies}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Chronic Conditions:</label>
          <textarea
            name="chronicConditions"
            value={formData.chronicConditions}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Medications:</label>
          <textarea
            name="medications"
            value={formData.medications}
            onChange={handleChange}
          />
        </div>

        <h2 className="form-title">Lifestyle Information</h2>
        <div className="form-group">
          <label>Dietary Preferences:</label>
          <input
            type="text"
            name="dietaryPreferences"
            value={formData.dietaryPreferences}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Exercise Routine:</label>
          <textarea
            name="exerciseRoutine"
            value={formData.exerciseRoutine}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Sleep Pattern (hours):</label>
          <input
            type="number"
            name="sleepPattern"
            value={formData.sleepPattern}
            onChange={handleChange}
          />
        </div>

        <h2 className="form-title">Fitness Goals</h2>
        <div className="form-group">
          <label>Target Weight (kg):</label>
          <input
            type="number"
            name="targetWeight"
            value={formData.targetWeight}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Fitness Objectives:</label>
          <textarea
            name="fitnessObjectives"
            value={formData.fitnessObjectives}
            onChange={handleChange}
          />
        </div>

        <h2 className="form-title">Health Metrics</h2>
        <div className="form-group">
          <label>Blood Pressure:</label>
          <input
            type="text"
            name="bloodPressure"
            value={formData.bloodPressure}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Heart Rate (bpm):</label>
          <input
            type="number"
            name="heartRate"
            value={formData.heartRate}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Blood Sugar Levels:</label>
          <input
            type="text"
            name="bloodSugarLevels"
            value={formData.bloodSugarLevels}
            onChange={handleChange}
          />
        </div>

        <div className="contact-options-container">
          <h2 className="form-title">Contact Options</h2>
          <div className="form-group">
            <label className="form-label">How would you like to contact the coach?</label>
            <div className="contact-options">
              <label className="contact-option">
                <input
                  type="radio"
                  name="contactOption"
                  value="chat"
                  onChange={handleChange}
                  className="custom-radio"
                />
                <span className="option-label">💬 Contact via Chat</span>
              </label>
              <label className="contact-option">
                <input
                  type="radio"
                  name="contactOption"
                  value="video"
                  onChange={handleChange}
                  className="custom-radio"
                />
                <span className="option-label">📹 Contact via Video Interaction</span>
              </label>
            </div>
          </div>
        </div>

        <div className="button-group">
          <button type="submit">Save Profile</button>
        </div>

        {/* Display success or error message */}
        {message && <p className="message">{message}</p>}
      </form>
    </div>
  );
}

export default ProfileSetup;


// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import axios from "axios";
// import { ChevronRight, ChevronLeft } from 'lucide-react';

// const fadeInUp = {
//   initial: { opacity: 0, y: 20 },
//   animate: { opacity: 1, y: 0 },
//   exit: { opacity: 0, y: -20 }
// };

// const pageTransition = {
//   initial: { opacity: 0, x: 20 },
//   animate: { opacity: 1, x: 0 },
//   exit: { opacity: 0, x: -20 }
// };

// export default function Component() {
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
//     contactPreference: '', // New field for contact option
//     coachEmail: '', // Store coach email from session storage
//     userId: '', // New field to store the user ID from session storage
//   });
//   const [message, setMessage] = useState(''); // To display success or error message

//   // Fetch userId and coachEmail from sessionStorage
//   useEffect(() => {
//     const storedCoachEmail = sessionStorage.getItem('coachEmail');
//     const storedUserId = sessionStorage.getItem('id');
//     const storedToken = sessionStorage.getItem('token');
    
//     setFormData((prevData) => ({
//       ...prevData,
//       coachEmail: storedCoachEmail || '',
//       userId: storedUserId || ''
//     }));
//   }, []);

//   const sections = [
//     {
//       title: "Basic Information",
//       fields: [
//         { name: "name", label: "Name", type: "text" },
//         { name: "dateOfBirth", label: "Date of Birth", type: "date" },
//         { name: "gender", label: "Gender", type: "select", options: ["Male", "Female", "Other"] },
//         { name: "email", label: "Email", type: "email" },
//       ]
//     },
//     {
//       title: "Health Information",
//       fields: [
//         { name: "height", label: "Height (cm)", type: "number" },
//         { name: "weight", label: "Weight (kg)", type: "number" },
//         { name: "bloodType", label: "Blood Type", type: "select", options: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"] },
//         { name: "allergies", label: "Allergies", type: "textarea" },
//       ]
//     },
//     {
//       title: "Fitness Goals",
//       fields: [
//         { name: "targetWeight", label: "Target Weight (kg)", type: "number" },
//         { name: "fitnessObjectives", label: "Fitness Objectives", type: "textarea" },
//       ]
//     },
//     {
//       title: "Health Metrics",
//       fields: [
//         { name: "bloodPressure", label: "Blood Pressure", type: "text" },
//         { name: "heartRate", label: "Heart Rate (bpm)", type: "number" },
//         { name: "bloodSugarLevels", label: "Blood Sugar Levels", type: "text" },
//       ]
//     },
//     {
//       title: "Contact Options",
//       fields: [
//         { name: "contactPreference", label: "Preferred Contact Method", type: "radio", options: ["Chat", "Video"] },
//       ]
//     },
//   ];

//   const handleInputChange = (name, value) => {
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleNext = () => {
//     if (currentStep < sections.length - 1) {
//       setCurrentStep(prev => prev + 1);
//     }
//   };

//   const handlePrevious = () => {
//     if (currentStep > 0) {
//       setCurrentStep(prev => prev - 1);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log('Form Data before submit:', JSON.stringify(formData, null, 2)); // Log form data

//     try {
//       const response = await axios.post('http://localhost:2003/api/profiles/', formData, {
//         headers: {
//           Authorization: `Bearer ${sessionStorage.getItem('token')}`
//         }
//       });
//       setMessage('Profile saved successfully!');
//       console.log('Profile saved:', response.data);
//     } catch (error) {
//       if (error.response) {
//         console.error('Error response:', error.response.data);
//         setMessage('Error saving profile: ' + (error.response.data.message || 'Invalid data'));
//       } else {
//         console.error('Error without response:', error);
//         setMessage('Error saving profile.');
//       }
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-4">
//       <motion.div 
//         className="w-full max-w-2xl"
//         initial={{ opacity: 0, scale: 0.95 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.5 }}
//       >
//         <div className="mb-8">
//           <div className="flex justify-between items-center">
//             {sections.map((section, index) => (
//               <div key={index} className="flex items-center">
//                 <motion.div
//                   initial={{ scale: 0.8 }}
//                   animate={{ 
//                     scale: index <= currentStep ? 1 : 0.8,
//                     backgroundColor: index <= currentStep ? '#10B981' : '#374151'
//                   }}
//                   transition={{ duration: 0.3 }}
//                   className={`w-8 h-8 rounded-full flex items-center justify-center shadow-lg ${
//                     index <= currentStep ? 'text-white' : 'text-gray-400'
//                   }`}
//                 >
//                   {index + 1}
//                 </motion.div>
//                 {index < sections.length - 1 && (
//                   <motion.div
//                     initial={{ scaleX: 0 }}
//                     animate={{ 
//                       scaleX: 1,
//                       backgroundColor: index < currentStep ? '#10B981' : '#374151'
//                     }}
//                     transition={{ duration: 0.5, delay: 0.1 }}
//                     className="h-1 w-16 origin-left"
//                   />
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>

//         <form onSubmit={handleSubmit}>
//           <motion.div
//             className="bg-gray-800/50 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50 shadow-xl"
//             variants={fadeInUp}
//             initial="initial"
//             animate="animate"
//             transition={{ duration: 0.5 }}
//           >
//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={currentStep}
//                 variants={pageTransition}
//                 initial="initial"
//                 animate="animate"
//                 exit="exit"
//                 transition={{ duration: 0.3 }}
//               >
//                 <motion.h2 
//                   className="text-2xl font-bold text-white mb-6"
//                   initial={{ opacity: 0, y: -20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.2 }}
//                 >
//                   {sections[currentStep].title}
//                 </motion.h2>
//                 <div className="space-y-4">
//                   {sections[currentStep].fields.map((field, idx) => (
//                     <motion.div 
//                       key={field.name} 
//                       className="space-y-2"
//                       initial={{ opacity: 0, x: -20 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       transition={{ delay: idx * 0.1 + 0.3 }}
//                     >
//                       <label className="text-sm font-medium text-gray-300">
//                         {field.label}
//                       </label>
//                       {field.type === 'textarea' ? (
//                         <textarea
//                           className="w-full px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300"
//                           rows={4}
//                           value={formData[field.name] || ''}
//                           onChange={(e) => handleInputChange(field.name, e.target.value)}
//                         />
//                       ) : field.type === 'select' ? (
//                         <select
//                           className="w-full px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300"
//                           value={formData[field.name] || ''}
//                           onChange={(e) => handleInputChange(field.name, e.target.value)}
//                         >
//                           {field.options.map(option => (
//                             <option key={option} value={option}>{option}</option>
//                           ))}
//                         </select>
//                       ) : field.type === 'radio' ? (
//                         <div className="flex space-x-4">
//                           {field.options.map(option => (
//                             <label key={option} className="inline-flex items-center text-gray-300">
//                               <input
//                                 type="radio"
//                                 name={field.name}
//                                 value={option}
//                                 checked={formData[field.name] === option}
//                                 onChange={(e) => handleInputChange(field.name, e.target.value)}
//                                 className="text-green-500 focus:ring-green-500"
//                               />
//                               <span className="ml-2">{option}</span>
//                             </label>
//                           ))}
//                         </div>
//                       ) : (
//                         <input
//                           type={field.type}
//                           className="w-full px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300"
//                           value={formData[field.name] || ''}
//                           onChange={(e) => handleInputChange(field.name, e.target.value)}
//                         />
//                       )}
//                     </motion.div>
//                   ))}
//                 </div>
//               </motion.div>
//             </AnimatePresence>
//           </motion.div>

//           <div className="mt-6 flex justify-between">
//             <button 
//               type="button" 
//               onClick={handlePrevious}
//               disabled={currentStep === 0}
//               className={`px-4 py-2 rounded-lg ${currentStep === 0 ? 'bg-gray-600 cursor-not-allowed' : 'bg-green-500 hover:bg-green-600'} text-white`}
//             >
//               <ChevronLeft className="inline" /> Previous
//             </button>
//             {currentStep < sections.length - 1 ? (
//               <button 
//                 type="button" 
//                 onClick={handleNext}
//                 className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg"
//               >
//                 Next <ChevronRight className="inline" />
//               </button>
//             ) : (
//               <button 
//                 type="submit"
//                 className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg"
//               >
//                 Submit
//               </button>
//             )}
//           </div>
//         </form>

//         {message && (
//           <div className="mt-4 text-center text-sm font-medium text-red-500">
//             {message}
//           </div>
//         )}
//       </motion.div>
//     </div>
//   );
// }

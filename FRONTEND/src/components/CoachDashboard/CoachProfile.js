
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import '../CSS/CoachProfile.css'; // Import your CSS

// const CoachProfile = () => {
//   const [profile, setProfile] = useState({
//     username: '',
//     nickName: '',
//     gender: '',
//     age: '',
//     education: '',
//     country: '',
//     location: '',
//     language: '',
//     timeZone: '',
//     email: '', // This will be fetched dynamically
//     bio: '',
//     qualification: '',
//     coachingStyle: '',
//     availability: ''
//   });

//   const [coach, setCoach] = useState(null); // Store coach details fetched from the API

//   useEffect(() => {
//     const fetchCoachData = async () => {
//       try {
//         const coachId = sessionStorage.getItem('id'); // Fetch coach ID from session storage
//         const token = sessionStorage.getItem('token'); // Fetch token from session storage
//         if (coachId && token) {
//           const response = await axios.get(`http://localhost:2003/api/coaches/coaches/${coachId}`, {
//             headers: {
//               Authorization: `Bearer ${token}`
//             }
//           });
//           const coachData = response.data;
//           setCoach(coachData); // Store the fetched coach data
//           setProfile({
//             fullName: `${coachData.username}`, // Assuming firstName and lastName are in the API response
//             nickName: coachData.nickName || '',
//             gender: coachData.gender || '',
//             age: coachData.age || '',
//             education: coachData.education || '',
//             country: coachData.country || '',
//             location: coachData.location || '',
//             language: coachData.language || '',
//             timeZone: coachData.timeZone || '',
//             email: coachData.email || '', // Fill email dynamically
//             bio: coachData.bio || '',
//             qualification: coachData.qualification || '',
//             coachingStyle: coachData.coachingStyle || '',
//             availability: coachData.availability || ''
//           });
//         }
//       } catch (error) {
//         console.error('Error fetching coach data:', error);
//       }
//     };

//     fetchCoachData();
//   }, []);


//   const handleChange = (e) => {
//     setProfile({ ...profile, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:2003/api/coachesProfiles/profile', profile);
//       console.log('Profile saved:', response.data);
//     } catch (error) {
//       console.error('Error saving profile:', error);
//     }
//   };

//   return (
//     <div className="coach-profile">
//       <h1>Welcome, {coach ? coach.firstName : 'Coach'}</h1>
//       <div className="profile-header">
//         <img src="/path/to/profile/image" alt="Profile" className="profile-image" />
//         <div className="profile-name">
//           <h2>{coach ? `${coach.firstName} ${coach.lastName}` : 'Loading...'}</h2>
//           <p>{profile.email}</p>
//         </div>
//         <button className="edit-button">Edit</button>
//       </div>
//       <form className="profile-form" onSubmit={handleSubmit}>
//         <div className="form-row">
//           <div className="form-group">
//             <label htmlFor="fullName">Full Name</label>
//             <input
//               type="text"
//               id="fullName"
//               name="fullName"
//               placeholder="Your Full Name"
//               value={profile.fullName}
//               onChange={handleChange}
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="nickName">Nick Name</label>
//             <input
//               type="text"
//               id="nickName"
//               name="nickName"
//               placeholder="Your Nick Name"
//               value={profile.nickName}
//               onChange={handleChange}
//             />
//           </div>
//         </div>
//         <div className="form-row">
//           <div className="form-group">
//             <label htmlFor="gender">Gender</label>
//             <select
//               id="gender"
//               name="gender"
//               value={profile.gender}
//               onChange={handleChange}
//             >
//               <option value="">Select Gender</option>
//               <option value="male">Male</option>
//               <option value="female">Female</option>
//               <option value="other">Other</option>
//             </select>
//           </div>
//           <div className="form-group">
//             <label htmlFor="age">Age</label>
//             <input
//               type="number"
//               id="age"
//               name="age"
//               placeholder="Your Age"
//               value={profile.age}
//               onChange={handleChange}
//             />
//           </div>
//         </div>
//         <div className="form-row">
//           <div className="form-group">
//             <label htmlFor="education">Education</label>
//             <input
//               type="text"
//               id="education"
//               name="education"
//               placeholder="Your Education"
//               value={profile.education}
//               onChange={handleChange}
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="qualification">Qualification</label>
//             <input
//               type="text"
//               id="qualification"
//               name="qualification"
//               placeholder="Your Qualification"
//               value={profile.qualification}
//               onChange={handleChange}
//             />
//           </div>
//         </div>
//         <div className="form-group">
//           <label htmlFor="bio">Bio</label>
//           <textarea
//             id="bio"
//             name="bio"
//             placeholder="Your Bio"
//             value={profile.bio}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="coachingStyle">Coaching Style</label>
//           <textarea
//             id="coachingStyle"
//             name="coachingStyle"
//             placeholder="Your Coaching Style"
//             value={profile.coachingStyle}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="availability">Availability</label>
//           <textarea
//             id="availability"
//             name="availability"
//             placeholder="Your Availability"
//             value={profile.availability}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="form-group email-group">
//           <label htmlFor="email">Email Address</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={profile.email}
//             disabled
//           />
//         </div>
//         <button type="submit">Save Profile</button>
//       </form>
//     </div>
//   );
// };

// export default CoachProfile;


import React, { useState, useEffect } from 'react';
import { Edit2, Save, User } from 'lucide-react';
import axios from 'axios';

const CoachProfile = () => {
  const [profile, setProfile] = useState({
    username: '',
    nickName: '',
    gender: '',
    age: '',
    education: '',
    country: '',
    location: '',
    language: '',
    timeZone: '',
    email: '',
    bio: '',
    qualification: '',
    coachingStyle: '',
    availability: ''
  });

  const [coach, setCoach] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const fetchCoachData = async () => {
      try {
        const coachId = sessionStorage.getItem('id');
        const token = sessionStorage.getItem('token');
        if (coachId && token) {
          const response = await axios.get(`http://localhost:2003/api/coaches/coaches/${coachId}`, {
            headers: { Authorization: `Bearer ${token}` }
          });
          setCoach(response.data);
          setProfile({
            fullName: response.data.username || '',
            nickName: response.data.nickName || '',
            gender: response.data.gender || '',
            age: response.data.age || '',
            education: response.data.education || '',
            country: response.data.country || '',
            location: response.data.location || '',
            language: response.data.language || '',
            timeZone: response.data.timeZone || '',
            email: response.data.email || '',
            bio: response.data.bio || '',
            qualification: response.data.qualification || '',
            coachingStyle: response.data.coachingStyle || '',
            availability: response.data.availability || ''
          });
        }
      } catch (error) {
        console.error('Error fetching coach data:', error);
      }
    };

    fetchCoachData();
  }, []);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:2003/api/coachesProfiles/profile', profile);
      console.log('Profile saved:', response.data);
      setIsEditing(false);
    } catch (error) {
      console.error('Error saving profile:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-gray-800/50 border border-gray-700 rounded-lg shadow-lg">
        {/* Header Section */}
        <div className="p-6 border-b border-gray-700">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-white">
              Coach Profile
            </h1>
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="flex items-center gap-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors"
            >
              {isEditing ? (
                <>
                  <Save className="w-4 h-4" />
                  Save
                </>
              ) : (
                <>
                  <Edit2 className="w-4 h-4" />
                  Edit
                </>
              )}
            </button>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6">
          <div className="flex items-center gap-6 mb-8">
            <div className="relative">
              <div className="w-24 h-24 rounded-full bg-gray-700/40 flex items-center justify-center">
                <User className="w-12 h-12 text-gray-400" />
              </div>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-white">{profile.fullName}</h2>
              <p className="text-gray-400">{profile.email}</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-300">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={profile.fullName}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className="w-96 bg-gray-700/30 border border-gray-700 rounded-lg px-4 py-2.5 text-white placeholder-gray-400 focus:ring-2 focus:ring-green-500/20 focus:border-green-500 disabled:opacity-50"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-300">Nick Name</label>
                <input
                  type="text"
                  name="nickName"
                  value={profile.nickName}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className="w-96 bg-gray-700/30 border border-gray-700 rounded-lg px-4 py-2.5 text-white placeholder-gray-400 focus:ring-2 focus:ring-green-500/20 focus:border-green-500 disabled:opacity-50"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-300">Gender</label>
                <select
                  name="gender"
                  value={profile.gender}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className="w-96 bg-gray-700/30 border border-gray-700 rounded-lg px-4 py-2.5 text-white placeholder-gray-400 focus:ring-2 focus:ring-green-500/20 focus:border-green-500 disabled:opacity-50"
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-300">Age</label>
                <input
                  type="number"
                  name="age"
                  value={profile.age}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className="w-96 bg-gray-700/30 border border-gray-700 rounded-lg px-4 py-2.5 text-white placeholder-gray-400 focus:ring-2 focus:ring-green-500/20 focus:border-green-500 disabled:opacity-50"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-300">Education</label>
                <input
                  type="text"
                  name="education"
                  value={profile.education}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className="w-96 bg-gray-700/30 border border-gray-700 rounded-lg px-4 py-2.5 text-white placeholder-gray-400 focus:ring-2 focus:ring-green-500/20 focus:border-green-500 disabled:opacity-50"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-300">Qualification</label>
                <input
                  type="text"
                  name="qualification"
                  value={profile.qualification}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className="w-96 bg-gray-700/30 border border-gray-700 rounded-lg px-4 py-2.5 text-white placeholder-gray-400 focus:ring-2 focus:ring-green-500/20 focus:border-green-500 disabled:opacity-50"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-300">Bio</label>
              <textarea
                name="bio"
                value={profile.bio}
                onChange={handleChange}
                disabled={!isEditing}
                rows={4}
                className="w-full bg-gray-700/30 border border-gray-700 rounded-lg px-4 py-2.5 text-white placeholder-gray-400 focus:ring-2 focus:ring-green-500/20 focus:border-green-500 disabled:opacity-50"
              />
            </div>



            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-300">Coaching Style</label>
              <textarea
                name="coachingStyle"
                value={profile.coachingStyle}
                onChange={handleChange}
                disabled={!isEditing}
                rows={3}
                className="w-full bg-gray-700/30 border border-gray-700 rounded-lg px-4 py-2.5 text-white placeholder-gray-400 focus:ring-2 focus:ring-green-500/20 focus:border-green-500 disabled:opacity-50"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-300">Availability</label>
              <textarea
                name="availability"
                value={profile.availability}
                onChange={handleChange}
                disabled={!isEditing}
                rows={3}
                className="w-full bg-gray-700/30 border border-gray-700 rounded-lg px-4 py-2.5 text-white placeholder-gray-400 focus:ring-2 focus:ring-green-500/20 focus:border-green-500 disabled:opacity-50"
              />
            </div>

            {isEditing && (
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors"
                >
                  Save Changes
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default CoachProfile;
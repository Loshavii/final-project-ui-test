import React, { useEffect, useState } from 'react';
import { ChevronDown, CheckCircle, XCircle, User } from 'lucide-react';

export default function ProfileCard() {
  const [profiles, setProfiles] = useState([]);
  const [expandedCards, setExpandedCards] = useState({});

  const fetchProfiles = async () => {
    const coachEmail = sessionStorage.getItem('coachEmail');
    if (!coachEmail) {
      console.error('Coach email is not found in sessionStorage.');
      return;
    }

    try {
      const response = await fetch(`http://localhost:2003/api/profiles/coach/${coachEmail}`);
      const data = await response.json();
      setProfiles(data);
    } catch (error) {
      console.error('Error fetching profiles:', error);
    }
  };

  const updateProfileStatus = async (profileId, status) => {
    const url = `http://localhost:2003/api/profiles/${profileId}/${status === 'approved' ? 'approve' : 'decline'}`;
    try {
      await fetch(url, { method: 'PUT' });
      fetchProfiles();
      console.log(`Profile status updated to ${status}`);
    } catch (error) {
      console.error(`Error updating profile status to ${status}:`, error);
    }
  };

  const toggleCard = (profileId) => {
    setExpandedCards(prev => ({
      ...prev,
      [profileId]: !prev[profileId]
    }));
  };

  useEffect(() => {
    fetchProfiles();
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-white text-2xl font-bold mb-8">Client Profiles</h1>
        
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-8">
          {profiles.length > 0 ? (
            profiles.map((profile) => (
              <div
                key={profile._id}
                className="bg-gray-800/50 h-auto w-72 border border-gray-700 rounded-lg overflow-hidden hover:bg-gray-700/40 transition-all duration-300"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="bg-green-500/20 p-2 rounded-full">
                        <User className="w-6 h-6 text-green-500" />
                      </div>
                      <h2 className="text-white text-lg font-semibold">{profile.name}</h2>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      profile.status === 'approved' ? 'bg-green-500/20 text-green-500' :
                      profile.status === 'declined' ? 'bg-red-500/20 text-red-500' :
                      'bg-yellow-500/20 text-yellow-500'
                    }`}>
                      {profile.status}
                    </span>
                  </div>

                  <div className="space-y-2 text-gray-400 text-base">
                    <p>Email: {profile.email}</p>
                    <p>Phone: {profile.phone}</p>
                  </div>

                  <div className={`mt-4 space-y-2 text-gray-400 ${expandedCards[profile._id] ? 'block' : 'hidden'}`}>
                    <p>Height: {profile.height} cm</p>
                    <p>Weight: {profile.weight} kg</p>
                    <p>Blood Type: {profile.bloodType}</p>
                    <p>Allergies: {profile.allergies}</p>
                    <p>Chronic Conditions: {profile.chronicConditions}</p>
                    <p>Medications: {profile.medications}</p>
                    <p>Dietary Preferences: {profile.dietaryPreferences}</p>
                    <p>Exercise Routine: {profile.exerciseRoutine}</p>
                    <p>Sleep Pattern: {profile.sleepPattern} hours</p>
                    <p>Target Weight: {profile.targetWeight} kg</p>
                    <p>Fitness Objectives: {profile.fitnessObjectives}</p>
                    <p>Blood Pressure: {profile.bloodPressure}</p>
                    <p>Heart Rate: {profile.heartRate} bpm</p>
                    <p>Blood Sugar Levels: {profile.bloodSugarLevels} mg/dL</p>
                  </div>

                  <button
                    onClick={() => toggleCard(profile._id)}
                    className="mt-4 flex items-center text-gray-400 hover:text-white transition-colors"
                  >
                    <span className="mr-1">
                      {expandedCards[profile._id] ? 'Show less' : 'Show more'}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 transform transition-transform ${
                        expandedCards[profile._id] ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                </div>

                <div className="border-t border-gray-700 p-4 flex space-x-4">
                  <button
                    onClick={() => updateProfileStatus(profile._id, 'approved')}
                    className="flex-1 flex items-center justify-center space-x-2 bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg transition-colors"
                  >
                    <CheckCircle className="w-4 h-4" />
                    <span>Accept</span>
                  </button>
                  <button
                    onClick={() => updateProfileStatus(profile._id, 'declined')}
                    className="flex-1 flex items-center justify-center space-x-2 bg-gray-700/30 hover:bg-gray-700/40 text-white py-2 rounded-lg transition-colors"
                  >
                    <XCircle className="w-4 h-4" />
                    <span>Reject</span>
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-400 text-lg">No profiles available.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

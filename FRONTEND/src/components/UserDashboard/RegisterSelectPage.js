
// import React from 'react';
// import '../CSS/RegisterSelectPage.css';
// import yogaImage from './img1.webp'; // replace with the path to the image file
// import wellnessImage from './img1.webp'; // replace with the path to the wellness image
// import { Link } from 'react-router-dom';

// const RegisterSelectPage = () => {
//   return (
//     <div>
//       {/* Wellness Journey Section */}
//       <div className="select-container" id="about">
//         <div className="select-content">
//           <div className="select-image">
//             <img
//               src={yogaImage}
//               alt="Yoga Pose"
//               className="ima"
//             />
//           </div>
//           <div className="select-text">
//             <h2 className="heading">Welcome Back to Fitaybl!</h2>
//             <p className="subtext">
//                 Your wellness journey continues here! At Fitaybl, we believe that every step you take brings you closer to your goals. Log in to unlock your personalized dashboard and access tailored resources designed just for you.
//             </p>
//             <p className="highlight">
//                 Reconnect with expert coaches, track your progress, and gain insights that empower you to elevate your fitness and well-being. Join our community of like-minded individuals who are all on a path to transformation and success!
//             </p>
//             <Link to="/register-user">
//               <button className="cta-button" aria-label="Get Started">Continue Your Adventure</button>
//             </Link>
//           </div>

//         </div>
//       </div>

//       {/* Holistic Wellness Section */}
//       <div className="select-container" id="wellness">
//         <div className="select-content">
//         <div className="select-text">
//           <h2 className="heading">Become a Coach with Fitaybl!</h2>
//           <p className="subtext">
//               Are you passionate about helping others achieve their fitness goals? Join Fitaybl and become part of a vibrant community dedicated to transforming lives! As a coach, you will have the opportunity to share your expertise, inspire others, and make a meaningful impact on their wellness journeys.
//           </p>
//           <p className="highlight">
//               Enjoy access to innovative tools and resources that will help you connect with clients, track their progress, and personalize their experience. With Fitaybl, you can build your brand, expand your reach, and thrive in a supportive environment designed for growth.
//           </p>
//           <Link to="/register-coach">
//               <button className="cta-button" aria-label="Get Started">Continue Your Adventure</button>
//           </Link>
//         </div>

//           <div className="select-image">
//             <img
//               src={wellnessImage}
//               alt="Wellness Activity"
//               className="ima"
//             />
//           </div>
          
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RegisterSelectPage;


import React, { useState } from 'react';
import { X, User, Lock, Mail, ArrowRight, Users, Award, Target, Activity, Calendar, BarChart } from 'lucide-react';
import yogaImage from './_.jpeg';
import { useNavigate } from 'react-router-dom';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 animate-fadeIn">
      <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 w-full max-w-md relative transform transition-all animate-slideIn">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <X size={20} />
        </button>
        {children}
      </div>
    </div>
  );
};

const RegisterForm = () => (
  <form className="space-y-4">
    <h2 className="text-2xl font-bold text-white mb-6">Create Account</h2>
    
    <div className="space-y-2">
      <div className="relative">
        <User className="absolute left-3 top-3 text-gray-400" size={20} />
        <input
          type="text"
          placeholder="Full Name"
          className="w-full bg-gray-700/40 border border-gray-700 rounded-lg py-2 px-10 text-white placeholder-gray-400 focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all"
        />
      </div>
      
      <div className="relative">
        <Mail className="absolute left-3 top-3 text-gray-400" size={20} />
        <input
          type="email"
          placeholder="Email Address"
          className="w-full bg-gray-700/40 border border-gray-700 rounded-lg py-2 px-10 text-white placeholder-gray-400 focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all"
        />
      </div>
      
      <div className="relative">
        <Lock className="absolute left-3 top-3 text-gray-400" size={20} />
        <input
          type="password"
          placeholder="Password"
          className="w-full bg-gray-700/40 border border-gray-700 rounded-lg py-2 px-10 text-white placeholder-gray-400 focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all"
        />
      </div>
    </div>
    
    <button className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors">
      User Sign Up
    </button>
    
    <p className="text-gray-400 text-center">
      Already have an account?{' '}
      <a href="#" className="text-green-500 hover:text-green-400 transition-colors">
        Log in
      </a>
    </p>
  </form>
);

const LoginForm = () => (
  <form className="space-y-4">
    <h2 className="text-2xl font-bold text-white mb-6">Welcome Back</h2>
    
    <div className="space-y-2">
      <div className="relative">
        <Mail className="absolute left-3 top-3 text-gray-400" size={20} />
        <input
          type="email"
          placeholder="Email Address"
          className="w-full bg-gray-700/40 border border-gray-700 rounded-lg py-2 px-10 text-white placeholder-gray-400 focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all"
        />
      </div>
      
      <div className="relative">
        <Lock className="absolute left-3 top-3 text-gray-400" size={20} />
        <input
          type="password"
          placeholder="Password"
          className="w-full bg-gray-700/40 border border-gray-700 rounded-lg py-2 px-10 text-white placeholder-gray-400 focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all"
        />
      </div>
    </div>
    
    <button className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors">
      Log In
    </button>
    
    <p className="text-gray-400 text-center">
      Don't have an account?{' '}
      <a href="#" className="text-green-500 hover:text-green-400 transition-colors" >
        Sign up
      </a>
    </p>
  </form>
);

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:bg-gray-700/40 transition-all duration-300">
    <div className="h-12 w-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
      <Icon className="text-green-500" size={24} />
    </div>
    <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

const LandingPage = () => {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slideInLeft">
            <h1 className="text-4xl lg:text-5xl font-bold">
              Welcome Back to{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">
                Fitaybl!
              </span>
            </h1>
            <p className="text-gray-400 text-lg">
              Your wellness journey continues here! At Fitaybl, we believe that every step you take brings you closer to your goals.
            </p>
            <div className="flex gap-4">
              <button
                onClick={() => navigate('/register-user')}
                className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-lg font-semibold flex items-center gap-2 transition-colors"
              >
                Get Started
                <ArrowRight size={20} />
              </button>
              <button
                onClick={() => navigate('/loginuser')}
                className="bg-gray-700/40 hover:bg-gray-700/60 px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Sign In
              </button>
            </div>
          </div>

          <div className="relative animate-slideInRight">
            <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700">
              <img
                src={yogaImage}
                alt="Fitness"
                className="rounded-lg w-100 h-20"
              />
              <div className="mt-6 space-y-4">
                <h3 className="text-xl font-semibold">Join our community</h3>
                <p className="text-gray-400">
                  Connect with expert coaches, track your progress, and gain insights that empower you to elevate your fitness and well-being.
                </p>
              </div>
            </div>
            <div className="absolute -z-10 top-4 right-4 w-full h-full bg-green-500/20 rounded-2xl" />
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slideInLeft">
            <h1 className="text-4xl lg:text-5xl font-bold">
              Welcome Back to{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">
                Fitaybl!
              </span>
            </h1>
            <p className="text-gray-400 text-lg">
              Your wellness journey continues here! At Fitaybl, we believe that every step you take brings you closer to your goals.
            </p>
            <div className="flex gap-4">
              <button
                onClick={() => navigate('/register-coach')}
                className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-lg font-semibold flex items-center gap-2 transition-colors"
              >
                Get Started
                <ArrowRight size={20} />
              </button>
              <button
                onClick={() => navigate('/login')}
                className="bg-gray-700/40 hover:bg-gray-700/60 px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Sign In
              </button>
            </div>
          </div>

          <div className="relative animate-slideInRight">
            <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700">
              <img
                src={yogaImage}
                alt="Fitness"
                className="rounded-lg w-100 h-20"
              />
              <div className="mt-6 space-y-4">
                <h3 className="text-xl font-semibold">Join our community</h3>
                <p className="text-gray-400">
                  Connect with expert coaches, track your progress, and gain insights that empower you to elevate your fitness and well-being.
                </p>
              </div>
            </div>
            <div className="absolute -z-10 top-4 right-4 w-full h-full bg-green-500/20 rounded-2xl" />
          </div>
        </div>
      </div>


      <Modal isOpen={isRegisterOpen} onClose={() => setIsRegisterOpen(false)}>
        <RegisterForm />
      </Modal>

      <Modal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)}>
        <LoginForm />
      </Modal>
    </div>
  );
};

const style = document.createElement('style');
style.textContent = `
  @keyframes slideInLeft {
    from {
      opacity: 0;
      transform: translateX(-100px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes slideInRight {
    from {
      opacity: 0;
      transform: translateX(100px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .animate-slideInLeft {
    animation: slideInLeft 1s ease-out;
  }

  .animate-slideInRight {
    animation: slideInRight 1s ease-out;
  }

  .animate-fadeIn {
    animation: fadeIn 0.3s ease-out;
  }

  .animate-slideIn {
    animation: slideIn 0.3s ease-out;
  }
`;
document.head.appendChild(style);

export default LandingPage;
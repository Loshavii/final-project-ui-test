
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock, Loader, User, House, LogIn, MousePointer2, Key, Shield, Activity } from 'lucide-react';
import axios from 'axios';
import '../CSS/Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [focusedInput, setFocusedInput] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const navigate = useNavigate();

  const validateForm = () => {
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) {
      setErrorMessage('Please enter a valid email.');
      return false;
    }
    if (!password.trim()) {
      setErrorMessage('Password is required.');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);

    try {
      const response = await axios.post('http://localhost:2003/api/coaches/login', { email, password });
      const { token, id, role } = response.data;

      sessionStorage.setItem('token', token);
      sessionStorage.setItem('id', id);
      sessionStorage.setItem('role', role);
      sessionStorage.setItem('coachEmail', email);

      setErrorMessage('');
      setSuccessMessage('Login successful! Redirecting...');
      
      setTimeout(() => {
        if (role === 'admin') {
          navigate('/admin-dashboard');
        } else if (role === 'coach') {
          navigate('/coach-dashboard');
        } else if (role === 'user') {
          navigate('/user-dashboard');
        }
      }, 1500);
    } catch (error) {
      setSuccessMessage('');
      setErrorMessage(error.response?.data?.message || 'Invalid login credentials.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="fixed left-2 top-1/2 -translate-y-1/2">
        <div className="relative flex flex-col space-y-4 bg-gray-800/30 p-1 rounded-2xl backdrop-blur-lg border-l-4 border-emerald-500/50 shadow-lg shadow-emerald-500/5">
          {[
            { icon: House, path: '/', tooltip: 'Home' },
            { icon: MousePointer2, path: '/register-select', tooltip: 'Register' },
            { icon: LogIn, path: '/register-user', tooltip: 'Sign Up' }
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
      <div className="login-form-container">
        <div className="login-form">
          <div className="welcome-text">
            <h1>Welcome Back!</h1>
            <p>Sign in to continue your journey</p>
          </div>

          <div className="avatar">
            <div className="avatar-gradient">
              <div className="avatar-inner">
                <User size={32} className="avatar-icon" />
              </div>
            </div>
            {[...Array(3)].map((_, i) => (
              <div key={i} className="orbit-dot" style={{ animationDelay: `${i * 1.2}s` }} />
            ))}
          </div>

          <form onSubmit={handleSubmit} className="form1">
            <div className={`form-group1 ${focusedInput === 'email' ? 'focused' : ''}`}>
              <div className="input-wrapper1">
                <Mail className={`input-icon1 ${focusedInput === 'email' ? 'focused' : ''}`} size={20} />
                <input
                  type="email"
                  placeholder="Email ID"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => setFocusedInput('email')}
                  onBlur={() => setFocusedInput(null)}
                  className="login-input1"
                />
              </div>
            </div>

            <div className={`form-group1 ${focusedInput === 'password' ? 'focused' : ''}`}>
              <div className="input-wrapper1">
                <Lock className={`input-icon1 ${focusedInput === 'password' ? 'focused' : ''}`} size={20} />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onFocus={() => setFocusedInput('password')}
                  onBlur={() => setFocusedInput(null)}
                  className="login-input1"
                />
              </div>
            </div>

            {errorMessage && <div className="error-message">{errorMessage}</div>}
            {successMessage && <div className="success-message">{successMessage}</div>}

            <button
              type="submit"
              disabled={isLoading}
              className={`login-submit-button ${isLoading ? 'loading' : ''}`}
            >
              <span className="button-text">LOGIN</span>
              {isLoading && <Loader className="loader" size={20} />}
            </button>
          </form>
        </div>
      </div>

      <div className="illustration">
        <div className="circles-background">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="circle" style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`
            }} />
          ))}
        </div>

        <div className="illustration-content">
          <h2>Secure Access Portal</h2>
          <div className="features">
            {[
              { icon: Shield, title: "Enhanced Security", desc: "Multi-layer protection for your data" },
              { icon: Key, title: "Smart Access", desc: "Intelligent authentication system" },
              { icon: Activity, title: "Real-time Monitoring", desc: "Track activity instantly" },
              { icon: User, title: "User Friendly", desc: "Seamless login experience" }
            ].map((feature, index) => (
              <div key={index} className="feature-card" style={{ animationDelay: `${index * 0.1}s` }}>
                <feature.icon className="feature-icon" />
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </div>
            ))}
          </div>

          <p className="create-account">
            New to our platform? <button className="create-account-button">Create an account</button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;



// import React, { useState, useEffect, useRef } from 'react';
// import { useSpring, animated, config } from 'react-spring';
// import { motion } from 'framer-motion';
// import { Facebook, Twitter, Linkedin, ChevronDown } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';
// import '../CSS/Landing.css';
// import img from './fitzhore.png';
// import img4 from './img4.webp';
// import img1 from './img1.webp';
// import img2 from './img2.webp';
// import img3 from './img3.webp';
// import img5 from './img6.jpg';

// // Navigation Component
// const Navigation = ({ scrollToContact }) => {
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <nav className={`nav-contain ${scrolled ? 'scrolled' : ''}`}>
//       <div className="logo">
//         <img src={img} alt="Yogastic" />
//         {/* <span className="logo-text">FIT AYBL</span> */}
//       </div>
//       <div className="nav-links">
//         <a href="/">Home</a>
//         <a href="#about">About Us</a>
//         <a href="#services">Services</a>
//         <a href="#pages">Pages</a>
//         <a href="#team">Team</a>
//         <a href="#blog">Blog</a>
//       </div>
//       <button className="contact-button" onClick={scrollToContact}>Contact Us</button>
//     </nav>
//   );
// };

// // SocialLinks Component
// const SocialLinks = () => {
//   const socialAnimation = useSpring({
//     from: { opacity: 0, transform: 'translateX(-20px)' },
//     to: { opacity: 1, transform: 'translateX(0)' },
//     delay: 1000,
//   });

//   return (
//     <animated.div style={socialAnimation} className="social-links">
//       <a href="#facebook" aria-label="Facebook"><Facebook size={24} /></a>
//       <a href="#twitter" aria-label="Twitter"><Twitter size={24} /></a>
//       <a href="#linkedin" aria-label="LinkedIn"><Linkedin size={24} /></a>
//     </animated.div>
//   );
// };

// // HeroContent Component
// const HeroContent = () => {
//   const navigate = useNavigate();

//   const titleAnimation = useSpring({
//     from: { opacity: 0, transform: 'translateY(30px)' },
//     to: { opacity: 1, transform: 'translateY(0)' },
//     config: config.gentle,
//   });

//   const descriptionAnimation = useSpring({
//     from: { opacity: 0, transform: 'translateY(20px)' },
//     to: { opacity: 1, transform: 'translateY(0)' },
//     delay: 300,
//     config: config.gentle,
//   });

//   const handleGetStartedClick = () => {
//     navigate('/register-select');
//   };

//   return (
//     <div className="hero-content">
//       <animated.span style={titleAnimation} className="hero-subtitle">
//         FIND YOUR FITNESS JOURNEY
//       </animated.span>
//       <animated.h1 style={titleAnimation} className="hero-title">
//         Reclaim Your Mind, Body & Strength
//       </animated.h1>
//       <animated.p style={descriptionAnimation} className="hero-description">
//         Discover the balance between strength and wellness. Empower yourself with personalized coaching, real-time progress tracking, and a community built to support your goals.
//       </animated.p>
//       <animated.div style={descriptionAnimation}>
//         <button className="get-started-button" onClick={handleGetStartedClick}>
//           Start Your Journey
//         </button>
//       </animated.div>
//     </div>
//   );
// };

// // HeroImage Component
// const HeroImage = () => {
//   const imageAnimation = useSpring({
//     from: { opacity: 0, transform: 'translateX(50px)' },
//     to: { opacity: 1, transform: 'translateX(0)' },
//     delay: 800,
//     config: config.gentle,
//   });

//   return (
//     <animated.div style={imageAnimation} className="hero-image-container">
//       <img src={img5} alt="Woman practicing yoga" className="hero-image" />
//     </animated.div>
//   );
// };


// // ScrollIndicator Component
// const ScrollIndicator = () => {
//   const bounceAnimation = useSpring({
//     from: { transform: 'translateY(0)' },
//     to: async (next) => {
//       while (true) {
//         await next({ transform: 'translateY(10px)' });
//         await next({ transform: 'translateY(0)' });
//       }
//     },
//     config: { tension: 300, friction: 10 },
//   });

//   return (
//     <animated.div style={bounceAnimation} className="scroll-indicator">
//       <ChevronDown size={32} color="white" />
//     </animated.div>
//   );
// };

// // DecorativeElements Component
// const DecorativeElements = () => (
//   <>
//     <img src="/path-to-your-leaf.svg" alt="" className="decorative-leaf leaf-top-left" />
//     <img src="/path-to-your-leaf.svg" alt="" className="decorative-leaf leaf-bottom-right" />
//   </>
// );

// // Define the YogaComponent for the About Us section
// const YogaComponent = () => {
//   return (
//     <div className="yoga-container" id="about">
//       <div className="yoga-content">
//         <div className="yoga-image">
//           <img
//             src={img4}
//             alt="Yoga Pose"
//             className="image"
//           />
//         </div>
//         <div className="yoga-text">
//     <h2 className="head">Elevate Your Wellness Journey</h2>
//     <p className="sub">
//         At Fitaybl, we’re dedicated to helping you reach new heights in your fitness and well-being. Our mission is to bring you a personalized experience that supports both your body and mind.
//     </p>
//     <p className="highlit">
//         Connect with expert coaches, set achievable goals, and transform your health journey with a community built for growth and inspiration.
//     </p>
//     <button className="ct-button">Get Started</button>
// </div>

//       </div>
//     </div>
//   );
// };


// // Define the Services section here
// const Services = () => {
//   return (
//     <div className="services-section" id="services">
//     <h2>Our Services</h2>
//     <p>Practice Wherever You Want, Whenever You Need</p>
//     <div className="services-container">
//         <div className="service-item">
//             <img src={img1} alt="Prenatal Yoga" />
//             <h3>Prenatal Yoga</h3>
//             <p>Gentle guidance tailored for moms-to-be, enhancing strength, relaxation, and connection.</p>
//         </div>
//         <div className="service-item">
//             <img src={img2} alt="Personal Coaching" />
//             <h3>Personal Coaching</h3>
//             <p>1-on-1 sessions with expert coaches offering personalized plans and continuous support.</p>
//         </div>
//         <div className="service-item">
//             <img src={img3} alt="Wellness Workshops" />
//             <h3>Wellness Workshops</h3>
//             <p>Exclusive access to workshops on mental wellness, fitness techniques, and balanced lifestyles.</p>
//         </div>
//     </div>
// </div>

//   );
// };
// // ContactForm Component
// const ContactForm = () => (
//   <div className="contact-container">
//     <div className="contact-form">
//     <h4>Get in Touch.</h4>
// <h2>Send Us a Message</h2>
// <p>Have a question or need support on your wellness journey? Our team is here to help, guide, and inspire you every step of the way.</p>

//       <form>
//         <div className="form-group">
//           <input type="text" placeholder="Full Name" required />
          
//         </div>
//         <div className="form-group">
//           <input type="text" placeholder="Phone" required />
//           <input type="email" placeholder="Email" required />
//         </div>
//         <textarea placeholder="Message" required></textarea>
//         <button type="submit" className="submit-button">Get Started</button>
//       </form>
//     </div>
//     <div className="contact-info">
//       <div className="info-item">
//         <i className="icon location-icon"></i>
//         <div><h4>Location</h4><p>Mariddy Lane, Uduvil, Jaffna, Northen Province, Srilanka</p></div>
//       </div>
//       <div className="info-item">
//         <i className="icon phone-icon"></i>
//         <div><h4>Phone</h4><p>(+94 76 078 3412)<br /> (021 225 0161)</p></div>
//       </div>
//       <div className="info-item">
//         <i className="icon email-icon"></i>
//         <div><h4>Email</h4><p>info@fitaybl.com<br /> fitaybl@gmail.com</p></div>
//       </div>
//     </div>
//   </div>
// );

// // Newsletter Component
// const Newsletter = () => (
//   <div className="newsletter-container">
//     <motion.div
//       className="newsletter-content"
//       initial={{ opacity: 0, y: 50 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8 }}
//     >
//       <h4>Stay informed about new features, expert tips, and wellness insights directly in your inbox. Join our community and be the first to know about exclusive offers and events!</h4>
//       <p>Subscribe Now</p>
//       <input type="email" placeholder="Enter Your Email" />
//       <button className="subscribe-button">Subscribe</button>
//     </motion.div>
//   </div>
// );
// // Footer Component
// const Footer = () => (
//   <footer className="footer">
//     <div className="footer-section footer-about">
//       <h3>FitAybl</h3>
//       <p>Your go-to app for holistic wellness and fitness. We empower you to achieve your health goals with personalized guidance and community support.</p>
//       <div className="social-icons">
//         <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
//         <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
//         <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
//       </div>
//     </div>
//     <div className="footer-section footer-links">
//       <h4>Quick Links</h4>
//       <ul>
//         <li><a href="#">Home</a></li>
//         <li><a href="#">About Us</a></li>
//         <li><a href="#">Services</a></li>
//         <li><a href="#">Team</a></li>
//         <li><a href="#">Contact Us</a></li>
//       </ul>
//     </div>
//     <div className="footer-section footer-contact">
//       <h4>Contact Info</h4>
//       <p><i className="fas fa-phone"></i> +94 76 078 3412</p>
//       <p><i className="fas fa-envelope"></i> fitaybl@gmail.com</p>
//       <p><i className="fas fa-map-marker-alt"></i> Mariddy Lane, Uduvil, Jaffna, Northern Province, Sri Lanka</p>
//     </div>
//     <div className="footer-bottom">
//       <p>&copy; 2024 FitAybl. All rights reserved.</p>
//     </div>
//   </footer>
// );


// const LandingPage = () => {
//   const contactRef = useRef(null);

//   const scrollToContact = () => {
//     contactRef.current?.scrollIntoView({ behavior: 'smooth' });
//   };

//   return (
//     <div className="hero-container">
//       <div className="hero-background" />
//       <Navigation scrollToContact={scrollToContact} />
//       <SocialLinks />
//       <div className="hero-content-wrapper">
//         <HeroContent />
//         <HeroImage />
//       </div>
//       <ScrollIndicator />
//       <DecorativeElements />
      
//       {/* About Us Section */}
//       <YogaComponent />

//       {/* Services Section */}
//       <Services />

//       {/* Contact Section */}
//       <div ref={contactRef}>
//         <ContactForm />
//       </div>

//       {/* Newsletter Section */}
//       <Newsletter />

//       {/* Footer Section */}
//       <Footer />
//     </div>
//   );
// };

// export default LandingPage;


import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Menu, Dumbbell, Star, Users, Award, Mail, Phone, MapPin, Clock, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import logo from '../CSS/fitzhorelogo.png';
const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="group p-6 bg-gray-800/50 rounded-xl backdrop-blur-sm hover:bg-gray-700/50 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-green-500/20">
    <div className="relative w-16 h-16 mb-4">
      <div className="absolute inset-0 bg-green-500 rounded-lg transform rotate-6 group-hover:rotate-12 transition-transform duration-300" />
      <div className="absolute inset-0 bg-gray-800 rounded-lg flex items-center justify-center">
        <Icon className="w-8 h-8 text-green-500 group-hover:scale-110 transition-transform duration-300" />
      </div>
    </div>
    <h3 className="text-xl font-bold mb-2 text-white group-hover:text-green-500 transition-colors duration-300">
      {title}
    </h3>
    <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
      {description}
    </p>
  </div>
);

const FloatingShape = ({ delay = 0 }) => (
  <div
    className="absolute w-64 h-64 bg-green-500/10 rounded-full mix-blend-multiply filter blur-xl animate-float"
    style={{
      animationDelay: `${delay}s`,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
    }}
  />
);

const ServiceCard = ({ icon: Icon, title, description }) => (
  <div className="group relative p-8 bg-gray-800/50 rounded-xl backdrop-blur-sm hover:bg-gray-700/50 transition-all duration-500 overflow-hidden">
    <div className="absolute -right-16 -top-16 w-32 h-32 bg-green-500/10 rounded-full group-hover:scale-150 transition-transform duration-500" />
    <Icon className="w-12 h-12 text-green-500 mb-6 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
    <h3 className="text-2xl font-bold mb-4 text-white">{title}</h3>
    <p className="text-gray-400 mb-6">{description}</p>

  </div>
);

const ContactInfo = ({ icon: Icon, title, details }) => (
  <div className="flex items-start gap-4 p-6 bg-gray-800/50 rounded-xl backdrop-blur-sm">
    <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0">
      <Icon className="w-6 h-6 text-green-500" />
    </div>
    <div>
      <h4 className="text-lg font-semibold mb-2">{title}</h4>
      <p className="text-gray-400">{details}</p>
    </div>
  </div>
);

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState(0);

  const featuresRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionRef, index) => {
    sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(index);
  };

  const navItems = [
    { name: 'HOME', ref: null },
    { name: 'ABOUT US', ref: featuresRef },
    { name: 'SERVICES', ref: servicesRef },
    { name: 'CONTACT', ref: contactRef },
  ];

  const features = [
    {
      icon: Dumbbell,
      title: "Our Mission",
      description: "Connecting users with expert coaches to achieve their fitness goals."
    },
    {
      icon: Star,
      title: "Our Vision",
      description: "Empowering individuals to take control of their fitness journey."
    },
    {
      icon: Users,
      title: "Our Values",
      description: "Trust, inclusivity, and innovation at the core of our platform."
    },
    {
      icon: Award,
      title: "Our Team",
      description: "A passionate team dedicated to your fitness success."
    }
  ];

  const services = [
    {
      icon: Dumbbell,
      title: "1-on-1 Coaching",
      description: "Feature one-on-one live sessions with coaches for personalized fitness guidance."
    },
    {
      icon: Users,
      title: "Personalized Fitness Plans",
      description: "Custom workout and meal plans based on user preferences, goals, and health data."
    },
    {
      icon: Star,
      title: "Dietary Advice",
      description: "Personalized dietary recommendations based on fitness goals."
    }
  ];
  const navigate = useNavigate();
  return (
    <div className="min-h-screen text-white overflow-hidden relative bg-gray-900">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <FloatingShape key={i} delay={i * 2} />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Navbar */}
        <header className={`fixed z-50 h-20 flex w-full top-0 transition-all duration-500 ${scrolled ? 'bg-gray-900/70 backdrop-blur-sm shadow-lg' : ''}`}>
          <div className="container mx-auto px-4 py-1 flex justify-between items-center">
            <div className="group">
            <a href="/" className="text-3xl font-bold text-white flex items-center gap-2">
            <img
              src={logo}
              alt="Fitzhore Logo"
              className="h-32 w-32 text-green-500 group-hover:animate-spin-slow"
            />
              {/* Fit<span className="text-green-500">zhore</span> */}
            </a>

            </div>
            <nav className="hidden md:flex space-x-8">
              {navItems.map((item, index) => (
                <button
                  key={item.name}
                  onClick={() => item.ref ? scrollToSection(item.ref, index) : window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="group relative py-2"
                >
                  <span className="relative z-10 text-gray-300 group-hover:text-white transition-colors duration-300">
                    {item.name}
                  </span>
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-green-500 transform origin-left transition-transform duration-300 ${activeSection === index ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
                </button>
              ))}
            </nav>
          </div>
        </header>

        {/* Hero Section */}
        <main className="container mx-auto px-4 pt-32 pb-20">
        <div className="flex flex-col md:flex-row items-center gap-12">
             <div className="md:w-1/2 space-y-8">
               <div className="space-y-4">
                 <div className="flex items-center gap-2">
                   <div className="w-12 h-1 bg-green-500 rounded-full animate-pulse" />
                   <p className="text-green-500 font-medium tracking-wider">FIND YOUR FITNESS JOURNEY</p>
                 </div>
                 <h1 className="text-5xl md:text-7xl font-bold leading-tight animate-fade-in-up">
                 Reclaim Your 
                   <span className="relative whitespace-nowrap">
                     <span className="absolute -inset-1">
                       <div className="w-full h-full bg-green-500/50 rounded-lg filter blur-lg" />
                     </span>
                     <span className="relative"> Body </span>
                   </span>
                   & Strength
                 </h1>
               </div>
               <p className="text-xl text-gray-400 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                 Discover the balance between strength and wellness. Empower yourself with personalized coaching, real-time progress tracking, and a community built to support your goals.
               </p>
               <div className="flex gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                 <button className="px-8 py-4 bg-green-500 text-gray-900 rounded-full font-semibold transform hover:scale-105 hover:bg-green-400 active:scale-95 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25" onClick={() => navigate('/register-select')}>
                 Start Your Journey
                 </button>
               </div>
             </div>
             <div className="md:w-1/2 relative animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
               <div className="relative">
                 <div className="absolute -inset-4 bg-green-500/20 rounded-full filter blur-xl animate-pulse" />
                 <img
                  src="/placeholder.svg"
                  alt="Fitness Training"
                  className="relative rounded-2xl transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-gray-800/95 backdrop-blur-sm p-4 rounded-xl shadow-xl animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Active Members</p>
                    <p className="text-xl font-bold">2,000+</p>
                  </div>
                </div>
              </div>

              <div className="absolute -top-6 -right-6 bg-gray-800/95 backdrop-blur-sm p-4 rounded-xl shadow-xl animate-float-delayed">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Expert Trainers</p>
                    <p className="text-xl font-bold">50+</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Features Section */}
          <section ref={featuresRef} className="container mx-auto mt-20 px-4 pt-24">            <div className="text-center space-y-4 mb-12">
              <h2 className="text-4xl font-bold">Why Choose Us</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Experience the perfect blend of professional guidance, premium equipment, and motivating atmosphere to achieve your fitness goals.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <FeatureCard key={index} {...feature} />
              ))}
            </div>
          </section>
         {/*service section*/}
         <div ref={servicesRef} className="container mx-auto mt-20 px-4 pt-24">        <div className="text-center space-y-4 mb-12">
           <h2 className="text-4xl font-bold animate-fade-in-up">Our Services</h2>
           <p className="text-gray-400 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
             Comprehensive fitness solutions tailored to help you achieve your personal goals.
           </p>
         </div>      
         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
           {services.map((service, index) => (
            <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
              <ServiceCard {...service} />
            </div>
          ))}
        </div>
        </div>

        {/* Contact Section */}
        <section ref={contactRef} className="container mx-auto mt-20 px-4 pt-24">        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl font-bold animate-fade-in-up">Get in Touch</h2>
          <p className="text-gray-400 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Ready to start your fitness journey? Contact us today.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-6">
            <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <ContactInfo 
                icon={Phone} 
                title="Call Us" 
                details="+94 76 078 3412" 
              />
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <ContactInfo 
                icon={Mail} 
                title="Email Us" 
                details="fitzhore@gmail.com" 
              />
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              <ContactInfo 
                icon={MapPin} 
                title="Visit Us" 
                details="Uduvil, Jaffna, Sri Lanka" 
              />
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <ContactInfo 
                icon={Clock} 
                title="Working Hours" 
                details="Mon-Fri: 6am-10pm | Sat-Sun: 8am-8pm" 
              />
            </div>
          </div>

          <form className="space-y-6 p-8 bg-gray-800/50 rounded-xl backdrop-blur-sm animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="grid md:grid-cols-2 gap-6">
              <input 
                type="text" 
                placeholder="First Name" 
                className="bg-gray-700/50 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300"
              />
              <input 
                type="text" 
                placeholder="Last Name" 
                className="bg-gray-700/50 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300"
              />
            </div>
            <input 
              type="email" 
              placeholder="Email Address" 
              className="w-full bg-gray-700/50 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300"
            />
            <textarea 
              placeholder="Your Message" 
              rows="4" 
              className="w-full bg-gray-700/50 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300"
            />
            <button className="w-full px-8 py-4 bg-green-500 text-gray-900 rounded-lg font-semibold transform hover:scale-105 hover:bg-green-400 active:scale-95 transition-all duration-300">
              Send Message
            </button>
          </form>
          </div>
        </section>
          {/* Hero content goes here */}
          {/* Features Section */}
          {/* <div ref={featuresRef} className="mt-32 space-y-12">
           
          </div> */}

        </main>

        <footer className="bg-gray-900/90 backdrop-blur-sm py-12 mt-32">
    <div className="container mx-auto px-4 grid md:grid-cols-3 gap-12">
      {/* Logo and Description */}
      <div>
        <div className="flex items-center gap-2 mb-4">
        <a href="/" className="text-3xl font-bold text-white flex items-center gap-2">
            <img
              src={logo}
              alt="Fitzhore Logo"
              className="h-32 w-32 text-green-500 group-hover:animate-spin-slow"
            /></a>
          
        </div>
        <p className="text-gray-400">
          Transform your body and mind with the best trainers, modern equipment, and a supportive community.
        </p>
      </div>

      {/* Navigation Links */}
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
        <ul className="text-gray-400 space-y-2">
          <li>
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Home</button>
          </li>
          <li>
            <button onClick={() => featuresRef.current.scrollIntoView({ behavior: 'smooth' })}>About Us</button>
          </li>
          <li>
            <button onClick={() => servicesRef.current.scrollIntoView({ behavior: 'smooth' })}>Services</button>
          </li>
          <li>
            <button onClick={() => contactRef.current.scrollIntoView({ behavior: 'smooth' })}>Contact</button>
          </li>
        </ul>
      </div>

      {/* Contact Info */}
      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold text-white mb-4">Get in Touch</h3>
        <div className="flex items-center gap-4">
          <Mail className="w-5 h-5 text-green-500" />
          <span className="text-gray-400">fitzhore@gmail.com</span>
        </div>
        <div className="flex items-center gap-4">
          <Phone className="w-5 h-5 text-green-500" />
          <span className="text-gray-400">+94 76 078 3412</span>
        </div>
        <div className="flex items-center gap-4">
          <MapPin className="w-5 h-5 text-green-500" />
          <span className="text-gray-400">Uduvil, Jaffna, Sri Lanka</span>
        </div>
      </div>
    </div>

    {/* Social Media Links */}
    <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
      <div className="flex justify-center space-x-6 mb-4">
        <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-green-500 transition">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-green-500 transition">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-green-500 transition">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-green-500 transition">
          <i className="fab fa-linkedin-in"></i>
        </a>
      </div>
      <p>&copy; 2024 Fitzhore. All rights reserved.</p>
    </div>
  </footer>
        
           {/* Scroll to Top Button */}
         <button 
           onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
           className="fixed bottom-8 right-8 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center transform hover:scale-110 active:scale-95 transition-all duration-300 hover:bg-green-400 group"
         >
           <ChevronDown className="w-6 h-6 text-gray-900 transform rotate-180 group-hover:scale-110 transition-transform duration-300" />
         </button>        
      </div>
    </div>
  );
};

export default LandingPage;

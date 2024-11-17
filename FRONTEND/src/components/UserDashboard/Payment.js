

// import React, { useState, useEffect } from 'react';
// import { loadStripe } from '@stripe/stripe-js';
// import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
// import axios from 'axios';
// import { ToastContainer, toast } from 'react-toastify';
// import emailjs from 'emailjs-com';  // Import emailjs for sending emails
// import 'react-toastify/dist/ReactToastify.css';

// // Initialize Stripe
// const stripePromise = loadStripe('pk_test_51QEogtFo5lCFtFC0pcYTJ9SEfi8OlHefwUWp8BGI2fxwpKAi4kXlamGv7a4ZvdAaKZgPnTd1gEieFvIev696DPO000g76MZTop');

// const CheckoutForm = () => {
//   const stripe = useStripe();
//   const elements = useElements();
//   const [loading, setLoading] = useState(false);
//   const [cardholderName, setCardholderName] = useState('');
//   const [amount, setAmount] = useState(0);
//   const [packageDetails, setPackageDetails] = useState({ name: '', description: '' });

//   useEffect(() => {
//     const storedPackageName = sessionStorage.getItem('selectedPackageName');
//     const storedPackageDescription = sessionStorage.getItem('selectedPackageDescription');
//     if (storedPackageName && storedPackageDescription) {
//       setPackageDetails({
//         name: storedPackageName,
//         description: storedPackageDescription,
//       });
//     }
//     const contactOption = sessionStorage.getItem('contactOption');
//     if (contactOption) {
//       setAmount(contactOption === 'chat' ? 300 : 500); // $3 or $5 in cents
//     }
//   }, []);

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setLoading(true);
//     if (!cardholderName.trim()) {
//       toast.error("Please enter the cardholder's name");
//       setLoading(false);
//       return;
//     }

//     // Retrieve userId with the "id-" prefix
//     const userId = sessionStorage.getItem('id'); // Directly get the ID from sessionStorage

//     if (!userId) {
//       toast.error("User information is missing. Please log in again.");
//       setLoading(false);
//       return;
//     }

//     sessionStorage.setItem('paymentStatus', 'Pending');

//     try {
//       // Create a payment intent
//       const response = await axios.post('http://localhost:2003/api/payments/payment-intent', {
//         amount,
//         cardholderName,
//         userId, // Send raw userId without 'id-' prefix
//       });

//       const { clientSecret, paymentIntentId } = response.data;

//       // Confirm card payment
//       const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
//         payment_method: {
//           card: elements.getElement(CardElement),
//           billing_details: { name: cardholderName },
//         },
//       });

//       if (error) {
//         toast.error('Payment failed: ' + error.message);
//       } else if (paymentIntent.status === 'succeeded') {
//         toast.success(`Payment of $${(amount / 100).toFixed(2)} successful! Thank you for your purchase.`, {
//           position: "top-right",
//           autoClose: 3000,
//         });
//         sessionStorage.setItem('paymentStatus', paymentIntent.status);

//         // Save payment details in MongoDB
//         await axios.patch('http://localhost:2003/api/payments/update-payment-status', {
//           paymentIntentId: paymentIntent.id,
//           status: 'Succeeded',
//           userId: userId, // Use the prefixed userId
//         });

//         // Trigger Email after Payment Success
//         const userEmail = sessionStorage.getItem('email'); // Get user's email from sessionStorage or backend

//         if (userEmail) {
//           const templateParams = {
//             user_email: userEmail,
//             payment_amount: (amount / 100).toFixed(2),
//             package_name: packageDetails.name,
//             package_description: packageDetails.description,
//           };

//           // Send the success email via EmailJS
//           emailjs.send('service_sdz5ece', 'template_q9ja6b6', templateParams, '6YJpNZJnOKv4hOLAn')
//             .then((result) => {
//               console.log('Email sent successfully:', result.text);
//             })
//             .catch((error) => {
//               console.log('Error sending email:', error.text);
//             });
//         }

//         // Clean up session and local storage
//         sessionStorage.removeItem('paymentAmount');
//         sessionStorage.removeItem('selectedPackageName');
//         sessionStorage.removeItem('selectedPackageDescription');
//         sessionStorage.removeItem('contactOption');
//         const userPackages = JSON.parse(localStorage.getItem('userPackages')) || [];
//         const newPackage = {
//           id: sessionStorage.getItem('selectedPackageId'),
//           name: packageDetails.name,
//           description: packageDetails.description,
//           price: amount,
//           date: new Date().toISOString(),
//         };
//         userPackages.push(newPackage);
//         localStorage.setItem('userPackages', JSON.stringify(userPackages));
//       }
//     } catch (err) {
//       toast.error('An error occurred. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="payment-form">
//       <h4 className="mb-4">Enter Card Details</h4>
//       <div className="form-group mb-3">
//         <label htmlFor="cardholderName">Cardholder Name</label>
//         <input
//           type="text"
//           id="cardholderName"
//           className="form-control"
//           value={cardholderName}
//           onChange={(e) => setCardholderName(e.target.value)}
//           required
//         />
//       </div>
//       <div className="form-group mb-3">
//         <CardElement className="form-control" />
//       </div>
//       <button type="submit" className="btn btn-primary w-100" disabled={!stripe || loading}>
//         {loading ? 'Processing...' : `Pay $${(amount / 100).toFixed(2)}`}
//       </button>
//     </form>
//   );
// };

// const Payment = () => (
//   <div className="container payment-container">
//     <div className="row justify-content-center">
//       <div className="col-md-6">
//         <div className="card p-4 mt-5">
//           <h2 className="text-center mb-4">Complete Your Payment</h2>
//           <Elements stripe={stripePromise}>
//             <CheckoutForm />
//           </Elements>
//         </div>
//       </div>
//     </div>
//     <ToastContainer
//       position="top-center"
//       autoClose={5000}
//       hideProgressBar={false}
//       newestOnTop={false}
//       closeOnClick
//       rtl={false}
//       pauseOnFocusLoss
//       draggable
//       pauseOnHover
//     />
//   </div>
// );

// export default Payment;

// Payment.js
import React, { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import emailjs from 'emailjs-com';
import 'react-toastify/dist/ReactToastify.css';

// Initialize Stripe with your publishable key
const stripePromise = loadStripe('pk_test_51QEogtFo5lCFtFC0pcYTJ9SEfi8OlHefwUWp8BGI2fxwpKAi4kXlamGv7a4ZvdAaKZgPnTd1gEieFvIev696DPO000g76MZTop');

// Custom styles for the CardElement
const cardElementStyle = {
  style: {
    base: {
      color: '#FFFFFF',
      fontFamily: '"Inter", sans-serif',
      fontSize: '16px',
      fontSmoothing: 'antialiased',
      '::placeholder': {
        color: '#9CA3AF',
      },
      backgroundColor: 'transparent',
    },
    invalid: {
      color: '#EF4444',
      iconColor: '#EF4444',
    },
  },
};

// CSS styles for the custom scrollbar and global styles
const globalStyles = `
  /* Custom scrollbar styles */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background: rgba(31, 41, 55, 0.5);
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb {
    background: rgba(55, 65, 81, 0.7);
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: rgba(75, 85, 101, 0.8);
  }

  /* Toast custom styles */
  .Toastify__toast {
    background: rgba(31, 41, 55, 0.9) !important;
    backdrop-filter: blur(8px);
    border: 1px solid #374151;
    border-radius: 8px;
  }

  .Toastify__toast-body {
    color: #FFFFFF;
  }

  .Toastify__close-button {
    color: #9CA3AF;
  }

  /* Form input autofill styles */
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus {
    -webkit-text-fill-color: #FFFFFF;
    -webkit-box-shadow: 0 0 0px 1000px rgba(55, 65, 81, 0.3) inset;
    transition: background-color 5000s ease-in-out 0s;
  }
`;

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [cardholderName, setCardholderName] = useState('');
  const [amount] = useState(800); // Fixed amount: $8.00
  const [packageDetails, setPackageDetails] = useState({
    name: 'Video Consultation',
    description: 'A one-time video consultation.',
  });

  useEffect(() => {
    // Load package details from session storage
    const storedPackageName = sessionStorage.getItem('selectedPackageName');
    const storedPackageDescription = sessionStorage.getItem('selectedPackageDescription');
    if (storedPackageName && storedPackageDescription) {
      setPackageDetails({
        name: storedPackageName,
        description: storedPackageDescription,
      });
    }

    // Add global styles
    const styleSheet = document.createElement('style');
    styleSheet.textContent = globalStyles;
    document.head.appendChild(styleSheet);

    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    if (!cardholderName.trim()) {
      toast.error("Please enter the cardholder's name");
      setLoading(false);
      return;
    }

    const userId = sessionStorage.getItem('id');
    if (!userId) {
      toast.error("User information is missing. Please log in again.");
      setLoading(false);
      return;
    }

    sessionStorage.setItem('paymentStatus', 'Pending');

    try {
      // Create payment intent
      const response = await axios.post('http://localhost:2003/api/payments/payment-intent', {
        amount,
        cardholderName,
        userId,
      });

      const { clientSecret, paymentIntentId } = response.data;

      // Confirm card payment
      const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: { name: cardholderName },
        },
      });

      if (error) {
        toast.error('Payment failed: ' + error.message);
      } else if (paymentIntent.status === 'succeeded') {
        // Payment successful
        toast.success(
          `Payment of $${(amount / 100).toFixed(2)} successful! Thank you for your purchase.`,
          {
            position: 'top-right',
            autoClose: 3000,
          }
        );

        sessionStorage.setItem('paymentStatus', paymentIntent.status);

        // Update payment status in backend
        await axios.patch('http://localhost:2003/api/payments/update-payment-status', {
          paymentIntentId: paymentIntent.id,
          status: 'Succeeded',
          userId: userId,
        });

        // Send confirmation email
        const userEmail = sessionStorage.getItem('email');
        if (userEmail) {
          const templateParams = {
            user_email: userEmail,
            payment_amount: (amount / 100).toFixed(2),
            package_name: packageDetails.name,
            package_description: packageDetails.description,
          };

          emailjs
            .send(
              'service_sdz5ece',
              'template_q9ja6b6',
              templateParams,
              '6YJpNZJnOKv4hOLAn'
            )
            .then((result) => {
              console.log('Email sent successfully:', result.text);
            })
            .catch((error) => {
              console.log('Error sending email:', error.text);
            });
        }

        // Clear session storage
        sessionStorage.removeItem('paymentAmount');
        sessionStorage.removeItem('selectedPackageName');
        sessionStorage.removeItem('selectedPackageDescription');

        // Update local storage with package information
        const userPackages = JSON.parse(localStorage.getItem('userPackages')) || [];
        const newPackage = {
          id: sessionStorage.getItem('selectedPackageId'),
          name: packageDetails.name,
          description: packageDetails.description,
          price: amount,
          date: new Date().toISOString(),
        };
        userPackages.push(newPackage);
        localStorage.setItem('userPackages', JSON.stringify(userPackages));
      }
    } catch (err) {
      toast.error('An error occurred during payment processing. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="bg-gray-800/50 backdrop-blur-xl rounded-xl border border-gray-700 p-8 shadow-xl">
        {/* Package Details */}
        <div className="mb-8">
          <h2 className="text-white text-2xl font-bold mb-2">{packageDetails.name}</h2>
          <p className="text-gray-400">{packageDetails.description}</p>
          <div className="mt-4 bg-green-500/10 rounded-lg p-4">
            <p className="text-white font-semibold">
              Total Amount: ${(amount / 100).toFixed(2)}
            </p>
          </div>
        </div>

        {/* Payment Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Cardholder Name Input */}
          <div>
            <label
              htmlFor="cardholderName"
              className="block text-gray-300 text-sm font-medium mb-2"
            >
              Cardholder Name
            </label>
            <input
              type="text"
              id="cardholderName"
              className="w-full bg-gray-700/30 border border-gray-700 rounded-lg px-4 py-2.5 text-white placeholder-gray-400 focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition duration-200"
              value={cardholderName}
              onChange={(e) => setCardholderName(e.target.value)}
              required
              placeholder="Enter cardholder name"
            />
          </div>

          {/* Card Element */}
          <div>
            <label className="block text-gray-300 text-sm font-medium mb-2">
              Card Details
            </label>
            <div className="bg-gray-700/30 border border-gray-700 rounded-lg p-4">
              <CardElement options={cardElementStyle} />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={!stripe || loading}
            className={`w-full bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-4 rounded-lg transition duration-200 flex items-center justify-center space-x-2 ${
              loading || !stripe ? 'opacity-70 cursor-not-allowed' : ''
            }`}
          >
            {loading ? (
              <>
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                <span>Processing...</span>
              </>
            ) : (
              `Pay $${(amount / 100).toFixed(2)}`
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

const Payment = () => (
  <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
    <div className="w-full max-w-4xl">
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </div>
    <ToastContainer
      position="top-center"
      theme="dark"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
  </div>
);

export default Payment;
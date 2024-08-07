// // src/AuthLayout.js

// import React, { useState } from 'react';

// const AuthLayout = () => {
//   const [isSignedIn, setIsSignedIn] = useState(false);

//   const handleSignIn = (e) => {
//     e.preventDefault();
//     // Handle sign-in logic
//     setIsSignedIn(true);
//   };

//   const handleSignOut = () => {
//     // Handle sign-out logic
//     setIsSignedIn(false);
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100">
//       {isSignedIn ? (
//         <div className="bg-white p-8 rounded-lg shadow-lg text-center">
//           <h2 className="text-2xl font-semibold mb-4">Welcome back!</h2>
//           <p className="mb-4">You are signed in.</p>
//           <button 
//             onClick={handleSignOut}
//             className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
//           >
//             Sign Out
//           </button>
//         </div>
//       ) : (
//         <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
//           <h2 className="text-2xl font-semibold mb-4">Welcome back!</h2>
//           <form onSubmit={handleSignIn} className="space-y-4">
//             <div>
//               <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
//               <input 
//                 type="email" 
//                 id="email" 
//                 className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                 placeholder="Enter your email address" 
//                 required 
//               />
//             </div>
//             <div>
//               <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
//               <input 
//                 type="password" 
//                 id="password" 
//                 className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                 placeholder="Enter your password" 
//                 required 
//               />
//             </div>
//             <div className="flex items-center justify-between">
//               <div className="flex items-center">
//                 <input 
//                   type="checkbox" 
//                   className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
//                 />
//                 <label className="ml-2 block text-sm text-gray-900">
//                   Remember me
//                 </label>
//               </div>
//               <div className="text-sm">
//                 <a href="/forgot-password" className="font-medium text-indigo-600 hover:text-indigo-500">
//                   Forgot your password?
//                 </a>
//               </div>
//             </div>
//             <button 
//               type="submit"
//               className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
//             >
//               Log In
//             </button>
//           </form>
//           <div className="mt-6">
//             <button 
//               className="w-full bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
//             >
//               Sign up with Google
//             </button>
//           </div>
//           <p className="mt-6 text-center text-sm text-gray-500">
//             Don't have an account? <a href="/register" className="font-medium text-indigo-600 hover:text-indigo-500">Register here</a>
//           </p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AuthLayout;

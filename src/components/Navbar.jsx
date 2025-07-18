// // components/Navbar.tsx
// import { useState } from "react";
// import { Link } from "react-router-dom"; 

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   // Temporary dummy user (replace with real auth context)
//   const user = null; // { role: 'admin', name: 'Admin' }

//   return (
//     <nav className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-md">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo */}
//           <div className="flex items-center">
//             <Link to="/" className="text-2xl font-bold tracking-wide">
//               📦 Smart Courier
//             </Link>
//           </div>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex space-x-6">
//             <Link to="/" className="hover:text-yellow-300 transition">Home</Link>
//             <Link to="/track" className="hover:text-yellow-300 transition">Track Parcel</Link>

//             {user?.role === 'admin' && (
//               <Link to="/dashboard" className="hover:text-yellow-300 transition">Dashboard</Link>
//             )}
//             {user?.role === 'customer' && (
//               <Link to="/book" className="hover:text-yellow-300 transition">Book Parcel</Link>
//             )}
//             {user?.role === 'agent' && (
//               <Link to="/my-deliveries" className="hover:text-yellow-300 transition">My Deliveries</Link>
//             )}
//           </div>

//           {/* Auth Buttons */}
//           <div className="hidden md:flex space-x-4">
//             {user ? (
//               <>
//                 <span className="font-semibold">{user.name}</span>
//                 <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-1 px-4 rounded">
//                   Logout
//                 </button>
//               </>
//             ) : (
//               <>
//                 <Link to="/login" className="hover:text-yellow-300 transition">Login</Link>
//                 <Link to="/register" className="hover:text-yellow-300 transition">Register</Link>
//               </>
//             )}
//           </div>

//           {/* Mobile menu button */}
//           <div className="md:hidden flex items-center">
//             <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
//               <svg
//                 className="h-6 w-6"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 {isOpen ? (
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                 ) : (
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//                 )}
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden bg-indigo-800 px-4 pt-2 pb-4 space-y-2">
//           <Link to="/" className="block hover:text-yellow-300">Home</Link>
//           <Link to="/track" className="block hover:text-yellow-300">Track Parcel</Link>

//           {user?.role === 'admin' && <Link to="/dashboard" className="block hover:text-yellow-300">Dashboard</Link>}
//           {user?.role === 'customer' && <Link to="/book" className="block hover:text-yellow-300">Book Parcel</Link>}
//           {user?.role === 'agent' && <Link to="/my-deliveries" className="block hover:text-yellow-300">My Deliveries</Link>}

//           {user ? (
//             <>
//               <span className="block font-semibold">{user.name}</span>
//               <button className="block w-full text-left hover:text-yellow-300">Logout</button>
//             </>
//           ) : (
//             <>
//               <Link to="/login" className="block hover:text-yellow-300">Login</Link>
//               <Link to="/register" className="block hover:text-yellow-300">Register</Link>
//             </>
//           )}
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;


// components/Navbar.tsx
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

// Utility function to get user from localStorage
const getUserFromLocalStorage = () => {
  const userData = localStorage.getItem("user");
  return userData ? JSON.parse(userData) : null;
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const { data: user } = useQuery({
    queryKey: ["currentUser"],
    queryFn: () => getUserFromLocalStorage(),
    staleTime: Infinity,
  });

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.reload(); // Or use a refetch if using global auth context
  };

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold tracking-wide">
              📦 Smart Courier
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-yellow-300 transition">Home</Link>
            <Link to="/track" className="hover:text-yellow-300 transition">Track Parcel</Link>

            {user?.role === 'admin' && (
              <Link to="/dashboard" className="hover:text-yellow-300 transition">Dashboard</Link>
            )}
            {user?.role === 'customer' && (
              <Link to="/book" className="hover:text-yellow-300 transition">Book Parcel</Link>
            )}
            {user?.role === 'agent' && (
              <Link to="/my-deliveries" className="hover:text-yellow-300 transition">My Deliveries</Link>
            )}
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex space-x-4 items-center">
            {user ? (
              <>
                <span className="font-semibold">{user?.name}</span>
                <button
                  onClick={handleLogout}
                  className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-1 px-4 rounded"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link to="/login" className="hover:text-yellow-300 transition">Login</Link>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-indigo-800 px-4 pt-2 pb-4 space-y-2">
          <Link to="/" className="block hover:text-yellow-300">Home</Link>
          <Link to="/track" className="block hover:text-yellow-300">Track Parcel</Link>

          {user?.role === 'admin' && <Link to="/dashboard" className="block hover:text-yellow-300">Dashboard</Link>}
          {user?.role === 'customer' && <Link to="/book" className="block hover:text-yellow-300">Book Parcel</Link>}
          {user?.role === 'agent' && <Link to="/my-deliveries" className="block hover:text-yellow-300">My Deliveries</Link>}

          {user ? (
            <>
              <span className="block font-semibold">{user.name}</span>
              <button onClick={handleLogout} className="block w-full text-left hover:text-yellow-300">Logout</button>
            </>
          ) : (
            <Link to="/login" className="block hover:text-yellow-300">Login</Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

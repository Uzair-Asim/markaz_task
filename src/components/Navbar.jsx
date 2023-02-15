import React, { useState } from "react";
import { SlMenu } from "react-icons/sl";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

import MenuItems from "./MenuItems";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const { user, isAuthenticated } = useAuth0();
  const navigate = useNavigate();

  return (
    <div className="fixed w-full text-white flex justify-between p-4 items-center bg-transparent h-20 z-50">
      <div className=" text-2xl font-bold text-center flex gap-4">
        {isAuthenticated && (
          <img
            src={user.picture}
            alt={user.name.slice(0, 1)}
            onClick={() => navigate("/profile")}
            className=" bg-white text-blue-600 w-8 rounded-full items-center text-center cursor-pointer"
          />
        )}
        <h1>Markaz</h1>
      </div>
      <nav className="hidden items-center md:flex md:gap-4">
        <MenuItems />
        {isAuthenticated ? (
          <div className=" px-4 py-2 bg-blue-600 hover:bg-white hover:text-blue-600 rounded-md items-center font-semibold">
            <LogoutButton />
          </div>
        ) : (
          <div className=" px-4 py-2 bg-blue-600 hover:bg-white hover:text-blue-600 rounded-md items-center font-semibold">
            <LoginButton />
          </div>
        )}
      </nav>
      <div className="md:hidden flex flex-col items-end">
        {isActive ? (
          <SlMenu className="text-2xl cursor-pointer mt-64" onClick={() => setIsActive(false)} />
        ) : (
          <SlMenu
            className="text-2xl cursor-pointer -mt-4"
            onClick={() => {
              setIsActive(true);
            }}
          />
        )}
        {isActive && (
          <div className=" py-3 px-6 text-center backdrop-blur-md w-44 rounded-sm">
            <MenuItems />
            {isAuthenticated ? (
              <div className=" px-4 py-2 bg-blue-600 hover:bg-white hover:text-blue-600 rounded-md items-center font-semibold">
                <LogoutButton />
              </div>
            ) : (
              <div className=" px-4 py-2 bg-blue-600 hover:bg-white hover:text-blue-600 rounded-md items-center font-semibold">
                <LoginButton />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

// import React from "react";
// import { NavLink } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <div className="fixed w-full text-white flex justify-between p-4 items-center bg-white/0 h-20">
//       <div className=" text-2xl font-bold text-center">
//         <h1>
//           e <span className=" block text-4xl">Tail</span>
//         </h1>
//       </div>

//       <nav className=" md:flex md:gap-4 items-center">
//         <ul className=" md:flex uppercase gap-4 text-sm">
//           <li className="py-2 opacity-70 hover:opacity-100 transition transform hover:-translate-y-1 hover:scale-125">
//             <NavLink to="/">Home</NavLink>
//           </li>
//           <li className="py-2 opacity-70 hover:opacity-100 transition transform hover:-translate-y-1 hover:scale-125">
//             <NavLink to="/">Games</NavLink>
//           </li>
//           <li className="py-2 opacity-70 hover:opacity-100 transition transform hover:-translate-y-1 hover:scale-125">
//             <NavLink to="/">featured</NavLink>
//           </li>
//           <li className="py-2 opacity-70 hover:opacity-100 transition transform hover:-translate-y-1 hover:scale-125">
//             <NavLink to="/">Blog</NavLink>
//           </li>
//           <li className="py-2 opacity-70 hover:opacity-100 transition transform hover:-translate-y-1 hover:scale-125">
//             <NavLink to="/">About</NavLink>
//           </li>
//           <li className="py-2 opacity-70 hover:opacity-100 transition transform hover:-translate-y-1 hover:scale-125">
//             <NavLink to="/">Contact</NavLink>
//           </li>
//         </ul>
//         <div className=" px-4 py-2 bg-blue-600 hover:bg-white/40 rounded-md items-center font-semibold">
//           <NavLink to="/">Sign In</NavLink>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Navbar;

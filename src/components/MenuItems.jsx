import React from "react";
import { NavLink } from "react-router-dom";

const MenuItems = () => {
  return (
    <ul className=" md:flex uppercase gap-4 text-sm opacity-70 hover:opacity-100">
      <li className="py-2 transition transform hover:-translate-y-1 hover:scale-125">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="py-2 transition transform hover:-translate-y-1 hover:scale-125">
        <NavLink to="/">Games</NavLink>
      </li>
      <li className="py-2 transition transform hover:-translate-y-1 hover:scale-125">
        <NavLink to="/">featured</NavLink>
      </li>
      <li className="py-2 transition transform hover:-translate-y-1 hover:scale-125">
        <NavLink to="/">Blog</NavLink>
      </li>
      <li className="py-2 transition transform hover:-translate-y-1 hover:scale-125">
        <NavLink to="/">About</NavLink>
      </li>
      <li className="py-2 transition transform hover:-translate-y-1 hover:scale-125">
        <NavLink to="/">Contact</NavLink>
      </li>
    </ul>
  );
};

export default MenuItems;

import { NavLink } from "react-router-dom";

const Navbar = () => {
  const linkClass = ({ isActive }) =>
    `transition-all duration-300 ease-in-out hover:scale-110 hover:text-blue-600 ${
      isActive ? "text-blue-600 font-bold underline" : "text-gray-700"
    }`;

  return (
    <nav className="bg-white/90 backdrop-blur-md p-4 fixed top-0 left-0 right-0 shadow-lg z-50">
      <ul className="flex justify-center gap-8 flex-wrap font-medium">
        <li>
          <NavLink to="/" className={linkClass}>
            Currency Converter
          </NavLink>
        </li>
        <li>
          <NavLink to="/m" className={linkClass}>
            Search Movies
          </NavLink>
        </li>
        <li>
          <NavLink to="/p" className={linkClass}>
            Password Generator
          </NavLink>
        </li>
        <li>
          <NavLink to="/w" className={linkClass}>
            Weather App
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
 
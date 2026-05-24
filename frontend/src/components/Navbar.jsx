import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container nav-inner">
        <NavLink to="/" className="logo">
          <img src="/logo.svg" alt="The Zafran Tales" className="logo-img" />
          The Zafran Tales
        </NavLink>
        <button className="hamburger" onClick={() => setOpen(!open)}>
          {open ? "✕" : "☰"}
        </button>
        <ul className={`nav-links ${open ? "open" : ""}`}>
          {["/", "/menu", "/reservations", "/reviews"].map((path, i) => {
            const labels = ["Home", "Menu", "Reservations", "Reviews"];
            return (
              <li key={path}>
                <NavLink to={path} end={path === "/"} onClick={() => setOpen(false)}
                  className={({ isActive }) => isActive ? "active" : ""}>
                  {labels[i]}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

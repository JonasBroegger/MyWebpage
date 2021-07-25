import { NavLink } from "react-router-dom";
import "./Navigation.scss";

interface ILink {
  to: string;
  title: string;
}

export default function Navigation() {
  const links: Array<ILink> = [
    { to: "/About", title: "About" },
    { to: "/Projects", title: "Projects" },
    { to: "/Contact", title: "Contact" },
  ];

  return (
    <div className="nav">
      <NavLink to="/">
        <h1>BROEGGER</h1>
      </NavLink>
      <nav>
        <ul>
          {links.map((link) => (
            <li key={link.to}>
              <NavLink activeClassName="active" to={link.to}>
                {link.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

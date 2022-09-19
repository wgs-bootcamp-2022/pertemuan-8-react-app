import {
  NavLink,
  HashRouter
} from "react-router-dom";
function Nav() {
  return (
    <HashRouter>
    <div>
    <ul className="header">
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/about">About</NavLink></li>
      <li><NavLink to="/contact">Contact</NavLink></li>
    </ul>
    </div>
    </HashRouter>
  );
}
 
export default Nav;

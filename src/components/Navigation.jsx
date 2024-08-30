// Bringing in the required import from 'react-router-dom'
import { Link } from 'react-router-dom';
import Navbar from './Navbar/Nav';


export default function Navigation() {
  // The Navbar UI component will render each of the Link elements in the links prop
  return (
    <Navbar
      links={[
        <Link key={1} className="nav-link text-light" to="/">
        Renz
        </Link>,
        <Link key={2} className="nav-link text-light" to="/about">
        About Me
        </Link>,
        <Link key={2} className="nav-link text-light" to="/about">
        Porfolio
        </Link>,
        <Link key={2} className="nav-link text-light" to="/about">
        Contact
        </Link>,
        <Link key={2} className="nav-link text-light" to="/about">
        Resume
        </Link>,          
      ]}
    />
  );
}

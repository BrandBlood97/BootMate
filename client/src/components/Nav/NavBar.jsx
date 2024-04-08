import Auth from '../../utils/auth';
import { Link, useLocation } from 'react-router-dom';


export default function Nav() {

  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  const location = useLocation();

  if (location.pathname === '/profile/me') {
    return (
      <nav className="navbar">
        <Link to="/"><button id="profile-page" className="btn">Home</button></Link>
        <button onClick={logout} id="logout" className="btn">Logout</button>
      </nav>
    );
    } else {
      return (
        <nav className="navbar">
          <Link to="/profile/me"><button id="profile-page" className="btn">My Profile</button></Link>
          <button onClick={logout} id="logout" className="btn">Logout</button>
        </nav>
      );
    }

  }
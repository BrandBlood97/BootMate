import { Link } from 'react-router-dom';

export default function HomePage() {
    return (
    <section id="home-page">
      {/* <img src="/src/assets/logo.png" alt="BootMate Logo" /> */}
      <Link to="/login"><button className="btn" id="login">Login</button></Link>
      <Link to="/signup"><button className="btn" id="signup">Sign Up</button> </Link>
    </section>
  );
}
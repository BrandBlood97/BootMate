import { Link } from 'react-router-dom';

export default function HomePage() {
    return (
    <section id="home-page">
      <img src="" alt="BootMate Logo" />
      <Link to="/login"><button class="btn" id="login">Login</button></Link>
      <Link to="/signup"><button class="btn" id="signup">Sign Up</button> </Link>
    </section>
  );
}
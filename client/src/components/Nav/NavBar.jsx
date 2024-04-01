export default function Nav({ links }) {
    return (
      <nav class="navbar">
        <a href="/"><img src="/src/assets/home.svg" alt="home"  id="homebtn"/></a>
        <input type="text" id="search" placeholder="Search" />
      </nav>
    );
  }
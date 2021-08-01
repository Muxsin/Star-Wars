export default function Header() {
  return (
    <header>
      <nav className="nav">
        <ul className="nav-bar">
          <a href="/">
            <li>
              <img src="./images/logo.png" alt="" className="navbar-brande" />
            </li>
          </a>
          <a href="/" className="navbar-item">
            <li>Home</li>
          </a>
          <a href="/actors" className="navbar-item">
            <li>Actors</li>
          </a>
        </ul>
      </nav>
    </header>
  );
}

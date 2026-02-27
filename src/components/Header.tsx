interface HeaderProps {
  businessName: string;
}

function Header({ businessName }: HeaderProps) {
  const shortName = businessName.split('-')[0].trim();

  return (
    <header className="app-header">
      <div className="container">
        <a href="#hero" className="logo">{shortName}</a>
        <nav>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
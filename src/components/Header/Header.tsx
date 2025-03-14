import "./Header.scss";

export const Header = () => {
  return (
    <header className="header" id="header">
      <div className="header__container container">
        <div className="header__icon-container">
          <a href="/">
            <img src="/icons/paw-solid.svg" className="header__icon" />
          </a>
        </div>
        <nav className="header__links-container">
          <p className="header__link">
            <a>Contact us</a>
          </p>
          <p className="header__link">
            <a>About</a>
          </p>
          <p className="header__link">
            <a>Dogs</a>
          </p>
        </nav>
      </div>
    </header>
  );
};

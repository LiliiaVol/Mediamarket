import "./Footer.scss";

export const Footer = () => {
  return (
    <footer className="footer container">
      <div className="footer__icons">
        <a href="https://github.com/LiliiaVol">
          <img src="/icons/github-brands.svg" className="footer__icon" />
        </a>
        <a href="https://www.linkedin.com/in/liliia-borodina-012a33334/">
          <img src="/icons/linkedin-brands.svg" className="footer__icon" />
        </a>
        <a href="https://t.me/LiliiaVol">
          <img src="/icons/telegram-brands.svg" className="footer__icon" />
        </a>
      </div>
      <div className="footer_text">
        <p>©Borodina Liliia</p>
      </div>
    </footer>
  );
};

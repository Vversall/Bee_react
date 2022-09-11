import React from "react";
import "../../src/App.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-conteiner">
        <nav className="secondary-links">
          <ul className="secondary-links-menu">
            <li>
              <a href="#">Відгуки</a>
            </li>
            <li>
              <a href="oplata_dostavka.html">Oплата та доставка</a>
            </li>
            <li>
              <a href="main.html">Про нас</a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;

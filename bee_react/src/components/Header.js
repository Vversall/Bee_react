import "../../src/App.css";

const Header = () => {
  return (
    <header id="header">
      <div id="menu">
        <a href="main.html">Головна</a>
        <a href="med.html">Мед</a>
        <a href="pasika.html">Все для пасіки</a>
        <a href="contacts.html">Контакти</a>
        <div className="container">
          <div className="section theme">
            <ul>
              <li>
                <button href="#" className="themetoggle"></button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

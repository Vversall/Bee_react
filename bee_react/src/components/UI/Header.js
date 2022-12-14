import "../../App.css";
import "../../Header.css";
import "../../Index.css";
import "../../Subscriptions.css";
import "../../Common.css";
import { NavLink } from "react-router-dom";

window.onload = function () {
  document.querySelector(".themetoggle").addEventListener("click", (event) => {
    event.preventDefault();
    if (localStorage.getItem("theme") === "dark") {
      localStorage.removeItem("theme");
    } else {
      localStorage.setItem("theme", "dark");
    }
    addDarkClassToHTML();
  });
};

function addDarkClassToHTML() {
  if (localStorage.getItem("theme") === "dark") {
    document.querySelector("html").classList.add("dark");
  } else {
    document.querySelector("html").classList.remove("dark");
  }
}

const Header = () => {
  return (
    <header id="header">
      <div id="menu">
        <NavLink to="./Pages/Items">Головна</NavLink>
        <NavLink to="./Pages/Tools">Мед</NavLink>
        <NavLink to="./Pages/Main">Все для пасіки</NavLink>
        <NavLink to="*">Контакти</NavLink>
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

export { Header };

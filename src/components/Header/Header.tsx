import React, {useState} from "react";
import style from "./style.module.css";
import logo from "../../images/logo-bookmark.svg";
import i_hamburger from "../../images/icon-hamburger.svg";
import NavPhone from "./components/NavPhone/NavPhone";
import {ReactSVG} from "react-svg";
import Button from "../ui/Button/Button";

const links = [
  {
    name: "Features",
  },
  {
    name: "Pricing",
  },
  {
    name: "Contact",
  },
];

const Header = () => {
  const [menu, setMenu] = useState(false);
  return (
    <header className={style.header}>
      {!menu && (
        <>
          <ReactSVG src={logo} />

          <button className={style.btn_hambur} onClick={() => setMenu(true)}>
            <ReactSVG src={i_hamburger} />
          </button>
        </>
      )}
      <nav className={style.nav_desk}>
        <ul className={style.nav_desk_list}>
          {links.map((link) => (
            <li className={style.nav_item} key={link.name}>
              <a className={style.nav_link} href={`/#${link.name}`}>
                {link.name}
              </a>
            </li>
          ))}

          <li className={style.nav_item_login} key="login">
            <a className={style.nav_link_login} href="/#">
              <Button variant="secondary">LOGIN</Button>
            </a>
          </li>
        </ul>
      </nav>

      {menu && <NavPhone onClose={() => setMenu(false)} />}
    </header>
  );
};

export default Header;
